var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":15,"id":189,"methods":[{"el":9,"sc":5,"sl":7},{"el":14,"sc":5,"sl":11}],"name":"ListBooks","sl":4}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_10":{"methods":[{"sl":7},{"sl":11}],"name":"shouldReturnAllBookDetailsUponCallingExecuteMethod","pass":true,"statements":[{"sl":8},{"sl":13}]},"test_102":{"methods":[{"sl":7},{"sl":11}],"name":"shouldReturnAllBookDetailsUponCallingExecuteMethod","pass":true,"statements":[{"sl":8},{"sl":13}]},"test_104":{"methods":[{"sl":7}],"name":"shouldReturnAnOperationOnParsingTheInput","pass":true,"statements":[{"sl":8}]},"test_109":{"methods":[{"sl":7}],"name":"shouldReturnAnOperationOnParsingTheInput","pass":true,"statements":[{"sl":8}]},"test_11":{"methods":[{"sl":7},{"sl":11}],"name":"shouldReturnAllBookDetailsUponCallingExecuteMethod","pass":true,"statements":[{"sl":8},{"sl":13}]},"test_110":{"methods":[{"sl":7},{"sl":11}],"name":"shouldReturnAPreExistingSetOfBooks","pass":true,"statements":[{"sl":8},{"sl":13}]},"test_111":{"methods":[{"sl":7}],"name":"shouldReturnAnOperationOnParsingTheInput","pass":true,"statements":[{"sl":8}]},"test_114":{"methods":[{"sl":7}],"name":"shouldReturnAnOperationOnParsingTheInput","pass":true,"statements":[{"sl":8}]},"test_124":{"methods":[{"sl":7}],"name":"shouldReturnAnOperationOnParsingTheInput","pass":true,"statements":[{"sl":8}]},"test_131":{"methods":[{"sl":7},{"sl":11}],"name":"shouldReturnAPreExistingSetOfBooks","pass":true,"statements":[{"sl":8},{"sl":13}]},"test_141":{"methods":[{"sl":7},{"sl":11}],"name":"shouldReturnBookDetailsWithColumnHeaders","pass":true,"statements":[{"sl":8},{"sl":13}]},"test_150":{"methods":[{"sl":7}],"name":"shouldReturnAnOperationOnParsingTheInput","pass":true,"statements":[{"sl":8}]},"test_158":{"methods":[{"sl":7}],"name":"shouldReturnAnOperationOnParsingTheInput","pass":true,"statements":[{"sl":8}]},"test_159":{"methods":[{"sl":7}],"name":"shouldReturnAnOperationOnParsingTheInput","pass":true,"statements":[{"sl":8}]},"test_165":{"methods":[{"sl":7},{"sl":11}],"name":"shouldReturnAPreExistingSetOfBooks","pass":true,"statements":[{"sl":8},{"sl":13}]},"test_193":{"methods":[{"sl":7},{"sl":11}],"name":"shouldReturnBookDetailsWithColumnHeaders","pass":true,"statements":[{"sl":8},{"sl":13}]},"test_203":{"methods":[{"sl":7},{"sl":11}],"name":"shouldReturnAPreExistingSetOfBooks","pass":true,"statements":[{"sl":8},{"sl":13}]},"test_204":{"methods":[{"sl":7},{"sl":11}],"name":"shouldReturnAllBookDetailsUponCallingExecuteMethod","pass":true,"statements":[{"sl":8},{"sl":13}]},"test_205":{"methods":[{"sl":7},{"sl":11}],"name":"shouldReturnAllBookDetailsUponCallingExecuteMethod","pass":true,"statements":[{"sl":8},{"sl":13}]},"test_219":{"methods":[{"sl":7},{"sl":11}],"name":"shouldReturnAPreExistingSetOfBooks","pass":true,"statements":[{"sl":8},{"sl":13}]},"test_221":{"methods":[{"sl":7},{"sl":11}],"name":"shouldReturnAPreExistingSetOfBooks","pass":true,"statements":[{"sl":8},{"sl":13}]},"test_224":{"methods":[{"sl":7},{"sl":11}],"name":"shouldReturnAllBookDetailsUponCallingExecuteMethod","pass":true,"statements":[{"sl":8},{"sl":13}]},"test_241":{"methods":[{"sl":7},{"sl":11}],"name":"shouldReturnAllBookDetailsUponCallingExecuteMethod","pass":true,"statements":[{"sl":8},{"sl":13}]},"test_266":{"methods":[{"sl":7},{"sl":11}],"name":"shouldReturnAPreExistingSetOfBooks","pass":true,"statements":[{"sl":8},{"sl":13}]},"test_289":{"methods":[{"sl":7},{"sl":11}],"name":"shouldReturnBookDetailsWithColumnHeaders","pass":true,"statements":[{"sl":8},{"sl":13}]},"test_290":{"methods":[{"sl":7},{"sl":11}],"name":"shouldReturnAPreExistingSetOfBooks","pass":true,"statements":[{"sl":8},{"sl":13}]},"test_301":{"methods":[{"sl":7}],"name":"shouldReturnAnOperationOnParsingTheInput","pass":true,"statements":[{"sl":8}]},"test_303":{"methods":[{"sl":7},{"sl":11}],"name":"shouldReturnBookDetailsWithColumnHeaders","pass":true,"statements":[{"sl":8},{"sl":13}]},"test_306":{"methods":[{"sl":7},{"sl":11}],"name":"shouldReturnBookDetailsWithColumnHeaders","pass":true,"statements":[{"sl":8},{"sl":13}]},"test_307":{"methods":[{"sl":7},{"sl":11}],"name":"shouldReturnAPreExistingSetOfBooks","pass":true,"statements":[{"sl":8},{"sl":13}]},"test_332":{"methods":[{"sl":7},{"sl":11}],"name":"shouldReturnAllBookDetailsUponCallingExecuteMethod","pass":true,"statements":[{"sl":8},{"sl":13}]},"test_339":{"methods":[{"sl":7},{"sl":11}],"name":"shouldReturnAPreExistingSetOfBooks","pass":true,"statements":[{"sl":8},{"sl":13}]},"test_341":{"methods":[{"sl":7}],"name":"shouldReturnAnOperationOnParsingTheInput","pass":true,"statements":[{"sl":8}]},"test_342":{"methods":[{"sl":7},{"sl":11}],"name":"shouldReturnAllBookDetailsUponCallingExecuteMethod","pass":true,"statements":[{"sl":8},{"sl":13}]},"test_344":{"methods":[{"sl":7},{"sl":11}],"name":"shouldReturnAPreExistingSetOfBooks","pass":true,"statements":[{"sl":8},{"sl":13}]},"test_35":{"methods":[{"sl":7},{"sl":11}],"name":"shouldReturnAllBookDetailsUponCallingExecuteMethod","pass":true,"statements":[{"sl":8},{"sl":13}]},"test_355":{"methods":[{"sl":7},{"sl":11}],"name":"shouldReturnBookDetailsWithColumnHeaders","pass":true,"statements":[{"sl":8},{"sl":13}]},"test_357":{"methods":[{"sl":7},{"sl":11}],"name":"shouldReturnAllBookDetailsUponCallingExecuteMethod","pass":true,"statements":[{"sl":8},{"sl":13}]},"test_376":{"methods":[{"sl":7},{"sl":11}],"name":"shouldReturnBookDetailsWithColumnHeaders","pass":true,"statements":[{"sl":8},{"sl":13}]},"test_380":{"methods":[{"sl":7}],"name":"shouldReturnAnOperationOnParsingTheInput","pass":true,"statements":[{"sl":8}]},"test_402":{"methods":[{"sl":7},{"sl":11}],"name":"shouldReturnBookDetailsWithColumnHeaders","pass":true,"statements":[{"sl":8},{"sl":13}]},"test_412":{"methods":[{"sl":7}],"name":"shouldReturnAnOperationOnParsingTheInput","pass":true,"statements":[{"sl":8}]},"test_414":{"methods":[{"sl":7},{"sl":11}],"name":"shouldReturnAPreExistingSetOfBooks","pass":true,"statements":[{"sl":8},{"sl":13}]},"test_417":{"methods":[{"sl":7}],"name":"shouldReturnAnOperationOnParsingTheInput","pass":true,"statements":[{"sl":8}]},"test_419":{"methods":[{"sl":7},{"sl":11}],"name":"shouldReturnBookDetailsWithColumnHeaders","pass":true,"statements":[{"sl":8},{"sl":13}]},"test_439":{"methods":[{"sl":7},{"sl":11}],"name":"shouldReturnAllBookDetailsUponCallingExecuteMethod","pass":true,"statements":[{"sl":8},{"sl":13}]},"test_444":{"methods":[{"sl":7}],"name":"shouldReturnAnOperationOnParsingTheInput","pass":true,"statements":[{"sl":8}]},"test_446":{"methods":[{"sl":7},{"sl":11}],"name":"shouldReturnBookDetailsWithColumnHeaders","pass":true,"statements":[{"sl":8},{"sl":13}]},"test_455":{"methods":[{"sl":7},{"sl":11}],"name":"shouldReturnAllBookDetailsUponCallingExecuteMethod","pass":true,"statements":[{"sl":8},{"sl":13}]},"test_458":{"methods":[{"sl":7},{"sl":11}],"name":"shouldReturnAPreExistingSetOfBooks","pass":true,"statements":[{"sl":8},{"sl":13}]},"test_459":{"methods":[{"sl":7},{"sl":11}],"name":"shouldReturnBookDetailsWithColumnHeaders","pass":true,"statements":[{"sl":8},{"sl":13}]},"test_460":{"methods":[{"sl":7},{"sl":11}],"name":"shouldReturnAllBookDetailsUponCallingExecuteMethod","pass":true,"statements":[{"sl":8},{"sl":13}]},"test_465":{"methods":[{"sl":7},{"sl":11}],"name":"shouldReturnAPreExistingSetOfBooks","pass":true,"statements":[{"sl":8},{"sl":13}]},"test_466":{"methods":[{"sl":7},{"sl":11}],"name":"shouldReturnAPreExistingSetOfBooks","pass":true,"statements":[{"sl":8},{"sl":13}]},"test_468":{"methods":[{"sl":7},{"sl":11}],"name":"shouldReturnBookDetailsWithColumnHeaders","pass":true,"statements":[{"sl":8},{"sl":13}]},"test_48":{"methods":[{"sl":7},{"sl":11}],"name":"shouldReturnBookDetailsWithColumnHeaders","pass":true,"statements":[{"sl":8},{"sl":13}]},"test_489":{"methods":[{"sl":7},{"sl":11}],"name":"shouldReturnAllBookDetailsUponCallingExecuteMethod","pass":true,"statements":[{"sl":8},{"sl":13}]},"test_50":{"methods":[{"sl":7},{"sl":11}],"name":"shouldReturnBookDetailsWithColumnHeaders","pass":true,"statements":[{"sl":8},{"sl":13}]},"test_503":{"methods":[{"sl":7},{"sl":11}],"name":"shouldReturnAPreExistingSetOfBooks","pass":true,"statements":[{"sl":8},{"sl":13}]},"test_505":{"methods":[{"sl":7}],"name":"shouldReturnAnOperationOnParsingTheInput","pass":true,"statements":[{"sl":8}]},"test_511":{"methods":[{"sl":7},{"sl":11}],"name":"shouldReturnAllBookDetailsUponCallingExecuteMethod","pass":true,"statements":[{"sl":8},{"sl":13}]},"test_515":{"methods":[{"sl":7},{"sl":11}],"name":"shouldReturnBookDetailsWithColumnHeaders","pass":true,"statements":[{"sl":8},{"sl":13}]},"test_518":{"methods":[{"sl":7},{"sl":11}],"name":"shouldReturnAllBookDetailsUponCallingExecuteMethod","pass":true,"statements":[{"sl":8},{"sl":13}]},"test_522":{"methods":[{"sl":7},{"sl":11}],"name":"shouldReturnAPreExistingSetOfBooks","pass":true,"statements":[{"sl":8},{"sl":13}]},"test_534":{"methods":[{"sl":7},{"sl":11}],"name":"shouldReturnAPreExistingSetOfBooks","pass":true,"statements":[{"sl":8},{"sl":13}]},"test_538":{"methods":[{"sl":7},{"sl":11}],"name":"shouldReturnBookDetailsWithColumnHeaders","pass":true,"statements":[{"sl":8},{"sl":13}]},"test_539":{"methods":[{"sl":7},{"sl":11}],"name":"shouldReturnAllBookDetailsUponCallingExecuteMethod","pass":true,"statements":[{"sl":8},{"sl":13}]},"test_548":{"methods":[{"sl":7}],"name":"shouldReturnAnOperationOnParsingTheInput","pass":true,"statements":[{"sl":8}]},"test_57":{"methods":[{"sl":7},{"sl":11}],"name":"shouldReturnBookDetailsWithColumnHeaders","pass":true,"statements":[{"sl":8},{"sl":13}]},"test_65":{"methods":[{"sl":7},{"sl":11}],"name":"shouldDisplayAMessageAfterListBookOperationIsExecuted","pass":true,"statements":[{"sl":8},{"sl":13}]},"test_68":{"methods":[{"sl":7},{"sl":11}],"name":"shouldReturnBookDetailsWithColumnHeaders","pass":true,"statements":[{"sl":8},{"sl":13}]},"test_78":{"methods":[{"sl":7},{"sl":11}],"name":"shouldDisplayAMessageAfterListBookOperationIsExecuted","pass":true,"statements":[{"sl":8},{"sl":13}]},"test_80":{"methods":[{"sl":7}],"name":"shouldReturnAnOperationOnParsingTheInput","pass":true,"statements":[{"sl":8}]},"test_99":{"methods":[{"sl":7}],"name":"shouldReturnAnOperationOnParsingTheInput","pass":true,"statements":[{"sl":8}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [131, 289, 306, 78, 241, 35, 548, 203, 219, 221, 515, 446, 455, 534, 458, 355, 11, 150, 466, 339, 444, 505, 109, 402, 380, 301, 50, 511, 65, 342, 224, 332, 417, 376, 414, 303, 419, 68, 104, 99, 114, 80, 102, 290, 10, 539, 111, 266, 503, 159, 165, 468, 412, 439, 57, 158, 538, 489, 459, 205, 460, 307, 204, 110, 48, 141, 357, 518, 341, 344, 124, 522, 193, 465], [131, 289, 306, 78, 241, 35, 548, 203, 219, 221, 515, 446, 455, 534, 458, 355, 11, 150, 466, 339, 444, 505, 109, 402, 380, 301, 50, 511, 65, 342, 224, 332, 417, 376, 414, 303, 419, 68, 104, 99, 114, 80, 102, 290, 10, 539, 111, 266, 503, 159, 165, 468, 412, 439, 57, 158, 538, 489, 459, 205, 460, 307, 204, 110, 48, 141, 357, 518, 341, 344, 124, 522, 193, 465], [], [], [131, 289, 306, 78, 241, 35, 203, 219, 221, 515, 446, 455, 534, 458, 355, 11, 466, 339, 402, 50, 511, 65, 342, 224, 332, 376, 414, 303, 419, 68, 102, 290, 10, 539, 266, 503, 165, 468, 439, 57, 538, 489, 459, 205, 460, 307, 204, 110, 48, 141, 357, 518, 344, 522, 193, 465], [], [131, 289, 306, 78, 241, 35, 203, 219, 221, 515, 446, 455, 534, 458, 355, 11, 466, 339, 402, 50, 511, 65, 342, 224, 332, 376, 414, 303, 419, 68, 102, 290, 10, 539, 266, 503, 165, 468, 439, 57, 538, 489, 459, 205, 460, 307, 204, 110, 48, 141, 357, 518, 344, 522, 193, 465], [], []]