var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":17,"id":113,"methods":[{"el":11,"sc":5,"sl":8},{"el":16,"sc":5,"sl":13}],"name":"Display","sl":4}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_0":{"methods":[{"sl":8},{"sl":13}],"name":"shouldDisplayAMessageAfterAnOperationIsExecuted","pass":true,"statements":[{"sl":10},{"sl":15}]},"test_1026":{"methods":[{"sl":8}],"name":"shouldReturnNewDisplayObjects","pass":true,"statements":[{"sl":10}]},"test_103":{"methods":[{"sl":8}],"name":"shouldReturnNewDisplayObjects","pass":true,"statements":[{"sl":10}]},"test_1031":{"methods":[{"sl":8},{"sl":13}],"name":"shouldDelegateDisplayingMessageToDisplayClass","pass":true,"statements":[{"sl":10},{"sl":15}]},"test_1032":{"methods":[{"sl":8},{"sl":13}],"name":"shouldDisplayAMessage","pass":true,"statements":[{"sl":10},{"sl":15}]},"test_1037":{"methods":[{"sl":8},{"sl":13}],"name":"shouldDisplayAMessage","pass":true,"statements":[{"sl":10},{"sl":15}]},"test_1040":{"methods":[{"sl":8},{"sl":13}],"name":"shouldDisplayAMessage","pass":true,"statements":[{"sl":10},{"sl":15}]},"test_1079":{"methods":[{"sl":8}],"name":"shouldReturnNewDisplayObjects","pass":true,"statements":[{"sl":10}]},"test_1087":{"methods":[{"sl":8},{"sl":13}],"name":"shouldDelegateDisplayingOfMenuToDisplayClass","pass":true,"statements":[{"sl":10},{"sl":15}]},"test_1095":{"methods":[{"sl":8},{"sl":13}],"name":"shouldDelegateDisplayingMessageToDisplayClass","pass":true,"statements":[{"sl":10},{"sl":15}]},"test_1171":{"methods":[{"sl":8}],"name":"shouldReturnNewDisplayObjects","pass":true,"statements":[{"sl":10}]},"test_1188":{"methods":[{"sl":8},{"sl":13}],"name":"shouldDisplayAMessage","pass":true,"statements":[{"sl":10},{"sl":15}]},"test_1229":{"methods":[{"sl":8},{"sl":13}],"name":"shouldDisplayAMessage","pass":true,"statements":[{"sl":10},{"sl":15}]},"test_1234":{"methods":[{"sl":8}],"name":"shouldReturnNewDisplayObjects","pass":true,"statements":[{"sl":10}]},"test_1242":{"methods":[{"sl":8},{"sl":13}],"name":"shouldDisplayAMessageAfterListBookOperationIsExecuted","pass":true,"statements":[{"sl":10},{"sl":15}]},"test_1253":{"methods":[{"sl":8}],"name":"shouldReturnNewDisplayObjects","pass":true,"statements":[{"sl":10}]},"test_1269":{"methods":[{"sl":8},{"sl":13}],"name":"shouldDelegateDisplayingMessageToDisplayClass","pass":true,"statements":[{"sl":10},{"sl":15}]},"test_1275":{"methods":[{"sl":8}],"name":"shouldReturnNewDisplayObjects","pass":true,"statements":[{"sl":10}]},"test_1287":{"methods":[{"sl":8}],"name":"shouldReturnNewDisplayObjects","pass":true,"statements":[{"sl":10}]},"test_1294":{"methods":[{"sl":8},{"sl":13}],"name":"shouldDisplayAMessage","pass":true,"statements":[{"sl":10},{"sl":15}]},"test_131":{"methods":[{"sl":8},{"sl":13}],"name":"shouldDisplayAMessage","pass":true,"statements":[{"sl":10},{"sl":15}]},"test_1322":{"methods":[{"sl":8},{"sl":13}],"name":"shouldDelegateTakingInputToInputView","pass":true,"statements":[{"sl":10},{"sl":15}]},"test_1348":{"methods":[{"sl":8},{"sl":13}],"name":"shouldDisplayAMessage","pass":true,"statements":[{"sl":10},{"sl":15}]},"test_1375":{"methods":[{"sl":8},{"sl":13}],"name":"shouldDisplayAMessage","pass":true,"statements":[{"sl":10},{"sl":15}]},"test_1419":{"methods":[{"sl":8},{"sl":13}],"name":"shouldDelegateDisplayingMessageToDisplayClass","pass":true,"statements":[{"sl":10},{"sl":15}]},"test_1434":{"methods":[{"sl":8},{"sl":13}],"name":"shouldDelegateDisplayingMessageToDisplayClass","pass":true,"statements":[{"sl":10},{"sl":15}]},"test_1444":{"methods":[{"sl":8}],"name":"shouldReturnNewDisplayObjects","pass":true,"statements":[{"sl":10}]},"test_1448":{"methods":[{"sl":8},{"sl":13}],"name":"shouldDisplayAMessage","pass":true,"statements":[{"sl":10},{"sl":15}]},"test_1502":{"methods":[{"sl":8},{"sl":13}],"name":"shouldDisplayAMessage","pass":true,"statements":[{"sl":10},{"sl":15}]},"test_1510":{"methods":[{"sl":8}],"name":"shouldReturnNewDisplayObjects","pass":true,"statements":[{"sl":10}]},"test_1520":{"methods":[{"sl":8}],"name":"shouldReturnNewDisplayObjects","pass":true,"statements":[{"sl":10}]},"test_1522":{"methods":[{"sl":8},{"sl":13}],"name":"shouldDelegateDisplayingOfMenuToDisplayClass","pass":true,"statements":[{"sl":10},{"sl":15}]},"test_1546":{"methods":[{"sl":8}],"name":"shouldReturnNewDisplayObjects","pass":true,"statements":[{"sl":10}]},"test_1566":{"methods":[{"sl":8}],"name":"shouldReturnNewDisplayObjects","pass":true,"statements":[{"sl":10}]},"test_159":{"methods":[{"sl":8},{"sl":13}],"name":"shouldDisplayAMessage","pass":true,"statements":[{"sl":10},{"sl":15}]},"test_1616":{"methods":[{"sl":8},{"sl":13}],"name":"shouldDisplayAMessage","pass":true,"statements":[{"sl":10},{"sl":15}]},"test_1619":{"methods":[{"sl":8},{"sl":13}],"name":"shouldDisplayAMessage","pass":true,"statements":[{"sl":10},{"sl":15}]},"test_1627":{"methods":[{"sl":8}],"name":"shouldReturnNewDisplayObjects","pass":true,"statements":[{"sl":10}]},"test_1634":{"methods":[{"sl":8},{"sl":13}],"name":"shouldDelegateDisplayingMessageToDisplayClass","pass":true,"statements":[{"sl":10},{"sl":15}]},"test_1646":{"methods":[{"sl":8},{"sl":13}],"name":"shouldDelegateDisplayingMessageToDisplayClass","pass":true,"statements":[{"sl":10},{"sl":15}]},"test_1662":{"methods":[{"sl":8}],"name":"shouldReturnNewDisplayObjects","pass":true,"statements":[{"sl":10}]},"test_1717":{"methods":[{"sl":8},{"sl":13}],"name":"shouldDisplayAMessage","pass":true,"statements":[{"sl":10},{"sl":15}]},"test_1763":{"methods":[{"sl":8},{"sl":13}],"name":"shouldDelegateDisplayingMessageToDisplayClass","pass":true,"statements":[{"sl":10},{"sl":15}]},"test_1771":{"methods":[{"sl":8}],"name":"shouldReturnNewDisplayObjects","pass":true,"statements":[{"sl":10}]},"test_1780":{"methods":[{"sl":8}],"name":"shouldReturnNewDisplayObjects","pass":true,"statements":[{"sl":10}]},"test_1799":{"methods":[{"sl":8}],"name":"shouldReturnNewDisplayObjects","pass":true,"statements":[{"sl":10}]},"test_1802":{"methods":[{"sl":8}],"name":"shouldReturnNewDisplayObjects","pass":true,"statements":[{"sl":10}]},"test_1828":{"methods":[{"sl":8},{"sl":13}],"name":"shouldDisplayAMessage","pass":true,"statements":[{"sl":10},{"sl":15}]},"test_1837":{"methods":[{"sl":8},{"sl":13}],"name":"shouldDelegateDisplayingMessageToDisplayClass","pass":true,"statements":[{"sl":10},{"sl":15}]},"test_184":{"methods":[{"sl":8},{"sl":13}],"name":"shouldDisplayAMessage","pass":true,"statements":[{"sl":10},{"sl":15}]},"test_186":{"methods":[{"sl":8},{"sl":13}],"name":"shouldDisplayAMessage","pass":true,"statements":[{"sl":10},{"sl":15}]},"test_1896":{"methods":[{"sl":8}],"name":"shouldReturnNewDisplayObjects","pass":true,"statements":[{"sl":10}]},"test_1897":{"methods":[{"sl":8}],"name":"shouldReturnNewDisplayObjects","pass":true,"statements":[{"sl":10}]},"test_1898":{"methods":[{"sl":8}],"name":"shouldReturnNewDisplayObjects","pass":true,"statements":[{"sl":10}]},"test_1916":{"methods":[{"sl":8}],"name":"shouldReturnNewDisplayObjects","pass":true,"statements":[{"sl":10}]},"test_1919":{"methods":[{"sl":8},{"sl":13}],"name":"shouldDisplayAMessage","pass":true,"statements":[{"sl":10},{"sl":15}]},"test_1931":{"methods":[{"sl":8},{"sl":13}],"name":"shouldDisplayAMessage","pass":true,"statements":[{"sl":10},{"sl":15}]},"test_1947":{"methods":[{"sl":8},{"sl":13}],"name":"shouldDelegateDisplayingMessageToDisplayClass","pass":true,"statements":[{"sl":10},{"sl":15}]},"test_1958":{"methods":[{"sl":8},{"sl":13}],"name":"shouldDisplayAMessageAfterAnOperationIsExecute","pass":true,"statements":[{"sl":10},{"sl":15}]},"test_1973":{"methods":[{"sl":8}],"name":"shouldReturnNewDisplayObjects","pass":true,"statements":[{"sl":10}]},"test_1995":{"methods":[{"sl":8},{"sl":13}],"name":"shouldDisplayAMessage","pass":true,"statements":[{"sl":10},{"sl":15}]},"test_20":{"methods":[{"sl":8},{"sl":13}],"name":"shouldDisplayAMessage","pass":true,"statements":[{"sl":10},{"sl":15}]},"test_2020":{"methods":[{"sl":8}],"name":"shouldReturnNewDisplayObjects","pass":true,"statements":[{"sl":10}]},"test_2061":{"methods":[{"sl":8},{"sl":13}],"name":"shouldDisplayAMessage","pass":true,"statements":[{"sl":10},{"sl":15}]},"test_2085":{"methods":[{"sl":8},{"sl":13}],"name":"shouldDisplayAMessageAfterAnOperationIsExecuted","pass":true,"statements":[{"sl":10},{"sl":15}]},"test_2086":{"methods":[{"sl":8},{"sl":13}],"name":"shouldDelegateDisplayingMessageToDisplayClass","pass":true,"statements":[{"sl":10},{"sl":15}]},"test_2098":{"methods":[{"sl":8}],"name":"shouldReturnNewDisplayObjects","pass":true,"statements":[{"sl":10}]},"test_2146":{"methods":[{"sl":8},{"sl":13}],"name":"shouldDelegateDisplayingMessageToDisplayClass","pass":true,"statements":[{"sl":10},{"sl":15}]},"test_2150":{"methods":[{"sl":8},{"sl":13}],"name":"shouldDisplayAMessage","pass":true,"statements":[{"sl":10},{"sl":15}]},"test_2178":{"methods":[{"sl":8},{"sl":13}],"name":"shouldDelegateTakingInputToInputView","pass":true,"statements":[{"sl":10},{"sl":15}]},"test_2195":{"methods":[{"sl":8},{"sl":13}],"name":"shouldDisplayAMessage","pass":true,"statements":[{"sl":10},{"sl":15}]},"test_2215":{"methods":[{"sl":8},{"sl":13}],"name":"shouldDisplayAMessage","pass":true,"statements":[{"sl":10},{"sl":15}]},"test_2233":{"methods":[{"sl":8},{"sl":13}],"name":"shouldDisplayAMessage","pass":true,"statements":[{"sl":10},{"sl":15}]},"test_2282":{"methods":[{"sl":8},{"sl":13}],"name":"shouldDisplayAMessage","pass":true,"statements":[{"sl":10},{"sl":15}]},"test_2291":{"methods":[{"sl":8},{"sl":13}],"name":"shouldDisplayAMessage","pass":true,"statements":[{"sl":10},{"sl":15}]},"test_2305":{"methods":[{"sl":8},{"sl":13}],"name":"shouldDelegateDisplayingMessageToDisplayClass","pass":true,"statements":[{"sl":10},{"sl":15}]},"test_2307":{"methods":[{"sl":8},{"sl":13}],"name":"shouldDelegateDisplayingMessageToDisplayClass","pass":true,"statements":[{"sl":10},{"sl":15}]},"test_2308":{"methods":[{"sl":8},{"sl":13}],"name":"shouldDisplayAMessage","pass":true,"statements":[{"sl":10},{"sl":15}]},"test_2331":{"methods":[{"sl":8},{"sl":13}],"name":"shouldDisplayAMessage","pass":true,"statements":[{"sl":10},{"sl":15}]},"test_2369":{"methods":[{"sl":8},{"sl":13}],"name":"shouldDisplayAMessage","pass":true,"statements":[{"sl":10},{"sl":15}]},"test_2370":{"methods":[{"sl":8}],"name":"shouldReturnNewDisplayObjects","pass":true,"statements":[{"sl":10}]},"test_2374":{"methods":[{"sl":8},{"sl":13}],"name":"shouldDelegateDisplayingMessageToDisplayClass","pass":true,"statements":[{"sl":10},{"sl":15}]},"test_262":{"methods":[{"sl":8},{"sl":13}],"name":"shouldDisplayAMessage","pass":true,"statements":[{"sl":10},{"sl":15}]},"test_291":{"methods":[{"sl":8},{"sl":13}],"name":"shouldDelegateDisplayingMessageToDisplayClass","pass":true,"statements":[{"sl":10},{"sl":15}]},"test_295":{"methods":[{"sl":8}],"name":"shouldReturnNewDisplayObjects","pass":true,"statements":[{"sl":10}]},"test_333":{"methods":[{"sl":8},{"sl":13}],"name":"shouldDelegateDisplayingOfMenuToDisplayClass","pass":true,"statements":[{"sl":10},{"sl":15}]},"test_342":{"methods":[{"sl":8}],"name":"shouldReturnNewDisplayObjects","pass":true,"statements":[{"sl":10}]},"test_360":{"methods":[{"sl":8}],"name":"shouldReturnNewDisplayObjects","pass":true,"statements":[{"sl":10}]},"test_406":{"methods":[{"sl":8}],"name":"shouldReturnNewDisplayObjects","pass":true,"statements":[{"sl":10}]},"test_467":{"methods":[{"sl":8}],"name":"shouldReturnNewDisplayObjects","pass":true,"statements":[{"sl":10}]},"test_477":{"methods":[{"sl":8},{"sl":13}],"name":"shouldDisplayAMessage","pass":true,"statements":[{"sl":10},{"sl":15}]},"test_488":{"methods":[{"sl":8},{"sl":13}],"name":"shouldDelegateDisplayingMessageToDisplayClass","pass":true,"statements":[{"sl":10},{"sl":15}]},"test_494":{"methods":[{"sl":8},{"sl":13}],"name":"shouldDisplayAMessage","pass":true,"statements":[{"sl":10},{"sl":15}]},"test_526":{"methods":[{"sl":8},{"sl":13}],"name":"shouldDisplayAMessage","pass":true,"statements":[{"sl":10},{"sl":15}]},"test_549":{"methods":[{"sl":8}],"name":"shouldReturnNewDisplayObjects","pass":true,"statements":[{"sl":10}]},"test_580":{"methods":[{"sl":8}],"name":"shouldReturnNewDisplayObjects","pass":true,"statements":[{"sl":10}]},"test_601":{"methods":[{"sl":8}],"name":"shouldReturnNewDisplayObjects","pass":true,"statements":[{"sl":10}]},"test_608":{"methods":[{"sl":8}],"name":"shouldReturnNewDisplayObjects","pass":true,"statements":[{"sl":10}]},"test_644":{"methods":[{"sl":8},{"sl":13}],"name":"shouldDisplayAMessage","pass":true,"statements":[{"sl":10},{"sl":15}]},"test_645":{"methods":[{"sl":8},{"sl":13}],"name":"shouldDisplayAMessage","pass":true,"statements":[{"sl":10},{"sl":15}]},"test_658":{"methods":[{"sl":8},{"sl":13}],"name":"shouldDelegateDisplayingMessageToDisplayClass","pass":true,"statements":[{"sl":10},{"sl":15}]},"test_683":{"methods":[{"sl":8}],"name":"shouldReturnNewDisplayObjects","pass":true,"statements":[{"sl":10}]},"test_688":{"methods":[{"sl":8},{"sl":13}],"name":"shouldDisplayAMessageAfterListBookOperationIsExecuted","pass":true,"statements":[{"sl":10},{"sl":15}]},"test_708":{"methods":[{"sl":8},{"sl":13}],"name":"shouldDisplayAMessage","pass":true,"statements":[{"sl":10},{"sl":15}]},"test_716":{"methods":[{"sl":8},{"sl":13}],"name":"shouldDisplayAMessage","pass":true,"statements":[{"sl":10},{"sl":15}]},"test_745":{"methods":[{"sl":8}],"name":"shouldReturnNewDisplayObjects","pass":true,"statements":[{"sl":10}]},"test_789":{"methods":[{"sl":8},{"sl":13}],"name":"shouldDisplayAMessage","pass":true,"statements":[{"sl":10},{"sl":15}]},"test_794":{"methods":[{"sl":8},{"sl":13}],"name":"shouldDelegateDisplayingMessageToDisplayClass","pass":true,"statements":[{"sl":10},{"sl":15}]},"test_809":{"methods":[{"sl":8},{"sl":13}],"name":"shouldDisplayAMessage","pass":true,"statements":[{"sl":10},{"sl":15}]},"test_831":{"methods":[{"sl":8}],"name":"shouldReturnNewDisplayObjects","pass":true,"statements":[{"sl":10}]},"test_836":{"methods":[{"sl":8}],"name":"shouldReturnNewDisplayObjects","pass":true,"statements":[{"sl":10}]},"test_840":{"methods":[{"sl":8},{"sl":13}],"name":"shouldDelegateDisplayingMessageToDisplayClass","pass":true,"statements":[{"sl":10},{"sl":15}]},"test_843":{"methods":[{"sl":8}],"name":"shouldReturnNewDisplayObjects","pass":true,"statements":[{"sl":10}]},"test_91":{"methods":[{"sl":8},{"sl":13}],"name":"shouldDisplayAMessage","pass":true,"statements":[{"sl":10},{"sl":15}]},"test_938":{"methods":[{"sl":8},{"sl":13}],"name":"shouldDisplayAMessage","pass":true,"statements":[{"sl":10},{"sl":15}]},"test_954":{"methods":[{"sl":8},{"sl":13}],"name":"shouldDelegateDisplayingMessageToDisplayClass","pass":true,"statements":[{"sl":10},{"sl":15}]},"test_958":{"methods":[{"sl":8}],"name":"shouldReturnNewDisplayObjects","pass":true,"statements":[{"sl":10}]},"test_967":{"methods":[{"sl":8}],"name":"shouldReturnNewDisplayObjects","pass":true,"statements":[{"sl":10}]},"test_98":{"methods":[{"sl":8}],"name":"shouldReturnNewDisplayObjects","pass":true,"statements":[{"sl":10}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [1444, 658, 1087, 601, 1375, 1269, 1916, 1763, 2086, 1502, 98, 2215, 2195, 262, 1040, 1837, 938, 1931, 2146, 1634, 1619, 1242, 1947, 1958, 794, 2370, 477, 91, 333, 1646, 1717, 1188, 2061, 1799, 1896, 467, 1616, 342, 843, 1627, 2085, 488, 840, 2233, 1897, 716, 1995, 954, 186, 645, 2307, 1828, 2369, 1171, 1253, 2331, 688, 1546, 0, 1662, 1234, 831, 494, 1780, 1287, 1031, 836, 1522, 2291, 809, 683, 360, 2150, 184, 20, 1434, 745, 1566, 1802, 526, 1079, 1026, 1032, 967, 295, 2308, 1095, 1037, 1771, 1448, 291, 1520, 1919, 103, 1348, 1419, 1898, 1510, 2305, 1294, 1973, 1322, 958, 1275, 131, 2374, 2178, 708, 2282, 644, 580, 608, 789, 1229, 406, 549, 2020, 159, 2098], [], [1444, 658, 1087, 601, 1375, 1269, 1916, 1763, 2086, 1502, 98, 2215, 2195, 262, 1040, 1837, 938, 1931, 2146, 1634, 1619, 1242, 1947, 1958, 794, 2370, 477, 91, 333, 1646, 1717, 1188, 2061, 1799, 1896, 467, 1616, 342, 843, 1627, 2085, 488, 840, 2233, 1897, 716, 1995, 954, 186, 645, 2307, 1828, 2369, 1171, 1253, 2331, 688, 1546, 0, 1662, 1234, 831, 494, 1780, 1287, 1031, 836, 1522, 2291, 809, 683, 360, 2150, 184, 20, 1434, 745, 1566, 1802, 526, 1079, 1026, 1032, 967, 295, 2308, 1095, 1037, 1771, 1448, 291, 1520, 1919, 103, 1348, 1419, 1898, 1510, 2305, 1294, 1973, 1322, 958, 1275, 131, 2374, 2178, 708, 2282, 644, 580, 608, 789, 1229, 406, 549, 2020, 159, 2098], [], [], [658, 1087, 1375, 1269, 1763, 2086, 1502, 2215, 2195, 262, 1040, 1837, 938, 1931, 2146, 1634, 1619, 1242, 1947, 1958, 794, 477, 91, 333, 1646, 1717, 1188, 2061, 1616, 2085, 488, 840, 2233, 716, 1995, 954, 186, 645, 2307, 1828, 2369, 2331, 688, 0, 494, 1031, 1522, 2291, 809, 2150, 184, 20, 1434, 526, 1032, 2308, 1095, 1037, 1448, 291, 1919, 1348, 1419, 2305, 1294, 1322, 131, 2374, 2178, 708, 2282, 644, 789, 1229, 159], [], [658, 1087, 1375, 1269, 1763, 2086, 1502, 2215, 2195, 262, 1040, 1837, 938, 1931, 2146, 1634, 1619, 1242, 1947, 1958, 794, 477, 91, 333, 1646, 1717, 1188, 2061, 1616, 2085, 488, 840, 2233, 716, 1995, 954, 186, 645, 2307, 1828, 2369, 2331, 688, 0, 494, 1031, 1522, 2291, 809, 2150, 184, 20, 1434, 526, 1032, 2308, 1095, 1037, 1448, 291, 1919, 1348, 1419, 2305, 1294, 1322, 131, 2374, 2178, 708, 2282, 644, 789, 1229, 159], [], []]
