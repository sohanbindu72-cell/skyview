-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 08, 2026 at 08:44 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `skyview`
--

-- --------------------------------------------------------

--
-- Table structure for table `admins`
--

CREATE TABLE `admins` (
  `id` int(11) NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `admins`
--

INSERT INTO `admins` (`id`, `username`, `password`) VALUES
(1, 'admin', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi');

-- --------------------------------------------------------

--
-- Table structure for table `airports`
--

CREATE TABLE `airports` (
  `id` int(11) NOT NULL,
  `location_id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `link` varchar(255) DEFAULT NULL,
  `note` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `airports`
--

INSERT INTO `airports` (`id`, `location_id`, `name`, `link`, `note`) VALUES
(2, 2, 'Buenos Aires - Ministro Pistarini International Airport, EZE', 'https://skyvipservices.com/airport/ministro-pistarini-eze-saez-ar', NULL),
(3, 2, 'Jorge Newbery Airport, AEP', 'https://skyvipservices.com/airport/jorge-newbery-aep-sabe-ar', NULL),
(4, 2, 'Ushuaia International Airport, USH', 'https://skyvipservices.com/airport/ushuaia-ush-sawh-ar', NULL),
(5, 3, 'Zvartnots International Airport, EVN', 'https://skyvipservices.com/airport/zvartnots-evn-udyz-am', NULL),
(6, 4, 'Queen Beatrix International Airport, AUA', 'https://skyvipservices.com/airport/queen-beatrix-aua-tnca-aw', NULL),
(7, 5, 'Adelaide Airport, ADL', 'https://skyvipservices.com/airport/adelaide-adl-ypad-au', NULL),
(8, 5, 'Brisbane Airport, BNE', 'https://skyvipservices.com/airport/brisbane-bne-ybbn-au', NULL),
(9, 5, 'Melbourne Airport, MEL', 'https://skyvipservices.com/airport/melbourne-mel-ymml-au', NULL),
(10, 5, 'Perth Airport, PER', 'https://skyvipservices.com/airport/perth-per-ypph-au', NULL),
(11, 5, 'Sydney International Airport, SYD', 'https://skyvipservices.com/airport/sydney-kingsford-smith-syd-yssy-au', NULL),
(12, 6, 'Salzburg Airport, SZG', 'https://skyvipservices.com/airport/salzburg-szg-lows-at', NULL),
(13, 6, 'Vienna International Airport, VIE', 'https://skyvipservices.com/airport/vienna-vie-loww-at', NULL),
(14, 7, 'Leonard M. Thompson International Airport, MHH', 'https://skyvipservices.com/airport/marh-harbour-mhh-myam-bs', NULL),
(15, 7, 'Lynden Pindling International Airport, NAS', 'https://skyvipservices.com/airport/lynden-pindling-nas-mynn-bs', NULL),
(16, 8, 'Bahrain International Airport, BAH', 'https://skyvipservices.com/airport/bahrain-bah-obbi-bh', NULL),
(17, 9, 'Bridgetown Grantley Adams International Airport, BGI', 'https://skyvipservices.com/airport/bridgetown-grantley-adams-bgi-tbpb-bb', NULL),
(18, 10, 'Brussels Airport, BRU', 'https://skyvipservices.com/airport/brussels-bru-ebbr-be', NULL),
(19, 11, 'L.F. Wade International Airport, BDA', 'https://skyvipservices.com/airport/bermuda-bda-txkf-bm', NULL),
(20, 12, 'Sarajevo International Airport, SJJ', 'https://skyvipservices.com/airport/sarajevo-sjj-lqsa-ba', NULL),
(21, 13, 'Sir Seretse Khama International Airport, GBE', 'https://skyvipservices.com/airport/sir-seretse-khama-gbe-fbsk-bw', NULL),
(22, 14, 'Val-de-Cans/Júlio Cezar Ribeiro International Airport, BEL', 'https://skyvipservices.com/airport/val-de-cans-julio-cezar-ribeiro-bel-sbbe-br', NULL),
(23, 14, 'Brasilia International Airport, BSB', 'https://skyvipservices.com/airport/presidente-juscelino-kubitschek-bsb-sbbr-br', NULL),
(24, 14, 'Várzea Grande–Marechal Rondon International Airport, CGB', 'https://skyvipservices.com/airport/varzea-grande-marechal-rondon-cgb-sbcy-br', NULL),
(25, 14, 'Curitiba-President Afonso Pena International Airport, CWB', 'https://skyvipservices.com/airport/curitiba-president-afonso-pena-cwb-sbct-br', NULL),
(26, 14, 'Florianópolis–Hercílio Luz International Airport, FLN', 'https://skyvipservices.com/airport/florianopolis-hercilio-fln-sbfl-br', NULL),
(27, 14, 'Fortaleza–Pinto Martins International Airport, FOR', 'https://skyvipservices.com/airport/fortaleza-pinto-martins-for-sbfz-br', NULL),
(28, 14, 'Goiânia/Santa Genoveva International Airport, GYN', 'https://skyvipservices.com/airport/goiania-santa-genoveva-gyn-sbgo-br', NULL),
(29, 14, 'Foz do Iguaçu/Cataratas International Airport, IGU', 'https://skyvipservices.com/airport/foz-do-iguacu-cataratas-gru-sbgr-br', NULL),
(30, 14, 'Ilhéus/Bahia–Jorge Amado Airport, IOS', 'https://skyvipservices.com/airport/ilheus-bahia-jorge-ios-sbil-br', NULL),
(31, 14, 'Londrina–Gov. José Richa Airport, LDB', 'https://skyvipservices.com/airport/londrina-gov-jose-richa-gru-sbgr-br', NULL),
(32, 14, 'Manaus–Eduardo Gomes International Airport, MAO', 'https://skyvipservices.com/airport/manaus-eduardo-gomes-mao-sbeg-br', NULL),
(33, 14, 'Porto Alegre–Salgado Filho International Airport, POA', 'https://skyvipservices.com/airport/porto-alegre-salgado-filho-gru-sbgr-br', NULL),
(34, 14, 'Porto Seguro Airport, BPS', 'https://skyvipservices.com/airport/porto-seguro-bps-sbps-br', NULL),
(35, 14, 'Aeroporto Internacional do Recife/Guararapes–Gilberto Freyre, REC', 'https://skyvipservices.com/airport/recife-guararapes-gilberto-freyre-rec-sbrf-br', NULL),
(36, 14, 'Rio De Janeiro - Santos Dumont Airport, SDU', 'https://skyvipservices.com/airport/rio-santos-dumont-sdu-sbgl-br', NULL),
(37, 14, 'Rio de Janeiro-Galeao International Airport, GIG', 'https://skyvipservices.com/airport/rio-galeao-tom-jobim-gig-sbgl-br', NULL),
(38, 14, 'Salvador–Deputado Luís Eduardo Magalhães International Airport, SSA', 'https://skyvipservices.com/airport/salvador-deputado-luis-eduardo-magalhaes-ssa-sbsv-br', NULL),
(39, 14, 'São Luís–Marechal Cunha Machado International Airport, SLZ', 'https://skyvipservices.com/airport/sao-luis-marechal-cunha-machado-slz-sbgr-br', NULL),
(40, 14, 'Sao Paulo-Guarulhos International Airport, GRU', 'https://skyvipservices.com/airport/guarulhos-governador-andre-franco-montoro-gru-sbgr-br', NULL),
(41, 14, 'São Paulo - Congonhas, CGH', 'https://skyvipservices.com/airport/congonhas-deputado-freitas-nobre-cgh-sbsp-br', NULL),
(42, 15, 'Terrance B. Lettsome International Airport, EIS', 'https://skyvipservices.com/airport/terrance-b-lettsome-eis-tupj-vg', NULL),
(43, 16, 'Sofia Vasil Levski Airport, SOF', 'https://skyvipservices.com/airport/sofia-sof-lbsf-bg', NULL),
(44, 17, 'Calgary International Airport, YYC', 'https://skyvipservices.com/airport/calgary-yyc-cyyc-ca', NULL),
(45, 17, 'Halifax Stanfield International Airport, YHZ', 'https://skyvipservices.com/airport/halifax-stanfield-yhz-cyhz-ca', NULL),
(46, 17, 'Montreal-Pierre Elliott Trudeau International Airport, YUL', 'https://skyvipservices.com/airport/montreal-pierre-elliott-trudeau-yul-cyul-ca', NULL),
(47, 17, 'Billy Bishop Toronto City Airport, YTZ', 'https://skyvipservices.com/airport/billy-bishop-ytz-cytz-ca', NULL),
(48, 17, 'Toronto Pearson International Airport, YYZ', 'https://skyvipservices.com/airport/lester-b-pearson-yyz-cyyz-ca', NULL),
(49, 17, 'Vancouver International Airport, YVR', 'https://skyvipservices.com/airport/vancouver-yvr-cyvr-ca', NULL),
(50, 18, 'Larnaca International Airport, LCA', 'https://skyvipservices.com/airport/larnaca-lca-lclk-cy', NULL),
(51, 18, 'Paphos International Airport, PFO', 'https://skyvipservices.com/airport/paphos-pfo-lcph-cy', NULL),
(52, 19, 'Prague Vaclav Havel Airport, PRG', 'https://skyvipservices.com/airport/vaclav-havel-prague-prg-lkpr-cz', NULL),
(53, 20, 'Aarhus Airport, AAR', 'https://skyvipservices.com/airport/aarhus-aar-eka-dk', NULL),
(54, 20, 'Copenhagen Airport, CPH', 'https://skyvipservices.com/airport/copenhagen-kastrup-cph-ekch-dk', NULL),
(55, 21, 'Las Américas International Airport , SDQ', 'https://skyvipservices.com/airport/las-americas-sdq-mdsd-do', NULL),
(56, 22, 'José Joaquín de Olmedo International Airport, GYE', 'https://skyvipservices.com/airport/jose-joaquin-de-olmedo-gye-segu-ec', NULL),
(57, 22, 'Mariscal Sucre International Airport, UIO', 'https://skyvipservices.com/airport/mariscal-sucre-uio-seqm-ec', NULL),
(58, 23, 'New Borg El Arab International Airport, HBE', 'https://skyvipservices.com/airport/el-arab-hbe-heax-eg', NULL),
(59, 23, 'Cairo International Airport, CAI', 'https://skyvipservices.com/airport/cairo-cai-heca-eg', NULL),
(60, 24, 'El Salvador International Airport, San Óscar Arnulfo Romero y Galdámez, SAL', 'https://skyvipservices.com/airport/salvador-sal-mslp-sv', NULL),
(61, 25, 'Tallinn Airport, TLL', 'https://skyvipservices.com/airport/lennart-meri-tallinn-tll-eetn-ee', NULL),
(62, 26, 'Addis Ababa Bole International Airport, ADD', 'https://skyvipservices.com/airport/addis-ababa-bole-add-haab-et', NULL),
(63, 26, 'Beica Airport, BEI', 'https://skyvipservices.com/airport/beica-bei-habe-et', NULL),
(64, 27, 'Nadi International Airport, NAN', 'https://skyvipservices.com/airport/nadi-nan-nffn-fj', NULL),
(65, 28, 'Helsinki Airport, HEL', 'https://skyvipservices.com/airport/helsinki-hel-efhk-fi', NULL),
(66, 28, 'Kuusamo Airport, KAO', 'https://skyvipservices.com/airport/kuusamo-kao-efks-fi', NULL),
(67, 28, 'Rovaniemi Airport, RVN', 'https://skyvipservices.com/airport/rovaniemi-rvn-efhk-fi', NULL),
(68, 29, 'Paris Charles de Gaulle Airport, CDG', 'https://skyvipservices.com/airport/charles-gaulle-cdg-lfpg-fr', NULL),
(69, 29, 'Lyon-Saint Exupery Airport, LYS', 'https://skyvipservices.com/airport/lyon-saint-exupery-lys-lfll-fr', NULL),
(70, 29, 'Nice Cote d\'Azur International Airport, NCE', 'https://skyvipservices.com/airport/nice-cote-d-azur-nce-lfmn-fr', NULL),
(71, 29, 'Paris Orly Airport, ORY', 'https://skyvipservices.com/airport/paris-orly-ory-lfpo-fr', NULL),
(72, 29, 'Paris–Le Bourget Airport, LBG', 'https://skyvipservices.com/airport/le-bourget-lbg-lfpb-fr', NULL),
(73, 29, 'Basel-Mulhouse-Freiburg, BSL', 'https://skyvipservices.com/airport/euroairport-basel-mulhouse-freiburg-mlh-lfsb-fr', NULL),
(74, 30, 'Alexander Kartveli Batumi International Airport, BUS', 'https://skyvipservices.com/airport/alexander-kartveli-batumi-bus-ugsb-ge', NULL),
(75, 30, 'Shota Rustaveli Tbilisi International Airport, TBS', 'https://skyvipservices.com/airport/shota-rustaveli-tbilisi-tbs-ugtb-ge', NULL),
(76, 31, 'Berlin Brandenburg Airport, BER', 'https://skyvipservices.com/airport/berlin-brandenburg-ber-eddb-de', NULL),
(77, 31, 'Bremen Airport, BRE', 'https://skyvipservices.com/airport/bremen-bre-eddw-de', NULL),
(78, 31, 'Cologne Bonn Airport, CGN', 'https://skyvipservices.com/airport/cologne-bonn-cgn-eddk-de', NULL),
(79, 31, 'Duesseldorf International Airport, DUS', 'https://skyvipservices.com/airport/dusseldorf-dus-eddl-de', NULL),
(80, 31, 'Frankfurt Airport, FRA', 'https://skyvipservices.com/airport/frankfurt-am-main-fra-eddf-de', NULL),
(81, 31, 'Hamburg Airport, HAM', 'https://skyvipservices.com/airport/hamburg-ham-eddh-de', NULL),
(82, 31, 'Hannover Airport, HAJ', 'https://skyvipservices.com/airport/hannover-haj-eddv-de', NULL),
(83, 31, 'Munich International Airport, MUC', 'https://skyvipservices.com/airport/munich-muc-eddm-de', NULL),
(84, 32, 'Athens - Eleftherios Venizelos International Airport, ATH', 'https://skyvipservices.com/airport/eleftherios-venizelos-ath-lgav-gr', NULL),
(85, 32, 'Chania International Airport - Daskalogiannis, CHQ', 'https://skyvipservices.com/airport/daskalogiannis-chania-chq-lgsa-gr', NULL),
(86, 32, 'Heraklion International Airport, HER', 'https://skyvipservices.com/airport/heraklion-nikos-kazantzakis-her-lgir-gr', NULL),
(87, 32, 'Corfu International Airport, \"Ioannis Kapodistrias\", CFU', 'https://skyvipservices.com/airport/ioannis-kapodistrias-cfu-lgkr-gr', NULL),
(88, 32, 'Mikonos Airport, JMK', 'https://skyvipservices.com/airport/mykonos-jmk-lgmk-gr', NULL),
(89, 32, 'Rhodes International Airport, RHO', 'https://skyvipservices.com/airport/diagoras-rho-lgrp-gr', NULL),
(90, 32, 'Thessaloniki Airport, SKG', 'https://skyvipservices.com/airport/thessaloniki-macedonia-skg-lgts-gr', NULL),
(91, 32, 'Santorini Airport, JTR', 'https://skyvipservices.com/airport/santorini-jtr-lgsr-gr', NULL),
(92, 33, 'Maurice Bishop International Airport, GND', 'https://skyvipservices.com/airport/maurice-bishop-gnd-tpgy-gd', NULL),
(93, 34, 'La Aurora International Airport, GUA', 'https://skyvipservices.com/airport/la-aurora-gua-mggt-gt', NULL),
(94, 35, 'Aeropuerto Internacional Juan Manuel Gálvez, RTB', 'https://skyvipservices.com/airport/roatan-rtb-mhro-hn', NULL),
(95, 36, 'Hong Kong International Airport, HKG', 'https://skyvipservices.com/airport/hong-kong-hkg-vhhh-hk', NULL),
(96, 37, 'Budapest Ferenc Liszt International Airport, BUD', 'https://skyvipservices.com/airport/budapest-liszt-ferenc-bud-lhbp-hu', NULL),
(97, 38, 'Keflavik International Airport, KEF', 'https://skyvipservices.com/airport/keflavik-kef-bikf-is', NULL),
(101, 40, 'Ngurah Rai International Airport, DPS', 'https://skyvipservices.com/airport/ngurah-rai-bali-dps-wadd-id', NULL),
(102, 40, 'Soekarno-Hatta International Airport, CGK', 'https://skyvipservices.com/airport/soekarno-hatta-cgk-wiii-id', NULL),
(103, 40, 'Minangkabau International Airport , PDG', 'https://skyvipservices.com/airport/minangkabau-pdg-wiee-id', NULL),
(104, 41, 'Cork Airport, ORK', 'https://skyvipservices.com/airport/cork-ork-eick-ie', NULL),
(105, 41, 'Dublin Airport, DUB', 'https://skyvipservices.com/airport/dublin-dub-eidw-ie', NULL),
(106, 41, 'Shannon Airport, SNN', 'https://skyvipservices.com/airport/shannon-snn-einn-ie', NULL),
(107, 42, 'Ben Gurion International Airport, TLV', 'https://skyvipservices.com/airport/ben-gurion-tlv-llbg-il', NULL),
(108, 43, 'Milano Malpensa Airport, MXP', 'https://skyvipservices.com/airport/malpensa-mxp-limc-it', NULL),
(109, 43, 'Rome - Leonardo da Vinci-Fiumicino Airport, FCO', 'https://skyvipservices.com/airport/leonardo-da-vinci-fiumicino-fco-lirf-it', NULL),
(110, 43, 'Bari Karol Wojtyła Airport, BRI', 'https://skyvipservices.com/airport/bari-da-karol-wojtyla-bri-libd-it', NULL),
(111, 43, 'Cagliari Elmas Airport, CAG', 'https://skyvipservices.com/airport/cagliari-elmas-cag-liee-it', NULL),
(112, 43, 'Catania-Fontanarossa Airport, CTA', 'https://skyvipservices.com/airport/catania-fontanarossa-cta-licc-it', NULL),
(113, 43, 'Florence Peretola Airport, FLR', 'https://skyvipservices.com/airport/peretola-flr-lirq-it', NULL),
(114, 43, 'Bergamo - Il Caravaggio International Airport, BGY', 'https://skyvipservices.com/airport/milan-bergamo-bgy-lime-it', NULL),
(115, 43, 'Milano - Linate Airport, LIN', 'https://skyvipservices.com/airport/milano-linate-lin-liml-it', NULL),
(116, 43, 'Naples International Airport, NAP', 'https://skyvipservices.com/airport/naples-nap-lirn-it', NULL),
(117, 43, 'Olbia Costa Smeralda Airport, OLB', 'https://skyvipservices.com/airport/olbia-costa-smeralda-olb-lieo-it', NULL),
(118, 43, 'Palermo - Falcone-Borsellino Airport, PMO', 'https://skyvipservices.com/airport/falcone-borsellino-pmo-licj-it', NULL),
(119, 43, 'Pisa International - Galileo Galilei Airport, PSA', 'https://skyvipservices.com/airport/pisa-galileo-galilei-psa-lirp-it', NULL),
(120, 43, 'Rome Ciampino – G. B. Pastine International Airport, CIA', 'https://skyvipservices.com/airport/romeciampino-cia-lira-it', NULL),
(121, 43, 'Treviso Airport - Aeroporto di Treviso A Canova, TSF', 'https://skyvipservices.com/airport/treviso-tsf-liph-it', NULL),
(122, 43, 'Turin Airport, TRN', 'https://skyvipservices.com/airport/turin-trn-limf-it', NULL),
(123, 43, 'Venice Marco Polo Airport, VCE', 'https://skyvipservices.com/airport/venice-marco-polo-vce-lipz-it', NULL),
(124, 43, 'Verona Villafranca Airport, VRN', 'https://skyvipservices.com/airport/verona-villafranca-vrn-lipx-it', NULL),
(125, 44, 'Sangster International Airport, MBJ', 'https://skyvipservices.com/airport/leonardo-da-vinci-fiumicino-mbj-mkjs-jm', NULL),
(126, 45, 'Kansai International Airport, KIX', 'https://skyvipservices.com/airport/osaka-kansai-kix-rjbb-jp', NULL),
(127, 45, 'Tokyo - Narita International Airport, NRT', 'https://skyvipservices.com/airport/narita-nrt-rjaa-jp', NULL),
(128, 45, 'Tokyo Haneda International Airport, HND', 'https://skyvipservices.com/airport/tokyo-haneda-hnd-rjtt-jp', NULL),
(129, 46, 'Queen Alia International Airport, AMM', 'https://skyvipservices.com/airport/queen-alia-amm-ojai-jo', NULL),
(130, 47, 'Almaty International Airport, ALA', 'https://skyvipservices.com/airport/almaty-ala-uaaa-kz', NULL),
(131, 48, 'Nairobi - Jomo Kenyatta International Airport, NBO', 'https://skyvipservices.com/airport/jomo-kenyatta-nbo-hkjk-ke', NULL),
(132, 49, 'Kuwait International Airport, KWI', 'https://skyvipservices.com/airport/kwi-kuwait-okkk-kw', NULL),
(133, 50, 'Manas International Airport, FRU', 'https://skyvipservices.com/airport/manas-fru-ucfm-kg', NULL),
(134, 51, 'Riga International Airport, RIX', 'https://skyvipservices.com/airport/riga-rix-evra-lv', NULL),
(135, 52, 'Beirut International Airport, BEY', 'https://skyvipservices.com/airport/beirut-rafic-hariri-bey-olba-lb', NULL),
(136, 53, 'Vilnius International Airport, VNO', 'https://skyvipservices.com/airport/vilnius-vno-eyvi-lt', NULL),
(137, 54, 'Macau International Airport, MFM', 'https://skyvipservices.com/airport/macau-mfm-vmmc-mo', NULL),
(138, 55, 'Kuala Lumpur International Airport, KUL', 'https://skyvipservices.com/airport/kuala-lumpur-kul-wmkk-my', NULL),
(139, 56, 'Male - Velana International Airport, MLE', 'https://skyvipservices.com/airport/male-mle-vrmm-mv', NULL),
(140, 57, 'Malta International Airport, MLA', 'https://skyvipservices.com/airport/malta-mla-lmml-mt', NULL),
(141, 58, 'Mauritius - Sir Seewoosagur Ramgoolam International Airport, MRU', 'https://skyvipservices.com/airport/sir-seewoosagur-ramgoolam-mru-fimp-mu', NULL),
(142, 59, 'Cancun International Airport, CUN', 'https://skyvipservices.com/airport/cancun-cun-mmun-mx', NULL),
(143, 59, 'Merida - Manuel Crescencio Rejon International Airport, MID', 'https://skyvipservices.com/airport/licenciado-manuel-crescencio-rejon-mid-mmmd-mx', NULL),
(144, 59, 'Monterrey International Airport, MTY', 'https://skyvipservices.com/airport/monterrey-mty-mmmy-mx', NULL),
(145, 59, 'Puerto Vallarta - Licenciado Gustavo Diaz Ordaz International Airport, PVR', 'https://skyvipservices.com/airport/licenciado-gustavo-diaz-ordaz-pvr-mmpr-mx', NULL),
(146, 59, 'Los Cabos International Airport, SJD', 'https://skyvipservices.com/airport/los-cabos-sjd-mmsd-mx', NULL),
(147, 59, 'Veracruz - Aeropuerto Internacional Heriberto Jara, VER', 'https://skyvipservices.com/airport/veracruz-heriberto-jara-ver-mmvr-mx', NULL),
(148, 60, 'Podgorica Airport, TGD', 'https://skyvipservices.com/airport/podgorica-golubovci-tgd-lypg-me', NULL),
(149, 60, 'Tivat Airport, TIV', 'https://skyvipservices.com/airport/tivat-tiv-lytv-me', NULL),
(150, 61, 'Agadir-Al Massira Airport, AGA', 'https://skyvipservices.com/airport/al-massira-aga-gmad-ma', NULL),
(151, 61, 'Casablanca - Mohammed V International Airport, CMN', 'https://skyvipservices.com/airport/mohammed-v-cmn-gmmn-ma', NULL),
(152, 61, 'Fes-Saiss Airport, FEZ', 'https://skyvipservices.com/airport/saiss-fez-gmff-ma', NULL),
(153, 61, 'Marrakech - Menara Airport, RAK', 'https://skyvipservices.com/airport/menara-rak-gmmx-ma', NULL),
(154, 61, 'Oujda - Angads Airport, OUD', 'https://skyvipservices.com/airport/angads-oud-gmfo-ma', NULL),
(155, 61, 'Tangier Ibn Battouta Airport, TNG', 'https://skyvipservices.com/airport/tangier-ibn-battouta-tng-gmtt-ma', NULL),
(156, 61, 'Dakhla Airport, VIL', 'https://skyvipservices.com/airport/dakhla-vil-gmmh-ma', NULL),
(157, 61, 'Hassan I Airport - Laayoune, EUN', 'https://skyvipservices.com/airport/hassan-l-laayoune-eun-gmml-ma', NULL),
(158, 62, 'Pakokku Airport, PKK', 'https://skyvipservices.com/airport/pakokku-pkk-kvpu-mm', NULL),
(159, 63, 'Amsterdam Airport Schiphol, AMS', 'https://skyvipservices.com/airport/amsterdam-schiphol-ams-eham-nl', NULL),
(160, 64, 'Auckland International Airport, AKL', 'https://skyvipservices.com/airport/auckland-akl-nzaa-nz', NULL),
(161, 64, 'Christchurch Airport, CHC', 'https://skyvipservices.com/airport/christchurch-chc-nzch-nz', NULL),
(162, 64, 'Dunedin Airport, DUD', 'https://skyvipservices.com/airport/dunedin-dud-nzdn-nz', NULL),
(163, 64, 'Napier - Hawke\'s Bay Airport, NPE', 'https://skyvipservices.com/airport/hawkes-bay-npe-nznr-nz', NULL),
(164, 64, 'Nelson Airport, NSN', 'https://skyvipservices.com/airport/nelson-nsn-nzns-nz', NULL),
(165, 64, 'New Plymouth Airport, NPL', 'https://skyvipservices.com/airport/new-plymouth-npl-nznp-nz', NULL),
(166, 64, 'Palmerston North Airport, PMR', 'https://skyvipservices.com/airport/palmerston-north-pmr-nzpm-nz', NULL),
(167, 64, 'Queenstown International Airport, ZQN', 'https://skyvipservices.com/airport/queenstown-zqn-nzqn-nz', NULL),
(168, 64, 'Wellington International Airport, WLG', 'https://skyvipservices.com/airport/wellington-wlg-nzwn-nz', NULL),
(169, 65, 'Nnamdi Azikiwe International Airport, ABV', 'https://skyvipservices.com/airport/nnamdi-azikiwe-abv-fttj-ng', NULL),
(170, 65, 'Murtala Muhammed International Airport, LOS', 'https://skyvipservices.com/airport/murtala-muhammed-los-dnmm-ng', NULL),
(171, 66, 'Skopje Petrovec International Airport, SKP', 'https://skyvipservices.com/airport/skopje-petrovec-skp-lwsk-mk', NULL),
(172, 67, 'Oslo Airport, Gardermoen, OSL', 'https://skyvipservices.com/airport/oslo-gardermoen-osl-engm-no', NULL),
(173, 68, 'Muscat International Airport, MCT', 'https://skyvipservices.com/airport/muscat-mct-ooms-om', NULL),
(174, 69, 'Marseille Provence Airport , MRS', 'https://skyvipservices.com/airport/marseille-mrs-province-france-lfml', NULL),
(175, 69, 'Bologna Guglielmo Marconi Airport, BLQ', 'https://skyvipservices.com/airport/bologna-guglielmo-marconi-airport', NULL),
(176, 69, 'Brindisi Papola Casale Airport , BDS', 'https://skyvipservices.com/airport/brindisi-bds-salerno--libr-it-papola', NULL),
(177, 69, 'Lamezia Terme International Airport, SUF', 'https://skyvipservices.com/airport/lamezia-suf-it-lica-terme', NULL),
(178, 69, 'Salerno Costa d\'Amalfi Airport , QSR', 'https://skyvipservices.com/airport/salerno-it-qsr-liri-amalfi', NULL),
(179, 69, 'Guanajuato International Airport, BJX', 'https://skyvipservices.com/airport/bjx-leon-mexico-guanajuato-mmlo', NULL),
(180, 69, 'Aeropuerto Internacional Playa de Oro, ZLO', 'https://skyvipservices.com/airport/zlo-mexico-playa-de-oro-manzanillo-mmzo', NULL),
(181, 69, 'Federico García Lorca Granada-Jaén Airport , GRX', 'https://skyvipservices.com/airport/granada-grx-spain-legr', NULL),
(182, 69, 'Buffalo Niagara International Airport, BUF', 'https://skyvipservices.com/airport/buffalo-buf-niagara-usa-kbuf', NULL),
(183, 69, 'Louisville Muhammad Ali International Airport, SDF', 'https://skyvipservices.com/airport/sdf-louisville-muhammad-ali-us-ksdf', NULL),
(184, 69, 'Milwaukee Mitchell International Airport, MKE', 'https://skyvipservices.com/airport/mke-kmke-milwaukee-mitchell', NULL),
(185, 69, 'Raleigh–Durham International Airport, RDU', 'https://skyvipservices.com/airport/raleigh-durham-rdu-us-krdu', NULL),
(186, 69, 'Salt Lake City International Airport, SLC', 'https://skyvipservices.com/airport/slc-salt-lake-city-kslc', NULL),
(187, 69, 'Tucson International Airport , TUS', 'https://skyvipservices.com/airport/tus-tucson-ktus-arizona', NULL),
(188, 69, 'Palm Beach International Airport, PBI', 'https://skyvipservices.com/airport/pbi-palm-beach-west-florida-kpbi', NULL),
(189, 69, 'Ingeniero Aeronáutico Ambrosio L.V. Taravella International Airport, COR', 'https://skyvipservices.com/airport/cor-saco-cordoba-argentina-ingeniero-ambrosio-taravella', NULL),
(190, 69, 'Governor Francisco Gabrielli International Airport, MDZ', 'https://skyvipservices.com/airport/mendoza-argentina-same-governor-francisco-gabrielli', NULL),
(191, 69, 'Rosario – Islas Malvinas International Airport, ROS', 'https://skyvipservices.com/airport/rosario-ros-argentina-islas-malvinas', NULL),
(192, 69, 'Gold Coast Airport, OOL', 'https://skyvipservices.com/airport/ool-gold-coast-australia-ybcg', NULL),
(193, 69, 'Edmonton International Airport , YEG', 'https://skyvipservices.com/airport/yeg-canada-edmonton-cyeg', NULL),
(194, 69, 'Jean Lesage International Airport, YQB', 'https://skyvipservices.com/airport/canada-yqb-quebec-cyqb', NULL),
(195, 69, 'Owen Roberts International Airport, GCM', 'https://skyvipservices.com/airport/gcm-grand-cayman-islands-mwcr', NULL),
(196, 69, 'N\'Djamena International Airport , NDJ', 'https://skyvipservices.com/airport/ndjamena-ndj-fttj-td', NULL),
(197, 69, 'Comodoro Arturo Merino Benitez International Airport, SCL', 'https://skyvipservices.com/airport/comodoro-arturo-merino-benitez-scl-scel-cl', NULL),
(198, 69, 'Beijing Capital International Airport, PEK', 'https://skyvipservices.com/airport/beijing-pek-zbaa-cn', NULL),
(199, 69, 'Beijing Daxing International Airport, PKX', 'https://skyvipservices.com/airport/beijing-daxing-pkx-kzbad-cn', NULL),
(200, 69, 'Changsha Huanghua International Airport, CSX', 'https://skyvipservices.com/airport/changsha-china-csx-zgha', NULL),
(201, 69, 'Chengdu Shuangliu International Airport, CTU', 'https://skyvipservices.com/airport/ctu-china-chengdu-zuuu', NULL),
(202, 69, 'Chengdu Tianfu International Airport, TFU', 'https://skyvipservices.com/airport/china-tfu-chengdu-zutf', NULL),
(203, 69, 'Dalian Zhoushuizi International Airport, DLC', 'https://skyvipservices.com/airport/dalian-zhoushuizi-dlc-zytl-cn', NULL),
(204, 69, 'Guangzhou Baiyun International Airport, CAN', 'https://skyvipservices.com/airport/can-china', NULL),
(205, 69, 'Hangzhou Xiaoshan International Airport, HGH', 'https://skyvipservices.com/airport/hgh-china-hangzhou-xiaoshan-zshc', NULL),
(206, 69, 'Ningbo Lishe International Airport , NGB', 'https://skyvipservices.com/airport/ningbo-lishe-ngb-zsnb-cn', NULL),
(207, 69, 'Shanghai Hongqiao International Airport, SHA', 'https://skyvipservices.com/airport/shanghai-hongqiao-international-airport', NULL),
(208, 69, 'Shanghai Pudong International Airport, PVG', 'https://skyvipservices.com/airport/shanghai-pudong-pvg-zspd-cn', NULL),
(209, 69, 'Wenzhou Longwan International Airport, WNZ', 'https://skyvipservices.com/airport/wenzhou-wnz-zswz-cn', NULL),
(210, 69, 'Xi\'an Xianyang International Airport, XIY', 'https://skyvipservices.com/airport/xian-xiy-china-zlxy', NULL),
(211, 69, 'Xiamen Gaoqi International Airport, XMN', 'https://skyvipservices.com/airport/xiamen-xmn-zsam-cn', NULL),
(212, 69, 'Yichang Sanxia International Airport , YIH', 'https://skyvipservices.com/airport/yichang-yih-china-zhyc', NULL),
(213, 69, 'Zhengzhou Xinzheng International Airport , CGO', 'https://skyvipservices.com/airport/zhengzhou-cgo-zhcc-cn', NULL),
(214, 69, 'El Dorado International Airport, BOG', 'https://skyvipservices.com/airport/el-dorado-bog-skbo-co', NULL),
(215, 69, 'The Liberia Guanacaste Airport , LIR', 'https://skyvipservices.com/airport/liberia-guanacaste-lir-mrlb-daniel-oduber', NULL),
(216, 69, 'Costa Rica - Juan Santamaria International Airport, SJO', 'https://skyvipservices.com/airport/juan-santamaria-sjo-mroc-cr', NULL),
(217, 69, 'Pula Airport, PUY', 'https://skyvipservices.com/airport/pula-puy-ldpl-hr', NULL),
(218, 69, 'Split Saint Jerome Airport, SPU', 'https://skyvipservices.com/airport/split-croatia-spu-saint-jerome-ldsp', NULL),
(219, 69, 'Zadar Airport, ZAD', 'https://skyvipservices.com/airport/zadar-zad-ldzd-hr', NULL),
(220, 69, 'Zagreb Franjo Tuđman Airport, ZAG', 'https://skyvipservices.com/airport/zagreb-zag-ldzd-hr', NULL),
(221, 69, 'Curaçao International Airport, CUR', 'https://skyvipservices.com/airport/curacao-cur-tncc-cw', NULL),
(222, 69, 'Faaʻa International Airport, PPT', 'https://skyvipservices.com/airport/faaa-ppt', NULL),
(223, 69, 'Stuttgart Airport, STR', 'https://skyvipservices.com/airport/str-stuttgart-edds', NULL),
(224, 69, 'Paros National Airport, PAS', 'https://skyvipservices.com/airport/paros-national-pas', NULL),
(225, 69, 'Zakynthos International Airport, ZTH', 'https://skyvipservices.com/airport/greece-zth-lgza', NULL),
(226, 69, 'Pointe-à-Pitre International Airport, PTP', 'https://skyvipservices.com/airport/abymes-guadeloupe-ptp-tffr-maryse-conde', NULL),
(227, 69, 'Manohar International Airport - Goa Airport , GOX', 'https://skyvipservices.com/airport/gox-goa-india-voga-manohar', NULL),
(228, 69, 'Rajiv Gandhi International Airport, HYD', 'https://skyvipservices.com/airport/hyd-india-rajiv-gandhi-vohs', NULL),
(229, 69, 'Fukuoka international airport, FUK', 'https://skyvipservices.com/airport/fuk-fukuoka-japan-rjff-itazuke', NULL),
(230, 69, 'Sultan Azlan Shah Airport, IPH', 'https://skyvipservices.com/airport/iph-wmki-ipoh-azian-shah', NULL),
(231, 69, 'Penang International Airport, PEN', 'https://skyvipservices.com/airport/pen-penang-wmkp', NULL),
(232, 69, 'Madeira International Airport Cristiano Ronaldo, FNC', 'https://skyvipservices.com/airport/madeira-fnc-cristiano-ronaldo-portugalia-lpma', NULL),
(233, 69, 'Hewanorra International Airport, UVF', 'https://skyvipservices.com/airport/hewanorra--vieux-fort-quarter-uvf-tlpl-lc', NULL),
(234, 69, 'Argyle International Airport, SVD', 'https://skyvipservices.com/airport/argyle-svd-tvsa-vs', NULL),
(235, 69, 'Al-Ula International Airport, ULH', 'https://skyvipservices.com/airport/alula-ulh-oeao-sa-prince-abdul-majeed-bin-abdulaziz', NULL),
(236, 69, 'Gothenburg Landvetter Airport, GOT', 'https://skyvipservices.com/airport/gothenburg-got-esgg', NULL),
(237, 69, 'Kilimanjaro International Airport, JRO', 'https://skyvipservices.com/airport/jro-kilimanjaro-htkj', NULL),
(238, 69, 'Mae Fah Luang - Chiang Rai International Airport , CEI', 'https://skyvipservices.com/airport/chiang-rai-thailand-cei-vtct', NULL),
(239, 69, 'Samui International Airport, USM', 'https://skyvipservices.com/airport/samui-international-airport', NULL),
(240, 69, 'Dalaman Havalimanı, DLM', 'https://skyvipservices.com/airport/turkey-dalaman-dlm-ltbs', NULL),
(241, 70, 'Panama - Tocumen International Airport, PTY', 'https://skyvipservices.com/airport/tocumen-pty-mpto-pa', NULL),
(242, 71, 'Rodríguez Ballón International Airport, AQP', 'https://skyvipservices.com/airport/rodriguez-ballon-aqp-spqu-pe', NULL),
(243, 71, 'Jorge Chávez International Airport, LIM', 'https://skyvipservices.com/airport/jorge-chavez-lim-spjc-pe', NULL),
(244, 72, 'Clark International Airport, CRK', 'https://skyvipservices.com/airport/clark-airport-crk-rplc-ph', NULL),
(245, 72, 'Godofredo P. Ramos Airport, MPH', 'https://skyvipservices.com/airport/godofredo-p-ramos-mph-rpve-ph', NULL),
(246, 72, 'Mactan–Cebu International Airport, CEB', 'https://skyvipservices.com/airport/mactan-cebu-ceb-rpvm-ph', NULL),
(247, 72, 'Francisco Bangoy International Airport, DVO', 'https://skyvipservices.com/airport/francisco-bangoy-dvo-rpmd-ph', NULL),
(248, 72, 'Kalibo International Airport, KLO', 'https://skyvipservices.com/airport/kalibo-airport-klo-rpvk-ph', NULL),
(249, 72, 'Manila - Ninoy Aquino International Airport, MNL', 'https://skyvipservices.com/airport/ninoy-aquino-mnl-rpll-ph', NULL),
(250, 72, 'Puerto Princesa International Airport, PPS', 'https://skyvipservices.com/airport/puerto-princesa-pps-rpvp-ph', NULL),
(251, 73, 'Kraków John Paul II International Airport, KRK', 'https://skyvipservices.com/airport/krakow-john-paul-ii-krk-epkk-pl', NULL),
(252, 73, 'Warsaw Chopin Airport, WAW', 'https://skyvipservices.com/airport/warsaw-chopin-waw-epwa-pl', NULL),
(253, 74, 'Lisbon Humberto Delgado Airport, LIS', 'https://skyvipservices.com/airport/humberto-delgado-lisbon-portela-lis-lppt-pt', NULL),
(254, 74, 'Porto - Francisco de Sa Carneiro Airport, OPO', 'https://skyvipservices.com/airport/francisco-carneiro-opo-lppr-pt', NULL),
(255, 75, 'Luis Munoz Marin International Airport, SJU', 'https://skyvipservices.com/airport/luis-munoz-marin-sju-tjsj-pr', NULL),
(256, 76, 'Hamad International Airport, DOH', 'https://skyvipservices.com/airport/hamad-doh-othh-qa', NULL),
(257, 77, 'Bucharest Henri Coanda International Airport, OTP', 'https://skyvipservices.com/airport/bucharest-henri-coanda-otp-lrop-ro', NULL),
(258, 78, 'Kigali international airport, KGL', 'https://skyvipservices.com/airport/kigali-kgl-hryr-rw', NULL),
(259, 79, 'Jeddah - King Abdulaziz International Airport, JED', 'https://skyvipservices.com/airport/king-abdulaziz-jed-oejn-sa', NULL),
(260, 79, 'Prince Mohammad Bin Abdulaziz International Airport, MED', 'https://skyvipservices.com/airport/prince-mohammad-bin-abdulaziz-med-oema-sa', NULL),
(261, 79, 'Riyadh - King Khalid International Airport, RUH', 'https://skyvipservices.com/airport/king-khalid-ruh-oerk-sa', NULL),
(262, 80, 'Blaise Diagne International Airport, DSS', 'https://skyvipservices.com/airport/blaise-diagne-dss-gobd-sn', NULL),
(263, 81, 'Belgrade Nikola Tesla Airport, BEG', 'https://skyvipservices.com/airport/belgrade-nikola-tesla-beg-lybe-rs', NULL),
(264, 82, 'Seychelles International Airport, SEZ', 'https://skyvipservices.com/airport/seychelles-sez-fsia-sc', NULL),
(265, 83, 'Singapore Changi Airport, SIN', 'https://skyvipservices.com/airport/singapore-changi-west-sin-wsss-sg', NULL),
(266, 84, 'Sint Maarten - Princess Juliana International Airport, SXM', 'https://skyvipservices.com/airport/princess-juliana-sxm-tncm-sx', NULL),
(267, 84, 'Saint Barthélemy Airport, SBH', 'https://skyvipservices.com/airport/saint-barthelemy-remy-de-haenen-sbh-tffj-sx', NULL),
(268, 85, 'Ljubljana Joze Pucnik Airport, LJU', 'https://skyvipservices.com/airport/ljubljana-joze-pucnik-lju-ljlj-si', NULL),
(269, 85, 'Maribor Edvard Rusjan Airport, MBX', 'https://skyvipservices.com/airport/maribor-edvard-rusjan-mbx-ljmb-si', NULL),
(270, 86, 'Douala International Airport, DLA', 'https://skyvipservices.com/airport/douala-dla-fkkd-za', NULL),
(271, 86, 'Cape Town International Airport, CPT', 'https://skyvipservices.com/airport/cape-town-cpt-fact-za', NULL),
(272, 86, 'Durban International Airport, DUR', 'https://skyvipservices.com/airport/dur-durban-fadn-za', NULL),
(273, 86, 'Johannesburg - O.R. Tambo International Airport, JNB', 'https://skyvipservices.com/airport/or-tambo-jnb-faor-za', NULL),
(274, 86, 'Kruger Mpumalanga International Airport, MQP', 'https://skyvipservices.com/airport/kruger-mpumalanga-mqp-fakn-za', NULL),
(275, 87, 'Gimpo International Airport - Kimpo, GMP', 'https://skyvipservices.com/airport/gimpo-kimpo-gmp-rkss-kr', NULL),
(276, 87, 'Incheon International Airport, ICN', 'https://skyvipservices.com/airport/incheon-icn-rksi-kr', NULL),
(277, 88, 'Adolfo Suarez Madrid-Barajas Airport, MAD', 'https://skyvipservices.com/airport/adolfo-suarez-madrid-barajas-mad-lemd-es', NULL),
(278, 88, 'Barcelona-El Prat Airport, BCN', 'https://skyvipservices.com/airport/barcelona-bcn-lebl-es', NULL),
(279, 88, 'Ibiza Airport, IBZ', 'https://skyvipservices.com/airport/ibiza-ibz-leib-es', NULL),
(280, 88, 'Gran Canaria Airport, LPA', 'https://skyvipservices.com/airport/gran-canaria-lpa-gclp-es', NULL),
(281, 88, 'Malaga Airport, AGP', 'https://skyvipservices.com/airport/malaga-agp-lemg-es', NULL),
(282, 88, 'Palma de Mallorca Airport, PMI', 'https://skyvipservices.com/airport/palma-mallorca-pmi-lepa-es', NULL),
(283, 88, 'San Sebastián Airport, EAS', 'https://skyvipservices.com/airport/san-sebastian-eas-leso-es', NULL),
(284, 88, 'San Pablo Sevilla - Seville Airport, SVQ', 'https://skyvipservices.com/airport/san-pablo-svq-lezl-es', NULL),
(285, 88, 'Tenerife South Airport, TFS', 'https://skyvipservices.com/airport/tenerife-south-tfs-gcts-es', NULL),
(286, 88, 'Valencia Airport, VLC', 'https://skyvipservices.com/airport/valencia-vlc-levc-es', NULL),
(287, 89, 'Bandaranaike International Airport, CMB', 'https://skyvipservices.com/airport/bandaranaike-cmb-vcbi-lk', NULL),
(288, 90, 'Stockholm Arlanda Airport, ARN', 'https://skyvipservices.com/airport/stockholm-arlanda-arn-essa-se', NULL),
(289, 91, 'Geneve-Cointrin Aeroport, GVA', 'https://skyvipservices.com/airport/geneva-cointrin-gva-lsgg-ch', NULL),
(290, 91, 'Zurich Airport, ZRH', 'https://skyvipservices.com/airport/zurich-zrh-lszh-ch', NULL),
(291, 92, 'Taiwan Taoyuan International Airport, TPE', 'https://skyvipservices.com/airport/taiwan-taoyuan-taipei-tpe-rctp-tw', NULL),
(292, 93, 'Bangkok - Suvarnabhumi Airport, BKK', 'https://skyvipservices.com/airport/suvarnabhumi-bkk-vtbs-th', NULL),
(293, 93, 'Chiang Mai international Airport, CNX', 'https://skyvipservices.com/airport/chiang-mai-cnx-vtcc-th', NULL),
(294, 93, 'Phuket International , HKT', 'https://skyvipservices.com/airport/phuket-hkt-vtsp-th', NULL),
(295, 94, 'Tunis–Carthage International Airport, TUN', 'https://skyvipservices.com/airport/tunis-carthage-tun-dtta-tn', NULL),
(296, 95, 'Antalya Airport, AYT', 'https://skyvipservices.com/airport/antalya-ayt-ltai-tr', NULL),
(297, 95, 'Bodrum Milas Airport, BJV', 'https://skyvipservices.com/airport/milas-bodrum-bjv-ltfe-tr', NULL),
(298, 95, 'Istanbul Airport, IST', 'https://skyvipservices.com/airport/istanbul-ist-ltfm-tr', NULL),
(299, 95, 'Istanbul Sabiha Gökçen International Airport, SAW', 'https://skyvipservices.com/airport/istanbul-saw-ltfj-tr', NULL),
(300, 95, 'Izmir Adnan Menderes Airport , ADB', 'https://skyvipservices.com/airport/izmir-adb-ltbj-tr', NULL),
(301, 96, 'Providenciales International Airport, PLS', 'https://skyvipservices.com/airport/providenciales-pls-mbpv-tc', NULL),
(302, 97, 'The Cyril E. King International Airport, STT', 'https://skyvipservices.com/airport/cyril-e-king-stt-tist-vi', NULL),
(303, 98, 'Entebbe International Airport , EBB', 'https://skyvipservices.com/airport/entebbe-ebb-huen-ug', NULL),
(304, 99, 'Kiev Boryspil International Airport, KBP', 'https://skyvipservices.com/airport/boryspil-kbp-ukbb-ua', NULL),
(305, 100, 'Abu Dhabi International Airport, AUH', 'https://skyvipservices.com/airport/abu-dhabi-auh-omaa-ae', NULL),
(306, 100, 'Dubai International Airport, DXB', 'https://skyvipservices.com/airport/dubai-dxb-omdb-ae', NULL),
(307, 100, 'Dubai-Al Maktoum , DWC', 'https://skyvipservices.com/airport/almktoum-dwc-omdw-ae', NULL),
(308, 101, 'London Heathrow Airport, LHR', 'https://skyvipservices.com/airport/london-heathrow-lhr-egll-gb', NULL),
(309, 101, 'Aberdeen International Airport, ABZ', 'https://skyvipservices.com/airport/abz-aberdeen-egpd-gb', NULL),
(310, 101, 'Bristol Airport, BRS', 'https://skyvipservices.com/airport/bristol-brs-eggd-uk', NULL),
(311, 101, 'Edinburgh Airport, EDI', 'https://skyvipservices.com/airport/edinburgh-edi-egph-gb', NULL),
(312, 101, 'Glasgow International Airport, GLA', 'https://skyvipservices.com/airport/glasgow-gla-egpf-gb', NULL),
(313, 101, 'London City Airport, LCY', 'https://skyvipservices.com/airport/london-city-lcy-eglc-gb', NULL),
(314, 101, 'London Gatwick Airport, LGW', 'https://skyvipservices.com/airport/london-gatwick-lgw-egkk-gb', NULL),
(315, 101, 'London Stansted Airport, STN', 'https://skyvipservices.com/airport/london-stansted-stn-egss-gb', NULL),
(316, 101, 'Manchester Airport, MAN', 'https://skyvipservices.com/airport/manchester-man-egcc-uk', NULL),
(317, 102, 'Los Angeles International Airport, LAX', 'https://skyvipservices.com/airport/los-angeles-lax-klax-us', NULL),
(318, 102, 'John F. Kennedy International Airport, JFK', 'https://skyvipservices.com/airport/john-f-kennedy-jfk-kjfk-us', NULL),
(319, 102, 'Hartsfield-Jackson Atlanta International Airport, ATL', 'https://skyvipservices.com/airport/hartsfield-jackson-atlanta-atl-katl-us', NULL),
(320, 102, 'Austin-Bergstrom International Airport, AUS', 'https://skyvipservices.com/airport/austin-bergstrom-aus-kaus-us', NULL),
(321, 102, 'Baltimore-Washington International Airport, BWI', 'https://skyvipservices.com/airport/baltimore-washington-thurgood-marshall-bwi-kbwi-us', NULL),
(322, 102, 'Logan International Airport, BOS', 'https://skyvipservices.com/airport/general-edward-lawrence-logan-bos-kbos-us', NULL),
(323, 102, 'Charleston International Airport, CHS', 'https://skyvipservices.com/airport/charleston-chs-kchs-us', NULL),
(324, 102, 'Charlotte Douglas International Airport, CLT', 'https://skyvipservices.com/airport/charlotte-douglas-clt-kclt-us', NULL),
(325, 102, 'Chicago Midway International Airport, MDW', 'https://skyvipservices.com/airport/chicago-midway-mdw-kmdw-us', NULL),
(326, 102, 'Chicago O\'Hare International Airport, ORD', 'https://skyvipservices.com/airport/chicago-o-hare-ord-kord-us', NULL),
(327, 102, 'Cincinnati/Northern Kentucky International Airport, CVG', 'https://skyvipservices.com/airport/cincinnati-northern-kentucky-cvg-kcvg-us', NULL),
(328, 102, 'Cleveland Hopkins International Airport, CLE', 'https://skyvipservices.com/airport/cleveland-hopkins-cle-kcle-us', NULL),
(329, 102, 'John Glenn Columbus International Airport, CMH', 'https://skyvipservices.com/airport/john-glenn-columbus-cmh-kcmh-us', NULL),
(330, 102, 'Dallas/Fort Worth International Airport, DFW', 'https://skyvipservices.com/airport/dallas-fort-worth-dfw-kdfw-us', NULL),
(331, 102, 'Denver International Airport, DEN', 'https://skyvipservices.com/airport/denver-den-kden-us', NULL),
(332, 102, 'Detroit Metropolitan Wayne County Airport, DTW', 'https://skyvipservices.com/airport/detroit-metropolitan-wayne-county-dtw-kdtw-us', NULL),
(333, 102, 'Fort Lauderdale-Hollywood International Airport, FLL', 'https://skyvipservices.com/airport/fort-lauderdale-hollywood-fll-kfll-us', NULL),
(334, 102, 'George Bush Intercontinental Airport, IAH', 'https://skyvipservices.com/airport/george-bush-intercontinental-houston-iah-kiah-us', NULL),
(335, 102, 'Indianapolis International Airport, IND', 'https://skyvipservices.com/airport/indianapolis-ind-kind-us', NULL),
(336, 102, 'Jacksonville International Airport, JAX', 'https://skyvipservices.com/airport/jacksonville-jax-kjax-us', NULL),
(337, 102, 'McCarran International Airport, LAS', 'https://skyvipservices.com/airport/mccarran-las-klas-us', NULL),
(338, 102, 'Macarthur Airport, ISP', 'https://skyvipservices.com/airport/macarthur-isp-kisp-us', NULL),
(339, 102, 'Miami International Airport , MIA', 'https://skyvipservices.com/airport/miami-mia-kmia-us', NULL),
(340, 102, 'Minneapolis-St Paul International Airport, MSP', 'https://skyvipservices.com/airport/minneapolis-st-paul-wold-chamberlain-msp-kmsp-us', NULL),
(341, 102, 'Nashville International Airport, BNA', 'https://skyvipservices.com/airport/nashville-bna-kbna-us', NULL),
(342, 102, 'Louis Armstrong New Orleans International Airport, MSY', 'https://skyvipservices.com/airport/louis-armstrong-new-orleans-msy-kmsy-us', NULL),
(343, 102, 'La Guardia Airport, LGA', 'https://skyvipservices.com/airport/guardia-lga-klga-us', NULL),
(344, 102, 'Newark Liberty International Airport, EWR', 'https://skyvipservices.com/airport/newark-liberty-ewr-kewr-us', NULL),
(345, 102, 'Metropolitan Oakland International Airport, OAK', 'https://skyvipservices.com/airport/metropolitan-oakland-oak-koak-us', NULL),
(346, 102, 'Orlando International Airport, MCO', 'https://skyvipservices.com/airport/orlando-mco-kmco-us', NULL),
(347, 102, 'Philadelphia International Airport, PHL', 'https://skyvipservices.com/airport/philadelphia-phl-kphl-us', NULL),
(348, 102, 'Phoenix Sky Harbor International Airport, PHX', 'https://skyvipservices.com/airport/phoenix-sky-harbor-phx-kphx-us', NULL),
(349, 102, 'Pittsburgh International Airport, PIT', 'https://skyvipservices.com/airport/pittsburgh-pit-kpit-us', NULL),
(350, 102, 'Portland International Airport, PDX', 'https://skyvipservices.com/airport/portland-pdx-kpdx-us', NULL),
(351, 102, 'Lambert-St. Louis International Airport, STL', 'https://skyvipservices.com/airport/st-louis-lambert-stl-kstl-us', NULL),
(352, 102, 'San Diego International Airport, SAN', 'https://skyvipservices.com/airport/san-diego-san-ksan-us', NULL),
(353, 102, 'San Francisco International Airport, SFO', 'https://skyvipservices.com/airport/san-francisco-sfo-ksfo-us', NULL),
(354, 102, 'Norman Y. Mineta San Jose International Airport, SJC', 'https://skyvipservices.com/airport/sanjosemineta-sjc-ksjc-us', NULL),
(355, 102, 'John Wayne Airport-Orange County, SNA', 'https://skyvipservices.com/airport/john-wayne-orange-county-sna-ksna-us', NULL),
(356, 102, 'Savannah/Hilton Head International Airport, SAV', 'https://skyvipservices.com/airport/savannah-sav-ksav-us', NULL),
(357, 102, 'Seattle-Tacoma International Airport, SEA', 'https://skyvipservices.com/airport/seattle-tacoma-sea-ksea-us', NULL),
(358, 102, 'Bradley International Airport, BDL', 'https://skyvipservices.com/airport/bradley-international-bld-kbdl-us', NULL),
(359, 102, 'Tampa International Airport, TPA', 'https://skyvipservices.com/airport/tampa-tpa-ktpa-us', NULL),
(360, 102, 'Ronald Reagan Washington National Airport, DCA', 'https://skyvipservices.com/airport/ronald-reagan-washington-national-dca-kdca-us', NULL),
(361, 102, 'Washington Dulles International Airport, IAD', 'https://skyvipservices.com/airport/washington-dulles-iad-kiad-us', NULL),
(362, 102, 'Westchester County Airport, HPN', 'https://skyvipservices.com/airport/westchester-hpn-khpn-us', NULL),
(363, 103, 'Carrasco International Airport, MVD', 'https://skyvipservices.com/airport/carrasco-general-c-l-berisso-mvd-sumu-uy', NULL),
(364, 103, 'Capitan de Corbeta Carlos A. Curbelo International Airport, PDP', 'https://skyvipservices.com/airport/capitan-corbeta-ca-curbelo-pdp-suls-uy', NULL),
(365, 104, 'Da Nang International Airport, DAD', 'https://skyvipservices.com/airport/da-nang-dad-vvdn-vn', NULL),
(366, 104, 'Noi Bai International Airport, HAN', 'https://skyvipservices.com/airport/noi-bai-han-vvnb-vn', NULL),
(367, 104, 'Tan Son Nhat International Airport, SGN', 'https://skyvipservices.com/airport/tan-son-nhat-sgn-vvts-vn', NULL),
(368, 104, 'Cam Ranh International Airport, CXR', 'https://skyvipservices.com/airport/cam-ranh-cxr-vvcr-vn', NULL),
(369, 105, 'Kenneth Kaunda Chongwe International Airport , LUN', 'https://skyvipservices.com/airport/kenneth-kaunda-chongwe-lun-flkk-zm', NULL),
(370, 106, 'Robert Gabriel Mugabe International Airport, HRE', 'https://skyvipservices.com/airport/robert-gabriel-mugabe-hre-fvrg-zw', NULL),
(374, 39, 'Sardar Vallabhbhai Patel International Airport , AMD', 'https://skyvipservices.com/airport/sardar-vallabhbhai-patel-amd-vabo-in', NULL),
(375, 39, 'Delhi - Indira Gandhi International Airport, DEL', 'https://skyvipservices.com/airport/indira-gandhi-del-vidp-in', NULL),
(376, 39, 'Chhatrapati Shivaji Maharaj International Airport, BOM', 'https://skyvipservices.com/airport/chhatrapati-shivaji-maharaj-bom-vabb-in', NULL),
(377, 1, 'Tirana Nënë Tereza Rinas International Airport, TIA', 'https://skyvipservices.com/airport/tirana-nene-tereza-rinas-tia-lati-al', 'This is note. Editable');

-- --------------------------------------------------------

--
-- Table structure for table `airport_excluded_packages`
--

CREATE TABLE `airport_excluded_packages` (
  `airport_id` int(11) NOT NULL,
  `package_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `airport_excluded_packages`
--

INSERT INTO `airport_excluded_packages` (`airport_id`, `package_id`) VALUES
(377, 2);

-- --------------------------------------------------------

--
-- Table structure for table `airport_package_pricing`
--

CREATE TABLE `airport_package_pricing` (
  `airport_id` int(11) NOT NULL,
  `package_id` int(11) NOT NULL,
  `custom_price` decimal(10,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `airport_package_pricing`
--

INSERT INTO `airport_package_pricing` (`airport_id`, `package_id`, `custom_price`) VALUES
(374, 2, 1600.00);

-- --------------------------------------------------------

--
-- Table structure for table `airport_pages`
--

CREATE TABLE `airport_pages` (
  `id` int(11) NOT NULL,
  `slug` varchar(255) NOT NULL,
  `page_title` varchar(255) NOT NULL,
  `meta_description` text DEFAULT NULL,
  `hero_image_url` varchar(500) DEFAULT NULL,
  `content` text DEFAULT NULL,
  `is_published` tinyint(1) DEFAULT 1,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `airport_pages`
--

INSERT INTO `airport_pages` (`id`, `slug`, `page_title`, `meta_description`, `hero_image_url`, `content`, `is_published`, `created_at`, `updated_at`) VALUES
(1, 'princess-juliana-sxm-tncm-sx', 'Princess Juliana Airport VIP Services (SXM)', '', 'https://skyvipservices.com/_ipx/w_1536&f_webp/https://skyvip-prod.nyc3.cdn.digitaloceanspaces.com/airport/poster/poster_cnxyjw.jpg', '', 1, '2026-04-07 19:22:34', '2026-04-07 19:29:19');

-- --------------------------------------------------------

--
-- Table structure for table `leads`
--

CREATE TABLE `leads` (
  `id` int(11) NOT NULL,
  `email` varchar(255) NOT NULL,
  `airport` varchar(255) DEFAULT NULL,
  `service_type` varchar(255) DEFAULT NULL,
  `date` datetime DEFAULT NULL,
  `passengers` int(11) DEFAULT NULL,
  `status` enum('Inquiry','Booked','Contacted') DEFAULT 'Inquiry',
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `leads`
--

INSERT INTO `leads` (`id`, `email`, `airport`, `service_type`, `date`, `passengers`, `status`, `created_at`) VALUES
(7, 'sohanbindu72@gmail.com', 'Saint Barthélemy Airport, SBH', 'VIP Meet & Greet', '2026-04-10 00:00:00', 1, 'Inquiry', '2026-04-02 20:39:59'),
(8, 'mdmahabubulalamk@gmail.com', 'Queen Beatrix International Airport, AUA', 'VIP Meet & Greet', '2026-04-07 00:00:00', 1, 'Inquiry', '2026-04-02 20:51:00'),
(9, 'sohanbindu72@gmail.com', 'Sardar Vallabhbhai Patel International Airport , AMD', 'VIP Terminal', '2026-04-04 00:00:00', 1, 'Inquiry', '2026-04-02 21:16:26'),
(10, 'engr.habibullah1999@gmail.com', 'Sint Maarten - Princess Juliana International Airport, SXM', 'VIP Meet & Greet', '2026-04-06 00:00:00', 2, 'Inquiry', '2026-04-04 20:39:43');

-- --------------------------------------------------------

--
-- Table structure for table `locations`
--

CREATE TABLE `locations` (
  `id` int(11) NOT NULL,
  `country_name` varchar(255) NOT NULL,
  `flag_icon` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `locations`
--

INSERT INTO `locations` (`id`, `country_name`, `flag_icon`, `created_at`, `updated_at`) VALUES
(1, 'Albania', '📍', '2026-04-01 23:56:57', '2026-04-01 23:56:57'),
(2, 'Argentina', '📍', '2026-04-01 23:56:57', '2026-04-01 23:56:57'),
(3, 'Armenia', '📍', '2026-04-01 23:56:57', '2026-04-01 23:56:57'),
(4, 'Aruba', '📍', '2026-04-01 23:56:57', '2026-04-01 23:56:57'),
(5, 'Australia', '🇦🇺', '2026-04-01 23:56:57', '2026-04-01 23:56:57'),
(6, 'Austria', '📍', '2026-04-01 23:56:57', '2026-04-01 23:56:57'),
(7, 'Bahamas', '📍', '2026-04-01 23:56:57', '2026-04-01 23:56:57'),
(8, 'Bahrain', '📍', '2026-04-01 23:56:57', '2026-04-01 23:56:57'),
(9, 'Barbados', '📍', '2026-04-01 23:56:57', '2026-04-01 23:56:57'),
(10, 'Belgium', '📍', '2026-04-01 23:56:57', '2026-04-01 23:56:57'),
(11, 'Bermuda', '📍', '2026-04-01 23:56:57', '2026-04-01 23:56:57'),
(12, 'Bosnia and Herzegovina', '📍', '2026-04-01 23:56:57', '2026-04-01 23:56:57'),
(13, 'Botswana', '📍', '2026-04-01 23:56:57', '2026-04-01 23:56:57'),
(14, 'Brazil', '📍', '2026-04-01 23:56:57', '2026-04-01 23:56:57'),
(15, 'British Virgin Islands', '📍', '2026-04-01 23:56:57', '2026-04-01 23:56:57'),
(16, 'Bulgaria', '📍', '2026-04-01 23:56:57', '2026-04-01 23:56:57'),
(17, 'Canada', '🇨🇦', '2026-04-01 23:56:57', '2026-04-01 23:56:57'),
(18, 'Cyprus', '📍', '2026-04-01 23:56:57', '2026-04-01 23:56:57'),
(19, 'Czechia', '📍', '2026-04-01 23:56:57', '2026-04-01 23:56:57'),
(20, 'Denmark', '📍', '2026-04-01 23:56:57', '2026-04-01 23:56:57'),
(21, 'Dominican Republic', '📍', '2026-04-01 23:56:57', '2026-04-01 23:56:57'),
(22, 'Ecuador', '📍', '2026-04-01 23:56:57', '2026-04-01 23:56:57'),
(23, 'Egypt', '📍', '2026-04-01 23:56:57', '2026-04-01 23:56:57'),
(24, 'El Salvador', '📍', '2026-04-01 23:56:57', '2026-04-01 23:56:57'),
(25, 'Estonia', '📍', '2026-04-01 23:56:57', '2026-04-01 23:56:57'),
(26, 'Ethiopia', '📍', '2026-04-01 23:56:57', '2026-04-01 23:56:57'),
(27, 'Fiji', '📍', '2026-04-01 23:56:57', '2026-04-01 23:56:57'),
(28, 'Finland', '📍', '2026-04-01 23:56:57', '2026-04-01 23:56:57'),
(29, 'France', '🇫🇷', '2026-04-01 23:56:57', '2026-04-01 23:56:57'),
(30, 'Georgia', '📍', '2026-04-01 23:56:57', '2026-04-01 23:56:57'),
(31, 'Germany', '🇩🇪', '2026-04-01 23:56:57', '2026-04-01 23:56:57'),
(32, 'Greece', '🇬🇷', '2026-04-01 23:56:57', '2026-04-01 23:56:57'),
(33, 'Grenada', '📍', '2026-04-01 23:56:57', '2026-04-01 23:56:57'),
(34, 'Guatemala', '📍', '2026-04-01 23:56:57', '2026-04-01 23:56:57'),
(35, 'Honduras', '📍', '2026-04-01 23:56:57', '2026-04-01 23:56:57'),
(36, 'Hong Kong', '📍', '2026-04-01 23:56:57', '2026-04-01 23:56:57'),
(37, 'Hungary', '📍', '2026-04-01 23:56:57', '2026-04-01 23:56:57'),
(38, 'Iceland', '📍', '2026-04-01 23:56:57', '2026-04-01 23:56:57'),
(39, 'India', '🇮🇳', '2026-04-01 23:56:57', '2026-04-01 23:56:57'),
(40, 'Indonesia', '📍', '2026-04-01 23:56:57', '2026-04-01 23:56:57'),
(41, 'Ireland', '📍', '2026-04-01 23:56:57', '2026-04-01 23:56:57'),
(42, 'Israel', '📍', '2026-04-01 23:56:57', '2026-04-01 23:56:57'),
(43, 'Italy', '🇮🇹', '2026-04-01 23:56:57', '2026-04-01 23:56:57'),
(44, 'Jamaica', '📍', '2026-04-01 23:56:57', '2026-04-01 23:56:57'),
(45, 'Japan', '🇯🇵', '2026-04-01 23:56:57', '2026-04-01 23:56:57'),
(46, 'Jordan', '📍', '2026-04-01 23:56:57', '2026-04-01 23:56:57'),
(47, 'Kazakhstan', '📍', '2026-04-01 23:56:57', '2026-04-01 23:56:57'),
(48, 'Kenya', '📍', '2026-04-01 23:56:57', '2026-04-01 23:56:57'),
(49, 'Kuwait', '📍', '2026-04-01 23:56:57', '2026-04-01 23:56:57'),
(50, 'Kyrgyzstan', '📍', '2026-04-01 23:56:57', '2026-04-01 23:56:57'),
(51, 'Latvia', '📍', '2026-04-01 23:56:57', '2026-04-01 23:56:57'),
(52, 'Lebanon', '📍', '2026-04-01 23:56:57', '2026-04-01 23:56:57'),
(53, 'Lithuania', '📍', '2026-04-01 23:56:57', '2026-04-01 23:56:57'),
(54, 'Macau', '📍', '2026-04-01 23:56:57', '2026-04-01 23:56:57'),
(55, 'Malaysia', '📍', '2026-04-01 23:56:57', '2026-04-01 23:56:57'),
(56, 'Maldives', '📍', '2026-04-01 23:56:57', '2026-04-01 23:56:57'),
(57, 'Malta', '📍', '2026-04-01 23:56:57', '2026-04-01 23:56:57'),
(58, 'Mauritius', '📍', '2026-04-01 23:56:57', '2026-04-01 23:56:57'),
(59, 'Mexico', '🇲🇽', '2026-04-01 23:56:57', '2026-04-01 23:56:57'),
(60, 'Montenegro', '📍', '2026-04-01 23:56:57', '2026-04-01 23:56:57'),
(61, 'Morocco', '📍', '2026-04-01 23:56:57', '2026-04-01 23:56:57'),
(62, 'Myanmar', '📍', '2026-04-01 23:56:57', '2026-04-01 23:56:57'),
(63, 'Netherlands', '🇳🇱', '2026-04-01 23:56:57', '2026-04-01 23:56:57'),
(64, 'New Zealand', '📍', '2026-04-01 23:56:57', '2026-04-01 23:56:57'),
(65, 'Nigeria', '📍', '2026-04-01 23:56:57', '2026-04-01 23:56:57'),
(66, 'North Macedonia', '📍', '2026-04-01 23:56:57', '2026-04-01 23:56:57'),
(67, 'Norway', '📍', '2026-04-01 23:56:57', '2026-04-01 23:56:57'),
(68, 'Oman', '📍', '2026-04-01 23:56:57', '2026-04-01 23:56:57'),
(69, 'Other', '📍', '2026-04-01 23:56:57', '2026-04-01 23:56:57'),
(70, 'Panama', '📍', '2026-04-01 23:56:57', '2026-04-01 23:56:57'),
(71, 'Peru', '📍', '2026-04-01 23:56:57', '2026-04-01 23:56:57'),
(72, 'Philippines', '📍', '2026-04-01 23:56:57', '2026-04-01 23:56:57'),
(73, 'Poland', '📍', '2026-04-01 23:56:57', '2026-04-01 23:56:57'),
(74, 'Portugal', '📍', '2026-04-01 23:56:57', '2026-04-01 23:56:57'),
(75, 'Puerto Rico', '📍', '2026-04-01 23:56:57', '2026-04-01 23:56:57'),
(76, 'Qatar', '📍', '2026-04-01 23:56:57', '2026-04-01 23:56:57'),
(77, 'Romania', '📍', '2026-04-01 23:56:57', '2026-04-01 23:56:57'),
(78, 'Rwanda', '📍', '2026-04-01 23:56:57', '2026-04-01 23:56:57'),
(79, 'Saudi Arabia', '📍', '2026-04-01 23:56:57', '2026-04-01 23:56:57'),
(80, 'Senegal', '📍', '2026-04-01 23:56:57', '2026-04-01 23:56:57'),
(81, 'Serbia', '📍', '2026-04-01 23:56:57', '2026-04-01 23:56:57'),
(82, 'Seychelles', '📍', '2026-04-01 23:56:57', '2026-04-01 23:56:57'),
(83, 'Singapore', '🇸🇬', '2026-04-01 23:56:57', '2026-04-01 23:56:57'),
(84, 'Sint Maarten', '📍', '2026-04-01 23:56:57', '2026-04-01 23:56:57'),
(85, 'Slovenia', '📍', '2026-04-01 23:56:57', '2026-04-01 23:56:57'),
(86, 'South Africa', '📍', '2026-04-01 23:56:57', '2026-04-01 23:56:57'),
(87, 'South Korea', '📍', '2026-04-01 23:56:57', '2026-04-01 23:56:57'),
(88, 'Spain', '🇪🇸', '2026-04-01 23:56:57', '2026-04-01 23:56:57'),
(89, 'Sri Lanka', '📍', '2026-04-01 23:56:57', '2026-04-01 23:56:57'),
(90, 'Sweden', '📍', '2026-04-01 23:56:57', '2026-04-01 23:56:57'),
(91, 'Switzerland', '🇨🇭', '2026-04-01 23:56:57', '2026-04-01 23:56:57'),
(92, 'Taiwan', '📍', '2026-04-01 23:56:57', '2026-04-01 23:56:57'),
(93, 'Thailand', '🇹🇭', '2026-04-01 23:56:57', '2026-04-01 23:56:57'),
(94, 'Tunisia', '📍', '2026-04-01 23:56:57', '2026-04-01 23:56:57'),
(95, 'Turkey', '🇹🇷', '2026-04-01 23:56:57', '2026-04-01 23:56:57'),
(96, 'Turks and Caicos', '📍', '2026-04-01 23:56:57', '2026-04-01 23:56:57'),
(97, 'US Virgin Islands', '📍', '2026-04-01 23:56:57', '2026-04-01 23:56:57'),
(98, 'Uganda', '📍', '2026-04-01 23:56:57', '2026-04-01 23:56:57'),
(99, 'Ukraine', '📍', '2026-04-01 23:56:57', '2026-04-01 23:56:57'),
(100, 'United Arab Emirates', '🇦🇪', '2026-04-01 23:56:57', '2026-04-01 23:56:57'),
(101, 'United Kingdom', '🇬🇧', '2026-04-01 23:56:57', '2026-04-01 23:56:57'),
(102, 'United States', '🇺🇸', '2026-04-01 23:56:57', '2026-04-01 23:56:57'),
(103, 'Uruguay', '📍', '2026-04-01 23:56:57', '2026-04-01 23:56:57'),
(104, 'Vietnam', '📍', '2026-04-01 23:56:57', '2026-04-01 23:56:57'),
(105, 'Zambia', '📍', '2026-04-01 23:56:57', '2026-04-01 23:56:57'),
(106, 'Zimbabwe', '📍', '2026-04-01 23:56:57', '2026-04-01 23:56:57');

-- --------------------------------------------------------

--
-- Table structure for table `reservations`
--

CREATE TABLE `reservations` (
  `id` int(11) NOT NULL,
  `customer_name` varchar(255) NOT NULL,
  `customer_email` varchar(255) NOT NULL,
  `customer_phone` varchar(255) NOT NULL,
  `from_location_id` int(11) DEFAULT NULL,
  `from_airport` varchar(255) NOT NULL,
  `to_location_id` int(11) DEFAULT NULL,
  `to_airport` varchar(255) DEFAULT NULL,
  `departure_date` datetime NOT NULL,
  `return_date` datetime DEFAULT NULL,
  `passengers` int(11) DEFAULT 1,
  `service_level` varchar(255) NOT NULL,
  `status` enum('Pending','Confirmed','Cancelled','Completed') DEFAULT 'Pending',
  `total_amount` decimal(10,2) NOT NULL,
  `payment_status` enum('Unpaid','Paid','Refunded') DEFAULT 'Unpaid',
  `notes` text DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `package_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `reservations`
--

INSERT INTO `reservations` (`id`, `customer_name`, `customer_email`, `customer_phone`, `from_location_id`, `from_airport`, `to_location_id`, `to_airport`, `departure_date`, `return_date`, `passengers`, `service_level`, `status`, `total_amount`, `payment_status`, `notes`, `created_at`, `updated_at`, `package_id`) VALUES
(3, 'Shohan Bindu', 'mdmahabubulalamk@gmail.com', '+8801833802596', 4, 'Queen Beatrix International Airport, AUA', NULL, NULL, '2026-04-07 00:00:00', NULL, 1, 'VIP Meet & Greet', 'Pending', 395.00, 'Unpaid', 'Airline: Delta, Flight: 6546456654. ', '2026-04-02 20:51:30', '2026-04-05 19:45:28', 1),
(4, 'SHOHAN REZA Bindu', 'sohanbindu72@gmail.com', '+8801833802596', 39, 'Sardar Vallabhbhai Patel International Airport , AMD', NULL, NULL, '2026-04-04 00:00:00', NULL, 1, 'VIP Terminal', 'Pending', 1600.00, 'Unpaid', 'Airline: American, Flight: 6546456654. ', '2026-04-02 21:16:59', '2026-04-05 19:45:28', 2),
(5, 'Habibullah Habibullah', 'engr.habibullah1999@gmail.com', '+8801624285309', 84, 'Sint Maarten - Princess Juliana International Airport, SXM', NULL, NULL, '2026-04-06 00:00:00', NULL, 2, 'VIP Terminal', 'Pending', 2560.00, 'Unpaid', 'Airline: Delta, Flight: 6546456654. ', '2026-04-04 20:40:49', '2026-04-05 19:45:28', 2);

-- --------------------------------------------------------

--
-- Table structure for table `service_packages`
--

CREATE TABLE `service_packages` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `base_price` decimal(10,2) NOT NULL,
  `description` text DEFAULT NULL,
  `features` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL CHECK (json_valid(`features`)),
  `is_active` tinyint(1) DEFAULT 1,
  `is_popular` tinyint(1) DEFAULT 0,
  `rank_order` int(11) DEFAULT 0,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `service_packages`
--

INSERT INTO `service_packages` (`id`, `name`, `base_price`, `description`, `features`, `is_active`, `is_popular`, `rank_order`, `created_at`, `updated_at`) VALUES
(1, 'VIP Meet & Greet', 395.00, '', '[\"Personal Greeting at the arrival gate with a name sign\",\"FastTrack through the airport formalities\",\"Baggage Handling luggage assistance upon request\",\"Airport Exiting accompanying to the curbside area\",\"Transfer Service private vehicle from the airport for an additional fee\"]', 1, 0, 0, '2026-04-02 00:05:46', '2026-04-02 00:05:46'),
(2, 'VIP Terminal', 1280.00, '', '[\"Personal Greeting car transfer from your aircraft to the exclusive VIP Lounge\",\"Airport Formalities VIP facility for customs procedures and mandatory security checks\",\" VIP Lounge complimentary beverage and snacks in a shared social setting\",\"Luggage Handling bags transfer from the aircraft directly to the VIP Lounge\",\"Transportation Service luxury vehicle from the VIP Lounge to your accommodation for an additional fee\"]', 1, 0, 0, '2026-04-02 00:06:27', '2026-04-02 00:06:27');

-- --------------------------------------------------------

--
-- Table structure for table `settings`
--

CREATE TABLE `settings` (
  `id` int(11) NOT NULL,
  `setting_key` varchar(255) NOT NULL,
  `setting_value` text NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `settings`
--

INSERT INTO `settings` (`id`, `setting_key`, `setting_value`, `created_at`, `updated_at`) VALUES
(1, 'smtp_host', 'smtp.gmail.com', '2026-04-06 17:31:26', '2026-04-06 17:31:26'),
(2, 'smtp_port', '465', '2026-04-06 17:31:26', '2026-04-06 17:31:26'),
(3, 'smtp_user', 'sohanbindu72@gmail.com', '2026-04-06 17:31:26', '2026-04-06 17:31:26'),
(4, 'smtp_pass', 'zpem rlsz aztc life', '2026-04-06 17:31:26', '2026-04-06 17:31:26'),
(5, 'smtp_secure', 'true', '2026-04-06 17:31:26', '2026-04-06 17:31:26'),
(6, 'mail_from', 'D\'LUXE <sohanbindu72@gmail.com>', '2026-04-06 17:31:26', '2026-04-06 17:31:26'),
(7, 'whatsapp_number', '+590 690 69 50 79', '2026-04-06 17:31:26', '2026-04-06 17:32:10');

-- --------------------------------------------------------

--
-- Table structure for table `transactions`
--

CREATE TABLE `transactions` (
  `id` int(11) NOT NULL,
  `reservation_id` int(11) NOT NULL,
  `amount` decimal(10,2) NOT NULL,
  `currency` varchar(10) DEFAULT 'USD',
  `status` enum('Succeeded','Failed','Refunded') NOT NULL,
  `type` enum('Payment','Refund') NOT NULL,
  `payment_method` varchar(50) DEFAULT 'Card',
  `external_id` varchar(255) DEFAULT NULL,
  `metadata` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL CHECK (json_valid(`metadata`)),
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `phone` varchar(50) DEFAULT NULL,
  `is_password_temp` tinyint(1) DEFAULT 1,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `password`, `phone`, `is_password_temp`, `created_at`, `updated_at`) VALUES
(1, 'Shohan Bindu', 'sohanbindu72@gmail.com', '$2b$10$IK08EHz9SgmkN5VSzGnf8uypVYN8gvSIr8pTN2F9LKaH2f0pFJYbi', '+8801833802596', 1, '2026-04-02 20:40:24', '2026-04-02 21:16:59'),
(2, 'Shohan Bindu', 'mdmahabubulalamk@gmail.com', '$2b$10$CWRsAbYOo6AcXD2DN/Sp3uPTjOMN1NWLGg7mqJWYndNdSJ9MpKT6e', '+8801833802596', 1, '2026-04-02 20:51:30', '2026-04-02 20:51:30'),
(3, 'Habibullah Habibullah', 'engr.habibullah1999@gmail.com', '$2b$10$VuB0p6S4Q8oMLvS5GfL4zuX.tEbc9Gv2Nox9GRc1Aejo4eg.8u/yW', '+8801624285309', 1, '2026-04-04 20:40:50', '2026-04-04 20:40:50');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admins`
--
ALTER TABLE `admins`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `username` (`username`);

--
-- Indexes for table `airports`
--
ALTER TABLE `airports`
  ADD PRIMARY KEY (`id`),
  ADD KEY `location_id` (`location_id`);

--
-- Indexes for table `airport_excluded_packages`
--
ALTER TABLE `airport_excluded_packages`
  ADD PRIMARY KEY (`airport_id`,`package_id`),
  ADD KEY `package_id` (`package_id`);

--
-- Indexes for table `airport_package_pricing`
--
ALTER TABLE `airport_package_pricing`
  ADD PRIMARY KEY (`airport_id`,`package_id`),
  ADD KEY `package_id` (`package_id`);

--
-- Indexes for table `airport_pages`
--
ALTER TABLE `airport_pages`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `slug` (`slug`);

--
-- Indexes for table `leads`
--
ALTER TABLE `leads`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `locations`
--
ALTER TABLE `locations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `reservations`
--
ALTER TABLE `reservations`
  ADD PRIMARY KEY (`id`),
  ADD KEY `from_location_id` (`from_location_id`),
  ADD KEY `to_location_id` (`to_location_id`);

--
-- Indexes for table `service_packages`
--
ALTER TABLE `service_packages`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Indexes for table `settings`
--
ALTER TABLE `settings`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `setting_key` (`setting_key`);

--
-- Indexes for table `transactions`
--
ALTER TABLE `transactions`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `external_id` (`external_id`),
  ADD KEY `reservation_id` (`reservation_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admins`
--
ALTER TABLE `admins`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `airports`
--
ALTER TABLE `airports`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=378;

--
-- AUTO_INCREMENT for table `airport_pages`
--
ALTER TABLE `airport_pages`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `leads`
--
ALTER TABLE `leads`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `locations`
--
ALTER TABLE `locations`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=107;

--
-- AUTO_INCREMENT for table `reservations`
--
ALTER TABLE `reservations`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `service_packages`
--
ALTER TABLE `service_packages`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `settings`
--
ALTER TABLE `settings`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT for table `transactions`
--
ALTER TABLE `transactions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `airports`
--
ALTER TABLE `airports`
  ADD CONSTRAINT `airports_ibfk_1` FOREIGN KEY (`location_id`) REFERENCES `locations` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `airport_excluded_packages`
--
ALTER TABLE `airport_excluded_packages`
  ADD CONSTRAINT `airport_excluded_packages_ibfk_1` FOREIGN KEY (`airport_id`) REFERENCES `airports` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `airport_excluded_packages_ibfk_2` FOREIGN KEY (`package_id`) REFERENCES `service_packages` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `airport_package_pricing`
--
ALTER TABLE `airport_package_pricing`
  ADD CONSTRAINT `airport_package_pricing_ibfk_1` FOREIGN KEY (`airport_id`) REFERENCES `airports` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `airport_package_pricing_ibfk_2` FOREIGN KEY (`package_id`) REFERENCES `service_packages` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `reservations`
--
ALTER TABLE `reservations`
  ADD CONSTRAINT `reservations_ibfk_1` FOREIGN KEY (`from_location_id`) REFERENCES `locations` (`id`) ON DELETE SET NULL,
  ADD CONSTRAINT `reservations_ibfk_2` FOREIGN KEY (`to_location_id`) REFERENCES `locations` (`id`) ON DELETE SET NULL;

--
-- Constraints for table `transactions`
--
ALTER TABLE `transactions`
  ADD CONSTRAINT `transactions_ibfk_1` FOREIGN KEY (`reservation_id`) REFERENCES `reservations` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
