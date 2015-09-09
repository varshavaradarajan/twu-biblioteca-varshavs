var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":40,"id":823,"methods":[{"el":14,"sc":5,"sl":9},{"el":23,"sc":5,"sl":16},{"el":31,"sc":5,"sl":25},{"el":39,"sc":5,"sl":33}],"name":"Library","sl":5}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_105":{"methods":[{"sl":9},{"sl":25},{"sl":33}],"name":"shouldReturnFalseWhenLibraryDoesNotHaveABookAfterWeRemoveItFromBookList","pass":true,"statements":[{"sl":10},{"sl":11},{"sl":12},{"sl":13},{"sl":26},{"sl":27},{"sl":28},{"sl":34},{"sl":35},{"sl":36},{"sl":38}]},"test_130":{"methods":[{"sl":9},{"sl":25},{"sl":33}],"name":"shouldReturnAMessageOnCheckingOutABook","pass":true,"statements":[{"sl":10},{"sl":11},{"sl":12},{"sl":13},{"sl":26},{"sl":27},{"sl":28},{"sl":34},{"sl":35},{"sl":36}]},"test_167":{"methods":[{"sl":9}],"name":"shouldDelegateDisplayingMessageToDisplayClass","pass":true,"statements":[{"sl":10},{"sl":11},{"sl":12},{"sl":13}]},"test_176":{"methods":[{"sl":9},{"sl":25},{"sl":33}],"name":"shouldDisplayAMessageAfterAnOperationIsExecute","pass":true,"statements":[{"sl":10},{"sl":11},{"sl":12},{"sl":13},{"sl":26},{"sl":30},{"sl":34},{"sl":35},{"sl":38}]},"test_186":{"methods":[{"sl":9},{"sl":25},{"sl":33}],"name":"shouldReturnMessageIfBookIsRemoved","pass":true,"statements":[{"sl":10},{"sl":11},{"sl":12},{"sl":13},{"sl":26},{"sl":27},{"sl":28},{"sl":34},{"sl":35},{"sl":36}]},"test_219":{"methods":[{"sl":9},{"sl":16}],"name":"shouldReturnTheContentsOfLibrary","pass":true,"statements":[{"sl":10},{"sl":11},{"sl":12},{"sl":13},{"sl":18},{"sl":19},{"sl":20},{"sl":22}]},"test_24":{"methods":[{"sl":9}],"name":"shouldReturnExitApplicationAsOperationOnParsingInputValue3","pass":true,"statements":[{"sl":10},{"sl":11},{"sl":12},{"sl":13}]},"test_249":{"methods":[{"sl":9},{"sl":16}],"name":"shouldReturnAPreExistingSetOfBooks","pass":true,"statements":[{"sl":10},{"sl":11},{"sl":12},{"sl":13},{"sl":18},{"sl":19},{"sl":20},{"sl":22}]},"test_306":{"methods":[{"sl":9}],"name":"shouldReturnNewParserObject","pass":true,"statements":[{"sl":10},{"sl":11},{"sl":12},{"sl":13}]},"test_343":{"methods":[{"sl":9},{"sl":33}],"name":"shouldReturnTrueIfLibraryHasABook","pass":true,"statements":[{"sl":10},{"sl":11},{"sl":12},{"sl":13},{"sl":34},{"sl":35},{"sl":36}]},"test_356":{"methods":[{"sl":9}],"name":"shouldReturnAnOperationOnParsingTheInput","pass":true,"statements":[{"sl":10},{"sl":11},{"sl":12},{"sl":13}]},"test_374":{"methods":[{"sl":9},{"sl":16}],"name":"shouldReturnAllBookDetailsUponCallingExecuteMethod","pass":true,"statements":[{"sl":10},{"sl":11},{"sl":12},{"sl":13},{"sl":18},{"sl":19},{"sl":20},{"sl":22}]},"test_394":{"methods":[{"sl":9},{"sl":33}],"name":"shouldReturnTrueIfLibraryHasABookEqualToBookBeingSpecified","pass":true,"statements":[{"sl":10},{"sl":11},{"sl":12},{"sl":13},{"sl":34},{"sl":35},{"sl":36}]},"test_401":{"methods":[{"sl":9},{"sl":25},{"sl":33}],"name":"shouldReturnACheckOutMessageOnCheckingOutAvailableBooks","pass":true,"statements":[{"sl":10},{"sl":11},{"sl":12},{"sl":13},{"sl":26},{"sl":27},{"sl":28},{"sl":34},{"sl":35},{"sl":36}]},"test_408":{"methods":[{"sl":9}],"name":"shouldDelegateDisplayingOfMenuToDisplayClass","pass":true,"statements":[{"sl":10},{"sl":11},{"sl":12},{"sl":13}]},"test_411":{"methods":[{"sl":9}],"name":"shouldReturnInvalidIfInputLengthIsMoreThanOne","pass":true,"statements":[{"sl":10},{"sl":11},{"sl":12},{"sl":13}]},"test_426":{"methods":[{"sl":9},{"sl":25},{"sl":33}],"name":"shouldReturnAnotherMessageIfBookIsNotRemoved","pass":true,"statements":[{"sl":10},{"sl":11},{"sl":12},{"sl":13},{"sl":26},{"sl":30},{"sl":34},{"sl":35},{"sl":38}]},"test_429":{"methods":[{"sl":9}],"name":"shouldReturnInvalidCommandAsOperationForInvalidInput","pass":true,"statements":[{"sl":10},{"sl":11},{"sl":12},{"sl":13}]},"test_451":{"methods":[{"sl":9}],"name":"shouldReturnInvalidCommandIfInputIsEmpty","pass":true,"statements":[{"sl":10},{"sl":11},{"sl":12},{"sl":13}]},"test_453":{"methods":[{"sl":9}],"name":"shouldReturnCheckOutAsOperationOnParsingInputValue2","pass":true,"statements":[{"sl":10},{"sl":11},{"sl":12},{"sl":13}]},"test_61":{"methods":[{"sl":9},{"sl":16}],"name":"shouldReturnBookDetailsWithColumnHeaders","pass":true,"statements":[{"sl":10},{"sl":11},{"sl":12},{"sl":13},{"sl":18},{"sl":19},{"sl":20},{"sl":22}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [408, 61, 453, 130, 426, 394, 24, 219, 105, 249, 401, 451, 176, 167, 374, 356, 411, 306, 186, 429, 343], [408, 61, 453, 130, 426, 394, 24, 219, 105, 249, 401, 451, 176, 167, 374, 356, 411, 306, 186, 429, 343], [408, 61, 453, 130, 426, 394, 24, 219, 105, 249, 401, 451, 176, 167, 374, 356, 411, 306, 186, 429, 343], [408, 61, 453, 130, 426, 394, 24, 219, 105, 249, 401, 451, 176, 167, 374, 356, 411, 306, 186, 429, 343], [408, 61, 453, 130, 426, 394, 24, 219, 105, 249, 401, 451, 176, 167, 374, 356, 411, 306, 186, 429, 343], [], [], [61, 219, 249, 374], [], [61, 219, 249, 374], [61, 219, 249, 374], [61, 219, 249, 374], [], [61, 219, 249, 374], [], [], [130, 426, 105, 401, 176, 186], [130, 426, 105, 401, 176, 186], [130, 105, 401, 186], [130, 105, 401, 186], [], [426, 176], [], [], [130, 426, 394, 105, 401, 176, 186, 343], [130, 426, 394, 105, 401, 176, 186, 343], [130, 426, 394, 105, 401, 176, 186, 343], [130, 394, 105, 401, 186, 343], [], [426, 105, 176], [], []]
