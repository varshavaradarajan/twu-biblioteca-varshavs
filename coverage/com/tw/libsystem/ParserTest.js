var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":98,"id":1812,"methods":[{"el":17,"sc":5,"sl":9},{"el":27,"sc":5,"sl":19},{"el":37,"sc":5,"sl":29},{"el":47,"sc":5,"sl":39},{"el":57,"sc":5,"sl":49},{"el":67,"sc":5,"sl":59},{"el":78,"sc":5,"sl":69},{"el":87,"sc":5,"sl":80},{"el":96,"sc":5,"sl":89}],"name":"ParserTest","sl":7}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_101":{"methods":[{"sl":69}],"name":"shouldReturnCheckInAsOperationOnParsingInputValue3","pass":true,"statements":[{"sl":71},{"sl":72},{"sl":73},{"sl":74},{"sl":75},{"sl":77}]},"test_1036":{"methods":[{"sl":29}],"name":"shouldReturnAnOperationOnParsingTheInput","pass":true,"statements":[{"sl":31},{"sl":32},{"sl":33},{"sl":34},{"sl":36}]},"test_1050":{"methods":[{"sl":80}],"name":"shouldReturnListMoviesAsOperationOnParsingInputValue4","pass":true,"statements":[{"sl":82},{"sl":83},{"sl":84},{"sl":86}]},"test_1081":{"methods":[{"sl":9}],"name":"shouldReturnInvalidCommandIfInputIsEmpty","pass":true,"statements":[{"sl":11},{"sl":12},{"sl":13},{"sl":14},{"sl":16}]},"test_1097":{"methods":[{"sl":69}],"name":"shouldReturnCheckInAsOperationOnParsingInputValue3","pass":true,"statements":[{"sl":71},{"sl":72},{"sl":73},{"sl":74},{"sl":75},{"sl":77}]},"test_1110":{"methods":[{"sl":89}],"name":"shouldReturnCheckOutMoviesAsOperationOnParsingInputValue5","pass":true,"statements":[{"sl":91},{"sl":92},{"sl":93},{"sl":95}]},"test_1119":{"methods":[{"sl":9}],"name":"shouldReturnInvalidCommandIfInputIsEmpty","pass":true,"statements":[{"sl":11},{"sl":12},{"sl":13},{"sl":14},{"sl":16}]},"test_1138":{"methods":[{"sl":49}],"name":"shouldReturnExitApplicationAsOperationOnParsingInputValue0","pass":true,"statements":[{"sl":51},{"sl":52},{"sl":53},{"sl":54},{"sl":56}]},"test_115":{"methods":[{"sl":49}],"name":"shouldReturnExitApplicationAsOperationOnParsingInputValue0","pass":true,"statements":[{"sl":51},{"sl":52},{"sl":53},{"sl":54},{"sl":56}]},"test_1154":{"methods":[{"sl":89}],"name":"shouldReturnCheckOutMoviesAsOperationOnParsingInputValue5","pass":true,"statements":[{"sl":91},{"sl":92},{"sl":93},{"sl":95}]},"test_1191":{"methods":[{"sl":89}],"name":"shouldReturnCheckOutMoviesAsOperationOnParsingInputValue5","pass":true,"statements":[{"sl":91},{"sl":92},{"sl":93},{"sl":95}]},"test_1192":{"methods":[{"sl":80}],"name":"shouldReturnListMoviesAsOperationOnParsingInputValue4","pass":true,"statements":[{"sl":82},{"sl":83},{"sl":84},{"sl":86}]},"test_1226":{"methods":[{"sl":9}],"name":"shouldReturnInvalidCommandIfInputIsEmpty","pass":true,"statements":[{"sl":11},{"sl":12},{"sl":13},{"sl":14},{"sl":16}]},"test_123":{"methods":[{"sl":19}],"name":"shouldReturnInvalidIfInputLengthIsMoreThanOne","pass":true,"statements":[{"sl":21},{"sl":22},{"sl":23},{"sl":24},{"sl":26}]},"test_1300":{"methods":[{"sl":80}],"name":"shouldReturnListMoviesAsOperationOnParsingInputValue4","pass":true,"statements":[{"sl":82},{"sl":83},{"sl":84},{"sl":86}]},"test_1348":{"methods":[{"sl":49}],"name":"shouldReturnExitApplicationAsOperationOnParsingInputValue0","pass":true,"statements":[{"sl":51},{"sl":52},{"sl":53},{"sl":54},{"sl":56}]},"test_1394":{"methods":[{"sl":19}],"name":"shouldReturnInvalidIfInputLengthIsMoreThanOne","pass":true,"statements":[{"sl":21},{"sl":22},{"sl":23},{"sl":24},{"sl":26}]},"test_1405":{"methods":[{"sl":39}],"name":"shouldReturnInvalidCommandAsOperationForInvalidInput","pass":true,"statements":[{"sl":41},{"sl":42},{"sl":43},{"sl":44},{"sl":46}]},"test_1407":{"methods":[{"sl":9}],"name":"shouldReturnInvalidCommandIfInputIsEmpty","pass":true,"statements":[{"sl":11},{"sl":12},{"sl":13},{"sl":14},{"sl":16}]},"test_1417":{"methods":[{"sl":29}],"name":"shouldReturnAnOperationOnParsingTheInput","pass":true,"statements":[{"sl":31},{"sl":32},{"sl":33},{"sl":34},{"sl":36}]},"test_1433":{"methods":[{"sl":69}],"name":"shouldReturnCheckInAsOperationOnParsingInputValue3","pass":true,"statements":[{"sl":71},{"sl":72},{"sl":73},{"sl":74},{"sl":75},{"sl":77}]},"test_1437":{"methods":[{"sl":29}],"name":"shouldReturnAnOperationOnParsingTheInput","pass":true,"statements":[{"sl":31},{"sl":32},{"sl":33},{"sl":34},{"sl":36}]},"test_1464":{"methods":[{"sl":19}],"name":"shouldReturnInvalidIfInputLengthIsMoreThanOne","pass":true,"statements":[{"sl":21},{"sl":22},{"sl":23},{"sl":24},{"sl":26}]},"test_151":{"methods":[{"sl":69}],"name":"shouldReturnCheckInAsOperationOnParsingInputValue3","pass":true,"statements":[{"sl":71},{"sl":72},{"sl":73},{"sl":74},{"sl":75},{"sl":77}]},"test_184":{"methods":[{"sl":89}],"name":"shouldReturnCheckOutMoviesAsOperationOnParsingInputValue5","pass":true,"statements":[{"sl":91},{"sl":92},{"sl":93},{"sl":95}]},"test_222":{"methods":[{"sl":59}],"name":"shouldReturnCheckOutAsOperationOnParsingInputValue2","pass":true,"statements":[{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":66}]},"test_228":{"methods":[{"sl":19}],"name":"shouldReturnInvalidIfInputLengthIsMoreThanOne","pass":true,"statements":[{"sl":21},{"sl":22},{"sl":23},{"sl":24},{"sl":26}]},"test_231":{"methods":[{"sl":19}],"name":"shouldReturnInvalidIfInputLengthIsMoreThanOne","pass":true,"statements":[{"sl":21},{"sl":22},{"sl":23},{"sl":24},{"sl":26}]},"test_232":{"methods":[{"sl":69}],"name":"shouldReturnCheckInAsOperationOnParsingInputValue3","pass":true,"statements":[{"sl":71},{"sl":72},{"sl":73},{"sl":74},{"sl":75},{"sl":77}]},"test_260":{"methods":[{"sl":89}],"name":"shouldReturnCheckOutMoviesAsOperationOnParsingInputValue5","pass":true,"statements":[{"sl":91},{"sl":92},{"sl":93},{"sl":95}]},"test_266":{"methods":[{"sl":29}],"name":"shouldReturnAnOperationOnParsingTheInput","pass":true,"statements":[{"sl":31},{"sl":32},{"sl":33},{"sl":34},{"sl":36}]},"test_342":{"methods":[{"sl":89}],"name":"shouldReturnCheckOutMoviesAsOperationOnParsingInputValue5","pass":true,"statements":[{"sl":91},{"sl":92},{"sl":93},{"sl":95}]},"test_367":{"methods":[{"sl":49}],"name":"shouldReturnExitApplicationAsOperationOnParsingInputValue0","pass":true,"statements":[{"sl":51},{"sl":52},{"sl":53},{"sl":54},{"sl":56}]},"test_370":{"methods":[{"sl":59}],"name":"shouldReturnCheckOutAsOperationOnParsingInputValue2","pass":true,"statements":[{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":66}]},"test_408":{"methods":[{"sl":69}],"name":"shouldReturnCheckInAsOperationOnParsingInputValue3","pass":true,"statements":[{"sl":71},{"sl":72},{"sl":73},{"sl":74},{"sl":75},{"sl":77}]},"test_410":{"methods":[{"sl":29}],"name":"shouldReturnAnOperationOnParsingTheInput","pass":true,"statements":[{"sl":31},{"sl":32},{"sl":33},{"sl":34},{"sl":36}]},"test_419":{"methods":[{"sl":59}],"name":"shouldReturnCheckOutAsOperationOnParsingInputValue2","pass":true,"statements":[{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":66}]},"test_45":{"methods":[{"sl":9}],"name":"shouldReturnInvalidCommandIfInputIsEmpty","pass":true,"statements":[{"sl":11},{"sl":12},{"sl":13},{"sl":14},{"sl":16}]},"test_497":{"methods":[{"sl":59}],"name":"shouldReturnCheckOutAsOperationOnParsingInputValue2","pass":true,"statements":[{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":66}]},"test_524":{"methods":[{"sl":39}],"name":"shouldReturnInvalidCommandAsOperationForInvalidInput","pass":true,"statements":[{"sl":41},{"sl":42},{"sl":43},{"sl":44},{"sl":46}]},"test_588":{"methods":[{"sl":80}],"name":"shouldReturnListMoviesAsOperationOnParsingInputValue4","pass":true,"statements":[{"sl":82},{"sl":83},{"sl":84},{"sl":86}]},"test_592":{"methods":[{"sl":39}],"name":"shouldReturnInvalidCommandAsOperationForInvalidInput","pass":true,"statements":[{"sl":41},{"sl":42},{"sl":43},{"sl":44},{"sl":46}]},"test_60":{"methods":[{"sl":39}],"name":"shouldReturnInvalidCommandAsOperationForInvalidInput","pass":true,"statements":[{"sl":41},{"sl":42},{"sl":43},{"sl":44},{"sl":46}]},"test_62":{"methods":[{"sl":69}],"name":"shouldReturnCheckInAsOperationOnParsingInputValue3","pass":true,"statements":[{"sl":71},{"sl":72},{"sl":73},{"sl":74},{"sl":75},{"sl":77}]},"test_641":{"methods":[{"sl":49}],"name":"shouldReturnExitApplicationAsOperationOnParsingInputValue0","pass":true,"statements":[{"sl":51},{"sl":52},{"sl":53},{"sl":54},{"sl":56}]},"test_642":{"methods":[{"sl":69}],"name":"shouldReturnCheckInAsOperationOnParsingInputValue3","pass":true,"statements":[{"sl":71},{"sl":72},{"sl":73},{"sl":74},{"sl":75},{"sl":77}]},"test_648":{"methods":[{"sl":89}],"name":"shouldReturnCheckOutMoviesAsOperationOnParsingInputValue5","pass":true,"statements":[{"sl":91},{"sl":92},{"sl":93},{"sl":95}]},"test_667":{"methods":[{"sl":9}],"name":"shouldReturnInvalidCommandIfInputIsEmpty","pass":true,"statements":[{"sl":11},{"sl":12},{"sl":13},{"sl":14},{"sl":16}]},"test_671":{"methods":[{"sl":80}],"name":"shouldReturnListMoviesAsOperationOnParsingInputValue4","pass":true,"statements":[{"sl":82},{"sl":83},{"sl":84},{"sl":86}]},"test_672":{"methods":[{"sl":29}],"name":"shouldReturnAnOperationOnParsingTheInput","pass":true,"statements":[{"sl":31},{"sl":32},{"sl":33},{"sl":34},{"sl":36}]},"test_673":{"methods":[{"sl":59}],"name":"shouldReturnCheckOutAsOperationOnParsingInputValue2","pass":true,"statements":[{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":66}]},"test_689":{"methods":[{"sl":59}],"name":"shouldReturnCheckOutAsOperationOnParsingInputValue2","pass":true,"statements":[{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":66}]},"test_690":{"methods":[{"sl":39}],"name":"shouldReturnInvalidCommandAsOperationForInvalidInput","pass":true,"statements":[{"sl":41},{"sl":42},{"sl":43},{"sl":44},{"sl":46}]},"test_708":{"methods":[{"sl":19}],"name":"shouldReturnInvalidIfInputLengthIsMoreThanOne","pass":true,"statements":[{"sl":21},{"sl":22},{"sl":23},{"sl":24},{"sl":26}]},"test_717":{"methods":[{"sl":49}],"name":"shouldReturnExitApplicationAsOperationOnParsingInputValue0","pass":true,"statements":[{"sl":51},{"sl":52},{"sl":53},{"sl":54},{"sl":56}]},"test_718":{"methods":[{"sl":19}],"name":"shouldReturnInvalidIfInputLengthIsMoreThanOne","pass":true,"statements":[{"sl":21},{"sl":22},{"sl":23},{"sl":24},{"sl":26}]},"test_726":{"methods":[{"sl":80}],"name":"shouldReturnListMoviesAsOperationOnParsingInputValue4","pass":true,"statements":[{"sl":82},{"sl":83},{"sl":84},{"sl":86}]},"test_727":{"methods":[{"sl":80}],"name":"shouldReturnListMoviesAsOperationOnParsingInputValue4","pass":true,"statements":[{"sl":82},{"sl":83},{"sl":84},{"sl":86}]},"test_733":{"methods":[{"sl":29}],"name":"shouldReturnAnOperationOnParsingTheInput","pass":true,"statements":[{"sl":31},{"sl":32},{"sl":33},{"sl":34},{"sl":36}]},"test_739":{"methods":[{"sl":29}],"name":"shouldReturnAnOperationOnParsingTheInput","pass":true,"statements":[{"sl":31},{"sl":32},{"sl":33},{"sl":34},{"sl":36}]},"test_795":{"methods":[{"sl":49}],"name":"shouldReturnExitApplicationAsOperationOnParsingInputValue0","pass":true,"statements":[{"sl":51},{"sl":52},{"sl":53},{"sl":54},{"sl":56}]},"test_80":{"methods":[{"sl":59}],"name":"shouldReturnCheckOutAsOperationOnParsingInputValue2","pass":true,"statements":[{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":66}]},"test_823":{"methods":[{"sl":39}],"name":"shouldReturnInvalidCommandAsOperationForInvalidInput","pass":true,"statements":[{"sl":41},{"sl":42},{"sl":43},{"sl":44},{"sl":46}]},"test_827":{"methods":[{"sl":19}],"name":"shouldReturnInvalidIfInputLengthIsMoreThanOne","pass":true,"statements":[{"sl":21},{"sl":22},{"sl":23},{"sl":24},{"sl":26}]},"test_872":{"methods":[{"sl":9}],"name":"shouldReturnInvalidCommandIfInputIsEmpty","pass":true,"statements":[{"sl":11},{"sl":12},{"sl":13},{"sl":14},{"sl":16}]},"test_892":{"methods":[{"sl":39}],"name":"shouldReturnInvalidCommandAsOperationForInvalidInput","pass":true,"statements":[{"sl":41},{"sl":42},{"sl":43},{"sl":44},{"sl":46}]},"test_895":{"methods":[{"sl":59}],"name":"shouldReturnCheckOutAsOperationOnParsingInputValue2","pass":true,"statements":[{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":66}]},"test_909":{"methods":[{"sl":89}],"name":"shouldReturnCheckOutMoviesAsOperationOnParsingInputValue5","pass":true,"statements":[{"sl":91},{"sl":92},{"sl":93},{"sl":95}]},"test_938":{"methods":[{"sl":80}],"name":"shouldReturnListMoviesAsOperationOnParsingInputValue4","pass":true,"statements":[{"sl":82},{"sl":83},{"sl":84},{"sl":86}]},"test_954":{"methods":[{"sl":39}],"name":"shouldReturnInvalidCommandAsOperationForInvalidInput","pass":true,"statements":[{"sl":41},{"sl":42},{"sl":43},{"sl":44},{"sl":46}]},"test_973":{"methods":[{"sl":9}],"name":"shouldReturnInvalidCommandIfInputIsEmpty","pass":true,"statements":[{"sl":11},{"sl":12},{"sl":13},{"sl":14},{"sl":16}]},"test_978":{"methods":[{"sl":49}],"name":"shouldReturnExitApplicationAsOperationOnParsingInputValue0","pass":true,"statements":[{"sl":51},{"sl":52},{"sl":53},{"sl":54},{"sl":56}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [45, 1226, 1119, 872, 1081, 1407, 667, 973], [], [45, 1226, 1119, 872, 1081, 1407, 667, 973], [45, 1226, 1119, 872, 1081, 1407, 667, 973], [45, 1226, 1119, 872, 1081, 1407, 667, 973], [45, 1226, 1119, 872, 1081, 1407, 667, 973], [], [45, 1226, 1119, 872, 1081, 1407, 667, 973], [], [], [708, 231, 718, 228, 827, 123, 1464, 1394], [], [708, 231, 718, 228, 827, 123, 1464, 1394], [708, 231, 718, 228, 827, 123, 1464, 1394], [708, 231, 718, 228, 827, 123, 1464, 1394], [708, 231, 718, 228, 827, 123, 1464, 1394], [], [708, 231, 718, 228, 827, 123, 1464, 1394], [], [], [672, 266, 1437, 1417, 733, 739, 410, 1036], [], [672, 266, 1437, 1417, 733, 739, 410, 1036], [672, 266, 1437, 1417, 733, 739, 410, 1036], [672, 266, 1437, 1417, 733, 739, 410, 1036], [672, 266, 1437, 1417, 733, 739, 410, 1036], [], [672, 266, 1437, 1417, 733, 739, 410, 1036], [], [], [954, 524, 823, 592, 1405, 690, 60, 892], [], [954, 524, 823, 592, 1405, 690, 60, 892], [954, 524, 823, 592, 1405, 690, 60, 892], [954, 524, 823, 592, 1405, 690, 60, 892], [954, 524, 823, 592, 1405, 690, 60, 892], [], [954, 524, 823, 592, 1405, 690, 60, 892], [], [], [115, 978, 367, 795, 1138, 1348, 717, 641], [], [115, 978, 367, 795, 1138, 1348, 717, 641], [115, 978, 367, 795, 1138, 1348, 717, 641], [115, 978, 367, 795, 1138, 1348, 717, 641], [115, 978, 367, 795, 1138, 1348, 717, 641], [], [115, 978, 367, 795, 1138, 1348, 717, 641], [], [], [370, 895, 689, 673, 80, 497, 222, 419], [], [370, 895, 689, 673, 80, 497, 222, 419], [370, 895, 689, 673, 80, 497, 222, 419], [370, 895, 689, 673, 80, 497, 222, 419], [370, 895, 689, 673, 80, 497, 222, 419], [], [370, 895, 689, 673, 80, 497, 222, 419], [], [], [1097, 1433, 62, 151, 408, 101, 232, 642], [], [1097, 1433, 62, 151, 408, 101, 232, 642], [1097, 1433, 62, 151, 408, 101, 232, 642], [1097, 1433, 62, 151, 408, 101, 232, 642], [1097, 1433, 62, 151, 408, 101, 232, 642], [1097, 1433, 62, 151, 408, 101, 232, 642], [], [1097, 1433, 62, 151, 408, 101, 232, 642], [], [], [726, 938, 1050, 671, 1192, 588, 727, 1300], [], [726, 938, 1050, 671, 1192, 588, 727, 1300], [726, 938, 1050, 671, 1192, 588, 727, 1300], [726, 938, 1050, 671, 1192, 588, 727, 1300], [], [726, 938, 1050, 671, 1192, 588, 727, 1300], [], [], [1110, 1191, 184, 1154, 909, 260, 342, 648], [], [1110, 1191, 184, 1154, 909, 260, 342, 648], [1110, 1191, 184, 1154, 909, 260, 342, 648], [1110, 1191, 184, 1154, 909, 260, 342, 648], [], [1110, 1191, 184, 1154, 909, 260, 342, 648], [], [], []]
