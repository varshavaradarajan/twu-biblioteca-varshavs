var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":22,"id":80,"methods":[{"el":12,"sc":5,"sl":10},{"el":21,"sc":5,"sl":14}],"name":"Menu","sl":6}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_142":{"methods":[{"sl":10},{"sl":14}],"name":"shouldDelegateTakingInputToInputView","pass":true,"statements":[{"sl":11},{"sl":16},{"sl":17},{"sl":18},{"sl":20}]},"test_154":{"methods":[{"sl":10},{"sl":14}],"name":"shouldReturnAListOfOptions","pass":true,"statements":[{"sl":11},{"sl":16},{"sl":17},{"sl":18},{"sl":20}]},"test_167":{"methods":[{"sl":10},{"sl":14}],"name":"shouldReturnAListOfOptions","pass":true,"statements":[{"sl":11},{"sl":16},{"sl":17},{"sl":18},{"sl":20}]},"test_184":{"methods":[{"sl":10},{"sl":14}],"name":"shouldDelegateDisplayingMessageToDisplayClass","pass":true,"statements":[{"sl":11},{"sl":16},{"sl":17},{"sl":18},{"sl":20}]},"test_192":{"methods":[{"sl":10},{"sl":14}],"name":"shouldReturnAListOfOptions","pass":true,"statements":[{"sl":11},{"sl":16},{"sl":17},{"sl":18},{"sl":20}]},"test_220":{"methods":[{"sl":10},{"sl":14}],"name":"shouldReturnAListOfOptions","pass":true,"statements":[{"sl":11},{"sl":16},{"sl":17},{"sl":18},{"sl":20}]},"test_238":{"methods":[{"sl":10},{"sl":14}],"name":"shouldDelegateDisplayingMessageToDisplayClass","pass":true,"statements":[{"sl":11},{"sl":16},{"sl":17},{"sl":18},{"sl":20}]},"test_240":{"methods":[{"sl":10},{"sl":14}],"name":"shouldReturnAListOfOptions","pass":true,"statements":[{"sl":11},{"sl":16},{"sl":17},{"sl":18},{"sl":20}]},"test_249":{"methods":[{"sl":10},{"sl":14}],"name":"shouldReturnAListOfOptions","pass":true,"statements":[{"sl":11},{"sl":16},{"sl":17},{"sl":18},{"sl":20}]},"test_25":{"methods":[{"sl":10},{"sl":14}],"name":"shouldDelegateDisplayingMessageToDisplayClass","pass":true,"statements":[{"sl":11},{"sl":16},{"sl":17},{"sl":18},{"sl":20}]},"test_261":{"methods":[{"sl":10},{"sl":14}],"name":"shouldDelegateDisplayingMessageToDisplayClass","pass":true,"statements":[{"sl":11},{"sl":16},{"sl":17},{"sl":18},{"sl":20}]},"test_273":{"methods":[{"sl":10},{"sl":14}],"name":"shouldDelegateDisplayingMessageToDisplayClass","pass":true,"statements":[{"sl":11},{"sl":16},{"sl":17},{"sl":18},{"sl":20}]},"test_281":{"methods":[{"sl":10},{"sl":14}],"name":"shouldReturnAListOfOptions","pass":true,"statements":[{"sl":11},{"sl":16},{"sl":17},{"sl":18},{"sl":20}]},"test_285":{"methods":[{"sl":10},{"sl":14}],"name":"shouldReturnAListOfOptions","pass":true,"statements":[{"sl":11},{"sl":16},{"sl":17},{"sl":18},{"sl":20}]},"test_309":{"methods":[{"sl":10},{"sl":14}],"name":"shouldDelegateDisplayingOfMenuToDisplayClass","pass":true,"statements":[{"sl":11},{"sl":16},{"sl":17},{"sl":18},{"sl":20}]},"test_316":{"methods":[{"sl":10},{"sl":14}],"name":"shouldDelegateDisplayingMessageToDisplayClass","pass":true,"statements":[{"sl":11},{"sl":16},{"sl":17},{"sl":18},{"sl":20}]},"test_335":{"methods":[{"sl":10},{"sl":14}],"name":"shouldReturnAListOfOptions","pass":true,"statements":[{"sl":11},{"sl":16},{"sl":17},{"sl":18},{"sl":20}]},"test_349":{"methods":[{"sl":10},{"sl":14}],"name":"shouldReturnAListOfOptions","pass":true,"statements":[{"sl":11},{"sl":16},{"sl":17},{"sl":18},{"sl":20}]},"test_351":{"methods":[{"sl":10},{"sl":14}],"name":"shouldReturnAListOfOptions","pass":true,"statements":[{"sl":11},{"sl":16},{"sl":17},{"sl":18},{"sl":20}]},"test_367":{"methods":[{"sl":10},{"sl":14}],"name":"shouldDelegateDisplayingOfMenuToDisplayClass","pass":true,"statements":[{"sl":11},{"sl":16},{"sl":17},{"sl":18},{"sl":20}]},"test_368":{"methods":[{"sl":10},{"sl":14}],"name":"shouldDelegateDisplayingMessageToDisplayClass","pass":true,"statements":[{"sl":11},{"sl":16},{"sl":17},{"sl":18},{"sl":20}]},"test_400":{"methods":[{"sl":10},{"sl":14}],"name":"shouldDelegateTakingInputToInputView","pass":true,"statements":[{"sl":11},{"sl":16},{"sl":17},{"sl":18},{"sl":20}]},"test_418":{"methods":[{"sl":10},{"sl":14}],"name":"shouldReturnAListOfOptions","pass":true,"statements":[{"sl":11},{"sl":16},{"sl":17},{"sl":18},{"sl":20}]},"test_432":{"methods":[{"sl":10},{"sl":14}],"name":"shouldDelegateDisplayingMessageToDisplayClass","pass":true,"statements":[{"sl":11},{"sl":16},{"sl":17},{"sl":18},{"sl":20}]},"test_44":{"methods":[{"sl":10},{"sl":14}],"name":"shouldDelegateDisplayingMessageToDisplayClass","pass":true,"statements":[{"sl":11},{"sl":16},{"sl":17},{"sl":18},{"sl":20}]},"test_443":{"methods":[{"sl":10},{"sl":14}],"name":"shouldDelegateDisplayingMessageToDisplayClass","pass":true,"statements":[{"sl":11},{"sl":16},{"sl":17},{"sl":18},{"sl":20}]},"test_462":{"methods":[{"sl":10},{"sl":14}],"name":"shouldReturnAListOfOptions","pass":true,"statements":[{"sl":11},{"sl":16},{"sl":17},{"sl":18},{"sl":20}]},"test_463":{"methods":[{"sl":10},{"sl":14}],"name":"shouldDelegateDisplayingMessageToDisplayClass","pass":true,"statements":[{"sl":11},{"sl":16},{"sl":17},{"sl":18},{"sl":20}]},"test_477":{"methods":[{"sl":10},{"sl":14}],"name":"shouldDelegateDisplayingOfMenuToDisplayClass","pass":true,"statements":[{"sl":11},{"sl":16},{"sl":17},{"sl":18},{"sl":20}]},"test_478":{"methods":[{"sl":10},{"sl":14}],"name":"shouldDelegateDisplayingMessageToDisplayClass","pass":true,"statements":[{"sl":11},{"sl":16},{"sl":17},{"sl":18},{"sl":20}]},"test_484":{"methods":[{"sl":10},{"sl":14}],"name":"shouldDelegateDisplayingMessageToDisplayClass","pass":true,"statements":[{"sl":11},{"sl":16},{"sl":17},{"sl":18},{"sl":20}]},"test_493":{"methods":[{"sl":10},{"sl":14}],"name":"shouldDelegateDisplayingMessageToDisplayClass","pass":true,"statements":[{"sl":11},{"sl":16},{"sl":17},{"sl":18},{"sl":20}]},"test_497":{"methods":[{"sl":10},{"sl":14}],"name":"shouldDelegateDisplayingMessageToDisplayClass","pass":true,"statements":[{"sl":11},{"sl":16},{"sl":17},{"sl":18},{"sl":20}]},"test_502":{"methods":[{"sl":10},{"sl":14}],"name":"shouldReturnAListOfOptions","pass":true,"statements":[{"sl":11},{"sl":16},{"sl":17},{"sl":18},{"sl":20}]},"test_52":{"methods":[{"sl":10},{"sl":14}],"name":"shouldReturnAListOfOptions","pass":true,"statements":[{"sl":11},{"sl":16},{"sl":17},{"sl":18},{"sl":20}]},"test_524":{"methods":[{"sl":10},{"sl":14}],"name":"shouldReturnAListOfOptions","pass":true,"statements":[{"sl":11},{"sl":16},{"sl":17},{"sl":18},{"sl":20}]},"test_53":{"methods":[{"sl":10},{"sl":14}],"name":"shouldReturnAListOfOptions","pass":true,"statements":[{"sl":11},{"sl":16},{"sl":17},{"sl":18},{"sl":20}]},"test_532":{"methods":[{"sl":10},{"sl":14}],"name":"shouldReturnAListOfOptions","pass":true,"statements":[{"sl":11},{"sl":16},{"sl":17},{"sl":18},{"sl":20}]},"test_555":{"methods":[{"sl":10},{"sl":14}],"name":"shouldDelegateDisplayingMessageToDisplayClass","pass":true,"statements":[{"sl":11},{"sl":16},{"sl":17},{"sl":18},{"sl":20}]},"test_62":{"methods":[{"sl":10},{"sl":14}],"name":"shouldReturnAListOfOptions","pass":true,"statements":[{"sl":11},{"sl":16},{"sl":17},{"sl":18},{"sl":20}]},"test_76":{"methods":[{"sl":10},{"sl":14}],"name":"shouldReturnAListOfOptions","pass":true,"statements":[{"sl":11},{"sl":16},{"sl":17},{"sl":18},{"sl":20}]},"test_89":{"methods":[{"sl":10},{"sl":14}],"name":"shouldDelegateDisplayingMessageToDisplayClass","pass":true,"statements":[{"sl":11},{"sl":16},{"sl":17},{"sl":18},{"sl":20}]},"test_97":{"methods":[{"sl":10},{"sl":14}],"name":"shouldDelegateDisplayingMessageToDisplayClass","pass":true,"statements":[{"sl":11},{"sl":16},{"sl":17},{"sl":18},{"sl":20}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [478, 44, 281, 349, 477, 240, 238, 62, 89, 25, 316, 154, 532, 167, 52, 493, 432, 367, 335, 142, 53, 261, 249, 443, 462, 555, 192, 97, 400, 418, 463, 368, 484, 184, 497, 76, 285, 273, 502, 351, 524, 309, 220], [478, 44, 281, 349, 477, 240, 238, 62, 89, 25, 316, 154, 532, 167, 52, 493, 432, 367, 335, 142, 53, 261, 249, 443, 462, 555, 192, 97, 400, 418, 463, 368, 484, 184, 497, 76, 285, 273, 502, 351, 524, 309, 220], [], [], [478, 44, 281, 349, 477, 240, 238, 62, 89, 25, 316, 154, 532, 167, 52, 493, 432, 367, 335, 142, 53, 261, 249, 443, 462, 555, 192, 97, 400, 418, 463, 368, 484, 184, 497, 76, 285, 273, 502, 351, 524, 309, 220], [], [478, 44, 281, 349, 477, 240, 238, 62, 89, 25, 316, 154, 532, 167, 52, 493, 432, 367, 335, 142, 53, 261, 249, 443, 462, 555, 192, 97, 400, 418, 463, 368, 484, 184, 497, 76, 285, 273, 502, 351, 524, 309, 220], [478, 44, 281, 349, 477, 240, 238, 62, 89, 25, 316, 154, 532, 167, 52, 493, 432, 367, 335, 142, 53, 261, 249, 443, 462, 555, 192, 97, 400, 418, 463, 368, 484, 184, 497, 76, 285, 273, 502, 351, 524, 309, 220], [478, 44, 281, 349, 477, 240, 238, 62, 89, 25, 316, 154, 532, 167, 52, 493, 432, 367, 335, 142, 53, 261, 249, 443, 462, 555, 192, 97, 400, 418, 463, 368, 484, 184, 497, 76, 285, 273, 502, 351, 524, 309, 220], [], [478, 44, 281, 349, 477, 240, 238, 62, 89, 25, 316, 154, 532, 167, 52, 493, 432, 367, 335, 142, 53, 261, 249, 443, 462, 555, 192, 97, 400, 418, 463, 368, 484, 184, 497, 76, 285, 273, 502, 351, 524, 309, 220], [], []]
