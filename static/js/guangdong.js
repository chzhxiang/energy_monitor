/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

(function(root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['exports', 'echarts'], factory);
    } else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {
        // CommonJS
        factory(exports, require('echarts'));
    } else {
        // Browser globals
        factory({}, root.echarts);
    }
}(this, function(exports, echarts) {
    var log = function(msg) {
        if (typeof console !== 'undefined') {
            console && console.error && console.error(msg);
        }
    }
    if (!echarts) {
        log('ECharts is not Loaded');
        return;
    }
    if (!echarts.registerMap) {
        log('ECharts Map is not loaded')
        return;
    }
    echarts.registerMap('广东', {
        "type": "FeatureCollection",
        "features": [{
            "id": "440100",
            "type": "Feature",
            "geometry": {
                "type": "Polygon",
                "coordinates": ["@@EHGTANB@DAHBPHFEDDNFRPBFKFEHSLKAGDUCAA@CGA@AEAAHQCGHEDWFGDCDAHAbI@ABADCDAFGA@DB@AFJFEPFB@Dg\\EBCHBJBBNB@DAF@H@F@LCPHFDCDFJBFDIRMPSHGFEACCA@BHABEFMFKJCF@JDJ@J@DNJCFIBABAFBNHHABALREDHABEAABGbDJBFMEqC]DCBKLOLUHIFCJAFDHCD@BL@VL`@BDA@@BHFABBD@FFB@FADECGBCPADEXB@L@BDDdADg@EDCF@TFHPPTHDHAL@HBJIRQPINM@MLBNCPFDF^E\\EPEFQDADAJABQBEH@HBFABGHIBMHKNGQS@CHMO@AF@BIGKSBKCCCGCUACA@CHKBKJO@QAEEAOAMHIAOBECE@@DLNBHFBAHA@AB@TEFE@EDGHCDDBCJCDC@@HDXBDFBAHMD@CA@KJHRDDJHHJJN@DEFGBE@KIAEEEICAEA@CBCN@FCDA@GCMFS@ED@RAFEFA@CDJHGD@DBBHB@FEBDDHBAFCH@DHDBDF@DFF@FBED@BEBCJADC@ABGVGH@BBBLF@JCDCCKAEKCCG@CCIKE@CH@FFXHDFAB@DDHNBJAHD@FDPCLHHGHAF@PDHGBBEHJBBBCB@BPHFERBBFH@NGNDHHBFDFHDRBBHNLLCHHPADDHBDANHDFGJDBBBFIHDJHTERAACPGJF@HHBFAHHDCALDF@OhFFD@BGJJFBJHDJHBDHADF@FKJHJCFOLFVAHXPLANDBRJAJEF@FGB@BD@HCHBDGPDBLIPJNBHBFHJDDBBCDIDABHPJDFBDFVFJABSF@DBBXDVELBLAHBBFAN@DJ@FBBBDNDDNBDBDNHL@JLVFVFFFAF@FF@H@NBFBHBDLCNAHBHCDGHAZBPFB@HGPHH@FC@CIAFCB@@GHCNGD@PEDCCEBCHG@GACRKHAFFJCF@HELBLBFCH@DBDDFBFAFBfVCDI@HFJBXCJI@IHABABEEEBGLDNKN@@KTIBCBFNPTNEFAF@BDBBBLFFFAJFDLBJADFIHE@CF@JHDATFFD@KPLXIFCLEPMHGLAFHDDDCDE@@DB@HAZVAFDJFBBJBDJHPFDA@CHDDAF@HGHBRADCFB@JFPF@HIH@FADGHARLF@DHEFEPFFBLITGDBFFHLGBDF@DEAGB@FB@FB@D@FEF@LHB@LILHF@R\\JDFHL\\@JLFBHHBLANBFGDBJDFFVJLJPFTD\\RR@DBH@BGLEBBDD@DFHFGH@DBH@DEBCFAHBNFJDHAFBF@@EDABCD@DDH@LHNBHCLHDACEZDFGRHHAJ@FFB@DBB@@ABCD@FC@AFCBCBBD@HAD@DCFA@ABAACBCCG@GBEHC@MDA@CHCBCAEB@@G@AEI@CBCHADEBQFEAABAFGDADCACC@AIC@@G@MGAOGGKAKDIJAJGGEKCAEBCRKPADEHOCBUCEAKEEE@EOIEOC@CHCD@DAFGAGBBNJDDLI@ECAEUSKCSAME@E@MEQE@GBICKIEBGFQBCC@ECAEBQGG@OYEAQ@CG@GAOGEEKGEQGUAIC]CGGRI@EQDCQCIKAQBM@@CFILABCGOKACAEMDCBEBAB@JBR@BCAEDCHAJBbODKEKAIDEHEKGCEEK@GNEFEDMFE@IDKDEJEPCHCDEAE@EFILCDGNEFKDCHAP@FEDGDCT@LA@CKQEAKF@CDELERDPALDF@JCJBFCJIOMGAQ@KDAACQDMCMDGNOR@JCJBJFDABA@EGKFKEI@EFEVMDCBGEISIKGACBENWDODEPKBC@AGIGIG@@ACAGB@CJE@OFGBEHGAKBKCBK@GDEBG@AB@FCBYLGFFTCNGFQDIHEFGAOCcFIHE@KCCECGEI@GFEDIHAEK@KEICUCA@CFGAGIQMKCEPGHEJCDEAGACCAAIFGDMHMDEFABEAIAAI@GBCOGCCECOBE@EHOHAJBHC@ECIEEKCIBWBCAIKQACEAEKEAAAGBEEK@ECE@GA@@EC@@MGFIBcPUDYCKBIDEBoC_XSBIAMC_Q[UKCWAQIA@BLABC@GAGDQM@AFCEICA{@KGGIIESIqKK@MKK[EGQMQ[AG@IBcLyJWHKHKRo\\{NOHM@G@MG_@YNWNSx{^_¸ÍÓpġEMSKmKoC}DYeKL]RSBWTAAEDEEGFEEEJsGN@DNBBRcZji`MLHPiNMB]B[JfaX"],
                "encodeOffsets": [
                    [116086, 23320]
                ]
            },
            "properties": { "cp": [113.380637, 23.405178], "name": "广州市", "childNum": 1 }
        }, {
            "id": "440200",
            "type": "Feature",
            "geometry": {
                "type": "Polygon",
                "coordinates": ["@@ABBHADCH@@HFRBHDHDAFMLCFLJ@TDJAFCDGBBFEBBHKBCHC@EBDFCBAHBDFJANIDEHEDC@@F@JFB@DD@BD@DFFD@@DB@BDLDBF@DHHEH@JFHJHJHLJABODEBCDI\\QN@FEFAHILQNIN@FBRDNABBJFJdRNHJHFHDBZBJBJFHF@HIRQAEDEDGTGLAFEDCBED@NADIDYEEBGLC@ECC@OJGCCIACC@KHSBCABKAACAGDCJ[EKG@EEAIDINOBEDIAGAGBCFADBFBDAB@BDHFF@HFFCDC@AAEDERCDIFBN@HEVBDDDBHEJCD@DCJ@FDBFAPIHGH@DBFJPAHLDDFABCFUF_ZUVGDBDF@TJNALBDJDN@FDFRDBPBFBBDHPR@THB@FGJAHDHAB@JFJCDGDAL@BBBNFDBJHBBB@HBBF@FCFDNLJBFJLDVBJB@FAFBDJDFHDTNHADGBAB@DBBVHF@HCJBXMH@BBA^GRMLAD@DL@HDBJADCA@ECCCBADBDJPFFHBL@TBFBBB@FE@KCG@ABBFFFLCFDEXDFVAHAFEFWJIF@TJVFLLFHBPJJVPdND@HCHOFGJED@DDBFBBD@LEHABACEHED@B@BDH@DH@HEJBFDHP@JADA@C@@MCECHKJCFQFAACAE@IFOHKAEAW@SH@FDDHFBHBFCPBZYNBNMJqFKD@HDPBB@FEDEDAVJJANCLKB[FKFEJCLOHAH@HDRPF@HGH@DDJPHBNEHAH@LDB@JERA@CGK@CFGHGDBHHJJFLF@JABADMBAH@FMRELAPEJEBCBQG]DAAMDEHBJNHFLHPBDLDCFDFADADBBCDDABDBJDDEDBBABB@BFB@CBAD@@DD@BEN@@BF@BDB@BDBADFAFFBFCBDJ@BAD@HCB@JLALFLDBXAFDHAHB@DABGD@DLAJEDB@DB@HAB@FINIDADBALFJFHHDHADCJY@KLK@IK@CABCBAJ@PBRHJAJCN@LCN@LALDDBJNJLBTHJDJHDHD\\DFBHLRHDB@DAJLNBF@DENBDBBNBDD@DCFKFAD@DFDAFAHBDDDPBRFRCDBAFB@NAJ@LELCLDBFPDLJFHVIV@RKFBFBF@FABCBECI]UKMBKHKDCNARGF@FI@KPBBCFAJHJFP@DA@EFC@AKGMAEAKIB@LATGPABCBCEAKA@ATW@EAEAAGAEDGBCC@CAEIEAE@EBEJKRALGLE@ACCKCI@OBCAKIE_EEIEE@FEBGBCFCNEDABECCAMBCFAJAD@NT@DDLDDBHJHRFFMB@DFLDNEJJVVJFNFJJF@HAHAHJFBCD@BF@JDL@BABIB@NNHDR@BAFMDAF@HDTTH@TIDGAOBAVBPAHGBBBFLBlOJ@HBFPDBbEFCAGFIRBDBGFCBCJDBHHFAHHHCBB@BAJMFAB@FBTBBH@@@GF@DRHB@NCFCZ@RITET@J@BADMLBCC@ABAD@DBHNPBLFDNPBFALBHDJHDF@BGHHBBBFRFNDTNL@DDDVDHCDACGBCH@BCHALIHAJLN@FBZNBHADEF@L@BNDDBF@D@XXHDJBHGJAPKTCLGLBBCACACG@AO@GFEJB@D@RBFJ@\\SBICGAMHABAIOBAZCLS@EDCJEBCBMTMTDFAPFPCTSLEL@DDDJDBJEFBDABIBAJDD@H@@CCG@CBALAHE@IDICE@IBAPBFAPOBG@KBGA[DEHE@ACAQAA@BOBAPHBA@COKEAEBIJGDA@YUCAGBGAECBE@ACAIA@AFG@EAEJ@@@@CKKIBKBEAAADKDCHABA@GD@AAGGACBARKL@BC@CB@ZADBL@DABKDAN@BA@EGSFC@GFKEQACK@IEMCGIGCEBWIIBGDI@YGCCAEBMWUOIKC]@WHICCPC@MK@CFG@AA@C@CHCBGDKB_@MAIKISIKAEIGACBE@KCMEIGGGCG@OHEECKASAGGCKAODK@C@AHCBCASGGAEEM@@GDWCECCGCQEe@CCAGJI@CACGA[AMCGE@EFGAGCE@ALK@CCQCCKGA@@CTQFIBIC_CGOGEIEAIAICCMGGMKAABEAAMUAIDIQCKKAGFQ@MACQEACAIFEHIDQM[CE[GKMIEMCQBICGEEECM@QCIIEQ@MEOBEACB[AiQK@CACFEBKDcCICAGBGLIFILG@C@ILGBAECGCE@@JCDE@CG@SHBJ@HHHBZBHBBILEPEJCJAVJJ@VGFMJEZ@FG@MPCDG@ICEDG@ELMFIBSBCDCHA@EDIBOCCGAQCEAKMDIAEGAUEAAACDGLGBE@QFMFGZQFKRIBCAEGEOCKCMOEOWMYUMAEEOK@EHM@IJIHGBEKY@IDYCOBAF@RFbBLENQD@@EAEIKMGOY@CBCNOBIQaGKGEAIDIACKCIEAEDCJ@P@J@BCACE@_AA@AC@CFCPGHIBEPcBCEI@C\\GNEFGBMOSAEBGDE\\SHSFIHGJCROAMBEDED@FBFVRNF@ZUHAHDJHDDBBH@FCJFTC\\ABDD@BA@IDEL@FFFADEBGHIDAJBFEREJIFBJFJED@DJFB@DKJEVSJCBNFBN@XC@GAC@CJ@FJFH@BA@IDANHDFBLFDBHDDFLB@HB\\VDD@HBBJFNJ`LRNDFLXDBB@DCJWDATIPBLCDCBKFKKQAEBGAMDGJIFE@EAGCGEEMCSAQCICIIACFWDCFAEAEG@A@EAEI@EDCFEBC@C@CGECC@CF@HBJAF@@E@EECMEIIEEIBEGG@AA@CCA@GDORABG@CC@EHMACMOIUKIMEIEM@UIEECEEEA[DEDIBG@EaAACEUA@ILED]CCA@EHGGEKCEGCIFMLGCCMF@MCG@CFMFCBEGAAACG@GFGCEGCCI@GDAAEBEDGCESCAECMDCACECIACC@AHC@IIMEAC@CAAGUJOPMGEEK@KCE@GAED@DADIFEBED@FKAECBAAACBI@IBAFC@CJG@IGK@KBKF@HHFNZHBFHCBEACDHHD@BBFAHFJBLH@HJDGBAHCBEAGBCIEEG@EEGCEBKMG@GCOBKDGFECG@IEGHK@KNBJQFG@IE@ACCG@COGKGCMAADEDKACDE@DCEEC@ICC@EBAADEGCICICIBI@IIE@CHMAIAANC@M@QJEEGKBEOYECBEEGACIFAF@HDHADBDAB@BEBCDC@GBC@AAADED@BEDC@AD@BA@CAA@EEI@GBQGEHYCDFCBKGGDMAKGG@CCC@ADCB@FE@EAGBICMEGAEBADCFG@CAG@EHEG@CCCAAKFAHG@CAQ@[QSCGAGCKIUIEEICCAEHGA@HCD@DBB@H@PCDCAABAHIJCBE@EDKBFFGH@PADEBAHCBM@CDGEGDC@GCEFEJBDCDEBE@AB@FDFADMHEJCBCDJHJBJNLJDDNXLHLAHID@PLJBFADEDCFBFD@FADBJJJP\\FBHCF@RNN@FD@FEL@DDBN@BD@LNF@D@BABK@CB@TBFD@FF@DGFAF@LDDDBTHFRF@P@FFFH@FEFABI@ADANEH@DJFDFbNXVJFHBFABAACFAXFRAFDBNABOEAPMBEBUHGH@FCB@HEFFLIFBN@JGDGDE@C@CIG@CDDL@LCBEDIDCAEGCAMJOHAD@LBDLBFDBD@DMBDJBNE\\BFHFBPIVINGBIAUHGH@JDFKF@J@BKRGDCL@DJLA^ADG@QHGJEBIAIHKBGDAF@NALSHu@ECAYCIBEGGOB_hQNELANBHABIDEJOJGBEAEBaXCDAJMDGFA@ICU@CBBJCDIEABEDAHHN@DCFEBMBEACG@QCEEBALEHKAS@OFC@GEEBEEGWEACCAWMGGKA@CBCJMPC@A@KSGEM@EDGHEBKUKKMCYCMGE@SJMBCBCBIVJN@JCBI@CA[DOCMBADBJ@DCBC@CAIMOOUM_AGBKAMM]EIIGBEFYFKFEDAROJCDALGFCH@XCDCAIMCAEAC@AHABCAGKCAKBCCGA@EEKGGAGCEICIBSLE@UIE@GDIBAAAMEEEAEFAFBDBHG@ADMBKD]`KHC@UGGECG@GIQEQKDSGO@OHEFKACHCDEBIJKFCHC@AJABBHGVQHURCD@LOTA@GAIACDEJBJINGNCBGACD@JFXGHSJKAGDKBKAE@GHA@G@EAG@OGA@@HABC@QIC@CDADAd\\`DN@FELAFJJXJDD@LKT@RGPATEN@DFFFB^APBBBCLBDF@FFHL@FIPAN@DDDJBDDZnAFEHLHHL@FIR@FGD@FPNfNDDBJHBDAXXdDFDBHDT@FEJMHAFA^EDEDAD@FDPAFADIFGL"],
                "encodeOffsets": [
                    [115707, 25526]
                ]
            },
            "properties": { "cp": [113.591544, 24.801322], "name": "韶关市", "childNum": 1 }
        }, {
            "id": "440300",
            "type": "Feature",
            "geometry": {
                "type": "MultiPolygon",
                "coordinates": [
                    ["@@ABD@AA"],
                    ["@@CEMIqakYK@MHWZMbEh@NHT@HOtEB[IEBCB@JBNFP@FCFGJ{piSdKbCLMdI`ANATVl\\RZLHJDLENHHLFBFCF@DFBHEHBFFAFDFTBBFDA@HFADFDAFDFRCHBDAHGDDD@FDFFD@FH@LFFCD@DEFDBA@BFFP@@FB@CFADF@@ADFADHF@DA@BBD@CA@CD@@DBA@CDA@BABDA@DBABDABDADDEFD@@BBABBBD@ECAFA@@BCBBBCFBDDB@KMCHCABAB@@CD@CABED@@B@CD@B@CABCDDBD@CD@FBEEF@A@@CFA@AJDBABF@EC@BCFDBDBBDADDD@D@RCI@EBCAEBEA@ABAEB@CFCDABACBCABBCBCDEACBK@CFCABGBGJ@DEHBBCBDHBHAJBRBAADABAPCDGJEBAAABCACDADBBCB@HFBEBAD@BBFADADABEBAGACEFIBBAFB@@ADBACDB@BB@HF@GEB@CTB@KDI@CDIDKD@@CEGBEHADGHBDEFBFCH@BBHBFB@DBBHCBDHBBCFADFFBDFDBBABCCABCFE@CECACJCBBD@BCDABDJB@IA@ACFCFBHGAEFAFDHD@FFFDCHBFCCABALD@GDCBG@ACCFED@BADONCDDD@DGDA@CDAB@BBH@DEHADD@DNEAIDCBAAGJCFOACRIB@DCJE@ACABIGOEFE@C@CIBAACB@DH@EB@FHDICC@CH@@JFBFGACJEF@HBCDDFBFBDF@DDEJXVADE@CHBBJADL@DCBFHAJ@BCB@FNJB@DAB@FFCF@RDFB@BDFD@HGHEB@BDJ@@ID@AA@CHHB@BCDCAEDBJ@BC@CACBMEEDE@@FBBFADB@BCDEB@FCB@ABGA@CBBHADHBFHHDN@BDTDFHBFDFCBHPFBDAHF@DDBFA@GFCDQ@INCH@BABEHG@CDADDNAPNAF@BNDBB@DHDFF@FDFDAJDFE@EB@VC@BDBF@DA@CD@DBDLJCH@DBBFJ@JBFAJ@DEF@@@@CCAAGBCB@@IAEIAGIDC@CDCD@DBHABADEAQHCLFD@DANEJCJABCD@LFBLALBJRJFEFADEBABGHGAADGBBFACCGCFA@ECAG@BOCK@EKI@MA@CBA@@CFGFKACDAFDD@DAFFFGDCAA@GFIDBLBBEDAD@DBFIBGIMGAACECIABOFA@A@ECADCdJBDFFFAHCR@DABCLEDBDLXDDCT@HED@FICE@ADA`BpAZD^HZCLCHCDG@ICOScMQ[SOQKU@MBGDILMVOVGTAVAJCFMFONUBMASCIQYIGuQeIWAKCIIIUGIGCKCeCYFIDIFILKXKx@FHp@HIXEHSVKJQNEFCHGbGJIHWNYHQ@MCeOUESCc@GAIIIGMSMCKGcA_EQKYUICCB@JCDEB@BEDIAEFOACDEAA@AAG@CCCBA@IBAAEBAFABI@EDIEADA@KKG@@GC@@C@CB@BB@AEEACEAABKBGCGBCEE@CAEGG@AEECEB@LECEBKCCBGFEAGGIACCBCLG@CEEIGC@GFOAIGCOIEC@QF_DML¡@SAMGCIESKU"],
                    ["@@@DHFROEGA@QN"],
                    ["@@CD@F@BFBHGPG@KCAIDKL"]
                ],
                "encodeOffsets": [
                    [
                        [116556, 23085]
                    ],
                    [
                        [116684, 23020]
                    ],
                    [
                        [116572, 23039]
                    ],
                    [
                        [116577, 23051]
                    ]
                ]
            },
            "properties": { "cp": [114.085947, 22.587], "name": "深圳市", "childNum": 4 }
        }, {
            "id": "440400",
            "type": "Feature",
            "geometry": {
                "type": "MultiPolygon",
                "coordinates": [
                    ["@@KF@DC@BBCDAABA@AKDADFRLB@EACBEDB@DB@DEBEBACA@CH@CG"],
                    ["@@C@AFFFFB@CEI"],
                    ["@@KHEAAB@BGAGBGDCFADDBCBB@CFFBBABB@CDBHJDBD@BADFDADEAIBADDFABEAEFCAEAC@ACC"],
                    ["@@BBBAAAA@@B"],
                    ["@@QF@HHFBB@BBBFBBBF@FHDB`F@FD@T@DFPHLBTBDBT@JHGH@BRHHBJAFA@ECGQABEAAECEABGC@HA@AAAIAKGCA[BACI@@CMAKGU@GACCOAEAGEAEEA"],
                    ["@@CBCBFDAFBFDDB@BACEBKCC"],
                    ["@@AFCAC@AAE@@BBDCB@BDFADA@G@IF@BBDLJB@ACH@BAJJH@DAD@FAAIGAEGAA@ADDDBHDLA@EDA@ACAEA@ECAE@ECEA"],
                    ["@@OBCD@NCH@FFNFBVBbCNBLGBC@ACEAID@F@D@@ACEMEcDKCGEE@"],
                    ["@@EBCFGBe@E@CDFFNHHBPAHBBBDRBBD@DADABCFAB@LJH@BADMACGEAIOEIGCA"],
                    ["@@C@IFADBFCBAHGEABAJBHGDGHAF@BD@DAB@AHBBH@FIBFBBVCADBFH@FBD@DG@EFA@CCICBDEBGMKGBAQCC"],
                    ["@@CBAB@BFHCHRXFDDAFCDBNGBAAE@CAEBCFA@AEECAAF@@QAEDCIAAK@"],
                    ["@@DEACIJBBFA"],
                    ["@@EDDH@FHDADGCADE@@@BNDF@DGAADFHHBDDHBJC@ATCHCAGL@@GIOCAAGKEE@EBEABACCGBAA"],
                    ["@@@DD@@ACA"],
                    ["@@HDDAAGGEAL"],
                    ["@@BBHBBABGFBFBBACCIACBGDAD"],
                    ["@@BDHBBACCDC@EJ@LFBAGI@AC@GGE@GBAB@FBDABBFAD"],
                    ["@@FHJFFA@EKIE@CD"],
                    ["@@BJFFAHB@HGN@BIBAD@@AACO@MECBAF"],
                    ["@@BBB@BA@CC@AD"],
                    ["@@FHLDHFN@BAGGOAGEEAC@@B"],
                    ["@@DHJJ`LDBBLBFF@DE@CGKBABAJ@HFDFBABCCCIGKEI@KBKCAA@CFIAAGDGCG@CH"],
                    ["@@DDADHACKAB@BC@@B"],
                    ["@@BBFCC@CB"],
                    ["@@@@B@A@"],
                    ["@@B@@@A@"],
                    ["@@BB@AAA@B"],
                    ["@@D@@CCB@B"],
                    ["@@BJCD@BDHD@@FD@DDFCHJHBH@@AMMQE@GGI@GICABDFDB"],
                    ["@@@DDA@EBCAAAACFBF"],
                    ["@@BBBAAAC@BB"],
                    ["@@BBBC@@CB"],
                    ["@@BBD@BAAEA@C@ADBB"],
                    ["@@@BDABCFE@AAAC@AHC@@F"],
                    ["@@HBDECAEBAD@@"],
                    ["@@ADBBJ@BAACACGD"],
                    ["@@BB@CAB@@"],
                    ["@@ICAHDDBBBCJDDEBAEOCEC@AF@FB@BH"],
                    ["@@JNBHBBHIBGAAMEE@AB"],
                    ["@@F@BD@DBBJABC@AKC@EGDAD"],
                    ["@@DA@CACCBCCGHANJ@@A@EFA"],
                    ["@@@DDCAAAB"],
                    ["@@JEBCD@@ECCE@GBCAGJBBFABBBA@FBD"],
                    ["@@ACOEIBCBBHDBBNFDBBLCFGDA@CEA@C"],
                    ["@@BA@GBA@CC@AB@NB@"],
                    ["@@BBB@@EA@AD"],
                    ["@@@BF@AAC@"],
                    ["@@@@B@A@"],
                    ["@@A@AD@BDDB@BCACAA"],
                    ["@@CH@DFBFFB@B@COGC"],
                    ["@@FDFHD@CGDABACIDADGIMA@C@EBBFFDBHABGBABBH"],
                    ["@@@BF@CCA@@B"],
                    ["@@FDBAJAGEGDAB"],
                    ["@@PBBABAFD@CD@@AAAC@CEECGAE@@DBFAF@B"],
                    ["@@B@@ACA@BBB"],
                    ["@@ADDBFACIC@@D@B"],
                    ["@@JABGFCBCACC@CDCAIFAFDFBB"],
                    ["@@DA@@CACDD@"],
                    ["@@@DD@@GBCACEA@FBBABBD"],
                    ["@@B@A@@@"],
                    ["@@DDF@BA@EACCDEAABBD"],
                    ["@@F@BAEACBBB"],
                    ["@@BA@AIDDBDA"],
                    ["@@SDAACEG@GADKAC@MMWAG@GFKFGJSJKJGDEAmBaBEVSDG@QCKIEE@eFWBEAIGMOSKQCWBIAeSKIEK@SCKMOe·a]IGEEIES@cCUK[ECQEGCGGU_MKQCICIBcLWPUTitk|KJQJONOVEPAbIPMTCNI¾BBHRJªDHDFRTGJTLJKRR|VJHJLDPDTHX@XBHPVFz@RFXED@FBFFBBLIDIT[RIHDB@JE@@TDDT@HFF@DCFEBEH[ZFJHBHBBBLDBFADCBCRBLGD@ZNFAlY¥HKBcBE\\{NaLUNKbSFABAFBHCDGB@HDHENQ^cRCJ@BBDDVH`LJL^LRDADEDCD@HBHHDNABDD@DAPFJFDJDD@FAB@FC@AHABI@CH@HABE@CFBLE@[`C@GJGFBDLDJBDJR@TJBD@BGH@DGD@JCBGBAF@DDBAJFF@HADGLFJ@LGHCJBJFDLFAVBDPFHFD@JIH@FHBBD@DCDBFFNB^GbAHKNGNAP@TFJJH`JZNLlBZENCHEDKAOAKi}eCGMIMCM@CAAAAKBIHIPKBGACGGICWEIIAKDKFIBCAEEIAEDEJEDIA[EYCGECa@ICQQCG"],
                    ["@@DBDBEGAA@F"],
                    ["@@CD@HFNFBFHLBDCBIHABEEOMIQEGMOMECAD@LFNDDJBHH@D"],
                    ["@@BBFAFBDA@CCCC@BAAAFGAEGBCFAFCDBFBB"],
                    ["@@YHIHAHMFKDCB@D@DFBD@JCDFBFFBB@DID@HDFAFGDIJKBMCAEA"],
                    ["@@ABGNC`B\\FJJ@LQJAFF@JBFHDH@HEBGDGHGF@VVJBJ@HCBGEMOKKAAIAAQACPC@GAEDKCa]COA@"],
                    ["@@OFADBDA@@HA@CAAFBDLH@RIPBDDBNBB@@IAG@EJ@@CHIDGDAACKIEGAEAC"]
                ],
                "encodeOffsets": [
                    [
                        [116547, 22689]
                    ],
                    [
                        [116494, 22644]
                    ],
                    [
                        [116790, 22617]
                    ],
                    [
                        [115800, 22625]
                    ],
                    [
                        [116973, 22545]
                    ],
                    [
                        [116388, 22560]
                    ],
                    [
                        [116444, 22536]
                    ],
                    [
                        [116931, 22515]
                    ],
                    [
                        [116894, 22503]
                    ],
                    [
                        [116496, 22490]
                    ],
                    [
                        [116412, 22466]
                    ],
                    [
                        [115851, 22482]
                    ],
                    [
                        [116453, 22449]
                    ],
                    [
                        [116803, 22455]
                    ],
                    [
                        [116522, 22511]
                    ],
                    [
                        [116537, 22532]
                    ],
                    [
                        [116557, 22530]
                    ],
                    [
                        [116642, 22563]
                    ],
                    [
                        [116654, 22566]
                    ],
                    [
                        [116748, 22582]
                    ],
                    [
                        [116866, 22489]
                    ],
                    [
                        [116772, 22412]
                    ],
                    [
                        [116706, 22333]
                    ],
                    [
                        [116957, 22541]
                    ],
                    [
                        [116828, 22426]
                    ],
                    [
                        [116828, 22427]
                    ],
                    [
                        [116779, 22406]
                    ],
                    [
                        [116757, 22397]
                    ],
                    [
                        [116747, 22378]
                    ],
                    [
                        [116750, 22374]
                    ],
                    [
                        [116749, 22367]
                    ],
                    [
                        [116724, 22390]
                    ],
                    [
                        [116696, 22345]
                    ],
                    [
                        [116703, 22351]
                    ],
                    [
                        [116712, 22344]
                    ],
                    [
                        [116710, 22357]
                    ],
                    [
                        [116677, 22335]
                    ],
                    [
                        [116736, 22575]
                    ],
                    [
                        [116744, 22556]
                    ],
                    [
                        [116752, 22569]
                    ],
                    [
                        [116721, 22587]
                    ],
                    [
                        [116679, 22597]
                    ],
                    [
                        [116610, 22649]
                    ],
                    [
                        [116636, 22645]
                    ],
                    [
                        [116572, 22656]
                    ],
                    [
                        [116531, 22709]
                    ],
                    [
                        [116577, 22520]
                    ],
                    [
                        [116459, 22483]
                    ],
                    [
                        [116425, 22560]
                    ],
                    [
                        [116425, 22566]
                    ],
                    [
                        [116394, 22569]
                    ],
                    [
                        [116367, 22556]
                    ],
                    [
                        [116456, 22697]
                    ],
                    [
                        [116437, 22675]
                    ],
                    [
                        [116440, 22661]
                    ],
                    [
                        [116431, 22645]
                    ],
                    [
                        [116432, 22633]
                    ],
                    [
                        [116355, 22774]
                    ],
                    [
                        [116344, 22777]
                    ],
                    [
                        [116331, 22776]
                    ],
                    [
                        [116327, 22782]
                    ],
                    [
                        [116342, 22863]
                    ],
                    [
                        [116338, 22866]
                    ],
                    [
                        [116285, 22746]
                    ],
                    [
                        [115833, 22417]
                    ],
                    [
                        [115854, 22446]
                    ],
                    [
                        [115882, 22481]
                    ],
                    [
                        [116552, 22934]
                    ],
                    [
                        [115859, 22356]
                    ],
                    [
                        [116561, 22649]
                    ]
                ]
            },
            "properties": { "cp": [113.543986, 22.124979], "name": "珠海市", "childNum": 70 }
        }, {
            "id": "440500",
            "type": "Feature",
            "geometry": {
                "type": "MultiPolygon",
                "coordinates": [
                    ["@@CBAFBDD@DFD@BCEE@ECA"],
                    ["@@AB@DDBBECA"],
                    ["@@CDL@ACE@"],
                    ["@@B@B@@ACB"],
                    ["@@DBDACCA@AC@H"],
                    ["@@BBB@AAA@@@"],
                    ["@@BDH@BA@IGEA@AN"],
                    ["@@B@B@@AAAAD"],
                    ["@@@CC@@FDA"],
                    ["@@BBBC@ECB@F"],
                    ["@@BDD@@ACAA@"],
                    ["@@ABB@FAACABCABD"],
                    ["@@AB@BDBBAD@@GAACBAD"],
                    ["@@@DBA@AA@"],
                    ["@@CACIECAFBB@FJHDA@C"],
                    ["@@@DFBDA@@A@BCAAA@E@@B"],
                    ["@@EFFHHCBECCCEAF"],
                    ["@@BB@AAAABB@"],
                    ["@@@OTGBC@AI@CGEBGHA@GEACAEHG@E@EEC@ALCFIBGCMAGGEGCDAACKDEIC@EBCD@HGFE@MKGAADDDGFBFAD[HM@ICI@KCOGK@iLABDLCBY@aDcCWBKBEFM@KBGDAF@HDFAPBFJFVBZVPFH@PEP@DCJQHGJGLCDBNNFBFBFRDDFBFD@HFHNJNFP@HAFCFGBE@EBCLCF@VJFHFRHFP@BBBHLCFKAEDAAGGCCGBIDCDAB@RJFABE"],
                    ["@@DBBDDAEEE@BB"],
                    ["@@@BBB@AAA"],
                    ["@@FED@FCDJTEJJPEH@D@DHB@FB@BABBDFCJHBCFMBAFFJBPJGRHTDBPDDDHTCLE`GJAJCZCDBnBFFBBLHDJBBDCROPKDCDDFDFFDLD@LCL@DJD^BBFFADADG@GHCF@FGB@BKB@BABKLCDDADB@DAFHHHHCBDB@FGJABDABBHDBLD@HEB@H@BFH@F@DBFJABCHANFBDDBDA@AFADB@BDDDADABFB@BLBDI@AFEBDDADHDCF@CGDBD@DDFFBFFJ@FAFIH@JELBHEFA@CACBOLGHA@CF@LHJBBCHHTE@AAEBGHIJEBCCcDILQDQA}OEUSMSGOK@MOOAEAqAG@A@ECCECOAKGCECM_ySOcSgwGMBSF_JU@WBOFSJGR@PCHCDEBOIYGSOMQCSB]H[N_JSBSCSG[Ys{UU[I­KiIUOSYIMAE@EBEYICCGBECE@EACCEAEDECA@EF@HEBA@@EEDCCG@EFCBEACDEAOBEAGGK@AICAOCE@KDA@ACHG@ASKAOEGGCAEAACBE@CE]MCEKECGMCAAEAIACDBB@BEBE@EBABFBBDFCFB@BG@@BG@@BBDGHI@IBBB@BEBCEG@CBCACFFHABEHARCHCBBHEBGH@DIBABDHGBKCEFGBEAE@C@CE@EG@EDG@CDBDEFBFDABDADCAC@ABBDEDEC_NADCCC@@FIACFBHGDAHKLJRLHAFCBDL@FCH@JADR@DABLBDABCCAG@@C@DB@BADGCGBDFDB@BEF@FNHFDDAFFDHAFC@AA@CA@GFAVFLJJZCVTFBBFALBHHJBJAHNP@DENHHNFBD@FIJFDTJHAFEBPDLAHKLIFAHBFDDH@HDR@VABD@JJJ@FIPB`CHDRADEFANADDLLEDB@BCD@FIBACCAIHAHGFG@AFBFC@AAGA@AC@GP@JCP@HFHDCVGF@DBBDHAD@BDHDPGBDIDEHBPFH@HDHDBF@FDBNFLHF@JJCBBBBCFBBVBHAR@PXHBDEAa@IDQDIHIDAFAJDJFRXHHbRZFJ@JCJK@C@OCGO[USIMCE@EDGDATAFVEVIVOJKHKBMPeNQ@TR^CDAFB@D@NCDHSFDLFEBFEBBDBDFBDAJFAXA@@LGFECEFAPDLDFD@HC@KDEHCHINGDGNG@CNAHEL@"]
                ],
                "encodeOffsets": [
                    [
                        [120103, 23812]
                    ],
                    [
                        [120062, 23775]
                    ],
                    [
                        [119679, 23977]
                    ],
                    [
                        [120127, 23839]
                    ],
                    [
                        [120128, 23843]
                    ],
                    [
                        [120133, 23844]
                    ],
                    [
                        [120118, 23836]
                    ],
                    [
                        [119934, 23877]
                    ],
                    [
                        [119912, 23877]
                    ],
                    [
                        [119894, 23893]
                    ],
                    [
                        [119945, 23914]
                    ],
                    [
                        [119922, 23949]
                    ],
                    [
                        [119958, 23983]
                    ],
                    [
                        [119921, 24047]
                    ],
                    [
                        [119919, 24041]
                    ],
                    [
                        [119820, 24026]
                    ],
                    [
                        [119726, 24019]
                    ],
                    [
                        [119609, 23809]
                    ],
                    [
                        [119957, 24020]
                    ],
                    [
                        [119681, 24011]
                    ],
                    [
                        [119959, 23930]
                    ],
                    [
                        [119430, 23992]
                    ]
                ]
            },
            "properties": { "cp": [116.708463, 23.32102], "name": "汕头市", "childNum": 22 }
        }, {
            "id": "440600",
            "type": "Feature",
            "geometry": {
                "type": "MultiPolygon",
                "coordinates": [
                    ["@@ADAABAA@@DBBDCAA"],
                    ["@@MLCAUP[LMFONIAECG@EDEFKPENIxMapSNK@OEICKAk@]CQFMPQ`m^e^ICQACCCD@CDECAACC@CGABACABBFDBE@BDA@ECCDGA@DC@ABECADBFIGA@CECB@DA@CM@A@CCAACOCABADC@@BADGBAA@@IEAABAFAFG@KDA@E@G@KGAKDACMIaABCC@CCBAAGGEDEHAJE@G@CGCACDGAA@CAEA@CACBEA@CACCAAECCAA@AF@HCBA@CEIBKCA@IBCCCEC@CEACBECE@KCG@IICKCACECAACMCACECA@@CCACA@DQF@AEC@EA@GDEF@DCBA@GI@@@BAFA@EAACGECBAFCBADBDEFBBCD@HCAG@BEAECCAGEEABAFEHBBD@EBFBBABABBABE@ABFBDABB@BE@BFB@BDB@A@GAABE@@AFAI@@HBFFBACDA@CB@DDBAFA@DD@HD@HHFAJMEEHABDB@BC@@AC@FHBA@CBBDJFABF@DCLEBBJMHEEE@BDADA@@GCCB@@C@CA@ECICBEHCBC@CC@ACJBD@DA@ABBB@BAA@BCD@@CBADBBEI@KCAFEFABCBCAAEGEHCFGC@@IACC@CAFLGGCHAAADAAAFGD@CDADE@CBBD@BAAAAAD@AAGBECCJC@@RABQEADIBAKACCKA@QDAA@EAAGDEGAGCGEDAJCBCAABECE@@ACBQKA@CAIA@CLID@JE@CAECAACCAEDE@GGCM@EACDCCGA@ACCCE@EGC@ACIAACEDKCCCCAGEGFE@EHDBCDBBDFBLCF@FABDJADC@ADDDDAFDHCJH@BFADD@HBBFNA@CCCBCH@FAB@CC@CDABAFABBBGFCHC@@FKJEAEHGDE@ACKCEBACA@IJEBAAACI@EC@CEACCE@C@@AGC@AFCBECICCQD@FGD@BQGMB@CC@ACBEEC@EGIAAEI@IKGGMK@IDAAE@AHCDALG@@@AFBBCHBJ@HHDD@BDBBCFBFE@BFEFAFIBADBHKf@LDDCF@HBBADCH@DBDDFF@DEFBH@HFHBDFNBLFHBTJDHDBB@BADAHDLAHCH@JHLDJ@HF@DDNBDH@DDJBDLEFADBHBBD@FEHCTJB@FGAGDBDEB@BEF@DDAJDDBCJBBBB@@@H@B@BDDAHDHABDD@FJFEB@DLFCBFAFDB@HBBADGFADEAEFCNCAAD@DFBABCDDD@FDBHCNINEJ@FAHF@HHBHCDDBFDEB@DB@DNHBIHBDBXFAFNJBAJDF@JDPABHHAHBDDD@HDDFEDDFHBHI@C@BDDFAFFCFIFF@BDCJFABAFDD@@@@FGBELCBDDDA@ABG@FFCEFB@D@ABD@BAFCCDADD@DAABEBABDBDACDBDBABDAACBAGADAIA@@DAB@EEBABDBBDD@CDCAB@CEC@BD@@CGE@EFCHCD@FEBAAABDBCB@@DABDD@DAD@@FBD@GJJB@FAFBFAFBBEHCBA@CAAAGHKB@@CFABFDBFBB@D@FJB@LAHH@FFLAFJHDJAFK@BJCFCBDL@FLJFBDB@FD@H@BGFGDBDID@D@@FDBLNBH@@J@@FF@B@JBB@CBCA@BJ@@FDC@DBB@CBBDABCA@AACBC@@AAGBCFAF@FHJDPNVN\\JCL[AVBTMVGFEJGTCRAzALELebAFBTAHERBPKBEB@BDH@NJDFD@BEAABAJFDL@HBHCIK@AHK@IDAPHB@ABBFANDFAFFFDABGB@BCAEFGBEACCAAC@EAGT@HbVCL@XRFLDA@HCC@DA@AFFB@DG@ACCFQHGBMM@DFLPRJDRN@LFLJHJRJHHDJnTjDVOFWAG`knODaFOIBKAIHIACECKBM@KFCD@jFHAJNJBJ@^BDNJ@HALFLHRDBBFNBZJBDDD@HHRFFHCBBAP@RHZBXSPC@MDAVEFCPDPRCNFJATJJDDA@CJADBBGHCdY@DCDLJAHFDRKFIFCBCACEQe]IS@GLEDQNYFEFAJHF@HEFA@BFADABIGMFCDHFC@CECCABEBAJ@NEHGLEBCDEFAF@FDJLCJHFJ@BGAIGMCCA@EBGCEW@EDGF@JLDDH@DDFLLBDDDC@IKEAA@AHGHUBAD@BCDIFA@AFCEAE@CEE@ACGC@CDGBEGACCFA@EGAAA@CHCIGDCB@FEBE@OBCFAR@NEHDB@DC@EDMDAB@BFJDFFBFLJH@FADCBEQWIGCCGQLIB@@DNCBGEAACCW@GD@DCDICADCHGFCF@FE@SBAB@BGEAAGKM@CF@FDPAJBNGPBFBBF@RIPALGL@DDBVBHDDDLDTAHLAJE@@BNPDGT@HRLMNGJAHGBAAE@GFGRABABIBCRCFEFOF[E]ECDOAMNKN@JMROJQAI@GBKCGSGOOEG@SDEFCh@BCCcACK@A@FWBCDOHAFDBC@EEA@EACBAGE@AB@AC_@UKK@@ADCCGBEDIJEVGPKLKDA^CrDNFAECIHaBAFBBACGQFBKBAGGAMBEBAJADEMI@C@ICI@IDELINEFEBAAGB@DDFBHETGNOJQECIACECDGEDO@K@E@GBE@CMAAAAIDGFAh[@CEAFOIEBEA@@CHBBEDCBCBAJ@BaBGDCHCXEFCHGRDBGFB@BHB@DBBVDHCLBTKFGLEAEQOMECCEFOGGACBA@BMHSFGGGCGYIGCIGMGCGBIaGWCSFM@EAGEMQIACDEFMVKHKBGCEEGYS_IKOOIA@I@EKMBIBCKAKAMHEBILAAFE@CCDAACB@ECCE@@AEBCE"]
                ],
                "encodeOffsets": [
                    [
                        [115497, 23554]
                    ],
                    [
                        [115878, 23218]
                    ]
                ]
            },
            "properties": { "cp": [113.122717, 23.028762], "name": "佛山市", "childNum": 2 }
        }, {
            "id": "440700",
            "type": "Feature",
            "geometry": {
                "type": "MultiPolygon",
                "coordinates": [
                    ["@@EBOHCFADDFNNBFCDC@IIGCE@CDAFBZHNBF@DCBEEIGGAQCIHAHBHPbRVJRHDX@JBFFLT@FAFQNQHM@CBACGSCCMCKAEBGJCBQAGBOL@D@BBDFDFD@F@DEDABAFBDHJRNBJDDTLNDrNNCF@PL@DADGDAFAJFTFNBBDBFC@KDELCFBDBDNFDDBTCNFPJHBT@RIJ@JDZ@BA@CCGAAHOEMEAOOIAIBGG_AE@MOKSAMOQIYAI@IFGJCBMBGFEFGBCACCEICIMCACCGSEU@IBEJGBIBALADCDCBK@ECEOKYIWMOE"],
                    ["@@AB@DBBBCAC"],
                    ["@@ADBBDCCA"],
                    ["@@@DBAAA"],
                    ["@@CB@DFBBCCC"],
                    ["@@ADBBBAAC"],
                    ["@@@BBBB@@ACA"],
                    ["@@ABBDBAAC"],
                    ["@@A@@DFB@CCA"],
                    ["@@IBEACD@FDDHBDC@EFCAA"],
                    ["@@C@@FEBOEG@@D@H@DCBEAADJJDBNDNFhGHCBC@CCCKGEGCASA"],
                    ["@@CB@DJB@AEE"],
                    ["@@MBAB@DLJZNDBHA@KGGYK"],
                    ["@@DDDJAFED@BHD@BD@F@DDFB@DFDJ@BDH@JIB@BDFALDBDD@JCFGFBLI@ED@DGHEAABABEBABCD@B@@DBA@EFIHDEMAA@GCCEB@AIGGDECCBCCBCD@BCCIBA@EDEAKCEAADCCAFGF@HEHFDBDDLDFCBDJBBDD@FHF@DDBDB@DHCDBD@FDNHHF@FCDBBDDBBF@DIFC@KJ@DJBDBB@RLDA@BF@FDBADBDABIFCDHBHFHHCBB@FBBRCB@DLBDBLJABCRFBA@QD@DIFDHABBC@BBBBABC@AA@DCFCB@DHCBEBBBCBBDGHHEKDBD@BD@JD@EHGDHFBFDBDABAFEBELDJ@AFCAAB@DC@ADB@ABA@AA@BCBC@IABDD@@DADGDAFJDFDB@@D@DA@DD@HB@BCACF@FFNGAIFADK@CAEEBCIAA@DABEGD@@BD@@ACABAFGNFBIGE@GGCC@@CEBABCCA@@DCBBDEAAE@GJ@EB@BF@BAHBB@A@ACA@AEF@@AAACBEABAF@BAAAABABEAFAC@AAFGBEBAFFBHDDBFAFH@DB@GDCAAFEACBCDABEDAHFBDFBB@BE@A@@HJB@DA@CFEHCB@@FFD@BRE@CDBDB@DB@FDBDNDBDDBDFDBDLJJH@LDF@FDDAFB@DFDDDAD@JDBALFJ@DABGDE@@BBBDDBFDBBD@DFBDADBB@BF@DBBCHBDHD@D@HIFGBCFHFBHABDDD@ADbBNJBDLCHB@L@H@FCB@LEHEBABBBJF@@BBHABC@AD@BCBAPDBDDB@D@BDNB@@CDAPNAEBCFDBAD@@CHBDCFDB@ACF@CAAEBABDBADHD@BDDBCF@DDCDDRBJDf]n]VeJIRE^Dl@LBJDPFL@TMboNJwFMRUFCF@HDJBPMNE\\KVODBJGNOE@ACC@BCD@FKHB@MAAM@EKEY@eLGFOVWR_HkC[JGTUPKLKT_LOR[FYFKLOJQ@E@wLeYNYMC@KHQAADCDEBCAAKAAAGIGYEIbIJI@CES@CC@SF@@ICAJG\\QJSJCAKEAAE@EFCEW@QEyOUAG@WGWCSCOIKIGuSEAQQILSKHIQSGMI©GQSWwSUEICK@SDWRaRUFKBQCsIkSk¡ÅcYgUOG]Ee@UDOFIH]fUbkQH[DeAICECs{uaaKOU_cqIGOCsI]ABoFMDIJurgTmLaDICMUW±EGEE³iYEaBGEICMH@BIRDBHA@DCF@DDFALDFCDGTLA@BEFBDFDF@DD@FDBNBCFBDFB@FLDBDCFEFBBBD@HCHADDDAFAJFHHBDALLBDFBGNHLZTEDFFIBEFAHDDHBJDDDEDHFLFCDQJCFKBEBIFDND@BDBHCJFDCF@DFBCFE@ABDHDFBDABCJC@AECDA@@VFDCDA@CH@D@BBDAHEFCHCDAHIFEB@DCD@BCFBFCDSJCDEBCAADCBAAECI@IAKBGAAFA@C@@FA@BFB@BFCBAAED@FC@CFCAE@GFABCBABA@CAC@EBC@C@EHEBIAEDBBCD@BHDDABB@DCBE@CBCGC@CNBB@B@HABAH@BBBED@FBFB@JEDFHJBBBDBD@DCBCAE@CBABBFHDAFG@ACA@CDKDQEE@CAWDC@IN@FEDGNK@IFKPMIG@CHC@ICCB@DQ@@TAJADE@OPMJANBFYBCBC@ICBGIDIEE@AKUBHGJGFADFBDDL@NJ@DHFBHDFELCBAB@HADGDABCFADBBAJDFFD@DAJBBRLDDAZADEBCDE@IF@DAD@BBJDB@BCJOHKACFAJCBC@IBEFG@CPDDBFHLDBLCDFD@PEH@HCBBHDB@HFDDJNLHJRHNEHGFLTBF@DEDAHHJHTD@BFDDHNJBL@FCHDFCHA@CD@NPJBBIAE@GBGAEB@BAFBHZFBFCBCASZDBFDF@JBD@BIDCHHJJJBF@HNJH@BJNG@GDGBGD@BBFAHEBAFA@FERBBFBBB@FDD@J@DKBBJ@BFADBHBBFCFDBDEJ@FEHAPFPLHBNCNDALITED@NFFHRFBBHBBBHDHD@BHBB@FBBBFLV@BIJDNCNBFFBFAHBTPNAHHHCD@NDFHFR@NADCBALAB@BD@DBED@DDFFHGBADDD@HDB@HDDL@NCLAHC@GCGKKJGLEDCDBDHD@NA@AHBJCBCB@@DFBDBE@GJEDUBCB@DDFA@ADRCBARCDAJ@@IHA@AE@@ACADCDBB@FFF@CDABCBCF@BF@AFJR@DADDB@BDBCDA@@HAB@BB@FHCFDDB@BAD@DBDADBBDDBDHBB@FCD@BDB@HDDADBDNAD@CJDDBBADC@IFBJHHLHFFFB@LEDABFJDBDDJEHHBBBEJCEGE@ACLCHOBAD@DE@CCE@ECA@C@ADGIC@C@A@CHA@CC@HI@CBAAE@AJAJEH@DGJKBMD@BDB@BAF@BBFADHJFJEBABFB@ADBBHBF@DDFBH@DDJFNB@DD@BBCJBDCLBBEDAHID@DDABBCFGDABEHFF@FFFCDCNCBAAAHC@@AAD@BDDAFKFGFADBHDBAHB@AH@@E@GNG@BDEDCH"],
                    ["@@CBGDCD@H@DBDLBBBBBIL@FDLL^PTDBDABGBAD@TJVP@JADOHCDAHDHLDLHNAHFJBBBDL@DEFDHDD`R^FDABCFAFLDD`NF@FKFABBBHHBBEFIAEHOIWAAKAIG[IAAAIDYBCRM`GBAGOECEAgDEAAC@CDCACSOAECKG@IHCBGCAGC@C@IDCLC@W@KJGBE@MK]KCCAE@CBC`GDC@CAAGCG@GCC@C@GJC@E@CACIEC"],
                    ["@@@AA@ADDA"],
                    ["@@EICAAB@NGL@HIJEBAB@FLHDDJBHFVDFDN@BAN[CSGGQGIHEACACC@E"],
                    ["@@BBBAC@"],
                    ["@@BA@@A@@B"],
                    ["@@AAADDB@C"],
                    ["@@BE@EEDBD@DB@"],
                    ["@@B@@AAB"],
                    ["@@@B@@DCCA@D"],
                    ["@@D@CECDDB"],
                    ["@@D@@ECB@D"],
                    ["@@DBBACAAB"],
                    ["@@ADD@@AAA"],
                    ["@@EDBHAFBBF@JLD@@KF@@CAABGCAG@IC"],
                    ["@@@DBCA@"],
                    ["@@@BB@@AA@"],
                    ["@@AHBDBBHG@AEIABAD"],
                    ["@@EB@DDBD@BCCC"],
                    ["@@ADDFHC@AIC"],
                    ["@@ABDDBAACA@"],
                    ["@@IHBFBJD@BADADFJ@LG@ACAIDC@CE@IAAE@"],
                    ["@@BBDEE@@D"],
                    ["@@@BFBACC@"],
                    ["@@C@CFE@CB@FDFAHB@FAJBP@FAFC@CEGEAEEKA"],
                    ["@@DDHBDJHAFF@J@BH@FFBFCFBDD@HEFB@CEI@CJ@B@AGCEFE@EMGACDEAGEGCAU@GJIDAFDDCBAD"],
                    ["@@BBBAAAAB"],
                    ["@@BAC@BB"]
                ],
                "encodeOffsets": [
                    [
                        [115482, 22082]
                    ],
                    [
                        [115465, 22266]
                    ],
                    [
                        [115469, 22264]
                    ],
                    [
                        [115563, 22261]
                    ],
                    [
                        [115283, 22200]
                    ],
                    [
                        [115462, 22200]
                    ],
                    [
                        [115460, 22198]
                    ],
                    [
                        [115382, 22148]
                    ],
                    [
                        [115584, 22135]
                    ],
                    [
                        [115379, 22130]
                    ],
                    [
                        [115593, 22113]
                    ],
                    [
                        [115446, 22117]
                    ],
                    [
                        [115509, 22082]
                    ],
                    [
                        [115177, 23249]
                    ],
                    [
                        [115232, 22102]
                    ],
                    [
                        [115749, 22356]
                    ],
                    [
                        [115739, 22373]
                    ],
                    [
                        [115741, 22297]
                    ],
                    [
                        [115742, 22296]
                    ],
                    [
                        [115745, 22293]
                    ],
                    [
                        [115740, 22321]
                    ],
                    [
                        [115522, 22227]
                    ],
                    [
                        [115533, 22192]
                    ],
                    [
                        [115531, 22185]
                    ],
                    [
                        [115531, 22181]
                    ],
                    [
                        [115369, 22236]
                    ],
                    [
                        [115381, 22223]
                    ],
                    [
                        [115385, 22219]
                    ],
                    [
                        [115385, 22148]
                    ],
                    [
                        [115385, 22150]
                    ],
                    [
                        [115384, 22155]
                    ],
                    [
                        [115381, 22164]
                    ],
                    [
                        [115344, 22110]
                    ],
                    [
                        [115349, 22109]
                    ],
                    [
                        [115361, 22114]
                    ],
                    [
                        [115286, 22130]
                    ],
                    [
                        [115279, 22107]
                    ],
                    [
                        [115291, 22105]
                    ],
                    [
                        [115134, 22184]
                    ],
                    [
                        [115060, 21975]
                    ],
                    [
                        [115057, 21983]
                    ]
                ]
            },
            "properties": { "cp": [112.734942, 22.190431], "name": "江门市", "childNum": 41 }
        }, {
            "id": "440800",
            "type": "Feature",
            "geometry": {
                "type": "MultiPolygon",
                "coordinates": [
                    ["@@BA@DDC@BBAA@D@@B@AD@A@BCACKEC@CA@DABC@BECHACDCCDACBCC@BDCAAFCBDC@@@IAD@FABA@C@DEB@@A@CCHG@@AHEABAADA@DDCA@@AABCA@@BA@AABAABACADA@ABB@AAABAEFADABAA@ABBBACABEHA@@C@CABCDB@AE@AADAC@CHA@AA@DACC@BAB@AAEDACDACBBCCBA@DEB@BBBCAABABBBDEFDAB@ABB@BABF@CB@FAD@C@BA@ABA@@A@AADA@AGDCABAB@@B@@@AB@BA@CAFCCAABFABE@BGAFC@DGCFCADEED@CCHC@BACBBB@DC@BJCBA@EF@BB@BB@FA@@AABCF@BCFKFAAD@ECKHBDJJCDBBNDFF@BTDADHFDCV@BEDABEDCD@@ABA@FD@BA@DD@B@AADA@@@AD@@BBCFAA@D@"],
                    ["@@DK@KAMEOIIGKYyGKKIUCYA[BWFOJGNInAPHLVRPPbpJHPBPAYJG"],
                    ["@@BDflFJPtDBD@DGDM@KAIUWYeIIGAEBCD"],
                    ["@@FMAA@AAACBA@AACFAACDDDLH"],
                    ["@@L@LAfONGJIDG@GmÅCYA[DoAQCKGGKEOAKBKFILGXCZELOTWdKHKDS@cGIBQHKBM@_IO@iDO@OEiWeS]ImK}EQEeQMCKDEJANBNFVHXLPbPXTZ\\TPRFJJPhVfXbTDZCLSP@TB\\HdTPDPBN@PELEHIPiFGHCL@VDJDT@T@PPJFLDjF"],
                    ["@@KUk»CEEEEA{IIBEBEFKXJP@FAFCDOEEDQpEFKD[GOFULMDGDEHEH@FCF]BEDEZHDP@DDPAJBPN@NDFRBNCHFRRHBFAHEb_FEZHPDVJv@FC@EFCPBNDTTJDXBDBDABIG]_[KU"],
                    ["@@LAH@@CDAAAABBCCADAAEFBBCF@DAFFFAAAD@FGDAFAFDBHENDBBDGHBFDBBFFBBF@@ACD@FLHA@LHFDCDHLAH@@EBCDACM@EBAF@@AFAB@CDBBF@DDFCFDDFJDBCACF@BGDAFBBEJEFKCAACLGDDLBFEBBBBH@DCAFHCFB@J@D@DAFDFEABHBBFCBDD@AABABDB@AADADD@BDD@MACBEACLDDIHBABCABDCFDBADBBB@@E@BBBLCHEIADCDBFADBDCBJFABDCDBBGHABACAB@DDFEJEB@C@@EDA@ABBDAJDD@@J@^MJBPLDCCEFABDD@BICC@CC@AMCA@AJB@BDBTBPCFH@FMB@BGB@FKF@AA@@DB@BDA@ENFBHAJGDBDBCDBBAFPFCBBFCAABAD@DID@DHDABEAA@@LFH@HEHDNBDLD@FDBBDAF@BXHABBNGH@DD@@BABAAAAABDDIFA@AFCDDB@FDBABDBG@@BD@CDPJFLFDJCBF@@BADBFL@D@FDAABJAJBDGJGBCJAABB@DADCCCFABBDEDDFABBABF@CC@ACCD@HJAGCA@OCECM@CDAACF@AAC@@CDBACB@IKBCACDAACB@BEAABCCA@EB@HFDAZDBABED@BEAQJEHIGCBGAAGCCAD@BKBBDA@ACABAF@BDF@BE@AF@FCPMFC@CBABDABABH@CGJIGGDA@CFEFA@AEAAAFC@CMGD@@CABAACBGCEEJADA@EBEB@DDABEHDBDFDDD@BA@EFCBDCD@BDAFJFHDBBAD@@ACCDIH@BBDECGD@@EEGBEFAAA@ECAEGCAFCDCFBBADAFFB@HGFCFEFBAKA@@GCABD@DC@AE@ACEIEEBCABEF@HGJADCCCBGHBBC@CFABFDBDJDA@@@B@@@DD@ADBD@CJD@FBEHFHCF@CHHHFEPGTDJLDBACCC@ABADCCCBCBCD@DLABCAAB@B@FBDFB@@CG@CDABDBAAQFABC@CBEACBIJAL[uekWkMgCD©JWCaOuiyq{]Y@b@HAPA\\EPCXMDK@EBAC@AA@@CCCADA@ACEDAA@CACCCC@@EIGBGGCI@ACA@ED@BADAAMHBDCBBBCFCGA@CDDBKFAACD@BGFMDAC]R@B@FCCCB@BICMHAACFAEKDNFBHCB@BD@@LDBBAD@DDDDDHGB@@D@@BB@BDB@DDAE@@HHBA@AB@@ED@@ADABBD@B@@@DBEDDBEBB@@FBBF@BBD@FADD@BCBD@BBC@CJFHFBDLD@BFCB@BFDKLC@EFDDABC@FBADIAAECACDCCABEBADC@CDAFCDBFCBBDCD@LCFDFAD@NEJCDCEGAAHGFDBGAED@B@DC@CD@FBBA@@LC@C@AFMDBFCDC@CCEB@ABA@BB@JEACCDBAACE@@BEFC@C@DDAD@DDBF@BDBJE@@AEB@DA@AFD@BDCB@BF@DEADF@BB@DDDADDBADB@HCBDBAACB@B@@DB@BADBBABDDAJDBFFCDDCB@AAACB@DCCBFOL@FBADBAB"],
                    ["@@@TFT@T@JINIHILERD`erBLCH@H@BFFCFCBABDDBDGNC@CDDJCBD@ABGFFLB@@FEDAF@DD@BLHDFFAJDDHN@DADJJHP@FBFCBBFFF@DDBF@HEDIBMFIDMCIBGLABAD@DE@EBABDBA@CFABBJ@@HAFFPDDFA@EHAAAFAPDDEBDH@FEFBBDFA@@BNDAFDF@BDAFJ@BEJAJDHLDFFCCEHADB@@@CFEBBFD@DDCD@BAF@D@DBBBDBBD@DBBB@BDDABDBABDABBB@DBDDABDEB@FC@AAABC@DHJ@AHDDADIDC@@CABAHBJHJ@BD@BFDB@DPAFB@FAD@JADBBAFBDCBBHFFFFNABBDA@@ABDBBABDCBBDCDGB@FBBADA@@FC@ABBB@BB@DBBHDFCBACCD@DJDDFAFAD@HBBADBF@HEFDDEDBDADHH@DABFDIF@FLHAFFD@DFBALHRHFEDGAABAFDBJDPLPHBFLFB@F@FFBFF@DDBFAFLBFCHHNE@GN@BA@AFBBAAA@AFBBABCFBFAFDJCF@HGD@@CFCDCDEF@BB@DDABDDAD@B@BDHC@BB@BEBBADHDHA@DDBDA@B@F@BJ@BDABBFDD@BDHBFF@@BDB@CDECGJECCBCN@AH@HABBFJJD@BHF@@HFFAHPBDCF@BACCAEFCD@DE@CDC@GFA@B@FBBBHFDHJDADBLEDBDAHFDADBFA@FJ@DBDCBGB@HFJ@DCBFEADFHACABAFB@GDBFAHAAKDAB@DCBBBCHCD@BB@AFBBABBBCFCRBFBD@PB@ABBFA@DDB@FFDNLFBBCD@BCJ@DBDJADBDD@@DCBDD@DFFCLD@@DLGHGXGTYDAFBDCJCDCD@HBH@HDHGD@DFLAFDDCHBH@BDDAFDPGDIBAA@CEBB@CD@C@FADEA@@DE@@CDBAA@CABC@FABBB@BGBA@C@ABBBC@FB@AGBEGIAACBIIADMAAC@CABA@BCC@FL@HC@AAC@@AC@@C@HAB@D@@DC@BEDAFCDIEBJGBAGGBCEA@BA@CDGACCGD@ACA@BEAAE@@CC@@GABAACCDAC@AIAABAACAIBSAG@EFCFGBBDPLFBDBBDBHED@ACAA@@F@@EKAA@CDC@AAEFACAKHAF@F@DABCBAHBDDF@CHDFL@BA@CCKJABDDCB@FCCA@CFBAEBCCCCBEEA@EAADECAADACCBCABAABAACC@DACCB@@AEAD@FAAAAB@AA@A@BAD@FIA@CAADBBAB@A@ACBDCCA@@B@H@ACDBB@KGCFBEC@AC@ABCAG@CDAAA@GBIBA@CCGBCBGACE@CACGCB@FCA@CCABCDCC@BBEBE@DECD@EDA@AF@@ADAECAEDEBDADD@BBADB@BGC@@CDADB@AHCHM@EAAFAGA@ADBBADD@CB@DD@EDAACHA@CHABB@FDB@BBBF@B@DGAA@CDAD@DHAFD@AJDB@DDBADFEDADDACF@EEHEBKIC@DGCE@AACB@AABCACEIBEAEC@EDECAFEF@BADBBACCGA@GJ@@AB@ADFDDCFADEBDHAFFB@@E@CKC@EB@CEEBIH@BCBAAEFCA@ANC@CFBBCDIAAEAAFE@AB@DADG@DEB@FEBED@CCFBBA@AEAAB@CDBFAJFADG@@BD@@DDBHC@CAAACFAEEDC@KBAAA@C@@BDDFDC@BDAAA@EAC@C@CDA@AKEBCDABG@@@CC@AAFGHADAG@JADH@BBBAHB@EB@DDBBE@DB@@CBFF@DBDEF@FEDB@@DOH@@GE@BC@A@DCAAB@CCBC@@AC@@DCCE@BGC@DABBBACA@BC@ABA@BCDAB@FECBCABCAABCC@CFC@AAC@AAFADDFCAAABA@@C@AAAHCC@BCBB@ACABADBFCEFFACDDA@B@EB@B@DCD@BFD@@CJBBCD@@ADCB@AB@DFBACA@BA@CDDABFA@@BDBABBDAB@B@@AD@AC@EB@BD@@@CB@AHDCAEBABBB@BDBADJBBDABDB@@AB@DEABA@BCECFB@AEAJB@AACDBBDF@EAACDB@ACCDEAC@ADBCA@EEA@AAA@AAGFDBAACCCDADE@GBBBCBB@AF@BBDC@FD@DCADHBHKC@H@BABEDAACACBDD@@GDA@DDCGCAGC@@ADCE@AC@CD@AC@@@ADC@BDGE@IDCCAFACADE@ADCADEC@@CHGAABACABCCC@CAAE@BCCFE@@ADAACC@BEB@@CC@@@BA@CAAA@FOCCD@D@FE@AF@BDABDCBDIFA@@AAB@BFADDD@DCAENCBED@D@@KB@AA@EDCD@@C@AFCHBCAHEBGHBDFDCFI@MBCCEDE@KDCACDAAEDCBEDCD@BCFABADDDCDBBFJBBCEAD@BACCFED@LKEC@ADAAEC@CKEAEGDID@AAC@DA@ACCEBC@AAE@AA@EA@FACAFCCA@@A@C@AACB@BC@@FA@@BABGG@@BFCCA@ACA@@AC@@@HACGCCCCC@ABCA@KC@@ADAAGMELCBFDEBBNGJD@ADADD@E@A^QBDNCHE@ADCBBLECADCB@DHDEAADAACNGBBBC@AFCB@BDJ@HDAHJH@FD@DDBD@DBBFCBDB@BCDD@DB@@BBDFAL@NCDWFOB[BO@G@aQMGEKCÁGyMI@KDcTIBI@IAUQO@SIEI@IEGMEU@IDOLE@CEYGSIKKIGAE@MLIDC@ECSWCKUO]IWBUC]KOOAGAEG@WUQQOQKKCK@MDMCIKIOCGJYlBZCDE@CAEGISCUDQHWEKokAMA]Gi@WDkN]dqPORAR@L@PGbWXGTLLDNB~@L@|QxaLEHEVFg@CU[hWJAtBbPPBJO`FSHaFsF_pµpHQBQA[ImGMq_s}Oaa[UKWCQ@_HIAOGw{SIWEcC[@GEAKECE@GLGHOFWDgCe@GAOQa[oQmCSBeDEDKPuzKD§EEIACCeoeWWGQAOFOJEJAN@LP@dCbYnSPk^KNIPARBNHTLDLBTJTdFhC^ITGH¡^_ZObGZATDt@PUvS^KHSFM@kIEBCFW¬Ee²ey²OtC`BtFLT¶M@RP^¢LRBT@vIÖGLBLPRLH`BlCz@tHNF`lLR^BJ@JCD»BqDX"],
                    ["@@HF\\JNBHADCFIDGCICCE@wHEF@BDD"],
                    ["@@PHH@X@FABEAICEEGAAIDIAQBEDAFAFFF"],
                    ["@@IV@FHFH@CNHLHFNBF@POFIH[@IAEKEGBAFAFCFCAAAAIOAMD"],
                    ["@@CB@BA@@CC@EN@TDBCHF@ADBBDAD@DA@@BCDAACDAAE@BAAB@BCCA@CCADKCAAB@A@A"]
                ],
                "encodeOffsets": [
                    [
                        [113086, 22469]
                    ],
                    [
                        [113301, 21439]
                    ],
                    [
                        [113210, 20816]
                    ],
                    [
                        [113372, 22044]
                    ],
                    [
                        [113171, 21585]
                    ],
                    [
                        [113265, 21675]
                    ],
                    [
                        [113161, 22007]
                    ],
                    [
                        [112421, 21972]
                    ],
                    [
                        [113045, 21611]
                    ],
                    [
                        [113071, 21668]
                    ],
                    [
                        [113056, 21175]
                    ],
                    [
                        [113036, 22282]
                    ]
                ]
            },
            "properties": { "cp": [110.264977, 21.274898], "name": "湛江市", "childNum": 12 }
        }, {
            "id": "440900",
            "type": "Feature",
            "geometry": {
                "type": "MultiPolygon",
                "coordinates": [
                    ["@@BACAAB@EPKAEDD@CDABB@BDAAAGBCEA@ECCBACABCAABA@ACA@BDABACGDGH@DD@CFDBBCF@BCBDBEDDJCD@AH@ACD@B@@BDC@@DBDF@"],
                    ["@@CLB@BB@DAB@@JA@BF@AIACE@CA@C"],
                    ["@@GH@NHBHJF@DDBBBBBAEE@CBICECBA@EGAEAA"],
                    ["@@BACA@CB@@BLE@EHA@ANA@EEGODMAIA@AIA@BDBBND@@DDDAJC@ACEBBFDBDEBBB@DABB@BBB"],
                    ["@@@BDAAAA@@B"],
                    ["@@BDDBJDBA@CC@CCECACAB@F"],
                    ["@@@BFCBBCECB@D"],
                    ["@@OKIA]NI@CCBIACBAB@FC@@@DFAFICE@CBABDBAHGAADCACEBAICDCAEBCACDJBGFKDAA@A@FA@AABCCADEACDBBAGACJKCBDAFBD@NCC@ACCCBBBA@ACABBBC@ACEDAAAGFBCEBE@C@C@IEAGDBECFGAAA@AGFKACCIFAB@BFDELIFAFEACBAHE@BDADICCEECEDCCE@BEGB@BE@AB@FDNCBAD@FG@KBCGCDGE@KGBEKC@BD@@AEEAAECAAEHGACCAFMAGECA@IFCFC@BBEBEECBE@ADEABFCBDBADBABBCB@DO@GD@DD@BHHDCD@CCB@HC@ACBDBDCBAFABG@D@GLGABCCDC@@ECDAAE@@BAAADAA@HCFCBDDBDABECBH@BBB@BFB@FDBCA@BBDCFDD@BCABDFBE@ACCABD@BIAFB@BEAFDADB@BACFA@@BA@ACCBAACIABACA@AAABBFCDBGA@@D@@ACA@@FBDC@@BA@A@CBAAABAC@@EBBACC@DABB@BDEA@CBAA@CD@BC@ADIA@DC@AEC@CDA@A@@F@ACBDCEBFEEDCAABDB@BAAADD@GDBB@B@DB@BABBEDCCEBBBD@BBD@DED@ADBBADDBDAEFA@CBADB@BAD@@ADBABAACBD@AHF@DD@CD@@BD@DA@DBADB@C@BADF@@HG@CP@@CAEFE@CFCAE@AE@DA@@CAFCA@CFAA@BGAA@ACGIBH@CBGBEHBBD@@D@@AHCBADLF@BCB@D@DBD@FBBCB@ACDCEAC@@@DBBAB@LCDFFEBBDBB@DGDCA@CC@@AH@BCIEEBCA@DBAFB@BABEADDC@AFEFA@CFH@BC@CBAF@BEFBBBCJADEA@DMD@BDBFEBBDA@AJGFADFA@@FLD@D@FA@EEGBACCFEBCDECBCA@@BI@@HHBDDABCAABE@EFDBCF@FFDFBJADFDBBA@BDABBF@HD@CJDALGFFFE@BDCCCBEFBCCA@CCABIC@BECGC@CB@DBBCHA@E@AA@ACA@EAAEBAB@BGBBDCB@FCCA@@DCCABCA@BHBEBBD@FGLGD@BCACB@DD@AHA@BCAAC@BCACCFBFFDCB@BE@@BCB@FDCAD@DJCAAD@CDADDB@DDB@EDADHDBF@BDAHADDH@DABAJ@HBBCB@DBHAD@BBDD@AFDELF@BHFDGD@@DB@@ABABB@BBADBCLDB@DDBADA@BB@ABHC@BDCBAD@@CBC@EDHFF@BBADBFEA@DD@@BKHACIBDL@DABK@CEDGE@CCGAABADCBE@E@GBBLBDFEBBD@DCB@LB@FE@@@BBBDC@GFCAAAACKECOAAEHED@FBHATBJBB@BABBBBJD@CBDDBBBA@HD@@DF@BBAFB@BDC@DHBDCH@DABB@DFHABHD@DAAIJFDCBEFC@ACD@@@CBA@G@DD@@BD@BBD@@GEKD@ADB@BA@DBDNBBCJJDABBHJAFBHA@@EADAA@B@DABAHA@AAEBD@BA@DBBCA@DF@@CB@CFEBD@C@@DAADFB@ABCJCBDBFFADDH@DEB@DD@BBF@DAABD@DG@DFCCFDBDECHB@B@BEAFBBD@BAAEBBDDBE@DABA@@B@@@AA@ABDBHC@BCBBBB@@@AB@BABD@C@EBA@@DAEABA@BAA@CBFEACAAABBBADAAA@CFB@DAADDACBBDFCBBA@ABD@BD@CBBB@DGD@CBBBF@@BCAADDBD@@@GBAFDBABAA@BBBBABCFEABBB@BAA@BCBDBABBBBA@BAB@@DBBA@BB@CD@CCBBBBAGF@BH@DG@D@BA@CFD@B@BA@EBC@J@@CDDABEDBACD@AB@DBBDCCDBBBBBGAFD@BA@CDBD@LFBDADB@C@@B@AC@B@AB@ACDAC@BC@B@EBAD@AC@@B@@CBBBA@C@@CABC@@EAB@BC@CDAFCBAFU@CDGEBCGACBCB@DEJMHAFCA@HCAADEBG@ADG@GDE@CDHPDD@LBB@BCBBHEJ@HJ@FCFD@B@BABGDGA@BDHCDEHADCFAFADBHEFDHFBBF@PENDBF@CHDB@FID@@DFD@HB@PADE@AFEBANDBDBDAFEFFH@@DEBABJF@BAHEBD`INO@IFCFC@ELGCCBCFDFIBED@JAJ@FFBDFF@BDDFCNFHF@@IDAB@AJBFJTF@NSBE@G@ALADEHCJMDAH@XLCRJBBF@FDB@@JCLHDJBJEHFJDBDADDFCTANEPK@IBAFAFDFCBCACDEFKPIb]JGAEIADGHCV@FCD@JDLHLBPJBDAPFHHF@HDDTP@FFFHDBDFBBBNGREPIP@ZCBEGECEAUFIJEL@HDJ@LGFIZHHJNDAHFFFBPCFDBHBBHBFAD@ETALED@HEFCHEFO@ABEFCLEJAJBJBFHH@DDFTLLAZFJDNR@DGHBJHFNFHAJDBD@FJLDLHFD@DC@CLCLOP@NGFED@LDL@^HJLAJEFYB@XOZCBEHCBGBIFANDNKXCLABYJECCIE@CDAFCBIHCJ@HBHFDAP@FEFCHAHLNDJAlEHGHYDAD@NMNERFHDBLAJENOPGPAJ@`FLR@FOZDJAJBDFDBDBPHJHBNADBQ`@FHN@FADMHCFBDXFFLCTCJ@DDDJCD@FJNCHMVMFUFGND@PBHJJHDTFPHNBTEH@NJHCFBTGJ@JBVRA@DNGP@FBHD@`EDBH@JAFCHAT@LDFBHDJLFN@HELBBN@JDLFP@FABGNID@BHHFNF@BBHLBHFD@FBFBFIHCFBBDBBVBJAJJBLAJDDB@H@DAJDFHFNJJBHDDD@@JL@RBBBAFDHDDF@DAF@F@BCFBBEAADA@CLGFGHCAEBI@GQODG@CDCBMFG@GNIDI@GAC@EPAHELARUHGVCDDF@FDDADFB@HGB@DEFA@IHCHADADE@IF@DAL@RCJFFCB@D@BFFF`HTAHADCH@B@@CDADADCH@FCBGBCECDGLE@AHCHETG@GACECUACBMCMBEAEQ@GACCCCMGCACGC@GGMAAAGBIDCBCBABABBDBBJHDDEBCBBFH@HDDVBDBHHNCDJFDBAN@LLDBB@BEFAFKB@BEFEBBBBFCFBFFZJFCBCF@DCBALHH@FBHAFFDABAD@LCBC@ICC@ECQIMCAAEBAFEB@BCCABABA@KDGAC@EDCAADGJCFBDCAAAIAA@GEC@CBCFCBED@DABDLADDDAHBAFFFJRVAJDB@BCN@HRDD@DFDBDADGBALCBBJABDJDDED@DABE@AJJHD@B@BHFBBHJDD@HG@AFABADABAH@FEB@DENGDC@CDCLALHDHD@@FHFDHHDBBCF@LBN@@ABNHTDAHA@TTBDABBBLDNJH@PHD@DCJBHABAFCBGAIAC@CDBFDHECA@ABCAA@EDCEEL@@ACUGAAADEFMFDADDFDND@JEACFEHCDBBCF@DBBEB@DBD@JBBDHAH@DBHBDCBCFCBAAIDC@CAEDEAEDE@GDEAKEG@EIIGC@EGCEEAG@@AACCGCAEA@EEAAGGCCCECEGGIG@GMEEEGGAEEBADC@G@AEA@ACGM@CBGGGEAGAGDI@SHIAIG@AIAIGIFI@AAGEICCGQFCJE@GOAKAEUOKCCKCAE@AAEFG@GA@CKBGEDGGIGSAAE@EABCFAD@DCDCB@@CA@GG@EBA@CCCAQA@@CDBBA@CAE@AICEBABK@ABSFECMAIEAEAA@C@AGA@CGCA@ABA@@CCAEEGCGAIB@GCCC@AABAACAAA@ADG@CAACABCEI@IGGK@ACKKE@CEIJQ@CEC@CBAJEBEGCAEB@@CEEEAGBA@ACKA@CE@EGDOHCDM@EEIBECA@CJMHC@E@CBA@CAC@AEC@AGDBECCQEBE@IDABAIGIA@AIQ@CJABCAAEBE@IBE@DIACAA@CCCEAACDKA@GIMA@CECDAAA@AAGHG@C@EHG@ADCRCBCFCGIBIBGACIEACICAACAGACICC@MBGFI@CEAAE@CDABG@CEA@SBGHCDQB@FCGMEI@IDABACGDKDABBDCAADCJALEBCACHALHDBBAFGFEAGPMFA@CJEDBN@JFRABEBGDABMD@JCLBR@LCBBNB@EA@BGPADABAHCBGBECCFCBQCEFGCC@GFGEGGAAEICC@AAIBA@@E@EIEAGAA@AAACCAEC@ACACGAACA@IEC@DA@CFEFAFGBCBE@@DCCGECACBECGBECE@CJ@DC@EBCFBJCLDFCDIDBFABFHEJ@HEL@BGFGBG@IDCDMKIAMIG@CDEBCMI@CCCAYCAE@AA@IAE@I@CDADECG@CFIJ@DG@ECCIEECAE@EDEJGAA@KEAAIBEDCD@HDBDADH@@ECAAGBALBHHLADGXBK@EMSQA¡Y[K{aWMKECKCUOCAI@C@_]IEU@MGE@C@AFBP@XO`@BFBnQF@FFBJAPPZJFBB@D@FIFODIKISKyCSEuMqB]C_GE@IDE@cCWA_EuUioWK\\IBAJBDAF@DADEBBRABACCB@DDH@@EAAC@E@ABADBBACKC@ADADDDCDAB@BDDBDCAIKSCOHEFGGDGE@GDGEAF@EIC@DACBCC@@C@@@A@@CBCICAAEEB@DADGAAHDDCDIBGHE@AFDBFAJFDF@BBFD@@CACDB@HB@BLEAEFEDGHA@EECBABEACDEDDBFHDB@FBDE@AFFH@FC@DF@DCDAAG@CJDD@BEBIIEICB@ADCACED@FCDEECEA@BGBABACCA@AF@FCBIBFFHDDABBBA@DC@NH@DEDBBFB@BEBEF@DCBHHIJDHG@BABAACAB@DEDONEDE@@BAFE@ACE@ABDB@BCBAAALC@DBHDBBAHHDGJIFBRAFC@AFABYCCBGEAB@DDBADBB@DABA@BDCBBDADJLA@BDCA@DD@BBE@BDCB@DDNDF@PDBBHGIA@A@DD@BDDE@BAAAEBCCCFAAEBDDCDCBA@BAIBADIHCHIAEBC@BACB@E@CEKCAAB@@AEIDECEKOIDCC@@AH@CABACA@ECADCBEB@JECCBABBBBBA@AC@@CHGAMBAWG@ABEACCA@EKCACCMFG@GEG@KB@FBBAGC@CJC@CBCBADBAEDAOEBEAABC@AEAIHGBEAOK"],
                    ["@@CC@QBEGEEABDG@A@@@DBCDDA@B@BBAAABABADBCHABC@ABB@B@@BBABBGBA@FB@BA@DDCBD@BDABBBBAADDDCBBBFDBCFBBAAABCE@DG"]
                ],
                "encodeOffsets": [
                    [
                        [113161, 22007]
                    ],
                    [
                        [113136, 21962]
                    ],
                    [
                        [113854, 21884]
                    ],
                    [
                        [113375, 22037]
                    ],
                    [
                        [114058, 21964]
                    ],
                    [
                        [114049, 21951]
                    ],
                    [
                        [113891, 21919]
                    ],
                    [
                        [113364, 22038]
                    ],
                    [
                        [113030, 22300]
                    ]
                ]
            },
            "properties": { "cp": [110.919229, 21.959751], "name": "茂名市", "childNum": 9 }
        }, {
            "id": "441200",
            "type": "Feature",
            "geometry": {
                "type": "MultiPolygon",
                "coordinates": [
                    ["@@@CCFD@@A"],
                    ["@@PMDI@KFCDADFHDF@PANAXDJDFDDH@DIV@LRP@XDRBBNDBDDJDHFDJB\\GDCBABGBCJMHEFEFMFALBJCFGDQFIDC^KFIDMRGNBDBDFBDAHBBP@HBFBFFTBJHHLXZBHCVBFfFHCJGD@FFJRDNAhBHDHHHEdCR@HBH`GNBZL@bEfIRALBJFLFBJCVQZDNMFKD@FIPQLCVADCFAT@FGDOFKHCRC@ODELKJEBAHBDCLQFUBANBLDL@D@HCDIJsHa@ME[CIAGAAA@EDA@BSGEGKAWCEICACHQ@CKCDGDCDI@CKKAC@KBIBCHGP@FCD@RF@CEK@ABAD@PLHBHANIL@FCDKJWGK@GBCHAFBDABEBGAGAGCIBGBELID@@QBEJODSHIACGGMGAEBEHA@GA@@CJKAKDMFCTCJCD@LBRBFHDBRABAAIFKJ@DDB@LEPOZGN@TIJGT@PED@F@NHDHJBH@HADEJEFELAFMCSPMFEBECKCEAAECCA@CFEHA@CAAEAAICCC@AAAGEC@CCC@EGA@ADEHABGACKGEGDCBSB@DGACIGOGKK@EFAN@JDJBFAPMFAb@IU@CHE@CCWIK@ILM@EBCBCL@fLH@HEJA@CII@GCGACEEGMCCGACC@EIKGCDKVHDAIUKMHEBCB@BCJABGBCFBLJFDJ@@CCCGSDGF@FJHDLADCHBBFFBD@HCPGBI@OFGCOIKaOKCEECK@YDCFCBEF@Z@FGCEBEDCLEbBB@BECE@G@EBABGIBCA@ADIDM@KAALMHBVAHFFANCBONCD@TOAWGY@QBOAAGDEEGQ@GCCACYIMAAECAGQEKBK@GMIAC@]AIMIBIEG@iDCLEN@LAFDBDGJBJALPJbEPClmH_XBPECUSiImGCIGIQIGEK@KQMICOQEK@CNNHARGDEBDH@@CEABEB@@CDD@GCBEKWQK@UDGaS@BH@FBDDBBDAFEHBFADA@AHCBEEBECEBMAEBAA@OGCB@JGL@BJLGDGAK@ECBIBAFB@AECIC@MCG@AFALAAOFQBGASBEfaFKBKByDQHSFIHENUASBU\\DK[IUMOMICEGE@EBADBH@BD@DABB@@@DCBAA@BCFAA@CBCAAGBAA@ADBDAKAA@E@@EI@@@AGKMCA@EC@C@CJCAEHAHG@C@@ECAEAKI@ECKDADEAIL@BECIIGBEEK@EGGKBA@EIC@A@ICAEC@AB@DA@GLBHBB@DABGDAFEAEBEAEBA@II@HAC@EC@CBC@ACCB@@DACABABBFA@EDCDGFEF@DH@@ACD@DFA@DBDCC@ACCABAFA@FBA@CB@BJBCBHDABBACABACDCCBCABAFABACBC@BCDCEDABC@BAC@A@FEED@EAH@BCBCCDAFKHA@E@@C@ECABEBDIACE@JEDEEEEBCC@A@DGJGACEFCCEGCC@CCGAGBAGOBICE@ICABMIBEWECAGAAJMG@CCAA@CFAECCGDGA@GGEEBI@MFMJGDCA@ECCDCBAEA@CBCFBBKFGFBBCHEBCAA@GCABEAEEDCKA@EFEIC@ACGBGCCBACA@G@@@A@AAIAADCCBICCE@AFA@CFCABHEHA@SIGDEFC@AAAGBCFECKIACCG@ACCM@CGEI@KCIGG@GDKBGCCBABA@CACGSIGAKEMACEGAGEG@CACBADA@C@CECFABGJ@HEDBDFD@BGHA@KHAEWIMCCBADG@ACDCAAA@CDGAKFMEA@ADKAGDC@@@BLF@DFBHF@BADBJ@BFDBCJC@ADCDAFKHAD@BGBKCCB@DDFADADDB@D@HCJDDADBB@DIDBDGJ@BGFC@@LCFBJFDBBCH@JBDJHDH@XCBCACBAFA@G@CAE@KEIFG@CCEAIIGBCDC@AFDDDFAHBDABC@@BFF@ND@@BAFBBED@HABG@@BDHH@DCD@BAF@ACDABCB@DFB@H@@DB@HGD@DD@HFDABADGDBFAHCDIBAB@DLF@B@BAAABBBH@BBAFBH@BF@@DDBAFBHBFD@BJBBDHBB@DI@CFGBAD@BAFHLCBBLC@BHCFA@@FBJFLFDHLBLDJ@HDHFB@CLCFBDDFB@BABDBBFFFDBDFCD@FDF@F[VANA@OBC@GFEDE@ADI@AHIKQKKCoEMCKGceic[AWBYLQDGFM@QCKA[PE@E@IGUMMKAKBIHCFEDqDQFGFGFCJCZCL@HINMFODMiB[JUPQFM@OISGKAoAFaJMJSHSHQ@GAG@ePYEaDMDKLSdCFIDWFWA_@eJcRQLSJIJAFBHHLHHJBXDTJLPDF@JANCLCFOP[bevCAG@CAFKDDBA@ECA@GGEGCAIDEAECABEACC@@GE@EBGEE@@BCDCEMDCEEBKCSKADBBADCCICDEAAKLCAEHDB@DELIBC@MFC@@DD@@DDD@DGDADGFCBEFCCCD@DEDGD@AQAADIFIDCFE@AAOAAFADGCBEDCE@CAAA@E@CSJEHANF\\HLJJBHDHDNFFPHBDDZCFML@FFHADHH@NDDAHBND@FL@DEN@BDFDJFBELDBBLVAXCN@BRHJJBNPAFDDJPJCF@BHD@DD@LPR@DDJHFDFAJALDH@FBF@HBDNDFNAHEFDH@PALEH@HAFCF@DFFBL@TNBDBFCJDAFD@FEBEDABFFCVDLFNEBHPNJDJBJEGC@EFBHABDF@TNNFAGBAF@BCJDBF\\KPDBLCF@VDBBHABPNBJNCJH@JCBPXFAHFF@DAVFENDRFFABKBK@GDAGCHC@GOCDBDDBAHABGCI@KDA@GD@JGDBDFDP@B@@HCJBBBDEHDFBDCLBLCRA@BFFBCNFBPEB@AJDLDDHF@HDJEHHLHBBXHDFCFBFAJGHI@AHCBBBABBFAAABA@@HAAADA@AFB@LBBB@ANDDBHDBJBFAJBDABI@@D@@CDCDCCAHEBBLA@CB@BCBDF@DCBDFAHBBCBABAFABEH@FDBCFA@DFBBCD@ACBADBHEJFDAFCFAHD@DJJB@HGDDPMDD@HCHJVABH@HDDD@JAFDDABABBDDD@FCCE@CD@HFF@DCF@BDBBNIHC@EHBBCNDJFHB@FHBHCDDLFBDABAVB@GDBJGDBFJB@LPCDDDAF@DCF@BGF@HBFDD@JFBLEFBFMFCBBNE@DJFFFZFF@DEN@BFAFCB@DP@DDDBBDABFTDAJLBFFFHBDDALML@F@BW^BPAdADCDEDCBCAGDCBOdALEHKLABFNAF@DKFERCRBRAJHR@HL`@JAHGFIDKLADDVDLANB`DL@L@DJBVKZCN@FBDBDFBNHBDDLAJID@DBDFXDHAFAROPGFIBIBEHI"]
                ],
                "encodeOffsets": [
                    [
                        [115497, 23554]
                    ],
                    [
                        [114675, 24787]
                    ]
                ]
            },
            "properties": { "cp": [112.322529, 23.551546], "name": "肇庆市", "childNum": 2 }
        }, {
            "id": "441300",
            "type": "Feature",
            "geometry": {
                "type": "MultiPolygon",
                "coordinates": [
                    ["@@FDD@@A@CGAAB@B"],
                    ["@@ABF@@@CA"],
                    ["@@AB@BB@BAAA"],
                    ["@@GHALC@CBBFCB@DBBHDDBJAHHDABGD@J@DEJFD@DCDEGE@AE@@ABE@AMBE@CAABMKE@"],
                    ["@@D@@AC@@B"],
                    ["@@@BBA@AAB"],
                    ["@@BDB@BEAACB@B"],
                    ["@@HHFBFED@F@BGACCAC@AD@@EEEAAECAAB@B@BAFBJ"],
                    ["@@DBBECCIB@BFBBB"],
                    ["@@@DFABCCACD"],
                    ["@@BB@FB@FA@CAA@GABABCD"],
                    ["@@JRNLFBHAAGGEBEIIG@GCCD"],
                    ["@@BAA@@B"],
                    ["@@EAIHBHADDB@DFABCBIDC@AAA"],
                    ["@@B@BAA@AB"],
                    ["@@BBBAAIABBDCDB@"],
                    ["@@BAAACA@FD@"],
                    ["@@@AC@@DDA"],
                    ["@@DDB@BC@GAAC@AD@F"],
                    ["@@EBMC@FABAFCBDDAFDABBBDDBDIACBAFADB@EJADA@GDE@EAKCBEF@HCD@FAB"],
                    ["@@B@BAAAAACB@BDB"],
                    ["@@DDB@F@DAIECBAB"],
                    ["@@AACDB@DA"],
                    ["@@@BBB@CA@"],
                    ["@@B@@EAD@B"],
                    ["@@BBDCACCCCDBDBB"],
                    ["@@BACABD"],
                    ["@@BC@AC@ABBB@BB@"],
                    ["@@B@@EA@EFF@"],
                    ["@@@BBBHBCCEA"],
                    ["@@@BB@BCA@AB"],
                    ["@@D@@CC@ADB@"],
                    ["@@D@BA@EDE@G@AKB@B@HD@AH@D"],
                    ["@@@DDBFA@KACGD@H"],
                    ["@@BAEDDA"],
                    ["@@H@BAACC@ABC@@DB@"],
                    ["@@@DB@DCJ@@ECAEICBAEC@EB@BHPBA@D"],
                    ["@@EGAKDCJID@D@ACECCBMCMK@EMI@K@MGODSC@HMDMRADGCCBIF@FIBGAESW@EHUBACG@GJELAJ@DABC@GEECCDCB@BEDCHADED@DPPXHE@CL@VgDKACLGJ@HDDDJEDKBMAGJ@BDNKHALDHHXHXLNCFBDEDAHBFAHGJ@JGLAAABCHIBGCCBCFKJBFADCB@@IDCLQBSDC@CDCDGD@FGDBDIFA@KAC@GCEGEFAACJKCEAEFAJOF@FCACBMFEDEHADEJFDABCDAXIDCB@JIFG@GE@AGHEFALGH@FF@BE@CBDB@FB@AJABDDAD@BDBHADAH@DBAFDBBHD@DD@BHDBCDBBDJBFUB[DEHEHCPAXFF@FCFEDGAEKMMKEOAIBCHSX[BGAGCCQEWCSOqIGKABGD@BAACBABBHA@EDCRC@FCHBJDFD@BCD@BABABCACBAFBDD@DDFDAJDBABDFBDCF@FDLEBAFEL@LEKACEEA@CC@ACACBAJCFGCC@CFCCGDEACF@BCCCG@CADEJABBDBFCBEHBJC@A@ICECC@CFABCFCAA@CBADDDA@K@@@GBABDBABDFDDDDC@AAEDCDDLDFEJBBAACBAHABADIAEJAFDB@DCJAACBC@ABCBACA@ADAHAEMC@AEGEEOAADIDAHDDACIFGFADBD@DCCE@CBCAAJK@EDOCCE@CCACDEAEGGJKCIBIAAB@BALBFABAJ@DKDABAFAFC@CFCJ@DEDGBABBBEDAACFC@AFGACP@FE@CHBD@DBLPAFHJD@HF@DDB@DEDBFBBABBBKDAD@DDDCBAJD@BFDBD@DBDHJFBPFDBDAF@FNDDBBADDF@JDGRFHD@BHDBBFFBBDABBBHFDJ@HCB@FBFAFBDABDF@HBDDBADBB@BFJEBA@@VABBHENFBFAJ@BDJFFDFAJJD@DDBEB@DAHABEB@AKIOH@BAJAC@AC@BFB@BHC@IBAF@BABEBADCAANH@EGKAKNOD@D@JBDADDDBBHDB@HHFEJBBJLDBABHD@PNEFBFAL@DAL@NCHGDBDEFBDAF@HHAFBFBBLBFCDFDJ@FJHNCDBBBDFDADBFJHDABHBTFBBBDLDBB@FHCBAD@NABCHCFBHC@BD@JDDAHFBB@DPBEF@DDHPHDAD@FAF@BAFC@CBDFBBDDBF@@ALCDBBBFDFCDFJBBBHCPFD@AKHCDADDD@JFL@DAH@BFFBDEFAAAFCLCDC@CBED@@BDABA@EF@FEB@@CB@DELBJFDAAECA@C@ACEFAEEBCF@Gc@CF@FCCC@CBAAADEACDGHBHDLJFBBDNHHEF@DCDAFQHBLEJAFIP@HFAKPODDFEDADBD@BC@CLOGC@EF@BA@KAADGD@AA@ICADEJABAHGJABBD@FA@ABEACD@@EMDAAQD@EEEGABIBEAABCCEK@QFEG@EAC@AA@CCCBEC@CGAG@C@EACGOA@CEBCCA@@@KCBOEEC@@CBEEE@ADECAG@EAAEECBGAAGDIDIKO@CBCDCBGAECOABMEKB@@IDC@CBAGE@GAABED@BEBADEACFGBCCABEFEEGBGYE@BIACBQCBEDABGMECEKGEI@CEE@CGEG@CEQCKBGIEACBECGC@CCAA@GDI@CAACE@OCAECAMKAEGAAE@GBACE@GOGACGECEDEAG@AACC@EFMJIBEHC@OFGF@FIDAABGCAAGMI@CACCDCFUPMG@CGEBGK@IGCDC@AGBCACCACKECCGAC@ECAIFKEBACCE@IEC@MKS@ACCACDKIBCAG@ACGGAACKAIHC@G@AGSQWDEEECAE@AI@WBAECAACKGACCADCFADEDAAOBEFAFCBEFKJAAEBCCECDECGDC@EE@ABIB@F@DG@CEG@AACBIFC@EHCJHBCPK@CBEEGBA@E@CDC@CEECBAE@CLECG@CB@DA@GBAFBDGJAHBJGBBDAAE@CDCFGFCFADBNGNFBA@EACEGBGCCAGLOH@FKDBDABECG@IHIH@FE@CDCAGDGDAAE@CBCI@[GIICIEIOK_QYS_[OOS_GUAmH}@ECGECOGU@]MC@GDAJ@LBJFJAPG\\EJEFQBY@UAcEgES@£ECBC^IP@BHTBZ@HELWZCNH\\NVBHIx@LL^PdHJBFAFCDeNIJMNSJS@ECACCQCGEGECëIEEE@GDCNGDCHYAIGEYEYCWCQEIGKI]QMAG@OGEJC@GFS@CDWCCKCAKFADCBQ@GDEBEEACcICDDB@F@BEBAPJBFDBDHBJNAHEJCAC@CBAFKACAEJ@HBBCDEHEECBC@ECCBBDELEH@DB@DAB@@NLJ@FDLAPH@DB@FEBHDDBCDC@@ACHBBGF@HGJEBEFOGCKBKAKKEC@ADIBIDMFCBC@KEEDABBF@JCFABGBCAC@CD@DCDHJJBBNCFBHDB@DE@CFI@EBIAI@AECAG@IDCKCAC@@DCBE@CA@AUDA@@FEFICCBCE@EEEGC@CAAMC@ABEOMMBCAC@@DGHAFABG@MD@JANADED@B@FHFDFBLCD@FDF@PEDBHCFBFB@BABFCDBRCJCDAFBB@JHJDBFA@CJEDBBDJBBDBFHH@DDJALGBCAGAGJ@DGAIDADK@KJGDCFEDEFATAHBFD@BDELE@CDJ@FHD@FFHB@JBD@HCB@LC@ABA@CHGDCAABUACBDD@BCBAACBCCGDABC@CHIM@AOIC@AGC@EBECAAEDBDABG@@AC@CFSDKPAECCCBCDAF@DHHADJBDDCDFDADFJFRVM@BCJA@@DEAEF@DCFKJA@CD@@EB@F@HO@[NKJGHK\\@RCPCDEBWDMDQAMEiYUCQBEBEFUJSX]TM@]ESEEA{PI@KG@HCBG@IDGFEFCBECIIIE]D@HAHEB@HDF@FFLAHDHLFBFDFRBJLDBXAJALDFFDJ@FGDIAGBGP@FAFDPDFHDDPHAJ@BBBJAFEBCFGNCNEHBJDBBDBHCFIDGFOHDFNLJRBHEH@DDBDVFJ@LFLGBCJEF@HFJDHDFLDF@JGdEPDHBFEJGRCHEDMESHEZKDA@EBAH@FAHCL@DAALBLGHAFEH@PIF@DHADB@BH@HJHJ@BADOLCFCPMXAFBDLHPHHFBHCHUNGH@FFJELHL@FABCBIEIAIDQ@MPCHDNCNDRBBLCR@HBPNIJEDIAMDA@KCOBQCGBEFAHLEFBLR@DKBS@CDCHEFO@GBCDELMFCHKDEJ@FBFCFGDODIFCFCL@JEFCNEFKDAD@FHPNJGFCFBJFLAF@DED]NIAGBCDBFADQ@IAA@CHCDDLFDLBHPADKBEJ@DN@RALBDJDRRC@FQJHH^DJDVBRHHFFLHFBP@HDHR@FBPZH@RHFADB@FDDRAHEFALJJDHAF@FR@N@FNFTBLDVTBFFDJ@CKICAMHAHBBE@CDCDGD@FPPJ@FFFLFFBVDDAGPCFOBQL@JLDHFIHIBCJFRDFPHHB@N@HD@BJD@BDCDCBEHABBBEFARCFGBAD@DFJ@B@HA@BFADGD@DCD@B@JBABDFHAFFDPZAFHLFFRIN@D@BMJBNBDGF@JJJ@JAJDJDHDCFBBFAD@JDD@FFCDF@DCLBFCBCNBHDHLDPH@DD@BJFH@REAILML@HGJFH@FDHELCPAHDH@LNFAHDFFH@FFDJHAFBDABGHAIC@GKGIAGEEBAAC@GGDCFBDAEGGAMYGE@GLELAL@JHH@DID@BEJAJ@DABBABFDLB@EFCFAJEBC@CFCHBF@LDL@FFNHPOVI"],
                    ["@@@B@FF@@EECA@BB"]
                ],
                "encodeOffsets": [
                    [
                        [117482, 23278]
                    ],
                    [
                        [117398, 23197]
                    ],
                    [
                        [117793, 23091]
                    ],
                    [
                        [117381, 22988]
                    ],
                    [
                        [117842, 23195]
                    ],
                    [
                        [117860, 23175]
                    ],
                    [
                        [117593, 23050]
                    ],
                    [
                        [117597, 23053]
                    ],
                    [
                        [117422, 22943]
                    ],
                    [
                        [117392, 22989]
                    ],
                    [
                        [117397, 22987]
                    ],
                    [
                        [117393, 22968]
                    ],
                    [
                        [117484, 23117]
                    ],
                    [
                        [117481, 23120]
                    ],
                    [
                        [117486, 23168]
                    ],
                    [
                        [117489, 23169]
                    ],
                    [
                        [117397, 23112]
                    ],
                    [
                        [117390, 23108]
                    ],
                    [
                        [117412, 23115]
                    ],
                    [
                        [117403, 23116]
                    ],
                    [
                        [117402, 23133]
                    ],
                    [
                        [117382, 23154]
                    ],
                    [
                        [117387, 23173]
                    ],
                    [
                        [117394, 23162]
                    ],
                    [
                        [117397, 23167]
                    ],
                    [
                        [117399, 23178]
                    ],
                    [
                        [117400, 23182]
                    ],
                    [
                        [117386, 23263]
                    ],
                    [
                        [117390, 23260]
                    ],
                    [
                        [117365, 23236]
                    ],
                    [
                        [117392, 23235]
                    ],
                    [
                        [117400, 23225]
                    ],
                    [
                        [117401, 23220]
                    ],
                    [
                        [117401, 23206]
                    ],
                    [
                        [117393, 23200]
                    ],
                    [
                        [117378, 23206]
                    ],
                    [
                        [117361, 23215]
                    ],
                    [
                        [117095, 24462]
                    ],
                    [
                        [117602, 23069]
                    ]
                ]
            },
            "properties": { "cp": [114.432599, 23.179404], "name": "惠州市", "childNum": 39 }
        }, {
            "id": "441400",
            "type": "Feature",
            "geometry": {
                "type": "Polygon",
                "coordinates": ["@@HDFP@NDN@HAFHFPTHDHEJ@BDAH@BD@FDXBHABA@CGACCJGCMBGFEFANBBKJ@JK@CEEWIMGI@ECIAECGGBGEQBENKAIFEJ@F@LHD@BCDMDIDEJEPO@CDGE@EG@AJIGACEBEFCRCBABGJ@FCDGBMDKHEJAJ@\\LRCHFF@HEFOTUDE@KCG@EBUDGDEJIBIHADEAGGE@CAE@IEKBGGGHKJEJCLKH@PHLFTBBDDBJBBFRDBF@FBFJFTHJNBLHJHATMF@FBHCFGLADAB@BHDHH@FFRBD@BFFBVFR@RAJDVGFDBFBFDDJ@HBLCLFJ@N@DABEHING@@RTNLRRHBTCJBJARYDKFICQAAICEEEAECAIDQCCCCOIAGEGCGiiAEFGJWMGGEAC@IDG\\WN@DAAK@EHMJMPQJG`M@AGG@EFBdXPSPOJQNOAGMIAAODC@@EBGGE@CP]BAPGDELUBAJA@SDEDGLHFBF@DKVQLU@AMSAK@EZSBWBCNGDEKMAGDm@AHED@RFLCDABCCG@C@AD@B@@E@EEEBUCMFKBEAQ@@E@CI@GURIDICEGMCKKAEPUBEACGGIBUG@WACCOEIC@IGI@EDCFCREFEDKBKGKKIWWFCBGFGBQOECCEC@I@CACA@GKG[m@aFQFI@KI[A@QPAAO]IIKECIAAMBGDIHMDMIAEGEAADGBKLMCEDK@E@EEKQUIHAAHOBKKEHEBIAAKBAD@JCDWCAA@CA@IDADO@MLIAIGBMCCBMEIG@CDIFGAEGCAE@I@AAAMPKBAAAJAHCCEE@UFGDA@AABGFI@MGE@EBI@I@QAAMEGIEAQJI@CB@D@BKBUEAGDE@CEEWMIBEG@CAEE@MEEHCA@EKO@EAAKBK@KDAE@EFIdYT]EKGCA@AFCDEBCA@AFWAECC@CHAFKEEGAGICK@K@gIEAGCEEAQ@aHE@OLKPQHE@@HGHMAEBGCKAKOM@COKMIMGACIGC@EICGJEGAGGDADED@FADEAEBEHAJKDABBBEBED@FCD@BBHDBGHOAQF@GAAUAAECEIIMBCDCBKAIEE@GEBG@KMGUKECDACCEAIIICKKC@EDJFFBBHEBK@GCCECCACE@CADS@ECGIGCCAACGACCDECCGCAWBEA@CB@BCBMEKG@BCHCGMHOJBBBB@DC@KDCEIKDECCE@KMIIIAEGDUAACA@EHOBEBCHIAC@IECBCAACCACF@FA@CFEDIIEACBCFM@CCA@ABBFEFEFIDCNIDM@IB@ABEAEOFKJEBMCECQBAFQJ@BLPENON_@EBE@CCECSUUIAADE@CGIqWMKC@GDCBEAOEAA@E@CEEE@CBCLABIBEHUFIHEDCHED@HGPABKCE@CBEJEAGAG@GIC@EIBIA@G@EAISCCAECCEAAIGGAEBGDGJADGACACECM@AAHMRGAGHEEG@IEKE@CI@CLE@AGEEMMBC@GIFI@ACA@CHIMQEBGDGJI@I@EEGBOJKEQBC@AE@MICK@SJGPONCJIXIHCFC@GEIAOIAEEIGCCKMBAEC@CBOEDK@C@OIDCAA@AEGCMCEEAEBCFGBKCKCKGEQEM@GAAEDIKCCGCGEGMEC@KGAGCCOESBKDOCQK@MQ@CIECIAACBAJI@A@CGG@KDKEGEC@GMEIAKBABQAECABSBORBPBDDLABIHBRAJGDAJGBCAC@ADC@CDCB@BHBBFEJDBBFAB@DDBEDDBEFCPE@DFAJMACDADF@@FB@BJEDBB@BG@@CKDCLBFFFD@DAJD@CJBJHD@DBCD@DBBADCB@FEB@DCD@L@DFBBBCHBJDADIDABDADADBFEFHHBABDHJFN[LADBDCDFH@BEDEHEFB^BD@DEDCJJF@JBBABBHCHBFJFEPRJ@FJJAF@DDJBDHBBJCJFH@BEDDH@JDD@JD@CPBDEBK@ADABACAGECGCE@AAA@CDACDGEAIFEAGHE@GBCFBFFBDNARG@EBC@CAE@@FBBIJC@CDEBCJDDINDDBADB@DAD@DD@@DFB@DDB@BJLA@@FABCBCFGBC@@AACC@AACBAAGGAACAC@AEFCAGECGFECCAABE@CACCIAADG@G@GBKAGBKACAAD@B@B@DPJJHDDTLHJH@HPBBH@BBCBKN@DDBFEH@@DB@DDGDDBCHBFCBI@EB@FDD@BDBBFDDABEHBJ@JHBDFJDP@FBBDGNAH@FHBBBDBBFAHBHFDH@FCDBBFABBFCDBFDBD@AFEDFBBD@BFBF@DDADDHA@ADBBAHDBCD@HBDABADBDJH@DBBHFEFBJAFJFJ@BBFAF@HGD@FPBBF@PHFD@BJDCLBFCHDHCF@DGJLHEFADBJ@JIHADFXAH@JMHKNMJCPMLDJFFNBBBFTFN@PDDRJDB@FKRAFBBD@DB@HD@JIJFFAJBEDDFJLFFPBHCAGCCCIBGFEPCFBHPDCJ]DABC@KDGHCR@FCHBFJJL@DILABBJCDCBG@CDAB@RCBM@EB@B@FBBPAD@ITKHDLIFADHPENGB@JD@HFL@LOVM@ELBLGD@ABBFAFCDG@ADAHDPBDDBTFLPFEHEJBFFD`@NGBADBHBDDBJ@@LD@NBFAFD@F@PADABKBMPAFBHFHBDADEFBFAFIHIBCF@DJDBD@LCBKDBHKPDDADKFCDDPEFBPCHBHFN@XFNNHHAFDJLNTBL@LAJEFKFAPFLNFJFDFCFLL@DABCBQGI@AFBREJEDEAGBC@CAAOCBKA@BAJHTCBQ@IGCBADAHIFMBMDI@KAQBEFAVKJ@FFFDH@FAJIR@DDH@FEL@FCLBBN@JEF@DBCFBBABGBADNDPBLH@DEL@JIT@DLRHFJL@F@NHDLJNDL@FBDFNDFBBADENODK@GBEFEJCP@P@NHJNFBLCJEF@NCDIFCFANFL@HEHG\\EHILWHEBCBK@MMGCC@IJQDA@EDCF@PBHCN@LADEFAF@FDP@FDP@RFNHNLRLTJRBZILDH@JGH@NBNDF@DAD@FFBHEFEBCDADBNKLUPEH@DGACHADMNEHIFAHEFEBGAED@FFVCJGHAPEDS@QJ@BBBL@JDJHDBNADAT@BDCJHFLDGPJF@FADKFMGGAGDKAILC@GBABDHDTAFCDYPAF@RBDNL@B@HBFVPBD@DQ\\EDADBBLJFJ@BATFFFFBDARDJNCJFADKPADBFLHIBEDCDBFFBL@JIN@HDC`BJFH@PFJHDHNJFNCPCVKDIHEPADA@GGG@AFIIU@ADAD@PJ^@NDNHNLBDAFEFGDKBKHGLAF@TATGRDHFBD@DGD@FHHBBAROBCBEBAFBH@VGJ@HAJ@J@DABEDDFADDNE@AHCFBBFDEB@JDB@D@@EBGDCDMD@H@NGLBB@TRB@HAHENORMDEBODAACCA@AF@HFBABACGFGDELCJ@DCFOFBBFXAB@DEBK@GFCB@HLAJDBH@FCDDD@JAHDJC`CJEPBHBRTHFXVHLNFHAHWJOPCDCFKJCBCBCBWBANGDBFDNDLAHC@C@GICMMIMAG@CPIJCL@\\NNAZ@ZFHBJLPHHJTJJH@IBAFJDBH@"],
                "encodeOffsets": [
                    [119135, 25423]
                ]
            },
            "properties": { "cp": [116.117582, 24.299112], "name": "梅州市", "childNum": 1 }
        }, {
            "id": "441500",
            "type": "Feature",
            "geometry": {
                "type": "MultiPolygon",
                "coordinates": [
                    ["@@BNAFBFHBHABC@AIECOCAAD"],
                    ["@@DHFBF@DABMA@CBEAABEBAB"],
                    ["@@BDD@JAAAEAA@C@AB"],
                    ["@@HHDACKC@CF"],
                    ["@@B@B@AAAB"],
                    ["@@AD@DBFCBCHBHCD@DEFG@GJ@JDHAFCBCAELG@KPBHDDAHFHBD@FABMEMHCAEBEDEHCD@DBFCBAAIHGAIBCHEAAB@HCBA@@DDHKF@DBFDAFF@DCD@D@FABFHAF@DOLADIGGD@FEDAJBD@BFH@DCHE@A@AJ@BFFD@HCFDDCDFADBFIBELAFEDEBAFBPCBCFEBCDDBBDLHBDDBBFXAJ@@BBFFDFFXCTRBHH@D@JGLBBDHBDH@BBHADLJDCDBBDT@NLD@JFF@DDABLFJEDB@FBDDHFDDLDBBDADBHD@DCJHL@AHHF@DNHVODEDCBD@DNJBHDBAHBBJC@EHEPED@FGJANIFED@BD@BBHCFDFHFBDPH@HDFAB@HBFHBBFNLDBBFPDF@BDDBJ@HCB@DB@DHDFDDAFBHJLARDDFH@HF@DFF@DFJLHDFNFAHCBAFRDDAJB@AZFAHFHEFAFDBADEHBDCFABAFC@AFBB@HHFAB@DCD@JA@FLANPBFDHBDADCDAP@JLJCHCBBAHFDBFFBH@DBCF@BFFAF@DD@FFAPLD@@B@DDFA@DPBDHFBD@H@HB@DFDDADDB@@BBD@FFHREL@DFADBBAFAJHBFF@FRCBBNC@FC@BDAHEBC@@AA@CJ@FDB@FJHADFFDB@DHHCHGAAD@BHDBBRDDAH@DAVLFFABE@EHPNBJAFCBADBBHBDCH@bHLHF@JDADWFC@@AAAI@CFABGAJNED@DC@BDDD@BEXDRCHABBBBFLHRBBALAJBNF@HFDFHCL@LHH@D@BIJABBDJBFDDJR@@NRLPDLCTAPFDDBHLHD@NFFHDHDHLDCJ@BHFP@DGBBDDFARUDOHEXIJGDSHILIv[AEEGMG@ABKEE@A@CLGEGDKB]DAHAJ@LDLH@LFHJBLBZAH@HFLNJCD@VJR@JDNADABCFEHQDAHEBEHCFITORWEAACEKEAOAAC@CBG@CIK@EBGCGFKCKBEFANBJEJENK@CACNMBEKCCEECMC_@OEWBUEIDICMKCCAG@EDGNS@GEG@E@SCCCDMXIHCAEEEK@EFE@EMKCCBANKjUHIFCFAXBHADADKLMFMPKRCRGHBTGFCAUHITMJA\\fTFRAJBJFLLHCLCLMBKBANACOAEBCNKLMH@DA@CIQBKNENBBIHEH@LIAEHEKKA@CCEAAEBGIOGFGBCDEBEEE@AAEKAACLEC@CBGJGFAFEFGDAFBHRFGDLHB@B@FB@FADA@EEKACGCMWHE@EA@E@ACGA@KD@BCDABEDC@GEIBCDAMAAAFELATDHOFABB@JFFCDFBBJDDADDBF@BAAC@GGB@@@CDCAEDCAADEGECAGB@CAA@DA@BGDEHAFFFC@CCG@EDCHIHFJHNDFDBBDHBJH@DADCAGHIHBHHF@FADCJADIPKJEHAN@NEXCHGDSBARCJCFGFCF@^BRRD@LEDCBCAEBAXGH@DBNAB@BJHLENBBAFEF@FJHPRJDZHNALIJAPDDCBUUWCGUKKQIOOISYSISSOAGIEESGQCKGMKIEO@KDEFMZILEDEB]BUCMCaOQGEAS@KCeYUYKGEAI@CBONO@ICg[[@YCUKSQck_]KEIAMBMDIFGFCJCRBRFl@PCPKVidWTaHDCBADEVCHKFKBmBSCWGcYUEEAEAQAWEOEIGK]YSMGKAEBIBCFCP@HBLFJCJDLKLEF@JHTLF@FCAQBOAGGGWAEES]W[EIBMDAHITIDCAEAEICAEDEBCEIC@GBGJG@CBENABKBQGG@OLWJKPGBQAKDQN]PeESAUQCAqBO@UCG@EVMFMBIPMFIHCNEFCFAPBHHL@REbAJGHWJaDsAuG_@EAGCCAGDAJ@LH\\HJVJVJBDCBYJOBq@[EKCEACGGaBCDALGDEBG@KCEEEU@IBELMHGFITAFADEBSAQAiOMC{C_IKI@UGGAIBGAE@GACSACEC@CDA@QOACAE@IDAVGBC@GHE@EICCIMC"],
                    ["@@@BB@@AA@"],
                    ["@@D@AACBB@"],
                    ["@@@BBCA@@B"],
                    ["@@B@@AAB"],
                    ["@@B@A@"],
                    ["@@B@A@"],
                    ["@@D@@AA@A@@B"],
                    ["@@BBBAAAAB"],
                    ["@@@BF@DAACE@CBBB"],
                    ["@@@A@B"],
                    ["@@BACAA@@BDB"],
                    ["@@ABD@AE@D"],
                    ["@@DDBABEKACBBBB@DB"],
                    ["@@@BBBBCCA@B"],
                    ["@@B@A@"]
                ],
                "encodeOffsets": [
                    [
                        [117871, 23318]
                    ],
                    [
                        [117951, 23284]
                    ],
                    [
                        [118250, 23170]
                    ],
                    [
                        [118392, 23248]
                    ],
                    [
                        [118691, 23333]
                    ],
                    [
                        [117787, 23247]
                    ],
                    [
                        [118896, 23362]
                    ],
                    [
                        [118891, 23360]
                    ],
                    [
                        [118753, 23339]
                    ],
                    [
                        [118614, 23269]
                    ],
                    [
                        [118615, 23269]
                    ],
                    [
                        [118615, 23268]
                    ],
                    [
                        [118399, 23252]
                    ],
                    [
                        [118350, 23224]
                    ],
                    [
                        [118346, 23193]
                    ],
                    [
                        [118318, 23199]
                    ],
                    [
                        [118261, 23179]
                    ],
                    [
                        [118258, 23180]
                    ],
                    [
                        [118203, 23201]
                    ],
                    [
                        [118201, 23206]
                    ],
                    [
                        [118199, 23210]
                    ]
                ]
            },
            "properties": { "cp": [115.384238, 22.974485], "name": "汕尾市", "childNum": 21 }
        }, {
            "id": "441600",
            "type": "Feature",
            "geometry": {
                "type": "Polygon",
                "coordinates": ["@@PDPHHGHBNNF@FADEBIB@FFAFEDAFFFHDF@@@CK@CD@FBF@DADIJADAHG@GBEDCF@PBD@I]DE@Q@E^KFUG[AKFALJDCDEPADEJODBDDTTDBNBNHHHPDJXHNDBLBLHJAF@BHFHPBVNHFFJDDD@HER[HAZGLHFB`IJ@FHHTRZbXFBJIHCDBNHTFVLFEHIAEAADIFIFOP]DAP@HAFKFKHNFRJL@LBBH@JIFPBFDFF@DD@JGFADFREHEJBFDJERBDDDF@P@F@LHJCROFAHBJ@FH@BDBF@NIBC@CFCF@DFF@ZWTIDBBFFHLFPFF@TIBCKYJKFSFEHC^NFXLBBBBVJTFJGXBFBHHFDFEH@DLLAL@LDLHFLFdCAUBEFCLBJDJFFFHNTHNHNBLAVLDADIDARBFABCHADDBFFHZNFHBDCFADBDNH@LBDB@BEFEDARDJ@@IBCDBBBH@DB@GJIAGJO@CB@BBFD@ACG@CJ@HABKFBDFD@HADCBEDAFBJL@B@BGEA@@B@D@DHBCJBBDCH@DDJAFDJLBBPAFBBBNDDDfAHCH@CHIBGT@H@BN@RDZLHBPLJBHCBCDBFFJFHDHAPCFFLTDPHFJDZBFDL@NBFAROFAH@NDNAb[FAD@DDBFAP@TTdD@FEHAHBHDXbLFLAvcDCFANKPANDXIDAHWNCLKJA@EGGFGNGBOBCHAF@PDDAFGIS@ADCPG@EDAPCJEPEBA@KAKJUAMAGBMABEAMCCEEAK@MCKIGC@M@EIKGEKQ@CJS@IFK@CKGOAMCBCHABAAADECAE@IFM@AADK@EFK@ECG@CJQBI@ECGEE@ELIBUFERALBJ@NCNAJEBGBCDAJHR@DAGSBI@ALBDABPDBD@HAFBFCFIAQBEJ@RHDABA@CKKDECEIEMEEKBOLEFEBI@KAKMSIKECGBMGEM@WEMAGDGAOFECODCLEBCCCLOAGLCDA@KACIC@CDEJAJGBEAEFEBCACEGAGBENOLABABC@O@EECEBMAC@@KI@CAACAGBCHA@MC_EEIAGFEFKOSECAACCOBGBCH@DCBEAEBAC@KHKA@FUNKPK@GEC@@IHAFMGOBCJECKLGJSC@OBAA@E@AFAN@DA@QBADCH@DADCAIBAJK@CIKEIGAEDQ@GDCH@LADCBI^CDGOEAODEFAHDJDDBHGDOAEEIKCEFCIAEBIEIJC@@GCAC@AABELQ@ECAQICC@OEMESAAMAEECINKDONILMNG@IBGEWBCJG@IAIBCFEKGHI@CDECGDGAEDKIC@AECOGE@AAEOC@GHE@EBAAI@IEBEAIFEGEAA@CIGACBCBAAC@GDCCABGAABCB@CGBCCCE@EA@AACEAFCBEC@CAAEDCAEBAAECAEDG@ECAGBGAECAAAGA@EBGHMACEAO@ICCEGA@IAIFGBACCAECA@ACC@EFAJ@DAAEDGCAHCCCA@@CG@EFCA@CLMDAAAG@AAGOG@GISKCCIGOI@C@A@ABCDBLBHALBHAH@H@BCJBDDDBF@BADBFDHEFDBHEDBFD@DBBBHHBBDABBD@BD@BD@HADEDABA@EB@IK@ACA@CEA@CC@@CBC@CCAABCCJMCCDIFADCD@JIAA@EF@DBD@FAH@BQCMEAAEDEHAF@HGFBJEFBCHBDDCB@BBF@HDFDBHBDBABCL@FCAADOC@@ICC@ICGFC@AEGDIAIGAACCI@CBEII@EQIFOIEAEDGAGBAAA@IIEDIFC@CACA]FEFGFC@AEGDCACBC\\KEMGIACABGGFEAEBCBCACCBCJCBAIDGAAEA@C@KDC@CFA@EDABCAA@CDCCAC@IGIA@DICCBC@EEAEBEDEJC@DHAAAFCAIA@@EE@BCDCNBBICEF@DOFECAFCCA@CBAAECAFIAEGA@ADADCD@BCD@DBHABIJE@GAQJGBACKACAOPQTABAECAEAABADGCQFW@ACCACD@@CFCIMHBBADEJ@BB@BD@XEBCICE@KGaGG@CDGAAABCDABEAIOMFGF@BAEEUKCBG@CBQCAAGC@ABCHBDGGG@CCAEEBCIG@ECA@EDIB@KBGHABIBCFDB@JBBC@CHBB@LABE@@FHDKP@DADC@CACBEFCCOPBLGEO@EJIBKFGAERCBCDE@GFMGACEAKIGCGACHBDCFBBAB@DDDEDE@@DHdE@ADFFEBDF@B@DDBBFCBIEKACFA@@DA@EFE@@FABCB@AC@AF@DCDKDEDBBEBCFEAAEG@CBK@IEC@CCCBGDBLC@OEGDAAIACEEDECAACAEBC@ADC@EAACEAAC@DEDABE@EBC@CBOGCG@CFEOA@CAAEA@AE@ICC@@AGDEAGDADMBC@ABGD@EAAKCACAASEGABAGCEICACBCEAACAMDIG@ECICEEDKAAAAEBEGGE@CBEACFCAGHMDK@CBK@EBEAMF@OGCBACAIKAAFIGE@GCAAGCACCCBIAC@C@MPBLHL@FMGBBCDABAFABE@AB@JGD@AEA@ABDD@IBABG@JPBLA@AFGBCBA@AFCCC@IIEBECIEACI@EBEAFMAGBA@UB@FAEI@AAABCCAAC@GCEBAACBEAE@EDA@G@CCEECCCBAACEAAECAAGC@EGHQICE@CCABCAMC@EBEACECAOIECGCAC@CAAEC@BIDACC@CBCLCAABAAAAEFC@CCA@CGEC@GIBEKOCAC@GA@DEFO@BDEH@BEDBDCBAFAAABCHCFI@ED@DEDEBABCBCLI@ABEBM@A@BBAJDJILHHBFCFBDDDF@DDCP@FILBBAD@DDFCDC@CAEBEHDJCBGCCBCJBBFPHFBFD@FNGBCB@BDBABAD@BADBDIBCDA@ECIBBFCJABGBABBDABIAEFKCCCCDBF@BCDCCECACABACAB@H@@@LCBCCAB@DBBEDADEB@DDDDF@J@BIDGAAFEDCAAAMF@BDBH@DDADE@BDCFDHED@DDDEHIDABBDBDD@@DFBDFLBKFK@EFABKFECE@CDEAACABICCBCE@CCCEAABBDADABABC@CDCA@AAAAIDG@EQDCD@FGBAAABBDABC@AHLBJHrTPXDRFDDBHAHW\\GTADBJFPNLLNBFCHEFEDE@WEOBGDGFCFA\\EVIAACCAADGC@ACCC@AGCABECAG@CBGBCA@ABCCCBABIA@@ECADAF@@AEEG@KHEBGFBHF@@HEHIJA@CDWJCBADCBIECFGBCFEFANBDEDE@IPEBBFDFILBDEBHFDF@HBD@LEBCJCAEHC@CHCD@DCDATKRCD@JA@CDEBIAELADDDAHGJADBBKBIHI@GHEBGACBCFEAMDWKWGGGKCGBMLACI@BHANCLIFCCGCI@KHBDCLUhK@@DGFOWCOC@CFGBCDAFA@CDDDFF@HADCBI@KBIF@HDHABGV@FTXBLGLE@AJDDCHQBCNGND@CTHP@N@LNJ@FNLNDDAFDBDC@C@IJCDBLFHBHDBD@FBJN@JGD@BDDJBFDBDCDDNBFTDDFCHAFBFCB@HDJHDDFEH@HDHBBHBAFEDEN@DDH@NNEDDKHENDJFHLDHFGH@FDB^DFCJKB@FVBDbB@FAHCJCFB\\FFDFFFVJN@JFNFLJJVNPBDGN@FDDH@BAPQHCB@DDB@@BHHAFFJJFFJDNFFF@@@BEAI@GDED@FDDHD@D@FADEFCJ@BF@F@BFHFBEBCDEXBDJJJDRDTBNDFFFP@FEFIJCHBNAHBFLRELALCDEBEBOASJCBIXCDEAKWCEQM_KMIIEAA@GCC[UGAA@EKCCAGECAKCEMGCB@JABG@IE@EDID@HBD@@WAMMEDATIFULI@CEAAGCAKFIEEAIJQFEFIACBGJAHCFEBEEK@CF@JABC@AC[BSDIEEDG@AACCIGGCGBYVE@QMEUEAC@CFAFBNQPIDGHEJGT[TCFAHBFPTANEHMF[H@DFJADOdAFGJOHED@DBDB@`BF@BDADI@O@I@CDBFJFLDBDCJBJHFHLRbAJMPAD@DPZNHJLBF@FC@MRKFaAQEE@ABDPCZ@JLZAFGHIJ@JGN@FPLFFNBZVXNFPNPLDPDHFBFADQJELYREHEN@RAFKHCHBDBBVFHBBFCJLNFBRDHBDDAPCJ@F"],
                "encodeOffsets": [
                    [117052, 25164]
                ]
            },
            "properties": { "cp": [114.897802, 23.846266], "name": "河源市", "childNum": 1 }
        }, {
            "id": "441700",
            "type": "Feature",
            "geometry": {
                "type": "MultiPolygon",
                "coordinates": [
                    ["@@@BBFCDBFH@BFDBHABC@ECAGIKA"],
                    ["@@BDB@DECACD"],
                    ["@@B@@CCGBCAE@CL@FCLADALCBCJKDAD@B@@IJEFALFFC@C@CJGDMJADSDGBAD@LEnEFGDBH@DCPCFBFCHNJF@AHE@CDALAFGLGAIBGAEFABCAIG@MI@GAEIIGIDGJC@AAC@ICEAEYCBTADEDEAGYEAABA@BFAH@HBFAJIAMOC@@DGBEDGCEDK@IAGMCCAEC@GSGIBGFC@CAEKSHEFGGMIQKGIMCCGEA@GCAAGDG@ABQDCEIBE@GKAECC@CDKH@FEJAD@DABIDELBPGDI@ACAAI@ABC@CJEF@DCFABCBYCCQKAABI@CECCEBIAABCDEBAHCBC@GBADAFKCEAGGE@CMIK@CCEABCHEHIAGVBLF@JFJCAHJDD@DAZAAEBMNIPOF@BCBI@SR@@CDAJDD@DGH@NJLOJEL@HMFC@EJMD@XCDBF@RFLCDCB@BDH@BEGCAEBADAF@DBDA@CACACAAGICEIFA@AE@EFCAA@ABGBA@G@AAADMD@DHDAF@DA@CAACBGC@ADCAAFCJBFAFGD@D@FAD@DBB@BADABAHEF@DBDED@@EFCBBDAAEA@AEB@@ED@B@BEHBLAJBJ@FDBBDABCDBFADCTIDCAEDE@ADC@CFAJEBGDCDGFEBGAC@A@CDGB@DCEC@UB@DCBFD@DIBAACCECGBAF@DEEA@CDEECDIAGACC@CMJEFALADERIDCKEGEFCCCICGACCBGFEJAEEFCYSGKHMEAACKKCBGAEGBIBECCBCDG@GACAAFEDEACKC@EEAACDEMACA@ECCE@ECACFE@AKBHSDCCEBKCE@CDE@CGBCAJQ@AGCECIAcBIAMKG@CDADiHEJ@H@BHH@BIVADEBWEE@CFINC@SACBADEJAR@JHNBNARAHELEFIHIDO@aAeGUWuSegYugCGG_B_@EHId[DAF@LFLBR@HAVMJ@FAFGBC@IFGACUYIEGAGFE@w]IAI@EBC@SEABBLCBGAiOOEQKcWWUMQGCC@MHALGBGAcQGBOEIDCDAHBHDFDBF@BHFDFBLADDCFCDIBCNWZ_LQDwBYAQEyW]OKKGEKWCG@GBMB_DEEMOEQCMKCC@GAAG@GD@BBDBDILC@CAA@SFSFK@G@_MUIcWKAIEIBEDCBAFBRCBG@K@OCKCk[[CMB[VOHNT@FALWCFADI@GGKAABBHDB@FG@BCACGCC@CDAFBJFB@LBBKJAD@FFHPL@FCHI@CFAFDJCFCB@NBF@JBBHBBBBXDD@DNJADCF@DJHBNLJCNCD@JAHEHAHK@GFI@GFAEEBCACJEDKCIDEAAD@FCDI@@DDFAFDHAFBDFDDHCD@@AFADEHEBEF@DCBD@JFB@BDHBBDBDD@BFDDBB@BBBBHJF@F@FB@JABBD@JDBFHBFHEH@HDDEHDFAREDDDCNGDABCBOBAHB@@FMAAAKDQ@KAIDC@ANCBAHAFQBIEM@CAIF@DEBONBHEFEHABCAKGGBBDADKFIBCDBBCDAACBCLDHABCB@JFJHNEDA@CRGDAH@TFB@DAHCB@DBFFB@DEJAH@NDDDJHBDBBBJDBDJFBDAHAJHJEDADQDCD@BGH@F@DGHBH@BBBCBFD@DNBHJB@CLBDFBDD@DBBBDCJF@JAF@FABBADIB@DJR@BJBJHABCB@JAFRFDDAFHC@BFD@BBD@DAB@D@FGDIN@DDBAFFJ@FCNGDCPFHF@@DLBBDB@HAFBFF@DA@BFHDAFIFAB@DFD@DIRFJ@DLFDL@BHLJHJ@DFBABDDBH@BCB@BBBDABBBD@DD@HJAHBHDFFDB@DB@BAB@HD@DHB@B@DBBBFHFPBFDTEBAL@BAFAJD@BBF@DABCA@DB@BRDD@DAB@FHHB@@DA@CDCDC@EBADFBF@BBHTHJCHHFLA@DHBH@FEBBF@DBDLLDVPBFBLHPF@DIREDHJDHFBBJ@JEJHJB@BJHJBTGJ@HCHBLHBBAH@DHNBDB@BFL@BCFABFHHFFNF@HJHHHDFDFDDHHBBFFB@BFHDDDBB@@BHFFHD@FHDJJ@FFHBLCF@HCFBFV@NJLTJHDJFA@HBDBFFJFFAB@FBBAJBLCHNH@LHL@FBBBB@DFHFHNHF@BBFBLFDAJH@LF@BDB@DDTHBJFNF@BDBFHBBFJJDHNDJHDH@BEDAJC@CD@BBD@FBFDBADDDD@NP@FC@BHDBAB@D@ADDBDFBHCDBFRBBH@DCAG@ID@DBFGF@@CD@BIF@@KHGDAJDFABIBGAEBABGEE@CAADGMAM@AIEAD@@AEA@AD@DGFABC@MCICBKDGHGAAABECAKB@BGBCC@CMEAE@ARGHDBE@CCADGLAB@ABJB@CAADCFAHDF@HGBGJCHCD@DDALB@DCJEH@FDBEFEDABBBBFEBD@DDDAFBHFBJH@FBDHDJABB@FFBBBADJFFFBHBFHJDD@BDDD@NHNNBBFEBCJC@IFCDMHA@CDABKHCHK@EDCDBREBAACBG@KAAGG@EIGKEOBAE@EIOAEFI@IHEDI@IFABCBEBEFABAEKAA@AJMH@@EDABCFCFCB@@FB@LAAKHABB"],
                    ["@@@FBBAJDDB@BCHFDAB@@CAG@AD@BCHHFCFDB@BAAECCIB@AICG@EAIF"],
                    ["@@@DFDAH@DBDD@DEBIFA@CAACACBGACB"],
                    ["@@BDJABAAAEAED"],
                    ["@@BB@AA@"],
                    ["@@EHBDD@D@@ICA"],
                    ["@@@FFABAGA"],
                    ["@@CDD@BAB@BAAACB"],
                    ["@@DHB@BAAGEB"],
                    ["@@FDD@ACEAA@@B"],
                    ["@@JBB@@CECA@CD@B"],
                    ["@@FDD@BA@ACAE@AB"],
                    ["@@@BBBBFD@BABACEABACCB"],
                    ["@@FBDADGACC@EDAACBADFD"]
                ],
                "encodeOffsets": [
                    [
                        [114809, 22153]
                    ],
                    [
                        [114855, 22121]
                    ],
                    [
                        [114702, 23025]
                    ],
                    [
                        [114874, 22064]
                    ],
                    [
                        [114832, 22121]
                    ],
                    [
                        [114806, 22071]
                    ],
                    [
                        [114802, 22046]
                    ],
                    [
                        [114922, 22241]
                    ],
                    [
                        [114665, 22174]
                    ],
                    [
                        [114700, 22170]
                    ],
                    [
                        [114706, 22135]
                    ],
                    [
                        [114625, 22113]
                    ],
                    [
                        [114372, 22058]
                    ],
                    [
                        [114377, 22061]
                    ],
                    [
                        [114316, 22024]
                    ],
                    [
                        [114143, 21998]
                    ]
                ]
            },
            "properties": { "cp": [111.775107, 21.959222], "name": "阳江市", "childNum": 16 }
        }, {
            "id": "441800",
            "type": "Feature",
            "geometry": {
                "type": "Polygon",
                "coordinates": ["@@Z`FNALDHXVD@FCNUCY@AHEDITAV@NCJIJDJ@HEBIDA^@HEV@XGJETER@DBRAJFRAHBBBFDF@LFXBHLDBXEHGP@LCHEHMBQBAJ@FAFCJKTQFIBC\\IBADGF_BS@IGmJQJKRGBMFCH@@GHW@CEG@_DGHCVALGRAJEHGDG@OEQJU@EKWFCJELATAJFNARFLCF@RHTBN@RCH@DBLVVLTHFFFDdGRFF@DADGFAbPTGLALHBAF@@@LFBFB@BADBHKJEDICO@EBCFCFCB]BENGFI@MCOEGA@cCWWCBGAAICCeMOM@EHC@EJQ@EGKKGFGBEYmCCIACC@CBMJO@EGKEEE@ACDKAAOA]BEAEE@CFMBSHO@QLS@KCCWIIIBEFK@ECM[_BcBCDCD@RJD@BA@GB@PHH@FBH@B@HGF@LBLAHCLBTIHGEW@IDCHBDAHMJMAIFIDCJBHBB@PS@KDCVQRGHUAGBABID@DGLEJIFADCDGLBFEPGP@THLCFRJR@HDHHFVHD@LG^_LCNABCH@AGACBEFEFBFFBNBBJAHCF@VJF@TKJAJDDFBHHHFL@FHBDDLADBHLDBBABGD@FBDBJNDBDC@WDGHEBKDCPIBQFCLEZEFEHAJJ^FNNLBHA`BVNPPJNDBD@DA@CAIBCNAPD\\CDBJ@DA@IIMJUDADANATIF@NHZDNDLLLVFAHGFCN@HFLTB@B@JGFGBGHCJLLHBXDDFBFRBFDDBBFAHFD@PET@LBFGBKFADF@RBDBDFBNAFADE@CGMBGFCBAJFDCAIDAV@JDB@HENCBIDCbWFAFBHAPIFIJCBAAGBMFKRM`gPAHHAFDJBZFDv@TGBK@MBEHCLAJGJBFAHIRGH@BCB]IK@CDKHCLQ@A@ILECE@IHGVGJBHAJMJUAOGEAEF[AMCINA@CACECKAAC@KBCPGNIDBFHDBJCFCDA@KCKDCH@DJD@F@HCHC@IAMJEEKFE@GDA@EHGVGFANABOPFBCAKECQBWEEBBDABEBGAIEWUaMCEIE@CFGBMBCJ@BAFE@EEGEEO@E@EQSGCACC@KBEHE@CEEC@AE@SDAL@BA@A@CME@KACM@CA@CFK@EECM@QME@GDEAO[IIAIBC@EECEACDCFEBIAOKC@GJKBKGMWCCKIIMIAIGDCDAFINGBCCE@EBAF@FADCACFIFEHDD@HCHFDCN@DABGFABC@OHGEELAFCF@DAJIBGBADBDC@O@GAA@CDC@GI@GBGAAGKE@IK[EGICQ[E@KGKJA@KGE@EFC@A@@EEAA@BHCFE@ACKHACCCAEHCJSAKEEFOFECGE@QKGBCHEBG@GJE@EO@IEACDQBGAGHE@CBGC@DCBOEIGACAIEACIBEYUGBA@@CF@DCCCGCBEHKNGFODKJEKWLOC@EEBSGC@IDEF@JGCEIBKAECBIEEKEAACA@ABEFESMGGEG@EA@ADABQH@LM@MLKCAHFFAFABGB@JIJWDIAGEJ@DCeUEAEBEACCCAG@EDKAKAGFE@IDEEGBQLBD@HGHADDFCDOFC@MHGD@HA@EDJB@DEDG@OGGHA@OEYAGBCHGDGAMBKDACAGAE@M@GEEE@EBEEEUKU@IGKCMCAMACCCMAAEAI@@CBMAEGAKBKAUFWCAA@CTEBAEIEUACCEOIAGCBCJADCAICEGGAMAOIKJCAHOACDG@GACA@EHE@IFIBAQMCKBWOBGEUPKDEGILI@ECEGBACIGGCAIIEHI@AECgE@PCEBKCDGGEBGA@GIEOHBDQBSFIGGCEJAACAHICEMGCBGACCOBGGKDMKAGQAGCCEAEGGMCMHG@AEQAEFOG@ADAAAIAFGAAGHOCE@GBGHKGODECM@GEDICEEEECE@IHADKFGHMFI@ABAFDBFD@DEDCGEDHNAJCBEB@AEBGFE@IGEBEFMZCRKF@HJTf^DJDNMPQLECBGKIDC@CcZGDAHCAIB@DCBICSIIBMEQDCODOFE@EMDEBGEUBGAKNBB@LCNCJ@BDBJAAHAB@F@HDFAFA@aAKFCDAFDFEHY@E@AFEDCD@ZDLFFLDbPJLDPEH@PAJOHGDC@EAAEGACDKBGCEIE@CHHTDD@DI@ECKIEAADAHIBADA@ADGFLNJVCBUGCLHDJL@FDDHBDDHNFFBDDH@HJJ@DIBGFG@eKK@ADAD@FKN@JJLDX@DGF@DJVa@EBONEBIAICM@EB@FLLPHJHBDCHA@ATCDFHLHBDAHGBCF@BHB@FDD@DFDBHBBD@DDBJFBBB@DGBEF@DDBFDBBDFDLAFEFONDTENKBEFIFCFGBG@IACGMGE@C@OFS@IHSJM@YHOPKFA@CCI@ELBJABQBCAEGQAKAC@IDSDEDCNBLIL@DB@@HGBAFBFNHHHBDGJCTIPAF@RC@KJAFAHDJBHBHAHAFCBEAGBAD@HHLIXCLEDK@MJGBGAOKC@AB@BFL@DQEC@EDO@GHADAJ@LBDLL@DCJCDCHLD@DGRBDJDDFBXHLHFATB@FCB@BBBHDJF\\@NGbItCJGDC@K@KCMAABEVKRCDGAABIFKLCF@PQDGDELCPEHS@EBCDUBKDOREJC@ELMNYCURIDEAEKAIBKJQFe@aYKMA_HAG@GDQFcGGCGAGBgCMIQEEC@IHGDeEAEDUAGWYGKIGSAEEEAGAO@AABGACCECAMAQHCNEJ]LCDEJCREHIDKAEBENEFGFINADAHABCD[HIAECCGCIACMCES@WQO@KBGFIBGCGECICWCMBSBGAAAAEEBED@LCJONGJAFAJEJOHQPEBGBWCAJCHBDPDHHDFDLDFHDNAJODAF@NDDDFL@HARBDFBJADBJFHLNJLBH@DBDDBFAJBHFFPJHFBJDJVR@PDPALDNE`AHQDEBEFEH@HDTCDAHKPCDAHKH@JCFQJGBQBCDAJCHOHEF@FFFCRNVFFLBJJD@@DGNDZCLDNITINKBACMRG@ABADBHEJ@FGB@HABG@GBGHIDEJ@HADCABCCCCDIAGF@BBB@XKXIPBFLTR@VJMZ@NABK@ABBFFBBD@DGJAJJHRNFJLhHFPFP@H@NHPDTEJDNLRLFNBL@^NJLNLHDDJDCHBFBDXHZDZX@FAHBDjPHFHJP@PHBARMH@FJJFBBCFBBD@FH@JJHADKHFLCRDJBFAFDJFXDF@FDNAHSDOHM@CFGDE@GPSJCHCNID@DFLA\\BLXJDFhzMR@B@FJLCVJRJDDFDP@PN^JNARBP@DEHJLJNANHP@JFFFPKR@DHDNDHAL@BNCJSHC@G@QBA\\JHCJDF@FIDA`CFBDBBBCHBBPVRCRBHDfZJDJBLIHURKJKJC@EKOJMPGFAN@JF"],
                "encodeOffsets": [
                    [115113, 25747]
                ]
            },
            "properties": { "cp": [113.051227, 24.185022], "name": "清远市", "childNum": 1 }
        }, {
            "id": "441900",
            "type": "Feature",
            "geometry": {
                "type": "Polygon",
                "coordinates": ["@@EBCA@CGECBEAGODACEAEEGSCACM@GCEGGABCAGDAB@AH@BDA@EFADC@ACAEBAA@EF@FCNFDADBD@@AAIFCDBDC@AGADGB@@BJC@@CI@AFAHG@GECACA@CE@QDEEEA@CBA@MI@EDA@ABIEGDA@CCKIBAADGF@BCWUFICCE@GODCGAE@GDABBDEHEA@IG@@DDDCJEGA@@FCGA@BDABDJD@F@FEHPAJDB@BIFCDA@QJBDEPIDBHABCDBJMF@CCCGBCFG@AAA@CB@DCBCHC@CCMDCPABC@EFDD@BAHCD@HKCABDBEDGACDEE@EGCECEBBFGHEAEDBDB@@JIAACCBADC@AAIDBDFD@DEFADDBADABCACEEACEEBADGAACGDAA@CEAGAAAG@EDEACFGACHGBAFFH@DC@CLCJ@DCJ@LSA@DFA@HGEA@@ACABDCA@BA@BEAAEJDFHBABAFCBCBEBAAC@ABAFGEA@ADCACBBDADBBABIFCHODABCBBBQAIAGBGAACADGACFI@AHAHDBDEL@DAFBDCDAAADBDAABCBED@DFAAB@BFBFADBFAJ@QDC@C@CCCBAAACECADD@@FAEABIC@BEB@DB@E@FFEAC@@DACCCADDBA@C@@D@AC@AFDBC@@DA@ABDBDGLNA@CCEAADAAAD@@EBDB@FACAAAB@AC@FECCCBBAACAB@CCBBA@ACB@DAB@CC@@DDBC@AAB@@CGEBCCE@BE@BCDEA@@EO@EE@AABECCFC@EDKEG@@EECCE@ECCHCBGACDGEQECCBCEEB@GCBAESACEBEEEGAGFC@ACDGAEKEGGFMAGEIGEUI[QUkKVMPIFSDS@aAgW©¼]`w|MTMX@ZH`@N@HGNMP[|QpGLGLIXKzAdBRR\\RNFHL\\NLL@rLTJJFHJLH|@DBFJED@BRNHCHBD@BAAKB@RJXBLD\\V`RXFTA`WpDFAJCLAZDVCdOJAHE@ND@@FHABG@E@A^CJFLLFBPMJCH@DA@GLHJ@|OFBTF^FN@^STWVIFEFARAVDjZNFRBNCXCJEDO@QL[HGLI\\MP@@G@EFA@@DCB@LIDE@CFEFB@CB@DI@AUNEQEIBCECDCCCIABCGG@EFGDADDBFLOTCDED@@BH@BAACFCBBFDFAD@BHD@PJ@BJNDGD@BAHCDDDABBDCCCDAVBBADBHCDGB@BAD@@KDA@GACBIIAEEC@EGI@DCF@FKACC@AEBGBSFEFCDEHCLIL@BCJCHB@CHIHBDBHABKCI@CGGAECCGAAEC@IF@DEBCAGI@IAABEDCDIAQDCAEABA@AEDEAGFC@OCE@EDCAKCEGE"],
                "encodeOffsets": [
                    [116971, 23361]
                ]
            },
            "properties": { "cp": [113.826262, 22.886237], "name": "东莞市", "childNum": 1 }
        }, {
            "id": "442000",
            "type": "Feature",
            "geometry": {
                "type": "Polygon",
                "coordinates": ["@@aB]HG@EAEECACDEAEGG@IJC@GEOEACBUKEECAIDIHG@KEIHKBC@GEEBICA@CBEHADA@IHC@CHG@AACSIQ@CIIAKCACHEHID@\\_F@AKDEF@BA@GDGJ@BABGD@@EBA@ECCCIIEOECBC@ACMBGCAG@GDCFCBCQC]KIK_KUGCCKAQD]dMRGFGCA@CHGDEAABEBaTMLKVMb[|AFAdGL¦WNKf@x@FIRKPELEZQ\\KPS`KLOLSVIHD\\GlQ`UXEPKH@fFZFLN@BB@NGAELC@ADD@BDF@ILDFFA@BF@DD@FDABBDC@DEFBBJKFANGLBLBADAJLN@F@JJBPPJLT`HZFFHDLALGNUFEDCJBNRHFFBN@TEXDbHAJDHNHJHHDZJDHHHbWe\\I^ANAjMGONKj_idYAQMA@CHMtFIFFHEFFFCBBXSTA^QLKfZ~CTBoGk}I@"],
                "encodeOffsets": [
                    [116295, 22950]
                ]
            },
            "properties": { "cp": [113.382391, 22.521113], "name": "中山市", "childNum": 1 }
        }, {
            "id": "445100",
            "type": "Feature",
            "geometry": {
                "type": "MultiPolygon",
                "coordinates": [
                    ["@@B@@AAB"],
                    ["@@B@@CA@@D"],
                    ["@@BBBAC@"],
                    ["@@A@BBB@AA"],
                    ["@@@BBA@AAB"],
                    ["@@A@B@"],
                    ["@@BACD@@BA"],
                    ["@@@AAB@@B@"],
                    ["@@@DBBBCAAAA@B"],
                    ["@@B~CRKRCJDdADIFGJAHBF@BSFGGADIAKGE@@DGBKHAPBD@DEBGFKAIFG@EJEBI@EEEACE@CACHC@DDEGCBCCCFABEJ@ACAKA@AECBCBCC@ACAEB@BCBCAACMEGBADIBAE@C@EEG@A@GFA@GKCCAAGBAACIBEHA@ACGDGGEGCBA@BCCCKDALABA@ALA@EHE@GD@HCHCBEBAE]AIC@CDK@KKCECCECEDCLCPODQACIAGCAKEAAEAmDCDYBIHIF_DKGSCCOCCAGSHQOIIAEEABENADIGEDACBA@AEAA@CGC@G@OFIISFCIEDC@EFBFCFBBHLEJDHAFIDCJKLC@ECG@iTGBKAQHGFEAEBCBCJERQJCF@`@L@FDFLDDDBFCHNDFAFHF@DDEFELBBDTABC@EFC@ABEBAFEB@DEEAABEG@EBGLEDC@AJBHCBECEB@BDRAB@DNF@XEBIPBPIXGACBADAPEBEAGBK@GBKAGDGCG@EAG\\OE@DFHADWFGBCCCMC@EDKRCJALCBEBY@SDOL@FEFOPI@ECA@IJBLGTBHFHHIJD@FHDDJHBJNLNDPN@LPLBHDFANBHG@GF@RGLOPKF@bGR@FBDFBHJF@h@LDLHJHBFFELGB@DDDBFEX@BDBFADCBEB@HDFLS^cZEJ@FBFLCL@LABB@FLP@FDBFGNFF@BF@DFHJAXNFF@DCFBHVFLA@A@CDAJ@RIFBHJNFBB@R@JAJ@FHF@NEJAHBBB@HCVEF@DFGDIBBBABOLBNBBJ@F@DBFHHBJEDCH@FJANDDANJHJBNKP@BCJCB@@DBBXDDC@IBCLABBAJGFLFALGPBBJGRVFL@F@FCLDFKNALCHBBHFBFNJNCJGHCNABBDJLFJJP^BBROB@J\\@LEJER@b\\nLH@HHDJ@D@DFFDRPHAHEDAXEJXLLLHLALIDQDEFCJ@JHD@FJDPBD@XVHJAJJAHMRADBFLLNDFHJDJCVQBCBCPCFBV@@GPIDIHILBDAHIXKHIBEACIICICCQGGGAGCAQ@ECIKGEGMCAIACEIIAGEYGKAEBIDIAQDW@IJIDMBAH@NFHAAECABKAKCEOC@C@AFEF@@@HGLI@ECM@CBCFEFALHHBNEJIAEKKAMACBEAI@EDEPQGMDIAMEEAMEGKGIAEBGAACDGFCBE@GACCEBC^KDGCE@CBAJABA@AECAIAEDEYBCACCAAFIFEPER@FJNDFAJEZGBABGFCDIFIDUFOQO@ADKAEJITOFMFGF]JKDI@WDI@CAEBICEBEDEAI@CFEAE@MDIFCREHDF@FEFOLKFIBAJBJGVBLALUFQBBPJH@DBD@BCJFNQLIHCL@HGJDJAFBJEDGAIB¿ãgYIOAM@_L_@SEMEKIUkEIGCGAF[D]HOHUZCDEDGBGA"]
                ],
                "encodeOffsets": [
                    [
                        [119794, 24064]
                    ],
                    [
                        [119799, 24057]
                    ],
                    [
                        [119800, 24057]
                    ],
                    [
                        [119797, 24062]
                    ],
                    [
                        [119797, 24067]
                    ],
                    [
                        [119721, 24077]
                    ],
                    [
                        [119723, 24072]
                    ],
                    [
                        [119725, 24071]
                    ],
                    [
                        [119877, 24103]
                    ],
                    [
                        [119724, 24097]
                    ]
                ]
            },
            "properties": { "cp": [116.792301, 23.661701], "name": "潮州市", "childNum": 10 }
        }, {
            "id": "445200",
            "type": "Feature",
            "geometry": {
                "type": "MultiPolygon",
                "coordinates": [
                    ["@@HSAKJIB@FDJ@POFE@EPKTCZ@FADABKDILQFCD@DNDDHAXEBCEG@CPFH[FBH@HDHCLBHAL@HAFBFABOBCDAHBJWAOJOFA@WME@CBACQ@AFAFDDAAGBID@FCHKFAH@AFBBFF@CFABEFABAD@FED@BACSAAFKFECCE@EGEBMCDGAECCKCCE@E@K@_DERIFQDIDAFAFBHERGLBHAjSH@FDD@LKDIJCBC@CCEFIGKAADEAEK@GFMB@DMHCHMHGJGDCF@LGDC@CECKBOFEFDHE@KB@BWIECBEAACACFAAEEFCKTECGMDC@A@BEDCQ]@SMROfANGLILUPUJUFESBCBCH@FDFJNVTP\\DH@P@DILIDI@YEaQGGQWIEICEBCBGJCJCR@JBbCFGAOWQ@GBUAAADEAAAAID@IGEEKAMECE@CACG@GEGAOFGJCACOHGCACC@GBACCAE@UHCDEG@GDO@IHOD@@BHBBBD@AEBEH@HEBGJGDBBDJA@EDC@ACAKFCKBCBMFEBCCQDGA_JO@EII@IACUBQ@GCG@CCAEBGJELKBGCKAOEFGBSIECJI@EACMEGGFM@CMOBGAIGIAGBKAEEAUSYDIIEKBUHEB@@DBBD@BECGEECBECMG@EFE@ACACEHAHDBC@ACAD@@@BHDDBAACAKCBQ@BC@IDG@ECKDABEKGIQLKBGHCAGBCLB@GBAFFBC`MFDFCACBAD@DBBCACCBAEFEACDCH@FCH@@FDFD@F@FBHAFELDHACGBAJA@CHGFAAGDADGBQFGBAEGDEDBDAH@DFFA@AAAJAJ@HGAC@AH@@AH@@AEAEDACEAFCH@FA@AAADCNBBBBBNDDHLFDFZJDDDFF@DABBBFHDFHBPTL@BGHBDB@LCF@PDDBBJL@HHFBPAFBDCFBDAFEH@DDFC@FB@FA@GFEB@FDFCFBDDFBF@FDHADDZJXYDI@IMaCUBMFO@QBCBIPKJEBEA@MCKGAADIACQCAAEGCBCDC@GCIIEICMAYCOGMOWIIKEUAI@_PUBYCgMiGYIMCQ@eNqTGF[XIDMBMC[oAVABQAIBKJMBYGICOQIG@EFEBEAAFMGKAIA@MBCAG@WHABBFADCDKFC@QQ]AE@EDEHIDQDABCTGHWDMFM@GBIFOLCJIBCDEBE@GGGAGJBHCDCBG@AICGAAECMCIGGEGJCD@FDH@DEDEEGBCFAHB@@CBB@DHADBHFCFBBCDBFCD@D@@HA@HBFG@CABCCCAIEADCEE@IAAEBGPSCI@ABEFBDN@CBADFJ@D@DCDAFCBADC@@LHBBDF@B@@FGFNXHDBDFL@FCBEBA@@E@AGACKEHGQEACBEHEFEBIHAHBFDBDKBBFLBBF@FFFADCHAHEJPAHBFFBDDB@LLGFBFKJG@GFAJMAMFALJR@DCBG@KNMLADBFDPMBABALKNKDGDKKIEIAQBSE[eIBSNGJBVEDSHGAQHQDOLENKNCLCBGBWAEBEDGJiVMLABDDNL@FEF@FFLFFDBJGNWDCDD@T@FFH@HMTCH@FBHDDNLJDJCVFXAPF`@NDFDDFLDAFMNBD@DMLIFIFMAEBAFDLELDHAH@FJL@DAH@DBDPBFBFLBDFBQXSPEJGDAFGFCBGREFADCBMBICQ@UIC@IDKMGEG@YBKAIAEG@KKGKCI@GBCBA^CLFHKH@D@BFFAL@BNHFHBFu\\KJGJCTIHWJGFCPQVEBCCAAADADRFHFDLDLAF@FEHADBFFFNDHDBFB@DBJC@P@DCLPFDAD@BFNADLHDFJBFPJJBJFDABCJGJWDIPMHOTIL@JD@NBFD@RALFPIHAFFJ@J@HIHCFANRGJ@DDB@BEJHJD@NAFNHF@BKF@DDJF@FL@JFHGFBHQHGNBBN@FDBDBDCHIBCHAHBFHHBJFBDDBFDDJTFBH@B@AJFJD@HJH@HBFBFIDAF@LDBAHO@GFCDGFCJGVEFGJABADKDAF@FF@D@FBBPFFBDAHCD@NLrXHJ@DCFBBVJTVFDDDF@FA`@PMFMKO@ARIBERAFDNDFALIPEBFAF@BJAN@JCDMJCFEFEAEBAB@DDN@DEDAFBJJFCDEB@@EDEDBBDDBDAJFD@JBDGFAPAFGB@BDVBHCBFJJNJ@LDFFDLCFJCD@LCDA@AAIAGPHNGDADH@FLANADA@@DFBXADBDHFDDCBDDHBBDDJHDH@FCTDBF@BDDDDFHDL@FAAGEAIEFCD@LLJDJJFBDDCBFDVLNH@LAF@DHDF@JFLBDADCHAF@JJDFBFVBBB@HREPBHGCAAG@ADC@EFCFAAABALCBIFGFAFBBC@EFCBCHC"],
                    ["@@@@BCFCC@CH"],
                    ["@@@BBA@AAB"],
                    ["@@ABF@BAE@"]
                ],
                "encodeOffsets": [
                    [
                        [119162, 24303]
                    ],
                    [
                        [119360, 23597]
                    ],
                    [
                        [119261, 23474]
                    ],
                    [
                        [119244, 23482]
                    ]
                ]
            },
            "properties": { "cp": [116.115733, 23.343778], "name": "揭阳市", "childNum": 4 }
        }, {
            "id": "445300",
            "type": "Feature",
            "geometry": {
                "type": "Polygon",
                "coordinates": ["@@@D@FBBDBF@CDAFHDBCBEPBBBF@DEJCJEBCRB@BHCFC@CDCDDFEDAHEBCHC@CCC@CC@@CD@NED@JAFK@CCAFGDBLKBBCFJDDDBCAABCTLLDFADFNCDFDC@AF@HFFAF@@HD@BDAFDBBFCFBJHDHF@HDB@FABCCELDBH@DBfu\\aPODEDKBM@ICEKOSIWCIAGGGKAGBEJITIRKdQfI`@XBXEJCDETcLKNCbCZFfOH@HBR@TGTGNIbIEpBLBTHPJN@REVO\\IjANPCNEJM@GDKDYDIHEHERErCFCDEJGLALBNVNJHF@F@\\OLBRDN@HERCZKXA\\BjddfLHNDpFLDRLJLBGJ@BCF@FCHED@RABM\\U@ECE@EDCCECAEEAECABA@AEACCEAKD@DEACG@GCIAKGKECEKAI@EB@DEAGD@AKDAGKBE@ABCHADEJ@@CAACGAAAIC@AEAGBECA@CE@@AAGBEAAG@AABABB@A@AKE@CBAJADCBGAEHCBCBAEC@GCCC@GHA@@CG@A@CEA@ADCBBDA@C@ABC@CDE@CAAGH@BA@GFCAABE@AC@@MEE@AD@BAACBGCECC@AJGHAJJFBDDH@JELFF@DBH@B@BEDADBDA@WCGIGAC@IDGAAECAIDE@KD@HE@AHIACJC@CAABCCCDI@G@CCABCBCCE@CDALDHA@ABCLGBEDCBCD@DICAAEI@CAABE@AGCEE@AK@@D@HCLBBCB@NFLEHBDCB@BBCDBDH@BCDANDXJBFLGB@HG@AECACDABIHIBADA@CAC@CDGBCAA@GDECC@KLeAGBCJABEFEAEF@AEDEAAACC@GC@GAIDGAABEH@BKDCBGF@BBJCL@HNLH@JFJBBHJ@FFDAFBDD@@DNAHDDBDBB@@AHC@ERCDGFCACH@HMF@BC@KCAAGBCHELEBECCBC@A@BD@BGBBDADMDCEE@EEEFGBAHCDEAACB@CJCBGFCAADKACDIAAC@@CMAIECCG@EACCE@GAAABCA@AEABIFIECGEBAAE@ABA@ACC@ANILCHG@IFIB@BBFAB@DGJD@@DGB@D@B@DJDCH@B@DDB@FDF@DCFC@ABGPKDBDF@FHIDAFAAGGIFCCCAEIBAFC@KEAEEKGGGAIJED@BCAACCDIC@MBACBCCC@GCA@ADC@EAACGCAACCACBCAC@ABA@CCDEEGA@@ABA@GB@DCCA@ACABC@CIQBEE@@ADEDABADCE@EEA@CACDDB@BF@@BGB@JI@CBQDABQDBCB@CE@CDAVAFCHIF@CAEA@CA@ADIDGA@BMBC@CGCACDKFIHLLDH@HGDKBMDK@CC@GCA@GCCBCHAEGCE@CFCCAC@@ABABKDABC@MEQEGMCC@GDGGMBSOGAEBEAAEDMCMJI@AKUAEAA@EAAAGC@CGAGAAAGEAGQEE@MFCJSBKMCMDGAOKOEGBEFI@CFCADEAEGACAEB@AAILA@C@ICC@EAAEAAAFQ@EA@MJEBAAC@AHCH@HMHADEBBFAHBJKHEHKBCB@DGF@BIEGMEDEAODCDG@CAEHmFKFC@ABCHCTIBCNIH@D@DEDKEEBIF@JA@C@CBILADKDCBKBEDK@@DBFADDLCAGBBLKBA@@EA@EDEDADC@@HG@IN@BBBFLABEBAFAFADEB@JCJGF@JCDAJFLFF@FBFPALFJH@FHHBB@LAHBDABQFCACD@FGLGDALCB@DGBCNED@JIDADEFAAMMMGC@CC@ACCGIAEAGEEIEBCAAEA@EAAIBGCAC@EIGEAAGBECC@CACEFAAAACBEFAFECG@IFCDA@BKCCC@GDIDAHGHE@GCEBCDBB@DIABAA@KBCHDB@DAFGCQH@BBFNF@DDDHA@ALADBAFBBHBHGLCDADJ@NADEBCHC@@BFB@BC@FBBJN@NBCHBB@DFFAHABBFAH@JGBICCBGH@LE@AJC@@DE@EHCAC@@JBHCDIAEQCAGDEAACCC@B@CBACAAGD@@EMOC@CCBCCAAE@EAC@ADCD@BIFC@EEGGCMCCGIIAEGAAEACE@EMAISGCCA@ACE@@KIGCBKEEAAAE@MGEGEG@CAAAA@EGK@KMGDGAKBIAA@EBAEEEIAEAC@GEBCIIGKSMIU@CFBF@DCDBJGFADCDGACAG@GBACIAC@CAA@AFCAE@ADCAGDEFBDIFC@CMCEBCECENCFBBHBDV@BK@FFCD@FBBAD@BDBGFECCA@DBDBJAHEDABGBIACDKCGCG@MIKCAABAACSSB@BGSCMGBA@@AM@KDEAAGCCGGE@EC@CGKGKBCD@DCDMHCFA@EFG@ABCBABEB@BGHC@ICAGEAAGA@C@IGBIF@BA@CFCCCCIBAAIDABKHA@GEC@CCCGQM@ADA@ICW@GOEEBEAAE@CBCCKBACCBC@AFEDAD@DFD@HBBBJBBCDEAIDCHBBCD@FBDCH@LABABDBADA@EFABBFDBJNDR@FDD@JADKDC@ABCBEEGBEAG@KGABCDE@ADEDYIEEEAEDAAAAEFAFA@ELEBAFA@CAKKM@ABECCIMDGGCAUACC@GEGAAADCFGCAICAAAABABADCDAJBHBBHN@HHDBDHDDNDDBD@HFRFBNANDDAVBFDBD@HSHGFGD@BKFCHFDADAHEDG@CDCBCB@DI@EDYDWGC@GCCGC@A@EDIEQDK@CBE@@JCFCBGBGD@JEBCFA@GHA@CECBECE@CCUDGHQVKBGFKBCBBH@HCJMJ@HEHANCD@DCHRP@HAJBFGDEHKH@DCBBBAFEAADE@E@CBE@CCCGBEAAQAK@@DKJAJBFIHEBEHGDIBEDAJE@@BBDDDTADAB@BDNADAF@HBBDJB@JBDFBHEDDDHHGLBCFDBDADCB@FAH@BEFABB@DDFDC@CBAHCFB@@D@DHDB@EBAB@@FB@FB@ENBLAFBB@BADGD@D@BDB@FCLBFFBA@CNF@BBLBFBBHCFDBCF@F@DDTLDF@H@BJD@DDBCHBFFF@F^JBFBHBBF@HCHGDBBBBRB@VJHABBDLAFEB@DHHDLG@@FLBHBDHDBBDDDEJH@BAFDDDADDFLAFFBFFFBDCF@DJAFDLBDD@FDFFAFDBBADFFADPHDJAVFFADFBDFHDBPFDBF@HCDBDAFGJE@CHBDHB@BABAB@NEF@FCDBBJ@JCDBDJJBFFF@DDNDFJFDBHSL@DILNHBHT@BHLAFFE@FNRPHAJH@DCDBNKJADDDAJFBBJDBBHABMEBEGCC@AHGCEBWCABKBc^CHAL@fFFBHADEDFA@BFDABABAC@FH@AABCBFABEAAFA@BPAJSBADVFLJP@NJDDCLIHEEIB@vBPDJDD@DCDKBGD@HDDQXIHAFBDD@@HDDBFB\\CBQLIGC@BDC@AGA@APFND@DHCBC@@HH@DDHNTHHFDJ@FADCB"],
                "encodeOffsets": [
                    [114049, 23875]
                ]
            },
            "properties": { "cp": [111.844439, 22.929801], "name": "云浮市", "childNum": 1 }
        }],
        "UTF8Encoding": true
    });
}));
