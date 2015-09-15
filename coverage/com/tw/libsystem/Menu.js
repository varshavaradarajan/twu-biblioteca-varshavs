var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":22,"id":80,"methods":[{"el":12,"sc":5,"sl":10},{"el":21,"sc":5,"sl":14}],"name":"Menu","sl":6}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_10":{"methods":[{"sl":10},{"sl":14}],"name":"shouldReturnAListOfOptions","pass":true,"statements":[{"sl":11},{"sl":16},{"sl":17},{"sl":18},{"sl":20}]},"test_1029":{"methods":[{"sl":10},{"sl":14}],"name":"shouldReturnAListOfOptions","pass":true,"statements":[{"sl":11},{"sl":16},{"sl":17},{"sl":18},{"sl":20}]},"test_1099":{"methods":[{"sl":10},{"sl":14}],"name":"shouldReturnAListOfOptions","pass":true,"statements":[{"sl":11},{"sl":16},{"sl":17},{"sl":18},{"sl":20}]},"test_1100":{"methods":[{"sl":10},{"sl":14}],"name":"shouldReturnAListOfOptions","pass":true,"statements":[{"sl":11},{"sl":16},{"sl":17},{"sl":18},{"sl":20}]},"test_1134":{"methods":[{"sl":10},{"sl":14}],"name":"shouldReturnAListOfOptions","pass":true,"statements":[{"sl":11},{"sl":16},{"sl":17},{"sl":18},{"sl":20}]},"test_1147":{"methods":[{"sl":10},{"sl":14}],"name":"shouldDelegateDisplayingMessageToDisplayClass","pass":true,"statements":[{"sl":11},{"sl":16},{"sl":17},{"sl":18},{"sl":20}]},"test_1169":{"methods":[{"sl":10},{"sl":14}],"name":"shouldReturnAListOfOptions","pass":true,"statements":[{"sl":11},{"sl":16},{"sl":17},{"sl":18},{"sl":20}]},"test_1182":{"methods":[{"sl":10},{"sl":14}],"name":"shouldReturnAListOfOptions","pass":true,"statements":[{"sl":11},{"sl":16},{"sl":17},{"sl":18},{"sl":20}]},"test_1183":{"methods":[{"sl":10},{"sl":14}],"name":"shouldReturnAListOfOptions","pass":true,"statements":[{"sl":11},{"sl":16},{"sl":17},{"sl":18},{"sl":20}]},"test_1186":{"methods":[{"sl":10}],"name":"shouldReturnNewMenus","pass":true,"statements":[{"sl":11}]},"test_1198":{"methods":[{"sl":10},{"sl":14}],"name":"shouldDelegateDisplayingMessageToDisplayClass","pass":true,"statements":[{"sl":11},{"sl":16},{"sl":17},{"sl":18},{"sl":20}]},"test_120":{"methods":[{"sl":10},{"sl":14}],"name":"shouldReturnAListOfOptions","pass":true,"statements":[{"sl":11},{"sl":16},{"sl":17},{"sl":18},{"sl":20}]},"test_1230":{"methods":[{"sl":10}],"name":"shouldReturnNewMenus","pass":true,"statements":[{"sl":11}]},"test_1244":{"methods":[{"sl":10},{"sl":14}],"name":"shouldDelegateTakingInputToInputView","pass":true,"statements":[{"sl":11},{"sl":16},{"sl":17},{"sl":18},{"sl":20}]},"test_1276":{"methods":[{"sl":10},{"sl":14}],"name":"shouldReturnAListOfOptions","pass":true,"statements":[{"sl":11},{"sl":16},{"sl":17},{"sl":18},{"sl":20}]},"test_1297":{"methods":[{"sl":10},{"sl":14}],"name":"shouldDelegateDisplayingMessageToDisplayClass","pass":true,"statements":[{"sl":11},{"sl":16},{"sl":17},{"sl":18},{"sl":20}]},"test_1309":{"methods":[{"sl":10}],"name":"shouldReturnNewMenus","pass":true,"statements":[{"sl":11}]},"test_131":{"methods":[{"sl":10},{"sl":14}],"name":"shouldDelegateDisplayingMessageToDisplayClass","pass":true,"statements":[{"sl":11},{"sl":16},{"sl":17},{"sl":18},{"sl":20}]},"test_1333":{"methods":[{"sl":10}],"name":"shouldReturnNewMenus","pass":true,"statements":[{"sl":11}]},"test_1337":{"methods":[{"sl":10},{"sl":14}],"name":"shouldReturnAListOfOptions","pass":true,"statements":[{"sl":11},{"sl":16},{"sl":17},{"sl":18},{"sl":20}]},"test_1338":{"methods":[{"sl":10}],"name":"shouldReturnNewMenus","pass":true,"statements":[{"sl":11}]},"test_1357":{"methods":[{"sl":10},{"sl":14}],"name":"shouldDelegateDisplayingOfMenuToDisplayClass","pass":true,"statements":[{"sl":11},{"sl":16},{"sl":17},{"sl":18},{"sl":20}]},"test_1370":{"methods":[{"sl":10},{"sl":14}],"name":"shouldDelegateDisplayingMessageToDisplayClass","pass":true,"statements":[{"sl":11},{"sl":16},{"sl":17},{"sl":18},{"sl":20}]},"test_1382":{"methods":[{"sl":10},{"sl":14}],"name":"shouldDelegateDisplayingMessageToDisplayClass","pass":true,"statements":[{"sl":11},{"sl":16},{"sl":17},{"sl":18},{"sl":20}]},"test_1386":{"methods":[{"sl":10},{"sl":14}],"name":"shouldDelegateDisplayingMessageToDisplayClass","pass":true,"statements":[{"sl":11},{"sl":16},{"sl":17},{"sl":18},{"sl":20}]},"test_1393":{"methods":[{"sl":10},{"sl":14}],"name":"shouldReturnAListOfOptions","pass":true,"statements":[{"sl":11},{"sl":16},{"sl":17},{"sl":18},{"sl":20}]},"test_1409":{"methods":[{"sl":10}],"name":"shouldReturnNewMenus","pass":true,"statements":[{"sl":11}]},"test_1463":{"methods":[{"sl":10},{"sl":14}],"name":"shouldDelegateDisplayingMessageToDisplayClass","pass":true,"statements":[{"sl":11},{"sl":16},{"sl":17},{"sl":18},{"sl":20}]},"test_155":{"methods":[{"sl":10},{"sl":14}],"name":"shouldReturnAListOfOptions","pass":true,"statements":[{"sl":11},{"sl":16},{"sl":17},{"sl":18},{"sl":20}]},"test_185":{"methods":[{"sl":10}],"name":"shouldReturnNewMenus","pass":true,"statements":[{"sl":11}]},"test_199":{"methods":[{"sl":10},{"sl":14}],"name":"shouldDelegateTakingInputToInputView","pass":true,"statements":[{"sl":11},{"sl":16},{"sl":17},{"sl":18},{"sl":20}]},"test_210":{"methods":[{"sl":10},{"sl":14}],"name":"shouldReturnAListOfOptions","pass":true,"statements":[{"sl":11},{"sl":16},{"sl":17},{"sl":18},{"sl":20}]},"test_212":{"methods":[{"sl":10},{"sl":14}],"name":"shouldReturnAListOfOptions","pass":true,"statements":[{"sl":11},{"sl":16},{"sl":17},{"sl":18},{"sl":20}]},"test_257":{"methods":[{"sl":10},{"sl":14}],"name":"shouldReturnAListOfOptions","pass":true,"statements":[{"sl":11},{"sl":16},{"sl":17},{"sl":18},{"sl":20}]},"test_262":{"methods":[{"sl":10},{"sl":14}],"name":"shouldReturnAListOfOptions","pass":true,"statements":[{"sl":11},{"sl":16},{"sl":17},{"sl":18},{"sl":20}]},"test_298":{"methods":[{"sl":10},{"sl":14}],"name":"shouldReturnAListOfOptions","pass":true,"statements":[{"sl":11},{"sl":16},{"sl":17},{"sl":18},{"sl":20}]},"test_323":{"methods":[{"sl":10},{"sl":14}],"name":"shouldReturnAListOfOptions","pass":true,"statements":[{"sl":11},{"sl":16},{"sl":17},{"sl":18},{"sl":20}]},"test_324":{"methods":[{"sl":10},{"sl":14}],"name":"shouldDelegateDisplayingMessageToDisplayClass","pass":true,"statements":[{"sl":11},{"sl":16},{"sl":17},{"sl":18},{"sl":20}]},"test_331":{"methods":[{"sl":10},{"sl":14}],"name":"shouldReturnAListOfOptions","pass":true,"statements":[{"sl":11},{"sl":16},{"sl":17},{"sl":18},{"sl":20}]},"test_345":{"methods":[{"sl":10},{"sl":14}],"name":"shouldDelegateDisplayingMessageToDisplayClass","pass":true,"statements":[{"sl":11},{"sl":16},{"sl":17},{"sl":18},{"sl":20}]},"test_350":{"methods":[{"sl":10}],"name":"shouldReturnNewMenus","pass":true,"statements":[{"sl":11}]},"test_358":{"methods":[{"sl":10},{"sl":14}],"name":"shouldDelegateDisplayingMessageToDisplayClass","pass":true,"statements":[{"sl":11},{"sl":16},{"sl":17},{"sl":18},{"sl":20}]},"test_369":{"methods":[{"sl":10},{"sl":14}],"name":"shouldReturnAListOfOptions","pass":true,"statements":[{"sl":11},{"sl":16},{"sl":17},{"sl":18},{"sl":20}]},"test_376":{"methods":[{"sl":10}],"name":"shouldReturnNewMenus","pass":true,"statements":[{"sl":11}]},"test_401":{"methods":[{"sl":10},{"sl":14}],"name":"shouldDelegateDisplayingOfMenuToDisplayClass","pass":true,"statements":[{"sl":11},{"sl":16},{"sl":17},{"sl":18},{"sl":20}]},"test_404":{"methods":[{"sl":10},{"sl":14}],"name":"shouldReturnAListOfOptions","pass":true,"statements":[{"sl":11},{"sl":16},{"sl":17},{"sl":18},{"sl":20}]},"test_442":{"methods":[{"sl":10},{"sl":14}],"name":"shouldReturnAListOfOptions","pass":true,"statements":[{"sl":11},{"sl":16},{"sl":17},{"sl":18},{"sl":20}]},"test_473":{"methods":[{"sl":10},{"sl":14}],"name":"shouldDelegateDisplayingOfMenuToDisplayClass","pass":true,"statements":[{"sl":11},{"sl":16},{"sl":17},{"sl":18},{"sl":20}]},"test_519":{"methods":[{"sl":10}],"name":"shouldReturnNewMenus","pass":true,"statements":[{"sl":11}]},"test_589":{"methods":[{"sl":10},{"sl":14}],"name":"shouldDelegateDisplayingMessageToDisplayClass","pass":true,"statements":[{"sl":11},{"sl":16},{"sl":17},{"sl":18},{"sl":20}]},"test_59":{"methods":[{"sl":10},{"sl":14}],"name":"shouldReturnAListOfOptions","pass":true,"statements":[{"sl":11},{"sl":16},{"sl":17},{"sl":18},{"sl":20}]},"test_608":{"methods":[{"sl":10},{"sl":14}],"name":"shouldDelegateDisplayingMessageToDisplayClass","pass":true,"statements":[{"sl":11},{"sl":16},{"sl":17},{"sl":18},{"sl":20}]},"test_623":{"methods":[{"sl":10},{"sl":14}],"name":"shouldDelegateDisplayingMessageToDisplayClass","pass":true,"statements":[{"sl":11},{"sl":16},{"sl":17},{"sl":18},{"sl":20}]},"test_668":{"methods":[{"sl":10}],"name":"shouldReturnNewMenus","pass":true,"statements":[{"sl":11}]},"test_682":{"methods":[{"sl":10},{"sl":14}],"name":"shouldReturnAListOfOptions","pass":true,"statements":[{"sl":11},{"sl":16},{"sl":17},{"sl":18},{"sl":20}]},"test_699":{"methods":[{"sl":10},{"sl":14}],"name":"shouldReturnAListOfOptions","pass":true,"statements":[{"sl":11},{"sl":16},{"sl":17},{"sl":18},{"sl":20}]},"test_734":{"methods":[{"sl":10},{"sl":14}],"name":"shouldReturnAListOfOptions","pass":true,"statements":[{"sl":11},{"sl":16},{"sl":17},{"sl":18},{"sl":20}]},"test_780":{"methods":[{"sl":10},{"sl":14}],"name":"shouldDelegateDisplayingMessageToDisplayClass","pass":true,"statements":[{"sl":11},{"sl":16},{"sl":17},{"sl":18},{"sl":20}]},"test_79":{"methods":[{"sl":10},{"sl":14}],"name":"shouldReturnAListOfOptions","pass":true,"statements":[{"sl":11},{"sl":16},{"sl":17},{"sl":18},{"sl":20}]},"test_801":{"methods":[{"sl":10},{"sl":14}],"name":"shouldDelegateDisplayingMessageToDisplayClass","pass":true,"statements":[{"sl":11},{"sl":16},{"sl":17},{"sl":18},{"sl":20}]},"test_809":{"methods":[{"sl":10},{"sl":14}],"name":"shouldReturnAListOfOptions","pass":true,"statements":[{"sl":11},{"sl":16},{"sl":17},{"sl":18},{"sl":20}]},"test_836":{"methods":[{"sl":10}],"name":"shouldReturnNewMenus","pass":true,"statements":[{"sl":11}]},"test_854":{"methods":[{"sl":10},{"sl":14}],"name":"shouldDelegateDisplayingMessageToDisplayClass","pass":true,"statements":[{"sl":11},{"sl":16},{"sl":17},{"sl":18},{"sl":20}]},"test_94":{"methods":[{"sl":10},{"sl":14}],"name":"shouldReturnAListOfOptions","pass":true,"statements":[{"sl":11},{"sl":16},{"sl":17},{"sl":18},{"sl":20}]},"test_947":{"methods":[{"sl":10},{"sl":14}],"name":"shouldReturnAListOfOptions","pass":true,"statements":[{"sl":11},{"sl":16},{"sl":17},{"sl":18},{"sl":20}]},"test_948":{"methods":[{"sl":10},{"sl":14}],"name":"shouldReturnAListOfOptions","pass":true,"statements":[{"sl":11},{"sl":16},{"sl":17},{"sl":18},{"sl":20}]},"test_960":{"methods":[{"sl":10}],"name":"shouldReturnNewMenus","pass":true,"statements":[{"sl":11}]},"test_975":{"methods":[{"sl":10},{"sl":14}],"name":"shouldDelegateDisplayingMessageToDisplayClass","pass":true,"statements":[{"sl":11},{"sl":16},{"sl":17},{"sl":18},{"sl":20}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [801, 1357, 298, 442, 10, 1409, 131, 59, 960, 155, 780, 1147, 947, 212, 699, 79, 519, 473, 1297, 1169, 345, 331, 1337, 854, 608, 1370, 1230, 1186, 1134, 975, 836, 358, 1183, 682, 401, 1029, 734, 623, 210, 1099, 1100, 1182, 323, 324, 94, 350, 948, 1382, 376, 199, 809, 185, 404, 589, 1338, 1333, 1463, 262, 1244, 1276, 668, 1198, 257, 1386, 120, 369, 1309, 1393], [801, 1357, 298, 442, 10, 1409, 131, 59, 960, 155, 780, 1147, 947, 212, 699, 79, 519, 473, 1297, 1169, 345, 331, 1337, 854, 608, 1370, 1230, 1186, 1134, 975, 836, 358, 1183, 682, 401, 1029, 734, 623, 210, 1099, 1100, 1182, 323, 324, 94, 350, 948, 1382, 376, 199, 809, 185, 404, 589, 1338, 1333, 1463, 262, 1244, 1276, 668, 1198, 257, 1386, 120, 369, 1309, 1393], [], [], [801, 1357, 298, 442, 10, 131, 59, 155, 780, 1147, 947, 212, 699, 79, 473, 1297, 1169, 345, 331, 1337, 854, 608, 1370, 1134, 975, 358, 1183, 682, 401, 1029, 734, 623, 210, 1099, 1100, 1182, 323, 324, 94, 948, 1382, 199, 809, 404, 589, 1463, 262, 1244, 1276, 1198, 257, 1386, 120, 369, 1393], [], [801, 1357, 298, 442, 10, 131, 59, 155, 780, 1147, 947, 212, 699, 79, 473, 1297, 1169, 345, 331, 1337, 854, 608, 1370, 1134, 975, 358, 1183, 682, 401, 1029, 734, 623, 210, 1099, 1100, 1182, 323, 324, 94, 948, 1382, 199, 809, 404, 589, 1463, 262, 1244, 1276, 1198, 257, 1386, 120, 369, 1393], [801, 1357, 298, 442, 10, 131, 59, 155, 780, 1147, 947, 212, 699, 79, 473, 1297, 1169, 345, 331, 1337, 854, 608, 1370, 1134, 975, 358, 1183, 682, 401, 1029, 734, 623, 210, 1099, 1100, 1182, 323, 324, 94, 948, 1382, 199, 809, 404, 589, 1463, 262, 1244, 1276, 1198, 257, 1386, 120, 369, 1393], [801, 1357, 298, 442, 10, 131, 59, 155, 780, 1147, 947, 212, 699, 79, 473, 1297, 1169, 345, 331, 1337, 854, 608, 1370, 1134, 975, 358, 1183, 682, 401, 1029, 734, 623, 210, 1099, 1100, 1182, 323, 324, 94, 948, 1382, 199, 809, 404, 589, 1463, 262, 1244, 1276, 1198, 257, 1386, 120, 369, 1393], [], [801, 1357, 298, 442, 10, 131, 59, 155, 780, 1147, 947, 212, 699, 79, 473, 1297, 1169, 345, 331, 1337, 854, 608, 1370, 1134, 975, 358, 1183, 682, 401, 1029, 734, 623, 210, 1099, 1100, 1182, 323, 324, 94, 948, 1382, 199, 809, 404, 589, 1463, 262, 1244, 1276, 1198, 257, 1386, 120, 369, 1393], [], []]
