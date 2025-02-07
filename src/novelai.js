// Ban bracket generation, plus defaults
const euterpeBadWordsList = [
    [8162], [17202], [8162], [17202], [8162], [17202], [8162], [17202], [8162], [17202], [46256, 224], [2343, 223, 224],
    [46256, 224], [2343, 223, 224], [46256, 224], [2343, 223, 224], [46256, 224], [2343, 223, 224], [46256, 224],
    [2343, 223, 224], [58], [60], [90], [92], [685], [1391], [1782], [2361], [3693], [4083], [4357], [4895], [5512],
    [5974], [7131], [8183], [8351], [8762], [8964], [8973], [9063], [11208], [11709], [11907], [11919], [12878], [12962],
    [13018], [13412], [14631], [14692], [14980], [15090], [15437], [16151], [16410], [16589], [17241], [17414], [17635],
    [17816], [17912], [18083], [18161], [18477], [19629], [19779], [19953], [20520], [20598], [20662], [20740], [21476],
    [21737], [22133], [22241], [22345], [22935], [23330], [23785], [23834], [23884], [25295], [25597], [25719], [25787],
    [25915], [26076], [26358], [26398], [26894], [26933], [27007], [27422], [28013], [29164], [29225], [29342], [29565],
    [29795], [30072], [30109], [30138], [30866], [31161], [31478], [32092], [32239], [32509], [33116], [33250], [33761],
    [34171], [34758], [34949], [35944], [36338], [36463], [36563], [36786], [36796], [36937], [37250], [37913], [37981],
    [38165], [38362], [38381], [38430], [38892], [39850], [39893], [41832], [41888], [42535], [42669], [42785], [42924],
    [43839], [44438], [44587], [44926], [45144], [45297], [46110], [46570], [46581], [46956], [47175], [47182], [47527],
    [47715], [48600], [48683], [48688], [48874], [48999], [49074], [49082], [49146], [49946], [10221], [4841], [1427],
    [2602, 834], [29343], [37405], [35780], [2602], [50256],
]

// Ban bracket generation, plus defaults
const krakeBadWordsList = [
    [9264], [14244], [9264], [14244], [9264], [14244], [9264], [14244], [9264], [14244], [25086, 213], [27344, 213],
    [25086, 213], [27344, 213], [25086, 213], [27344, 213], [25086, 213], [27344, 213], [25086, 213], [27344, 213], [60],
    [62], [544], [683], [696], [880], [905], [1008], [1019], [1084], [1092], [1181], [1184], [1254], [1447], [1570], [1656],
    [2194], [2470], [2479], [2498], [2947], [3138], [3291], [3455], [3725], [3851], [3891], [3921], [3951], [4207], [4299],
    [4622], [4681], [5013], [5032], [5180], [5218], [5290], [5413], [5456], [5709], [5749], [5774], [6038], [6257], [6334],
    [6660], [6904], [7082], [7086], [7254], [7444], [7748], [8001], [8088], [8168], [8562], [8605], [8795], [8850], [9014],
    [9102], [9259], [9318], [9336], [9502], [9686], [9793], [9855], [9899], [9955], [10148], [10174], [10943], [11326],
    [11337], [11661], [12004], [12084], [12159], [12520], [12977], [13380], [13488], [13663], [13811], [13976], [14412],
    [14598], [14767], [15640], [15707], [15775], [15830], [16079], [16354], [16369], [16445], [16595], [16614], [16731],
    [16943], [17278], [17281], [17548], [17555], [17981], [18022], [18095], [18297], [18413], [18736], [18772], [18990],
    [19181], [20095], [20197], [20481], [20629], [20871], [20879], [20924], [20977], [21375], [21382], [21391], [21687],
    [21810], [21828], [21938], [22367], [22372], [22734], [23405], [23505], [23734], [23741], [23781], [24237], [24254],
    [24345], [24430], [25416], [25896], [26119], [26635], [26842], [26991], [26997], [27075], [27114], [27468], [27501],
    [27618], [27655], [27720], [27829], [28052], [28118], [28231], [28532], [28571], [28591], [28653], [29013], [29547],
    [29650], [29925], [30522], [30537], [30996], [31011], [31053], [31096], [31148], [31258], [31350], [31379], [31422],
    [31789], [31830], [32214], [32666], [32871], [33094], [33376], [33440], [33805], [34368], [34398], [34417], [34418],
    [34419], [34476], [34494], [34607], [34758], [34761], [34904], [34993], [35117], [35138], [35237], [35487], [35830],
    [35869], [36033], [36134], [36320], [36399], [36487], [36586], [36676], [36692], [36786], [37077], [37594], [37596],
    [37786], [37982], [38475], [38791], [39083], [39258], [39487], [39822], [40116], [40125], [41000], [41018], [41256],
    [41305], [41361], [41447], [41449], [41512], [41604], [42041], [42274], [42368], [42696], [42767], [42804], [42854],
    [42944], [42989], [43134], [43144], [43189], [43521], [43782], [44082], [44162], [44270], [44308], [44479], [44524],
    [44965], [45114], [45301], [45382], [45443], [45472], [45488], [45507], [45564], [45662], [46265], [46267], [46275],
    [46295], [46462], [46468], [46576], [46694], [47093], [47384], [47389], [47446], [47552], [47686], [47744], [47916],
    [48064], [48167], [48392], [48471], [48664], [48701], [49021], [49193], [49236], [49550], [49694], [49806], [49824],
    [50001], [50256], [0], [1]
]

