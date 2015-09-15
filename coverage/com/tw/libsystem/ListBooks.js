var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":15,"id":1423,"methods":[{"el":9,"sc":5,"sl":7},{"el":14,"sc":5,"sl":11}],"name":"ListBooks","sl":4}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_200":{"methods":[{"sl":7},{"sl":11}],"name":"shouldReturnAPreExistingSetOfBooks","pass":true,"statements":[{"sl":8},{"sl":13}]},"test_320":{"methods":[{"sl":7},{"sl":11}],"name":"shouldReturnAPreExistingSetOfBooks","pass":true,"statements":[{"sl":8},{"sl":13}]},"test_386":{"methods":[{"sl":7},{"sl":11}],"name":"shouldReturnAllBookDetailsUponCallingExecuteMethod","pass":true,"statements":[{"sl":8},{"sl":13}]},"test_409":{"methods":[{"sl":7}],"name":"shouldReturnAnOperationOnParsingTheInput","pass":true,"statements":[{"sl":8}]},"test_434":{"methods":[{"sl":7},{"sl":11}],"name":"shouldReturnAPreExistingSetOfBooks","pass":true,"statements":[{"sl":8},{"sl":13}]},"test_486":{"methods":[{"sl":7}],"name":"shouldReturnAnOperationOnParsingTheInput","pass":true,"statements":[{"sl":8}]},"test_575":{"methods":[{"sl":7}],"name":"shouldReturnAnOperationOnParsingTheInput","pass":true,"statements":[{"sl":8}]},"test_6":{"methods":[{"sl":7},{"sl":11}],"name":"shouldReturnBookDetailsWithColumnHeaders","pass":true,"statements":[{"sl":8},{"sl":13}]},"test_629":{"methods":[{"sl":7}],"name":"shouldNotBeEqualToAnotherObjectType","pass":true,"statements":[{"sl":8}]},"test_661":{"methods":[{"sl":7},{"sl":11}],"name":"shouldReturnBookDetailsWithColumnHeaders","pass":true,"statements":[{"sl":8},{"sl":13}]},"test_714":{"methods":[{"sl":7},{"sl":11}],"name":"shouldReturnAllBookDetailsUponCallingExecuteMethod","pass":true,"statements":[{"sl":8},{"sl":13}]},"test_780":{"methods":[{"sl":7},{"sl":11}],"name":"shouldReturnAllBookDetailsUponCallingExecuteMethod","pass":true,"statements":[{"sl":8},{"sl":13}]},"test_808":{"methods":[{"sl":7}],"name":"shouldNotBeEqualToAnotherObjectType","pass":true,"statements":[{"sl":8}]},"test_85":{"methods":[{"sl":7},{"sl":11}],"name":"shouldReturnBookDetailsWithColumnHeaders","pass":true,"statements":[{"sl":8},{"sl":13}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [6, 386, 320, 85, 575, 714, 200, 661, 409, 486, 780, 629, 434, 808], [6, 386, 320, 85, 575, 714, 200, 661, 409, 486, 780, 629, 434, 808], [], [], [6, 386, 320, 85, 714, 200, 661, 780, 434], [], [6, 386, 320, 85, 714, 200, 661, 780, 434], [], []]
