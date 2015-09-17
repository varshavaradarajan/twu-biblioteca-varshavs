var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":149,"id":2823,"methods":[{"el":22,"sc":5,"sl":10},{"el":36,"sc":5,"sl":24},{"el":50,"sc":5,"sl":38},{"el":64,"sc":5,"sl":52},{"el":78,"sc":5,"sl":66},{"el":93,"sc":5,"sl":80},{"el":108,"sc":5,"sl":95},{"el":121,"sc":5,"sl":110},{"el":134,"sc":5,"sl":123},{"el":147,"sc":5,"sl":136}],"name":"ParserTest","sl":8}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_1109":{"methods":[{"sl":52}],"name":"shouldReturnInvalidCommandAsOperationForInvalidInput","pass":true,"statements":[{"sl":54},{"sl":55},{"sl":56},{"sl":57},{"sl":58},{"sl":59},{"sl":60},{"sl":61},{"sl":63}]},"test_1179":{"methods":[{"sl":24}],"name":"shouldReturnInvalidIfInputLengthIsMoreThanOne","pass":true,"statements":[{"sl":26},{"sl":27},{"sl":28},{"sl":29},{"sl":30},{"sl":31},{"sl":32},{"sl":33},{"sl":35}]},"test_1207":{"methods":[{"sl":38}],"name":"shouldReturnAnOperationOnParsingTheInput","pass":true,"statements":[{"sl":40},{"sl":41},{"sl":42},{"sl":43},{"sl":44},{"sl":45},{"sl":46},{"sl":47},{"sl":49}]},"test_1208":{"methods":[{"sl":66}],"name":"shouldReturnExitApplicationAsOperationOnParsingInputValue0","pass":true,"statements":[{"sl":68},{"sl":69},{"sl":70},{"sl":71},{"sl":72},{"sl":73},{"sl":74},{"sl":75},{"sl":77}]},"test_1226":{"methods":[{"sl":95}],"name":"shouldReturnCheckInAsOperationOnParsingInputValue3","pass":true,"statements":[{"sl":97},{"sl":98},{"sl":99},{"sl":100},{"sl":101},{"sl":102},{"sl":103},{"sl":104},{"sl":105},{"sl":107}]},"test_1311":{"methods":[{"sl":10}],"name":"shouldReturnInvalidCommandIfInputIsEmpty","pass":true,"statements":[{"sl":12},{"sl":13},{"sl":14},{"sl":15},{"sl":16},{"sl":17},{"sl":18},{"sl":19},{"sl":21}]},"test_1379":{"methods":[{"sl":123}],"name":"shouldReturnCheckOutMoviesAsOperationOnParsingInputValue5","pass":true,"statements":[{"sl":125},{"sl":126},{"sl":127},{"sl":128},{"sl":129},{"sl":130},{"sl":131},{"sl":133}]},"test_143":{"methods":[{"sl":52}],"name":"shouldReturnInvalidCommandAsOperationForInvalidInput","pass":true,"statements":[{"sl":54},{"sl":55},{"sl":56},{"sl":57},{"sl":58},{"sl":59},{"sl":60},{"sl":61},{"sl":63}]},"test_1438":{"methods":[{"sl":123}],"name":"shouldReturnCheckOutMoviesAsOperationOnParsingInputValue5","pass":true,"statements":[{"sl":125},{"sl":126},{"sl":127},{"sl":128},{"sl":129},{"sl":130},{"sl":131},{"sl":133}]},"test_144":{"methods":[{"sl":24}],"name":"shouldReturnInvalidIfInputLengthIsMoreThanOne","pass":true,"statements":[{"sl":26},{"sl":27},{"sl":28},{"sl":29},{"sl":30},{"sl":31},{"sl":32},{"sl":33},{"sl":35}]},"test_150":{"methods":[{"sl":38}],"name":"shouldReturnAnOperationOnParsingTheInput","pass":true,"statements":[{"sl":40},{"sl":41},{"sl":42},{"sl":43},{"sl":44},{"sl":45},{"sl":46},{"sl":47},{"sl":49}]},"test_1593":{"methods":[{"sl":24}],"name":"shouldReturnInvalidIfInputLengthIsMoreThanOne","pass":true,"statements":[{"sl":26},{"sl":27},{"sl":28},{"sl":29},{"sl":30},{"sl":31},{"sl":32},{"sl":33},{"sl":35}]},"test_1602":{"methods":[{"sl":10}],"name":"shouldReturnInvalidCommandIfInputIsEmpty","pass":true,"statements":[{"sl":12},{"sl":13},{"sl":14},{"sl":15},{"sl":16},{"sl":17},{"sl":18},{"sl":19},{"sl":21}]},"test_1636":{"methods":[{"sl":123}],"name":"shouldReturnCheckOutMoviesAsOperationOnParsingInputValue5","pass":true,"statements":[{"sl":125},{"sl":126},{"sl":127},{"sl":128},{"sl":129},{"sl":130},{"sl":131},{"sl":133}]},"test_1670":{"methods":[{"sl":52}],"name":"shouldReturnInvalidCommandAsOperationForInvalidInput","pass":true,"statements":[{"sl":54},{"sl":55},{"sl":56},{"sl":57},{"sl":58},{"sl":59},{"sl":60},{"sl":61},{"sl":63}]},"test_1859":{"methods":[{"sl":95}],"name":"shouldReturnCheckInAsOperationOnParsingInputValue3","pass":true,"statements":[{"sl":97},{"sl":98},{"sl":99},{"sl":100},{"sl":101},{"sl":102},{"sl":103},{"sl":104},{"sl":105},{"sl":107}]},"test_1915":{"methods":[{"sl":52}],"name":"shouldReturnInvalidCommandAsOperationForInvalidInput","pass":true,"statements":[{"sl":54},{"sl":55},{"sl":56},{"sl":57},{"sl":58},{"sl":59},{"sl":60},{"sl":61},{"sl":63}]},"test_197":{"methods":[{"sl":123}],"name":"shouldReturnCheckOutMoviesAsOperationOnParsingInputValue5","pass":true,"statements":[{"sl":125},{"sl":126},{"sl":127},{"sl":128},{"sl":129},{"sl":130},{"sl":131},{"sl":133}]},"test_1970":{"methods":[{"sl":10}],"name":"shouldReturnInvalidCommandIfInputIsEmpty","pass":true,"statements":[{"sl":12},{"sl":13},{"sl":14},{"sl":15},{"sl":16},{"sl":17},{"sl":18},{"sl":19},{"sl":21}]},"test_1993":{"methods":[{"sl":80}],"name":"shouldReturnCheckOutAsOperationOnParsingInputValue2","pass":true,"statements":[{"sl":82},{"sl":83},{"sl":84},{"sl":85},{"sl":86},{"sl":87},{"sl":88},{"sl":89},{"sl":90},{"sl":92}]},"test_2041":{"methods":[{"sl":110}],"name":"shouldReturnListMoviesAsOperationOnParsingInputValue4","pass":true,"statements":[{"sl":112},{"sl":113},{"sl":114},{"sl":115},{"sl":116},{"sl":117},{"sl":118},{"sl":120}]},"test_2104":{"methods":[{"sl":136}],"name":"shouldReturnLoginAsOperationOnParsingInputValue6","pass":true,"statements":[{"sl":138},{"sl":139},{"sl":140},{"sl":141},{"sl":142},{"sl":143},{"sl":144},{"sl":146}]},"test_2126":{"methods":[{"sl":38}],"name":"shouldReturnAnOperationOnParsingTheInput","pass":true,"statements":[{"sl":40},{"sl":41},{"sl":42},{"sl":43},{"sl":44},{"sl":45},{"sl":46},{"sl":47},{"sl":49}]},"test_2158":{"methods":[{"sl":95}],"name":"shouldReturnCheckInAsOperationOnParsingInputValue3","pass":true,"statements":[{"sl":97},{"sl":98},{"sl":99},{"sl":100},{"sl":101},{"sl":102},{"sl":103},{"sl":104},{"sl":105},{"sl":107}]},"test_2245":{"methods":[{"sl":66}],"name":"shouldReturnExitApplicationAsOperationOnParsingInputValue0","pass":true,"statements":[{"sl":68},{"sl":69},{"sl":70},{"sl":71},{"sl":72},{"sl":73},{"sl":74},{"sl":75},{"sl":77}]},"test_290":{"methods":[{"sl":110}],"name":"shouldReturnListMoviesAsOperationOnParsingInputValue4","pass":true,"statements":[{"sl":112},{"sl":113},{"sl":114},{"sl":115},{"sl":116},{"sl":117},{"sl":118},{"sl":120}]},"test_303":{"methods":[{"sl":136}],"name":"shouldReturnLoginAsOperationOnParsingInputValue6","pass":true,"statements":[{"sl":138},{"sl":139},{"sl":140},{"sl":141},{"sl":142},{"sl":143},{"sl":144},{"sl":146}]},"test_306":{"methods":[{"sl":110}],"name":"shouldReturnListMoviesAsOperationOnParsingInputValue4","pass":true,"statements":[{"sl":112},{"sl":113},{"sl":114},{"sl":115},{"sl":116},{"sl":117},{"sl":118},{"sl":120}]},"test_345":{"methods":[{"sl":10}],"name":"shouldReturnInvalidCommandIfInputIsEmpty","pass":true,"statements":[{"sl":12},{"sl":13},{"sl":14},{"sl":15},{"sl":16},{"sl":17},{"sl":18},{"sl":19},{"sl":21}]},"test_361":{"methods":[{"sl":38}],"name":"shouldReturnAnOperationOnParsingTheInput","pass":true,"statements":[{"sl":40},{"sl":41},{"sl":42},{"sl":43},{"sl":44},{"sl":45},{"sl":46},{"sl":47},{"sl":49}]},"test_379":{"methods":[{"sl":136}],"name":"shouldReturnLoginAsOperationOnParsingInputValue6","pass":true,"statements":[{"sl":138},{"sl":139},{"sl":140},{"sl":141},{"sl":142},{"sl":143},{"sl":144},{"sl":146}]},"test_402":{"methods":[{"sl":66}],"name":"shouldReturnExitApplicationAsOperationOnParsingInputValue0","pass":true,"statements":[{"sl":68},{"sl":69},{"sl":70},{"sl":71},{"sl":72},{"sl":73},{"sl":74},{"sl":75},{"sl":77}]},"test_421":{"methods":[{"sl":66}],"name":"shouldReturnExitApplicationAsOperationOnParsingInputValue0","pass":true,"statements":[{"sl":68},{"sl":69},{"sl":70},{"sl":71},{"sl":72},{"sl":73},{"sl":74},{"sl":75},{"sl":77}]},"test_428":{"methods":[{"sl":136}],"name":"shouldReturnLoginAsOperationOnParsingInputValue6","pass":true,"statements":[{"sl":138},{"sl":139},{"sl":140},{"sl":141},{"sl":142},{"sl":143},{"sl":144},{"sl":146}]},"test_45":{"methods":[{"sl":80}],"name":"shouldReturnCheckOutAsOperationOnParsingInputValue2","pass":true,"statements":[{"sl":82},{"sl":83},{"sl":84},{"sl":85},{"sl":86},{"sl":87},{"sl":88},{"sl":89},{"sl":90},{"sl":92}]},"test_452":{"methods":[{"sl":110}],"name":"shouldReturnListMoviesAsOperationOnParsingInputValue4","pass":true,"statements":[{"sl":112},{"sl":113},{"sl":114},{"sl":115},{"sl":116},{"sl":117},{"sl":118},{"sl":120}]},"test_461":{"methods":[{"sl":24}],"name":"shouldReturnInvalidIfInputLengthIsMoreThanOne","pass":true,"statements":[{"sl":26},{"sl":27},{"sl":28},{"sl":29},{"sl":30},{"sl":31},{"sl":32},{"sl":33},{"sl":35}]},"test_467":{"methods":[{"sl":24}],"name":"shouldReturnInvalidIfInputLengthIsMoreThanOne","pass":true,"statements":[{"sl":26},{"sl":27},{"sl":28},{"sl":29},{"sl":30},{"sl":31},{"sl":32},{"sl":33},{"sl":35}]},"test_54":{"methods":[{"sl":123}],"name":"shouldReturnCheckOutMoviesAsOperationOnParsingInputValue5","pass":true,"statements":[{"sl":125},{"sl":126},{"sl":127},{"sl":128},{"sl":129},{"sl":130},{"sl":131},{"sl":133}]},"test_641":{"methods":[{"sl":136}],"name":"shouldReturnLoginAsOperationOnParsingInputValue6","pass":true,"statements":[{"sl":138},{"sl":139},{"sl":140},{"sl":141},{"sl":142},{"sl":143},{"sl":144},{"sl":146}]},"test_646":{"methods":[{"sl":10}],"name":"shouldReturnInvalidCommandIfInputIsEmpty","pass":true,"statements":[{"sl":12},{"sl":13},{"sl":14},{"sl":15},{"sl":16},{"sl":17},{"sl":18},{"sl":19},{"sl":21}]},"test_662":{"methods":[{"sl":95}],"name":"shouldReturnCheckInAsOperationOnParsingInputValue3","pass":true,"statements":[{"sl":97},{"sl":98},{"sl":99},{"sl":100},{"sl":101},{"sl":102},{"sl":103},{"sl":104},{"sl":105},{"sl":107}]},"test_67":{"methods":[{"sl":38}],"name":"shouldReturnAnOperationOnParsingTheInput","pass":true,"statements":[{"sl":40},{"sl":41},{"sl":42},{"sl":43},{"sl":44},{"sl":45},{"sl":46},{"sl":47},{"sl":49}]},"test_725":{"methods":[{"sl":52}],"name":"shouldReturnInvalidCommandAsOperationForInvalidInput","pass":true,"statements":[{"sl":54},{"sl":55},{"sl":56},{"sl":57},{"sl":58},{"sl":59},{"sl":60},{"sl":61},{"sl":63}]},"test_733":{"methods":[{"sl":80}],"name":"shouldReturnCheckOutAsOperationOnParsingInputValue2","pass":true,"statements":[{"sl":82},{"sl":83},{"sl":84},{"sl":85},{"sl":86},{"sl":87},{"sl":88},{"sl":89},{"sl":90},{"sl":92}]},"test_796":{"methods":[{"sl":95}],"name":"shouldReturnCheckInAsOperationOnParsingInputValue3","pass":true,"statements":[{"sl":97},{"sl":98},{"sl":99},{"sl":100},{"sl":101},{"sl":102},{"sl":103},{"sl":104},{"sl":105},{"sl":107}]},"test_827":{"methods":[{"sl":80}],"name":"shouldReturnCheckOutAsOperationOnParsingInputValue2","pass":true,"statements":[{"sl":82},{"sl":83},{"sl":84},{"sl":85},{"sl":86},{"sl":87},{"sl":88},{"sl":89},{"sl":90},{"sl":92}]},"test_863":{"methods":[{"sl":110}],"name":"shouldReturnListMoviesAsOperationOnParsingInputValue4","pass":true,"statements":[{"sl":112},{"sl":113},{"sl":114},{"sl":115},{"sl":116},{"sl":117},{"sl":118},{"sl":120}]},"test_881":{"methods":[{"sl":80}],"name":"shouldReturnCheckOutAsOperationOnParsingInputValue2","pass":true,"statements":[{"sl":82},{"sl":83},{"sl":84},{"sl":85},{"sl":86},{"sl":87},{"sl":88},{"sl":89},{"sl":90},{"sl":92}]},"test_977":{"methods":[{"sl":66}],"name":"shouldReturnExitApplicationAsOperationOnParsingInputValue0","pass":true,"statements":[{"sl":68},{"sl":69},{"sl":70},{"sl":71},{"sl":72},{"sl":73},{"sl":74},{"sl":75},{"sl":77}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [646, 1311, 1970, 345, 1602], [], [646, 1311, 1970, 345, 1602], [646, 1311, 1970, 345, 1602], [646, 1311, 1970, 345, 1602], [646, 1311, 1970, 345, 1602], [646, 1311, 1970, 345, 1602], [646, 1311, 1970, 345, 1602], [646, 1311, 1970, 345, 1602], [646, 1311, 1970, 345, 1602], [], [646, 1311, 1970, 345, 1602], [], [], [461, 467, 1179, 1593, 144], [], [461, 467, 1179, 1593, 144], [461, 467, 1179, 1593, 144], [461, 467, 1179, 1593, 144], [461, 467, 1179, 1593, 144], [461, 467, 1179, 1593, 144], [461, 467, 1179, 1593, 144], [461, 467, 1179, 1593, 144], [461, 467, 1179, 1593, 144], [], [461, 467, 1179, 1593, 144], [], [], [2126, 67, 1207, 150, 361], [], [2126, 67, 1207, 150, 361], [2126, 67, 1207, 150, 361], [2126, 67, 1207, 150, 361], [2126, 67, 1207, 150, 361], [2126, 67, 1207, 150, 361], [2126, 67, 1207, 150, 361], [2126, 67, 1207, 150, 361], [2126, 67, 1207, 150, 361], [], [2126, 67, 1207, 150, 361], [], [], [143, 725, 1670, 1109, 1915], [], [143, 725, 1670, 1109, 1915], [143, 725, 1670, 1109, 1915], [143, 725, 1670, 1109, 1915], [143, 725, 1670, 1109, 1915], [143, 725, 1670, 1109, 1915], [143, 725, 1670, 1109, 1915], [143, 725, 1670, 1109, 1915], [143, 725, 1670, 1109, 1915], [], [143, 725, 1670, 1109, 1915], [], [], [421, 1208, 402, 2245, 977], [], [421, 1208, 402, 2245, 977], [421, 1208, 402, 2245, 977], [421, 1208, 402, 2245, 977], [421, 1208, 402, 2245, 977], [421, 1208, 402, 2245, 977], [421, 1208, 402, 2245, 977], [421, 1208, 402, 2245, 977], [421, 1208, 402, 2245, 977], [], [421, 1208, 402, 2245, 977], [], [], [881, 45, 827, 733, 1993], [], [881, 45, 827, 733, 1993], [881, 45, 827, 733, 1993], [881, 45, 827, 733, 1993], [881, 45, 827, 733, 1993], [881, 45, 827, 733, 1993], [881, 45, 827, 733, 1993], [881, 45, 827, 733, 1993], [881, 45, 827, 733, 1993], [881, 45, 827, 733, 1993], [], [881, 45, 827, 733, 1993], [], [], [2158, 1859, 662, 1226, 796], [], [2158, 1859, 662, 1226, 796], [2158, 1859, 662, 1226, 796], [2158, 1859, 662, 1226, 796], [2158, 1859, 662, 1226, 796], [2158, 1859, 662, 1226, 796], [2158, 1859, 662, 1226, 796], [2158, 1859, 662, 1226, 796], [2158, 1859, 662, 1226, 796], [2158, 1859, 662, 1226, 796], [], [2158, 1859, 662, 1226, 796], [], [], [452, 290, 2041, 306, 863], [], [452, 290, 2041, 306, 863], [452, 290, 2041, 306, 863], [452, 290, 2041, 306, 863], [452, 290, 2041, 306, 863], [452, 290, 2041, 306, 863], [452, 290, 2041, 306, 863], [452, 290, 2041, 306, 863], [], [452, 290, 2041, 306, 863], [], [], [197, 1379, 1636, 1438, 54], [], [197, 1379, 1636, 1438, 54], [197, 1379, 1636, 1438, 54], [197, 1379, 1636, 1438, 54], [197, 1379, 1636, 1438, 54], [197, 1379, 1636, 1438, 54], [197, 1379, 1636, 1438, 54], [197, 1379, 1636, 1438, 54], [], [197, 1379, 1636, 1438, 54], [], [], [379, 428, 303, 641, 2104], [], [379, 428, 303, 641, 2104], [379, 428, 303, 641, 2104], [379, 428, 303, 641, 2104], [379, 428, 303, 641, 2104], [379, 428, 303, 641, 2104], [379, 428, 303, 641, 2104], [379, 428, 303, 641, 2104], [], [379, 428, 303, 641, 2104], [], [], []]