// Ban bracket generation, plus defaults
const badWordsList = [
    [23], [49209, 23], [23], [49209, 23], [23], [49209, 23], [23], [49209, 23], [23], [49209, 23], [21], [49209, 21],
    [21], [49209, 21], [21], [49209, 21], [21], [49209, 21], [21], [49209, 21], [3], [49356], [1431], [31715], [34387],
    [20765], [30702], [10691], [49333], [1266], [26523], [41471], [2936], [85, 85], [49332], [7286], [1115]
]

const hypeBotBadWordsList = [
    [58], [60], [90], [92], [685], [1391], [1782], [2361], [3693], [4083], [4357], [4895],
    [5512], [5974], [7131], [8183], [8351], [8762], [8964], [8973], [9063], [11208],
    [11709], [11907], [11919], [12878], [12962], [13018], [13412], [14631], [14692],
    [14980], [15090], [15437], [16151], [16410], [16589], [17241], [17414], [17635],
    [17816], [17912], [18083], [18161], [18477], [19629], [19779], [19953], [20520],
    [20598], [20662], [20740], [21476], [21737], [22133], [22241], [22345], [22935],
    [23330], [23785], [23834], [23884], [25295], [25597], [25719], [25787], [25915],
    [26076], [26358], [26398], [26894], [26933], [27007], [27422], [28013], [29164],
    [29225], [29342], [29565], [29795], [30072], [30109], [30138], [30866], [31161],
    [31478], [32092], [32239], [32509], [33116], [33250], [33761], [34171], [34758],
    [34949], [35944], [36338], [36463], [36563], [36786], [36796], [36937], [37250],
    [37913], [37981], [38165], [38362], [38381], [38430], [38892], [39850], [39893],
    [41832], [41888], [42535], [42669], [42785], [42924], [43839], [44438], [44587],
    [44926], [45144], [45297], [46110], [46570], [46581], [46956], [47175], [47182],
    [47527], [47715], [48600], [48683], [48688], [48874], [48999], [49074], [49082],
    [49146], [49946], [10221], [4841], [1427], [2602, 834], [29343], [37405], [35780], [2602], [50256]
];

// Used for phrase repetition penalty
const repPenaltyAllowList = [
    [49256, 49264, 49231, 49230, 49287, 85, 49255, 49399, 49262, 336, 333, 432, 363, 468, 492, 745, 401, 426, 623, 794,
        1096, 2919, 2072, 7379, 1259, 2110, 620, 526, 487, 16562, 603, 805, 761, 2681, 942, 8917, 653, 3513, 506, 5301,
        562, 5010, 614, 10942, 539, 2976, 462, 5189, 567, 2032, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 588,
        803, 1040, 49209, 4, 5, 6, 7, 8, 9, 10, 11, 12]
]

// Ban the dinkus and asterism
const logitBiasExp = [
    { "sequence": [23], "bias": -0.08, "ensure_sequence_finish": false, "generate_once": false },
    { "sequence": [21], "bias": -0.08, "ensure_sequence_finish": false, "generate_once": false }
]

const hypeBotLogitBiasExp = [
    { "sequence": [8162], "bias": -0.12, "ensure_sequence_finish": false, "generate_once": false},
    { "sequence": [46256, 224], "bias": -0.12, "ensure_sequence_finish": false, "generate_once": false }
];

function getBadWordsList(model) {
    let list = []

    if (model.includes('euterpe')) {
        list = euterpeBadWordsList;
    }

    if (model.includes('krake')) {
        list = krakeBadWordsList;
    }

    if (model.includes('hypebot')) {
        list = hypeBotBadWordsList;
    }

    if (model.includes('clio') || model.includes('kayra')) {
        list = badWordsList;
    }

    // Clone the list so we don't modify the original
    return list.slice();
}

module.exports = {
    euterpeBadWordsList,
    krakeBadWordsList,
    badWordsList,
    repPenaltyAllowList,
    logitBiasExp,
    hypeBotBadWordsList,
    hypeBotLogitBiasExp,
    getBadWordsList,
};
