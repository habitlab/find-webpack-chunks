require! {
  fs
}

find_webpack_chunks = (code) ->
  # console.log(code.substring(0, 100))
  chunks = []

  # Get the range between which there will be requires
  index = code.indexOf('async function habitlab_intervention_main_function(){')
  if index == -1
    return []
  index += 'async function habitlab_intervention_main_function(){'.length
  #index = code.indexOf("Promise.all(/*! require.ensure */[") + 34
  end1 = code.indexOf("]).then((async function(", index)
  end2 = code.indexOf("]).then(async function(", index)
  if end1 == -1
    end = end2
  else if end2 == -1
    end = end1
  else
    end = Math.min(end1, end2)
  cutCode = code.substring(index, end)
  #console.log(cutCode)
  index = 0
  end = cutCode.length

  if index < 0
    return

  while(index < end)
    
    innerIndex = cutCode.indexOf(".e(", index) + 3
    numberEnd = cutCode.indexOf(")", innerIndex)
    if innerIndex < index or innerIndex == -1 or numberEnd == -1
      return chunks
    #console.log(index + ' ' + innerIndex + ' ' + numberEnd + ' ' + end)
    numberLength = numberEnd - innerIndex
    number = cutCode.substring(innerIndex, numberEnd)
    chunks.push(parseInt(number,10))
    index = numberEnd
  
  return chunks

test_files = {
  'youtube_prompt_before_watch.js': [ 0, 2, 3, 4, 1, 5, 36 ]
  'youtube_prompt_before_watch_minified.js': [ 0, 2, 3, 4, 1, 5, 36 ]
  'non_packed.js': []
  'minimal_packed.js': []
}

run_tests = ->>
  for filename in Object.keys(test_files)
    file_contents = fs.readFileSync filename, 'utf-8'
    reference_output = test_files[filename]
    console.log filename
    output = find_webpack_chunks(file_contents)
    if JSON.stringify(output) != JSON.stringify(reference_output)
      console.log 'output differs:'
      console.log output
      console.log reference_output

run_tests()
