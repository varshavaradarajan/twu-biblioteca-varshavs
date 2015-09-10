var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":40,"id":915,"methods":[{"el":12,"sc":5,"sl":9},{"el":39,"sc":5,"sl":14}],"name":"Parser","sl":4}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_118":{"methods":[{"sl":9},{"sl":14}],"name":"shouldReturnExitApplicationAsOperationOnParsingInputValue3","pass":true,"statements":[{"sl":10},{"sl":11},{"sl":15},{"sl":16},{"sl":21},{"sl":26},{"sl":27},{"sl":28}]},"test_195":{"methods":[{"sl":9},{"sl":14}],"name":"shouldReturnInvalidCommandIfInputIsEmpty","pass":true,"statements":[{"sl":10},{"sl":11},{"sl":15},{"sl":37}]},"test_228":{"methods":[{"sl":9},{"sl":14}],"name":"shouldReturnCheckOutAsOperationOnParsingInputValue2","pass":true,"statements":[{"sl":10},{"sl":11},{"sl":15},{"sl":16},{"sl":21},{"sl":22},{"sl":23}]},"test_233":{"methods":[{"sl":9},{"sl":14}],"name":"shouldReturnInvalidIfInputLengthIsMoreThanOne","pass":true,"statements":[{"sl":10},{"sl":11},{"sl":15},{"sl":37}]},"test_236":{"methods":[{"sl":9}],"name":"shouldReturnNewParserObject","pass":true,"statements":[{"sl":10},{"sl":11}]},"test_26":{"methods":[{"sl":9},{"sl":14}],"name":"shouldReturnExitApplicationAsOperationOnParsingInputValue3","pass":true,"statements":[{"sl":10},{"sl":11},{"sl":15},{"sl":16},{"sl":21},{"sl":26},{"sl":27},{"sl":28}]},"test_277":{"methods":[{"sl":9},{"sl":14}],"name":"shouldReturnExitApplicationAsOperationOnParsingInputValue3","pass":true,"statements":[{"sl":10},{"sl":11},{"sl":15},{"sl":16},{"sl":21},{"sl":26},{"sl":27},{"sl":28}]},"test_358":{"methods":[{"sl":9},{"sl":14}],"name":"shouldReturnInvalidCommandAsOperationForInvalidInput","pass":true,"statements":[{"sl":10},{"sl":11},{"sl":15},{"sl":16},{"sl":21},{"sl":26},{"sl":32}]},"test_359":{"methods":[{"sl":9}],"name":"shouldReturnNewParserObject","pass":true,"statements":[{"sl":10},{"sl":11}]},"test_364":{"methods":[{"sl":9},{"sl":14}],"name":"shouldReturnInvalidCommandIfInputIsEmpty","pass":true,"statements":[{"sl":10},{"sl":11},{"sl":15},{"sl":37}]},"test_366":{"methods":[{"sl":9}],"name":"shouldReturnNewParserObject","pass":true,"statements":[{"sl":10},{"sl":11}]},"test_396":{"methods":[{"sl":9},{"sl":14}],"name":"shouldReturnInvalidCommandAsOperationForInvalidInput","pass":true,"statements":[{"sl":10},{"sl":11},{"sl":15},{"sl":16},{"sl":21},{"sl":26},{"sl":32}]},"test_417":{"methods":[{"sl":9},{"sl":14}],"name":"shouldReturnAnOperationOnParsingTheInput","pass":true,"statements":[{"sl":10},{"sl":11},{"sl":15},{"sl":16},{"sl":17},{"sl":18}]},"test_444":{"methods":[{"sl":9},{"sl":14}],"name":"shouldReturnAnOperationOnParsingTheInput","pass":true,"statements":[{"sl":10},{"sl":11},{"sl":15},{"sl":16},{"sl":17},{"sl":18}]},"test_481":{"methods":[{"sl":9},{"sl":14}],"name":"shouldReturnInvalidIfInputLengthIsMoreThanOne","pass":true,"statements":[{"sl":10},{"sl":11},{"sl":15},{"sl":37}]},"test_485":{"methods":[{"sl":9},{"sl":14}],"name":"shouldReturnInvalidIfInputLengthIsMoreThanOne","pass":true,"statements":[{"sl":10},{"sl":11},{"sl":15},{"sl":37}]},"test_501":{"methods":[{"sl":9},{"sl":14}],"name":"shouldReturnInvalidCommandAsOperationForInvalidInput","pass":true,"statements":[{"sl":10},{"sl":11},{"sl":15},{"sl":16},{"sl":21},{"sl":26},{"sl":32}]},"test_523":{"methods":[{"sl":9},{"sl":14}],"name":"shouldReturnInvalidCommandIfInputIsEmpty","pass":true,"statements":[{"sl":10},{"sl":11},{"sl":15},{"sl":37}]},"test_525":{"methods":[{"sl":9},{"sl":14}],"name":"shouldReturnCheckOutAsOperationOnParsingInputValue2","pass":true,"statements":[{"sl":10},{"sl":11},{"sl":15},{"sl":16},{"sl":21},{"sl":22},{"sl":23}]},"test_530":{"methods":[{"sl":9},{"sl":14}],"name":"shouldReturnCheckOutAsOperationOnParsingInputValue2","pass":true,"statements":[{"sl":10},{"sl":11},{"sl":15},{"sl":16},{"sl":21},{"sl":22},{"sl":23}]},"test_80":{"methods":[{"sl":9},{"sl":14}],"name":"shouldReturnAnOperationOnParsingTheInput","pass":true,"statements":[{"sl":10},{"sl":11},{"sl":15},{"sl":16},{"sl":17},{"sl":18}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [277, 26, 366, 396, 530, 359, 444, 233, 525, 236, 523, 417, 481, 195, 364, 80, 358, 228, 118, 485, 501], [277, 26, 366, 396, 530, 359, 444, 233, 525, 236, 523, 417, 481, 195, 364, 80, 358, 228, 118, 485, 501], [277, 26, 366, 396, 530, 359, 444, 233, 525, 236, 523, 417, 481, 195, 364, 80, 358, 228, 118, 485, 501], [], [], [277, 26, 396, 530, 444, 233, 525, 523, 417, 481, 195, 364, 80, 358, 228, 118, 485, 501], [277, 26, 396, 530, 444, 233, 525, 523, 417, 481, 195, 364, 80, 358, 228, 118, 485, 501], [277, 26, 396, 530, 444, 525, 417, 80, 358, 228, 118, 501], [444, 417, 80], [444, 417, 80], [], [], [277, 26, 396, 530, 525, 358, 228, 118, 501], [530, 525, 228], [530, 525, 228], [], [], [277, 26, 396, 358, 118, 501], [277, 26, 118], [277, 26, 118], [], [], [], [396, 358, 501], [], [], [], [], [233, 523, 481, 195, 364, 485], [], [], []]