var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":118,"id":1346,"methods":[{"el":19,"sc":5,"sl":14},{"el":31,"sc":5,"sl":21},{"el":43,"sc":5,"sl":33},{"el":51,"sc":5,"sl":45},{"el":63,"sc":5,"sl":53},{"el":71,"sc":5,"sl":65},{"el":79,"sc":5,"sl":73},{"el":88,"sc":5,"sl":81},{"el":100,"sc":5,"sl":90},{"el":108,"sc":5,"sl":102},{"el":116,"sc":5,"sl":110}],"name":"LibraryTest","sl":12}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_118":{"methods":[{"sl":65}],"name":"shouldReturnAnotherMessageIfBookIsNotRemoved","pass":true,"statements":[{"sl":67},{"sl":68},{"sl":70}]},"test_124":{"methods":[{"sl":102}],"name":"shouldReturnAnotherMessageIfBookIsNotAdded","pass":true,"statements":[{"sl":104},{"sl":105},{"sl":107}]},"test_133":{"methods":[{"sl":14}],"name":"shouldReturnTheContentsOfLibrary","pass":true,"statements":[{"sl":16},{"sl":18}]},"test_144":{"methods":[{"sl":110}],"name":"shouldReturnANotValidMessageIfTheBookSpecifiedIsNotInCheckedOutBookList","pass":true,"statements":[{"sl":112},{"sl":113},{"sl":115}]},"test_154":{"methods":[{"sl":33}],"name":"shouldReturnTrueIfLibraryHasABookEqualToBookBeingSpecified","pass":true,"statements":[{"sl":35},{"sl":36},{"sl":37},{"sl":38},{"sl":39},{"sl":40},{"sl":42}]},"test_161":{"methods":[{"sl":81}],"name":"shouldReturnAMessageIfBookIsAdded","pass":true,"statements":[{"sl":83},{"sl":84},{"sl":85},{"sl":87}]},"test_191":{"methods":[{"sl":102}],"name":"shouldReturnAnotherMessageIfBookIsNotAdded","pass":true,"statements":[{"sl":104},{"sl":105},{"sl":107}]},"test_205":{"methods":[{"sl":53}],"name":"shouldReturnFalseWhenLibraryDoesNotHaveABookAfterWeRemoveItFromBookList","pass":true,"statements":[{"sl":55},{"sl":56},{"sl":57},{"sl":58},{"sl":59},{"sl":60},{"sl":62}]},"test_217":{"methods":[{"sl":110}],"name":"shouldReturnANotValidMessageIfTheBookSpecifiedIsNotInCheckedOutBookList","pass":true,"statements":[{"sl":112},{"sl":113},{"sl":115}]},"test_230":{"methods":[{"sl":81}],"name":"shouldReturnAMessageIfBookIsAdded","pass":true,"statements":[{"sl":83},{"sl":84},{"sl":85},{"sl":87}]},"test_24":{"methods":[{"sl":33}],"name":"shouldReturnTrueIfLibraryHasABookEqualToBookBeingSpecified","pass":true,"statements":[{"sl":35},{"sl":36},{"sl":37},{"sl":38},{"sl":39},{"sl":40},{"sl":42}]},"test_249":{"methods":[{"sl":73}],"name":"shouldAddCheckedOutBookToAnotherList","pass":true,"statements":[{"sl":75},{"sl":76},{"sl":78}]},"test_309":{"methods":[{"sl":73}],"name":"shouldAddCheckedOutBookToAnotherList","pass":true,"statements":[{"sl":75},{"sl":76},{"sl":78}]},"test_350":{"methods":[{"sl":45}],"name":"shouldReturnMessageIfBookIsRemoved","pass":true,"statements":[{"sl":47},{"sl":48},{"sl":50}]},"test_355":{"methods":[{"sl":21}],"name":"shouldReturnTrueIfLibraryHasABook","pass":true,"statements":[{"sl":23},{"sl":24},{"sl":25},{"sl":26},{"sl":27},{"sl":28},{"sl":30}]},"test_378":{"methods":[{"sl":21}],"name":"shouldReturnTrueIfLibraryHasABook","pass":true,"statements":[{"sl":23},{"sl":24},{"sl":25},{"sl":26},{"sl":27},{"sl":28},{"sl":30}]},"test_382":{"methods":[{"sl":90}],"name":"shouldReturnFalseIfLibraryDoesNotHaveABookEqualToBookBeingSpecified","pass":true,"statements":[{"sl":92},{"sl":93},{"sl":94},{"sl":95},{"sl":96},{"sl":97},{"sl":99}]},"test_449":{"methods":[{"sl":53}],"name":"shouldReturnFalseWhenLibraryDoesNotHaveABookAfterWeRemoveItFromBookList","pass":true,"statements":[{"sl":55},{"sl":56},{"sl":57},{"sl":58},{"sl":59},{"sl":60},{"sl":62}]},"test_45":{"methods":[{"sl":45}],"name":"shouldReturnMessageIfBookIsRemoved","pass":true,"statements":[{"sl":47},{"sl":48},{"sl":50}]},"test_456":{"methods":[{"sl":14}],"name":"shouldReturnTheContentsOfLibrary","pass":true,"statements":[{"sl":16},{"sl":18}]},"test_489":{"methods":[{"sl":14}],"name":"shouldReturnTheContentsOfLibrary","pass":true,"statements":[{"sl":16},{"sl":18}]},"test_522":{"methods":[{"sl":73}],"name":"shouldAddCheckedOutBookToAnotherList","pass":true,"statements":[{"sl":75},{"sl":76},{"sl":78}]},"test_526":{"methods":[{"sl":53}],"name":"shouldReturnFalseWhenLibraryDoesNotHaveABookAfterWeRemoveItFromBookList","pass":true,"statements":[{"sl":55},{"sl":56},{"sl":57},{"sl":58},{"sl":59},{"sl":60},{"sl":62}]},"test_566":{"methods":[{"sl":90}],"name":"shouldReturnFalseIfLibraryDoesNotHaveABookEqualToBookBeingSpecified","pass":true,"statements":[{"sl":92},{"sl":93},{"sl":94},{"sl":95},{"sl":96},{"sl":97},{"sl":99}]},"test_6":{"methods":[{"sl":81}],"name":"shouldReturnAMessageIfBookIsAdded","pass":true,"statements":[{"sl":83},{"sl":84},{"sl":85},{"sl":87}]},"test_612":{"methods":[{"sl":65}],"name":"shouldReturnAnotherMessageIfBookIsNotRemoved","pass":true,"statements":[{"sl":67},{"sl":68},{"sl":70}]},"test_639":{"methods":[{"sl":65}],"name":"shouldReturnAnotherMessageIfBookIsNotRemoved","pass":true,"statements":[{"sl":67},{"sl":68},{"sl":70}]},"test_676":{"methods":[{"sl":33}],"name":"shouldReturnTrueIfLibraryHasABookEqualToBookBeingSpecified","pass":true,"statements":[{"sl":35},{"sl":36},{"sl":37},{"sl":38},{"sl":39},{"sl":40},{"sl":42}]},"test_691":{"methods":[{"sl":110}],"name":"shouldReturnANotValidMessageIfTheBookSpecifiedIsNotInCheckedOutBookList","pass":true,"statements":[{"sl":112},{"sl":113},{"sl":115}]},"test_70":{"methods":[{"sl":90}],"name":"shouldReturnFalseIfLibraryDoesNotHaveABookEqualToBookBeingSpecified","pass":true,"statements":[{"sl":92},{"sl":93},{"sl":94},{"sl":95},{"sl":96},{"sl":97},{"sl":99}]},"test_88":{"methods":[{"sl":45}],"name":"shouldReturnMessageIfBookIsRemoved","pass":true,"statements":[{"sl":47},{"sl":48},{"sl":50}]},"test_90":{"methods":[{"sl":102}],"name":"shouldReturnAnotherMessageIfBookIsNotAdded","pass":true,"statements":[{"sl":104},{"sl":105},{"sl":107}]},"test_99":{"methods":[{"sl":21}],"name":"shouldReturnTrueIfLibraryHasABook","pass":true,"statements":[{"sl":23},{"sl":24},{"sl":25},{"sl":26},{"sl":27},{"sl":28},{"sl":30}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [489, 456, 133], [], [489, 456, 133], [], [489, 456, 133], [], [], [378, 355, 99], [], [378, 355, 99], [378, 355, 99], [378, 355, 99], [378, 355, 99], [378, 355, 99], [378, 355, 99], [], [378, 355, 99], [], [], [676, 154, 24], [], [676, 154, 24], [676, 154, 24], [676, 154, 24], [676, 154, 24], [676, 154, 24], [676, 154, 24], [], [676, 154, 24], [], [], [88, 350, 45], [], [88, 350, 45], [88, 350, 45], [], [88, 350, 45], [], [], [449, 205, 526], [], [449, 205, 526], [449, 205, 526], [449, 205, 526], [449, 205, 526], [449, 205, 526], [449, 205, 526], [], [449, 205, 526], [], [], [639, 118, 612], [], [639, 118, 612], [639, 118, 612], [], [639, 118, 612], [], [], [249, 309, 522], [], [249, 309, 522], [249, 309, 522], [], [249, 309, 522], [], [], [230, 6, 161], [], [230, 6, 161], [230, 6, 161], [230, 6, 161], [], [230, 6, 161], [], [], [70, 566, 382], [], [70, 566, 382], [70, 566, 382], [70, 566, 382], [70, 566, 382], [70, 566, 382], [70, 566, 382], [], [70, 566, 382], [], [], [124, 90, 191], [], [124, 90, 191], [124, 90, 191], [], [124, 90, 191], [], [], [144, 691, 217], [], [144, 691, 217], [144, 691, 217], [], [144, 691, 217], [], [], []]
