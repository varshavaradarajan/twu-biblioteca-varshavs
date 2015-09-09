var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":32,"id":301,"methods":[{"el":15,"sc":5,"sl":9},{"el":23,"sc":5,"sl":17},{"el":31,"sc":5,"sl":25}],"name":"ListBooksTest","sl":7}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_113":{"methods":[{"sl":9}],"name":"shouldReturnAPreExistingSetOfBooks","pass":true,"statements":[{"sl":11},{"sl":12},{"sl":14}]},"test_123":{"methods":[{"sl":17}],"name":"shouldReturnBookDetailsWithColumnHeaders","pass":true,"statements":[{"sl":19},{"sl":20},{"sl":22}]},"test_144":{"methods":[{"sl":9}],"name":"shouldReturnAPreExistingSetOfBooks","pass":true,"statements":[{"sl":11},{"sl":12},{"sl":14}]},"test_170":{"methods":[{"sl":17}],"name":"shouldReturnBookDetailsWithColumnHeaders","pass":true,"statements":[{"sl":19},{"sl":20},{"sl":22}]},"test_178":{"methods":[{"sl":9}],"name":"shouldReturnAPreExistingSetOfBooks","pass":true,"statements":[{"sl":11},{"sl":12},{"sl":14}]},"test_179":{"methods":[{"sl":25}],"name":"shouldReturnAllBookDetailsUponCallingExecuteMethod","pass":true,"statements":[{"sl":27},{"sl":28},{"sl":30}]},"test_191":{"methods":[{"sl":9}],"name":"shouldReturnAPreExistingSetOfBooks","pass":true,"statements":[{"sl":11},{"sl":12},{"sl":14}]},"test_194":{"methods":[{"sl":25}],"name":"shouldReturnAllBookDetailsUponCallingExecuteMethod","pass":true,"statements":[{"sl":27},{"sl":28},{"sl":30}]},"test_201":{"methods":[{"sl":25}],"name":"shouldReturnAllBookDetailsUponCallingExecuteMethod","pass":true,"statements":[{"sl":27},{"sl":28},{"sl":30}]},"test_226":{"methods":[{"sl":9}],"name":"shouldReturnAPreExistingSetOfBooks","pass":true,"statements":[{"sl":11},{"sl":12},{"sl":14}]},"test_248":{"methods":[{"sl":17}],"name":"shouldReturnBookDetailsWithColumnHeaders","pass":true,"statements":[{"sl":19},{"sl":20},{"sl":22}]},"test_249":{"methods":[{"sl":9}],"name":"shouldReturnAPreExistingSetOfBooks","pass":true,"statements":[{"sl":11},{"sl":12},{"sl":14}]},"test_262":{"methods":[{"sl":17}],"name":"shouldReturnBookDetailsWithColumnHeaders","pass":true,"statements":[{"sl":19},{"sl":20},{"sl":22}]},"test_265":{"methods":[{"sl":17}],"name":"shouldReturnBookDetailsWithColumnHeaders","pass":true,"statements":[{"sl":19},{"sl":20},{"sl":22}]},"test_286":{"methods":[{"sl":25}],"name":"shouldReturnAllBookDetailsUponCallingExecuteMethod","pass":true,"statements":[{"sl":27},{"sl":28},{"sl":30}]},"test_290":{"methods":[{"sl":9}],"name":"shouldReturnAPreExistingSetOfBooks","pass":true,"statements":[{"sl":11},{"sl":12},{"sl":14}]},"test_293":{"methods":[{"sl":25}],"name":"shouldReturnAllBookDetailsUponCallingExecuteMethod","pass":true,"statements":[{"sl":27},{"sl":28},{"sl":30}]},"test_295":{"methods":[{"sl":9}],"name":"shouldReturnAPreExistingSetOfBooks","pass":true,"statements":[{"sl":11},{"sl":12},{"sl":14}]},"test_30":{"methods":[{"sl":25}],"name":"shouldReturnAllBookDetailsUponCallingExecuteMethod","pass":true,"statements":[{"sl":27},{"sl":28},{"sl":30}]},"test_305":{"methods":[{"sl":25}],"name":"shouldReturnAllBookDetailsUponCallingExecuteMethod","pass":true,"statements":[{"sl":27},{"sl":28},{"sl":30}]},"test_318":{"methods":[{"sl":17}],"name":"shouldReturnBookDetailsWithColumnHeaders","pass":true,"statements":[{"sl":19},{"sl":20},{"sl":22}]},"test_342":{"methods":[{"sl":17}],"name":"shouldReturnBookDetailsWithColumnHeaders","pass":true,"statements":[{"sl":19},{"sl":20},{"sl":22}]},"test_353":{"methods":[{"sl":9}],"name":"shouldReturnAPreExistingSetOfBooks","pass":true,"statements":[{"sl":11},{"sl":12},{"sl":14}]},"test_374":{"methods":[{"sl":25}],"name":"shouldReturnAllBookDetailsUponCallingExecuteMethod","pass":true,"statements":[{"sl":27},{"sl":28},{"sl":30}]},"test_380":{"methods":[{"sl":17}],"name":"shouldReturnBookDetailsWithColumnHeaders","pass":true,"statements":[{"sl":19},{"sl":20},{"sl":22}]},"test_389":{"methods":[{"sl":25}],"name":"shouldReturnAllBookDetailsUponCallingExecuteMethod","pass":true,"statements":[{"sl":27},{"sl":28},{"sl":30}]},"test_392":{"methods":[{"sl":9}],"name":"shouldReturnAPreExistingSetOfBooks","pass":true,"statements":[{"sl":11},{"sl":12},{"sl":14}]},"test_393":{"methods":[{"sl":17}],"name":"shouldReturnBookDetailsWithColumnHeaders","pass":true,"statements":[{"sl":19},{"sl":20},{"sl":22}]},"test_397":{"methods":[{"sl":9}],"name":"shouldReturnAPreExistingSetOfBooks","pass":true,"statements":[{"sl":11},{"sl":12},{"sl":14}]},"test_398":{"methods":[{"sl":9}],"name":"shouldReturnAPreExistingSetOfBooks","pass":true,"statements":[{"sl":11},{"sl":12},{"sl":14}]},"test_400":{"methods":[{"sl":17}],"name":"shouldReturnBookDetailsWithColumnHeaders","pass":true,"statements":[{"sl":19},{"sl":20},{"sl":22}]},"test_418":{"methods":[{"sl":25}],"name":"shouldReturnAllBookDetailsUponCallingExecuteMethod","pass":true,"statements":[{"sl":27},{"sl":28},{"sl":30}]},"test_42":{"methods":[{"sl":17}],"name":"shouldReturnBookDetailsWithColumnHeaders","pass":true,"statements":[{"sl":19},{"sl":20},{"sl":22}]},"test_431":{"methods":[{"sl":9}],"name":"shouldReturnAPreExistingSetOfBooks","pass":true,"statements":[{"sl":11},{"sl":12},{"sl":14}]},"test_439":{"methods":[{"sl":25}],"name":"shouldReturnAllBookDetailsUponCallingExecuteMethod","pass":true,"statements":[{"sl":27},{"sl":28},{"sl":30}]},"test_44":{"methods":[{"sl":17}],"name":"shouldReturnBookDetailsWithColumnHeaders","pass":true,"statements":[{"sl":19},{"sl":20},{"sl":22}]},"test_443":{"methods":[{"sl":17}],"name":"shouldReturnBookDetailsWithColumnHeaders","pass":true,"statements":[{"sl":19},{"sl":20},{"sl":22}]},"test_446":{"methods":[{"sl":25}],"name":"shouldReturnAllBookDetailsUponCallingExecuteMethod","pass":true,"statements":[{"sl":27},{"sl":28},{"sl":30}]},"test_450":{"methods":[{"sl":9}],"name":"shouldReturnAPreExistingSetOfBooks","pass":true,"statements":[{"sl":11},{"sl":12},{"sl":14}]},"test_461":{"methods":[{"sl":9}],"name":"shouldReturnAPreExistingSetOfBooks","pass":true,"statements":[{"sl":11},{"sl":12},{"sl":14}]},"test_464":{"methods":[{"sl":17}],"name":"shouldReturnBookDetailsWithColumnHeaders","pass":true,"statements":[{"sl":19},{"sl":20},{"sl":22}]},"test_465":{"methods":[{"sl":25}],"name":"shouldReturnAllBookDetailsUponCallingExecuteMethod","pass":true,"statements":[{"sl":27},{"sl":28},{"sl":30}]},"test_51":{"methods":[{"sl":17}],"name":"shouldReturnBookDetailsWithColumnHeaders","pass":true,"statements":[{"sl":19},{"sl":20},{"sl":22}]},"test_61":{"methods":[{"sl":17}],"name":"shouldReturnBookDetailsWithColumnHeaders","pass":true,"statements":[{"sl":19},{"sl":20},{"sl":22}]},"test_8":{"methods":[{"sl":25}],"name":"shouldReturnAllBookDetailsUponCallingExecuteMethod","pass":true,"statements":[{"sl":27},{"sl":28},{"sl":30}]},"test_87":{"methods":[{"sl":25}],"name":"shouldReturnAllBookDetailsUponCallingExecuteMethod","pass":true,"statements":[{"sl":27},{"sl":28},{"sl":30}]},"test_9":{"methods":[{"sl":25}],"name":"shouldReturnAllBookDetailsUponCallingExecuteMethod","pass":true,"statements":[{"sl":27},{"sl":28},{"sl":30}]},"test_95":{"methods":[{"sl":9}],"name":"shouldReturnAPreExistingSetOfBooks","pass":true,"statements":[{"sl":11},{"sl":12},{"sl":14}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [113, 191, 178, 249, 226, 461, 431, 392, 144, 398, 290, 95, 295, 353, 450, 397], [], [113, 191, 178, 249, 226, 461, 431, 392, 144, 398, 290, 95, 295, 353, 450, 397], [113, 191, 178, 249, 226, 461, 431, 392, 144, 398, 290, 95, 295, 353, 450, 397], [], [113, 191, 178, 249, 226, 461, 431, 392, 144, 398, 290, 95, 295, 353, 450, 397], [], [], [265, 262, 248, 61, 443, 380, 400, 51, 464, 393, 342, 42, 123, 44, 318, 170], [], [265, 262, 248, 61, 443, 380, 400, 51, 464, 393, 342, 42, 123, 44, 318, 170], [265, 262, 248, 61, 443, 380, 400, 51, 464, 393, 342, 42, 123, 44, 318, 170], [], [265, 262, 248, 61, 443, 380, 400, 51, 464, 393, 342, 42, 123, 44, 318, 170], [], [], [201, 30, 87, 8, 465, 389, 374, 9, 418, 179, 293, 439, 194, 286, 305, 446], [], [201, 30, 87, 8, 465, 389, 374, 9, 418, 179, 293, 439, 194, 286, 305, 446], [201, 30, 87, 8, 465, 389, 374, 9, 418, 179, 293, 439, 194, 286, 305, 446], [], [201, 30, 87, 8, 465, 389, 374, 9, 418, 179, 293, 439, 194, 286, 305, 446], [], []]
