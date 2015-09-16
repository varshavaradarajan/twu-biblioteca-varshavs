var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":78,"id":1761,"methods":[{"el":14,"sc":5,"sl":9},{"el":22,"sc":5,"sl":16},{"el":30,"sc":5,"sl":24},{"el":37,"sc":5,"sl":32},{"el":45,"sc":5,"sl":39},{"el":54,"sc":5,"sl":47},{"el":62,"sc":5,"sl":56},{"el":69,"sc":5,"sl":64},{"el":77,"sc":5,"sl":71}],"name":"BookTest","sl":7}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_1009":{"methods":[{"sl":16}],"name":"shouldReturnTrueIfBookExists","pass":true,"statements":[{"sl":18},{"sl":19},{"sl":21}]},"test_1016":{"methods":[{"sl":24}],"name":"shouldBeEqualToAnotherBookObjectIsOfTheTypeBook","pass":true,"statements":[{"sl":26},{"sl":27},{"sl":29}]},"test_1047":{"methods":[{"sl":56}],"name":"shouldNotBeEqualToABookWithAnotherName","pass":true,"statements":[{"sl":58},{"sl":59},{"sl":61}]},"test_1074":{"methods":[{"sl":16}],"name":"shouldReturnTrueIfBookExists","pass":true,"statements":[{"sl":18},{"sl":19},{"sl":21}]},"test_1125":{"methods":[{"sl":47}],"name":"shouldNotBeEqualToAnotherObjectType","pass":true,"statements":[{"sl":49},{"sl":50},{"sl":51},{"sl":53}]},"test_113":{"methods":[{"sl":47}],"name":"shouldNotBeEqualToAnotherObjectType","pass":true,"statements":[{"sl":49},{"sl":50},{"sl":51},{"sl":53}]},"test_1167":{"methods":[{"sl":16}],"name":"shouldReturnTrueIfBookExists","pass":true,"statements":[{"sl":18},{"sl":19},{"sl":21}]},"test_1181":{"methods":[{"sl":16}],"name":"shouldReturnTrueIfBookExists","pass":true,"statements":[{"sl":18},{"sl":19},{"sl":21}]},"test_1190":{"methods":[{"sl":56}],"name":"shouldNotBeEqualToABookWithAnotherName","pass":true,"statements":[{"sl":58},{"sl":59},{"sl":61}]},"test_1201":{"methods":[{"sl":56}],"name":"shouldNotBeEqualToABookWithAnotherName","pass":true,"statements":[{"sl":58},{"sl":59},{"sl":61}]},"test_1215":{"methods":[{"sl":9}],"name":"shouldReturnBookDetails","pass":true,"statements":[{"sl":11},{"sl":13}]},"test_1220":{"methods":[{"sl":71}],"name":"shouldHaveDifferentHashCodeForDifferentObjects","pass":true,"statements":[{"sl":73},{"sl":74},{"sl":76}]},"test_123":{"methods":[{"sl":39}],"name":"shouldBeEqualToAnotherBookIfBookNamesAreEqual","pass":true,"statements":[{"sl":41},{"sl":42},{"sl":44}]},"test_1232":{"methods":[{"sl":56}],"name":"shouldNotBeEqualToABookWithAnotherName","pass":true,"statements":[{"sl":58},{"sl":59},{"sl":61}]},"test_1282":{"methods":[{"sl":24}],"name":"shouldBeEqualToAnotherBookObjectIsOfTheTypeBook","pass":true,"statements":[{"sl":26},{"sl":27},{"sl":29}]},"test_1297":{"methods":[{"sl":64}],"name":"shouldHaveSameHashCodeForSameObject","pass":true,"statements":[{"sl":66},{"sl":68}]},"test_1302":{"methods":[{"sl":47}],"name":"shouldNotBeEqualToAnotherObjectType","pass":true,"statements":[{"sl":49},{"sl":50},{"sl":51},{"sl":53}]},"test_1333":{"methods":[{"sl":56}],"name":"shouldNotBeEqualToABookWithAnotherName","pass":true,"statements":[{"sl":58},{"sl":59},{"sl":61}]},"test_1334":{"methods":[{"sl":32}],"name":"shouldBeEqualToItself","pass":true,"statements":[{"sl":34},{"sl":36}]},"test_1354":{"methods":[{"sl":16}],"name":"shouldReturnTrueIfBookExists","pass":true,"statements":[{"sl":18},{"sl":19},{"sl":21}]},"test_1363":{"methods":[{"sl":9}],"name":"shouldReturnBookDetails","pass":true,"statements":[{"sl":11},{"sl":13}]},"test_1393":{"methods":[{"sl":64}],"name":"shouldHaveSameHashCodeForSameObject","pass":true,"statements":[{"sl":66},{"sl":68}]},"test_1454":{"methods":[{"sl":47}],"name":"shouldNotBeEqualToAnotherObjectType","pass":true,"statements":[{"sl":49},{"sl":50},{"sl":51},{"sl":53}]},"test_1470":{"methods":[{"sl":24}],"name":"shouldBeEqualToAnotherBookObjectIsOfTheTypeBook","pass":true,"statements":[{"sl":26},{"sl":27},{"sl":29}]},"test_1495":{"methods":[{"sl":24}],"name":"shouldBeEqualToAnotherBookObjectIsOfTheTypeBook","pass":true,"statements":[{"sl":26},{"sl":27},{"sl":29}]},"test_1498":{"methods":[{"sl":56}],"name":"shouldNotBeEqualToABookWithAnotherName","pass":true,"statements":[{"sl":58},{"sl":59},{"sl":61}]},"test_150":{"methods":[{"sl":24}],"name":"shouldBeEqualToAnotherBookObjectIsOfTheTypeBook","pass":true,"statements":[{"sl":26},{"sl":27},{"sl":29}]},"test_1505":{"methods":[{"sl":24}],"name":"shouldBeEqualToAnotherBookObjectIsOfTheTypeBook","pass":true,"statements":[{"sl":26},{"sl":27},{"sl":29}]},"test_1545":{"methods":[{"sl":71}],"name":"shouldHaveDifferentHashCodeForDifferentObjects","pass":true,"statements":[{"sl":73},{"sl":74},{"sl":76}]},"test_1588":{"methods":[{"sl":39}],"name":"shouldBeEqualToAnotherBookIfBookNamesAreEqual","pass":true,"statements":[{"sl":41},{"sl":42},{"sl":44}]},"test_1605":{"methods":[{"sl":64}],"name":"shouldHaveSameHashCodeForSameObject","pass":true,"statements":[{"sl":66},{"sl":68}]},"test_1607":{"methods":[{"sl":47}],"name":"shouldNotBeEqualToAnotherObjectType","pass":true,"statements":[{"sl":49},{"sl":50},{"sl":51},{"sl":53}]},"test_1619":{"methods":[{"sl":71}],"name":"shouldHaveDifferentHashCodeForDifferentObjects","pass":true,"statements":[{"sl":73},{"sl":74},{"sl":76}]},"test_1642":{"methods":[{"sl":64}],"name":"shouldHaveSameHashCodeForSameObject","pass":true,"statements":[{"sl":66},{"sl":68}]},"test_1645":{"methods":[{"sl":9}],"name":"shouldReturnBookDetails","pass":true,"statements":[{"sl":11},{"sl":13}]},"test_1658":{"methods":[{"sl":71}],"name":"shouldHaveDifferentHashCodeForDifferentObjects","pass":true,"statements":[{"sl":73},{"sl":74},{"sl":76}]},"test_1663":{"methods":[{"sl":32}],"name":"shouldBeEqualToItself","pass":true,"statements":[{"sl":34},{"sl":36}]},"test_1689":{"methods":[{"sl":64}],"name":"shouldHaveSameHashCodeForSameObject","pass":true,"statements":[{"sl":66},{"sl":68}]},"test_1718":{"methods":[{"sl":64}],"name":"shouldHaveSameHashCodeForSameObject","pass":true,"statements":[{"sl":66},{"sl":68}]},"test_1719":{"methods":[{"sl":16}],"name":"shouldReturnTrueIfBookExists","pass":true,"statements":[{"sl":18},{"sl":19},{"sl":21}]},"test_1720":{"methods":[{"sl":64}],"name":"shouldHaveSameHashCodeForSameObject","pass":true,"statements":[{"sl":66},{"sl":68}]},"test_1724":{"methods":[{"sl":56}],"name":"shouldNotBeEqualToABookWithAnotherName","pass":true,"statements":[{"sl":58},{"sl":59},{"sl":61}]},"test_1736":{"methods":[{"sl":32}],"name":"shouldBeEqualToItself","pass":true,"statements":[{"sl":34},{"sl":36}]},"test_1740":{"methods":[{"sl":64}],"name":"shouldHaveSameHashCodeForSameObject","pass":true,"statements":[{"sl":66},{"sl":68}]},"test_1746":{"methods":[{"sl":47}],"name":"shouldNotBeEqualToAnotherObjectType","pass":true,"statements":[{"sl":49},{"sl":50},{"sl":51},{"sl":53}]},"test_1756":{"methods":[{"sl":64}],"name":"shouldHaveSameHashCodeForSameObject","pass":true,"statements":[{"sl":66},{"sl":68}]},"test_1766":{"methods":[{"sl":47}],"name":"shouldNotBeEqualToAnotherObjectType","pass":true,"statements":[{"sl":49},{"sl":50},{"sl":51},{"sl":53}]},"test_1771":{"methods":[{"sl":47}],"name":"shouldNotBeEqualToAnotherObjectType","pass":true,"statements":[{"sl":49},{"sl":50},{"sl":51},{"sl":53}]},"test_1775":{"methods":[{"sl":16}],"name":"shouldReturnTrueIfBookExists","pass":true,"statements":[{"sl":18},{"sl":19},{"sl":21}]},"test_178":{"methods":[{"sl":9}],"name":"shouldReturnBookDetails","pass":true,"statements":[{"sl":11},{"sl":13}]},"test_199":{"methods":[{"sl":32}],"name":"shouldBeEqualToItself","pass":true,"statements":[{"sl":34},{"sl":36}]},"test_207":{"methods":[{"sl":64}],"name":"shouldHaveSameHashCodeForSameObject","pass":true,"statements":[{"sl":66},{"sl":68}]},"test_230":{"methods":[{"sl":24}],"name":"shouldBeEqualToAnotherBookObjectIsOfTheTypeBook","pass":true,"statements":[{"sl":26},{"sl":27},{"sl":29}]},"test_234":{"methods":[{"sl":71}],"name":"shouldHaveDifferentHashCodeForDifferentObjects","pass":true,"statements":[{"sl":73},{"sl":74},{"sl":76}]},"test_260":{"methods":[{"sl":16}],"name":"shouldReturnTrueIfBookExists","pass":true,"statements":[{"sl":18},{"sl":19},{"sl":21}]},"test_301":{"methods":[{"sl":24}],"name":"shouldBeEqualToAnotherBookObjectIsOfTheTypeBook","pass":true,"statements":[{"sl":26},{"sl":27},{"sl":29}]},"test_307":{"methods":[{"sl":32}],"name":"shouldBeEqualToItself","pass":true,"statements":[{"sl":34},{"sl":36}]},"test_318":{"methods":[{"sl":9}],"name":"shouldReturnBookDetails","pass":true,"statements":[{"sl":11},{"sl":13}]},"test_328":{"methods":[{"sl":9}],"name":"shouldReturnBookDetails","pass":true,"statements":[{"sl":11},{"sl":13}]},"test_34":{"methods":[{"sl":56}],"name":"shouldNotBeEqualToABookWithAnotherName","pass":true,"statements":[{"sl":58},{"sl":59},{"sl":61}]},"test_343":{"methods":[{"sl":64}],"name":"shouldHaveSameHashCodeForSameObject","pass":true,"statements":[{"sl":66},{"sl":68}]},"test_354":{"methods":[{"sl":71}],"name":"shouldHaveDifferentHashCodeForDifferentObjects","pass":true,"statements":[{"sl":73},{"sl":74},{"sl":76}]},"test_358":{"methods":[{"sl":56}],"name":"shouldNotBeEqualToABookWithAnotherName","pass":true,"statements":[{"sl":58},{"sl":59},{"sl":61}]},"test_382":{"methods":[{"sl":71}],"name":"shouldHaveDifferentHashCodeForDifferentObjects","pass":true,"statements":[{"sl":73},{"sl":74},{"sl":76}]},"test_393":{"methods":[{"sl":24}],"name":"shouldBeEqualToAnotherBookObjectIsOfTheTypeBook","pass":true,"statements":[{"sl":26},{"sl":27},{"sl":29}]},"test_417":{"methods":[{"sl":32}],"name":"shouldBeEqualToItself","pass":true,"statements":[{"sl":34},{"sl":36}]},"test_482":{"methods":[{"sl":71}],"name":"shouldHaveDifferentHashCodeForDifferentObjects","pass":true,"statements":[{"sl":73},{"sl":74},{"sl":76}]},"test_489":{"methods":[{"sl":71}],"name":"shouldHaveDifferentHashCodeForDifferentObjects","pass":true,"statements":[{"sl":73},{"sl":74},{"sl":76}]},"test_511":{"methods":[{"sl":16}],"name":"shouldReturnTrueIfBookExists","pass":true,"statements":[{"sl":18},{"sl":19},{"sl":21}]},"test_512":{"methods":[{"sl":9}],"name":"shouldReturnBookDetails","pass":true,"statements":[{"sl":11},{"sl":13}]},"test_515":{"methods":[{"sl":39}],"name":"shouldBeEqualToAnotherBookIfBookNamesAreEqual","pass":true,"statements":[{"sl":41},{"sl":42},{"sl":44}]},"test_528":{"methods":[{"sl":39}],"name":"shouldBeEqualToAnotherBookIfBookNamesAreEqual","pass":true,"statements":[{"sl":41},{"sl":42},{"sl":44}]},"test_530":{"methods":[{"sl":32}],"name":"shouldBeEqualToItself","pass":true,"statements":[{"sl":34},{"sl":36}]},"test_532":{"methods":[{"sl":39}],"name":"shouldBeEqualToAnotherBookIfBookNamesAreEqual","pass":true,"statements":[{"sl":41},{"sl":42},{"sl":44}]},"test_553":{"methods":[{"sl":32}],"name":"shouldBeEqualToItself","pass":true,"statements":[{"sl":34},{"sl":36}]},"test_557":{"methods":[{"sl":24}],"name":"shouldBeEqualToAnotherBookObjectIsOfTheTypeBook","pass":true,"statements":[{"sl":26},{"sl":27},{"sl":29}]},"test_563":{"methods":[{"sl":47}],"name":"shouldNotBeEqualToAnotherObjectType","pass":true,"statements":[{"sl":49},{"sl":50},{"sl":51},{"sl":53}]},"test_575":{"methods":[{"sl":47}],"name":"shouldNotBeEqualToAnotherObjectType","pass":true,"statements":[{"sl":49},{"sl":50},{"sl":51},{"sl":53}]},"test_576":{"methods":[{"sl":39}],"name":"shouldBeEqualToAnotherBookIfBookNamesAreEqual","pass":true,"statements":[{"sl":41},{"sl":42},{"sl":44}]},"test_581":{"methods":[{"sl":39}],"name":"shouldBeEqualToAnotherBookIfBookNamesAreEqual","pass":true,"statements":[{"sl":41},{"sl":42},{"sl":44}]},"test_583":{"methods":[{"sl":56}],"name":"shouldNotBeEqualToABookWithAnotherName","pass":true,"statements":[{"sl":58},{"sl":59},{"sl":61}]},"test_63":{"methods":[{"sl":71}],"name":"shouldHaveDifferentHashCodeForDifferentObjects","pass":true,"statements":[{"sl":73},{"sl":74},{"sl":76}]},"test_638":{"methods":[{"sl":39}],"name":"shouldBeEqualToAnotherBookIfBookNamesAreEqual","pass":true,"statements":[{"sl":41},{"sl":42},{"sl":44}]},"test_651":{"methods":[{"sl":9}],"name":"shouldReturnBookDetails","pass":true,"statements":[{"sl":11},{"sl":13}]},"test_660":{"methods":[{"sl":47}],"name":"shouldNotBeEqualToAnotherObjectType","pass":true,"statements":[{"sl":49},{"sl":50},{"sl":51},{"sl":53}]},"test_683":{"methods":[{"sl":32}],"name":"shouldBeEqualToItself","pass":true,"statements":[{"sl":34},{"sl":36}]},"test_69":{"methods":[{"sl":16}],"name":"shouldReturnTrueIfBookExists","pass":true,"statements":[{"sl":18},{"sl":19},{"sl":21}]},"test_698":{"methods":[{"sl":9}],"name":"shouldReturnBookDetails","pass":true,"statements":[{"sl":11},{"sl":13}]},"test_704":{"methods":[{"sl":39}],"name":"shouldBeEqualToAnotherBookIfBookNamesAreEqual","pass":true,"statements":[{"sl":41},{"sl":42},{"sl":44}]},"test_711":{"methods":[{"sl":39}],"name":"shouldBeEqualToAnotherBookIfBookNamesAreEqual","pass":true,"statements":[{"sl":41},{"sl":42},{"sl":44}]},"test_730":{"methods":[{"sl":16}],"name":"shouldReturnTrueIfBookExists","pass":true,"statements":[{"sl":18},{"sl":19},{"sl":21}]},"test_741":{"methods":[{"sl":32}],"name":"shouldBeEqualToItself","pass":true,"statements":[{"sl":34},{"sl":36}]},"test_746":{"methods":[{"sl":47}],"name":"shouldNotBeEqualToAnotherObjectType","pass":true,"statements":[{"sl":49},{"sl":50},{"sl":51},{"sl":53}]},"test_751":{"methods":[{"sl":32}],"name":"shouldBeEqualToItself","pass":true,"statements":[{"sl":34},{"sl":36}]},"test_753":{"methods":[{"sl":56}],"name":"shouldNotBeEqualToABookWithAnotherName","pass":true,"statements":[{"sl":58},{"sl":59},{"sl":61}]},"test_759":{"methods":[{"sl":71}],"name":"shouldHaveDifferentHashCodeForDifferentObjects","pass":true,"statements":[{"sl":73},{"sl":74},{"sl":76}]},"test_766":{"methods":[{"sl":16}],"name":"shouldReturnTrueIfBookExists","pass":true,"statements":[{"sl":18},{"sl":19},{"sl":21}]},"test_78":{"methods":[{"sl":71}],"name":"shouldHaveDifferentHashCodeForDifferentObjects","pass":true,"statements":[{"sl":73},{"sl":74},{"sl":76}]},"test_787":{"methods":[{"sl":32}],"name":"shouldBeEqualToItself","pass":true,"statements":[{"sl":34},{"sl":36}]},"test_8":{"methods":[{"sl":9}],"name":"shouldReturnBookDetails","pass":true,"statements":[{"sl":11},{"sl":13}]},"test_804":{"methods":[{"sl":56}],"name":"shouldNotBeEqualToABookWithAnotherName","pass":true,"statements":[{"sl":58},{"sl":59},{"sl":61}]},"test_826":{"methods":[{"sl":64}],"name":"shouldHaveSameHashCodeForSameObject","pass":true,"statements":[{"sl":66},{"sl":68}]},"test_843":{"methods":[{"sl":24}],"name":"shouldBeEqualToAnotherBookObjectIsOfTheTypeBook","pass":true,"statements":[{"sl":26},{"sl":27},{"sl":29}]},"test_844":{"methods":[{"sl":9}],"name":"shouldReturnBookDetails","pass":true,"statements":[{"sl":11},{"sl":13}]},"test_85":{"methods":[{"sl":47}],"name":"shouldNotBeEqualToAnotherObjectType","pass":true,"statements":[{"sl":49},{"sl":50},{"sl":51},{"sl":53}]},"test_864":{"methods":[{"sl":39}],"name":"shouldBeEqualToAnotherBookIfBookNamesAreEqual","pass":true,"statements":[{"sl":41},{"sl":42},{"sl":44}]},"test_866":{"methods":[{"sl":64}],"name":"shouldHaveSameHashCodeForSameObject","pass":true,"statements":[{"sl":66},{"sl":68}]},"test_876":{"methods":[{"sl":9}],"name":"shouldReturnBookDetails","pass":true,"statements":[{"sl":11},{"sl":13}]},"test_878":{"methods":[{"sl":32}],"name":"shouldBeEqualToItself","pass":true,"statements":[{"sl":34},{"sl":36}]},"test_899":{"methods":[{"sl":71}],"name":"shouldHaveDifferentHashCodeForDifferentObjects","pass":true,"statements":[{"sl":73},{"sl":74},{"sl":76}]},"test_91":{"methods":[{"sl":39}],"name":"shouldBeEqualToAnotherBookIfBookNamesAreEqual","pass":true,"statements":[{"sl":41},{"sl":42},{"sl":44}]},"test_943":{"methods":[{"sl":9}],"name":"shouldReturnBookDetails","pass":true,"statements":[{"sl":11},{"sl":13}]},"test_954":{"methods":[{"sl":16}],"name":"shouldReturnTrueIfBookExists","pass":true,"statements":[{"sl":18},{"sl":19},{"sl":21}]},"test_97":{"methods":[{"sl":24}],"name":"shouldBeEqualToAnotherBookObjectIsOfTheTypeBook","pass":true,"statements":[{"sl":26},{"sl":27},{"sl":29}]},"test_974":{"methods":[{"sl":24}],"name":"shouldBeEqualToAnotherBookObjectIsOfTheTypeBook","pass":true,"statements":[{"sl":26},{"sl":27},{"sl":29}]},"test_979":{"methods":[{"sl":39}],"name":"shouldBeEqualToAnotherBookIfBookNamesAreEqual","pass":true,"statements":[{"sl":41},{"sl":42},{"sl":44}]},"test_983":{"methods":[{"sl":56}],"name":"shouldNotBeEqualToABookWithAnotherName","pass":true,"statements":[{"sl":58},{"sl":59},{"sl":61}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [512, 318, 651, 8, 943, 876, 1645, 1363, 178, 328, 844, 1215, 698], [], [512, 318, 651, 8, 943, 876, 1645, 1363, 178, 328, 844, 1215, 698], [], [512, 318, 651, 8, 943, 876, 1645, 1363, 178, 328, 844, 1215, 698], [], [], [1167, 954, 1074, 69, 1719, 766, 730, 511, 1009, 1354, 1181, 260, 1775], [], [1167, 954, 1074, 69, 1719, 766, 730, 511, 1009, 1354, 1181, 260, 1775], [1167, 954, 1074, 69, 1719, 766, 730, 511, 1009, 1354, 1181, 260, 1775], [], [1167, 954, 1074, 69, 1719, 766, 730, 511, 1009, 1354, 1181, 260, 1775], [], [], [1470, 557, 150, 974, 1495, 1282, 1505, 301, 843, 230, 97, 393, 1016], [], [1470, 557, 150, 974, 1495, 1282, 1505, 301, 843, 230, 97, 393, 1016], [1470, 557, 150, 974, 1495, 1282, 1505, 301, 843, 230, 97, 393, 1016], [], [1470, 557, 150, 974, 1495, 1282, 1505, 301, 843, 230, 97, 393, 1016], [], [], [199, 787, 553, 307, 1334, 1663, 1736, 878, 530, 683, 751, 741, 417], [], [199, 787, 553, 307, 1334, 1663, 1736, 878, 530, 683, 751, 741, 417], [], [199, 787, 553, 307, 1334, 1663, 1736, 878, 530, 683, 751, 741, 417], [], [], [1588, 532, 581, 864, 515, 704, 711, 528, 576, 979, 91, 123, 638], [], [1588, 532, 581, 864, 515, 704, 711, 528, 576, 979, 91, 123, 638], [1588, 532, 581, 864, 515, 704, 711, 528, 576, 979, 91, 123, 638], [], [1588, 532, 581, 864, 515, 704, 711, 528, 576, 979, 91, 123, 638], [], [], [85, 1454, 563, 1125, 1766, 1771, 1302, 113, 746, 660, 575, 1746, 1607], [], [85, 1454, 563, 1125, 1766, 1771, 1302, 113, 746, 660, 575, 1746, 1607], [85, 1454, 563, 1125, 1766, 1771, 1302, 113, 746, 660, 575, 1746, 1607], [85, 1454, 563, 1125, 1766, 1771, 1302, 113, 746, 660, 575, 1746, 1607], [], [85, 1454, 563, 1125, 1766, 1771, 1302, 113, 746, 660, 575, 1746, 1607], [], [], [34, 1498, 753, 804, 983, 1724, 358, 583, 1190, 1047, 1232, 1333, 1201], [], [34, 1498, 753, 804, 983, 1724, 358, 583, 1190, 1047, 1232, 1333, 1201], [34, 1498, 753, 804, 983, 1724, 358, 583, 1190, 1047, 1232, 1333, 1201], [], [34, 1498, 753, 804, 983, 1724, 358, 583, 1190, 1047, 1232, 1333, 1201], [], [], [1720, 343, 1756, 1740, 1718, 826, 1642, 1393, 207, 1689, 1297, 866, 1605], [], [1720, 343, 1756, 1740, 1718, 826, 1642, 1393, 207, 1689, 1297, 866, 1605], [], [1720, 343, 1756, 1740, 1718, 826, 1642, 1393, 207, 1689, 1297, 866, 1605], [], [], [1658, 1619, 1220, 78, 1545, 234, 899, 354, 759, 382, 482, 489, 63], [], [1658, 1619, 1220, 78, 1545, 234, 899, 354, 759, 382, 482, 489, 63], [1658, 1619, 1220, 78, 1545, 234, 899, 354, 759, 382, 482, 489, 63], [], [1658, 1619, 1220, 78, 1545, 234, 899, 354, 759, 382, 482, 489, 63], [], []]
