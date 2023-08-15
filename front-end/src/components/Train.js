import React from 'react'
import {Link} from 'react-router-dom'

function autocomplete(inp, arr) {
 
  var currentFocus;
  
  inp.addEventListener("input", function(e) {
      var a, b, i, val = this.value;
   
      closeAllLists();
      if (!val) { return false;}
      currentFocus = -1;
     
      a = document.createElement("DIV");
      a.setAttribute("id", this.id + "autocomplete-list");
      a.setAttribute("class", "autocomplete-items");
       
      this.parentNode.appendChild(a);
     
      for (i = 0; i < arr.length; i++) {
         
        if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
         
          b = document.createElement("DIV");
          
          b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
          b.innerHTML += arr[i].substr(val.length);
          
          b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
           
          b.addEventListener("click", function(e) {
              /*insert the value for the autocomplete text field:*/
              inp.value = this.getElementsByTagName("input")[0].value;
              /*close the list of autocompleted values,
              (or any other open lists of autocompleted values:*/
              closeAllLists();
          });
          a.appendChild(b);
        }
      }
  });
  /*execute a function presses a key on the keyboard:*/
  inp.addEventListener("keydown", function(e) {
      var x = document.getElementById(this.id + "autocomplete-list");
      if (x) x = x.getElementsByTagName("div");
      if (e.keyCode == 40) {
        
        currentFocus++;
         
        addActive(x);
      } else if (e.keyCode == 38) { //up
       
        currentFocus--;
         
        addActive(x);
      } else if (e.keyCode == 13) {
         
        e.preventDefault();
        if (currentFocus > -1) {
          
          if (x) x[currentFocus].click();
        }
      }
  });
  function addActive(x) {
    
    if (!x) return false;
     
    removeActive(x);
    if (currentFocus >= x.length) currentFocus = 0;
    if (currentFocus < 0) currentFocus = (x.length - 1);
 
    x[currentFocus].classList.add("autocomplete-active");
  }
  function removeActive(x) {
     
    for (var i = 0; i < x.length; i++) {
      x[i].classList.remove("autocomplete-active");
    }
  }
  function closeAllLists(elmnt) {
     
    var x = document.getElementsByClassName("autocomplete-items");
    for (var i = 0; i < x.length; i++) {
      if (elmnt != x[i] && elmnt != inp) {
        x[i].parentNode.removeChild(x[i]);
      }
    }
  }
   
  document.addEventListener("click", function (e) {
      closeAllLists(e.target);
  });
}
 

export default function Train() {

  let countries = ["ABU ROAD (ABR)", "adilabad (adb)", "ADONI (AD)", "ADRA (ADRA)", "AGARTALA (AGTL)", "AGRA FORT (AF)", "AGRA CANTT. (AGC)", "AHMADNAGAR (ANG)", "AHMEDABAD (ADI)", "AJMER (AII)", "Ajni (AJNI)", "AKOLA (AK)", "ALIGARH (ALJN)", "ALIPURDUAR Jn. (APDJ)", "ALLAHABAD (ALD)", "ALAPPUZHA (ALLP)", "ALNAWAR Jn. (LWR)", "ALUVA (AWY)", "ALWAR (AWR)", "AMALNER (AN)", "AMB ANDAVRA (AADR)", "AMBALA CANTT. (UMB)", "AMBIKAPUR (abkp)", "AMLa (Amla)", "AMRITSAR (ASR)", "ANAKAPALLE (AKP)", "ANAND (ANND)", "ANAND NAGAR (ANDN)", "ANAND VIHar Terminus (ANVT)", "ANANTAPUR (ATP)", "ANGUL (ANGL)", "ANNAVARAM (ANV)", "ANUPPUR (apr)", "ARA (ARA)", "ARAKKONAM (AJJ)", "ARSIKERE (ASK)", "ASANSOL (ASN)", "AUNRIHAR (ARJ)", "AURANGABAD (AWB)", "AYODHYA (AY)", "AZAMGARH (AMH)", "AZIMGANJ Jn. (AZ)", "BADARPUR (BPB)", "BADNERA Jn. (BD)", "BAGALKOT (Bgk)", "BAGHPAT ROAD (BPM)", "BAIDYANATHDHAM (BDME)", "BAKTHIYARPUR (bKP)", "BALASORE (BLS)", "BALAGHAT (BTC)", "BALANGIR (blgr)", "baluGAON (BAlU)", "BALURGHAT (BLGT)", "BALHARSHAH (BPQ)", "BALLIA (BUI)", "BANARHAT (BNQ)", "BANDA Jn. (BNDA)", "BANDEL Jn. (BDC)", "BANDIKUI Jn. (BKI)", "BANdra T (Bdts)", "BANGALORE CITY (SBC)", "BANGALORE CANTT. (BNC)", "BANGARAPET (BWt)", "bangriposi (bgy)", "BANKURA (BQA)", "BANMANKHI (BNKI)", "BAPATLA (BPP)", "BARABANKI Jn. (BBK)", "BARaBIL (BBN)", "BARAN (BAZ)", "BARAUNI Jn. (BJU)", "BARAUT (BTU)", "BARAPALLI (brPL)", "BARDDHAMAN Jn. (BWN)", "BAREILLY (BE)", "BARGARH ROAD (BRGA)", "BARHNI (BNY)", "BARKAKANA (BRKA)", "BARMER (BME)", "BAROG (BOF)", "BARSOI (BOE)", "BARWADIH (BRWD)", "BASAR (BSX)", "BASTI (BST)", "BAThINDA Jn. (BTI)", "BAYANA (BXN)", "BEAS (BEAS)", "BEAWAR (BER)", "BELAPUR (BAP)", "BELGAUM (BGM)", "BELLARY Jn. (BAY)", "BETTIAH (BTH)", "BETUL (BZU)", "BHADOHI (BOY)", "BHADRAK (BHC)", "BHAGALPUR (BGP)", "Bhagat Ki Kothi (BGKI)", "BHARATPUR (BTE)", "BHARUCH (BH)", "BHATAPARA (BYT)", "BHATKAL (BTJL)", "BHATNI (BTT)", "BHAVNAGAR T (BVC)", "BHAWANIPATNA (BWPI)", "BHILWARA (BHL)", "BHIMAVARAM Jn. (BVRM)", "BHIMAVARAM TOWN (BVRT)", "BHIND (BIX)", "BHIWANI (BNW)", "BHOPAL (BPL)", "BHUBANESWAR (BBS)", "BHUJ (BHUJ)", "BHUSAVAL (BSL)", "BIJAPUR (BJP)", "BIJNOR (BJO)", "BIKANER (BKN)", "BILASPUR jn. (BSP)", "BINA (BINA)", "BINNAGURI (BNV)", "BIRUR (RRB)", "BITRAGUNTA (BTTR)", "biyavara rajgarh (brrg)", "BOBBILI (VBL)", "BOINDA (bONA)", "Barapalli (brpl)", "baghbahar (bgbr)", "BOKARO STEEL CITY (BKSC)", "bOLPUR SHANTINIKETAn (bhp)", "BORIVALI BVI", "BOTAD (BTD)", "BUDAUN (BEM)", "bundi (budi)", "BURHANPUR (BAU)", "BURHWAL (BUW)", "BUXAR (BXR)", "CANACONA (CNO)", "CHAKIA (CAA)", "CHAKKI BANK (CHKB)", "CHAKRADHARPUR (CKP)", "CHALISGAON (CSN)", "CHAMPA (CPH)", "CHANDAUSI (CH)", "chanderiya (cna)", "CHANDIGARH (CDG)", "CHANDIL (CNI)", "CHANDRAPUR (CD)", "CHANDRAPURA (CRP)", "CHAPARMUKH (CPK)", "cHATRAPUR (CAP)", "CHENGALPATTU Jn. (CGL)", "CHENGANNUR (CNGR)", "CHENNAI CENTRAL (MAS)", "CHENNAI EGMORE (MS)", "CHHAPRA (CPR)", "CHHINDWARA (cwa)", "CHIDAMBARAM (CDM)", "CHIKJAJUR (JRU)", "CHIPLUN (CHI)", "CHIRALA (CLX)", "CHITRAKOOTDHAM KARVI (CKTD)", "CHITTARANJAN (CRJ)", "CHITTAURGARH (COR)", "CHITTOOR (CTO)", "CHOPAN (CPU)", "CHUNAR (CAR)", "CHURU (CUR)", "COIMBATORE Jn. (CBE)", "coonoor (ONR)", "CUDDALORE PORT (CUPJ)", "CUDDAPAH (HX)", "CUTTACK (CTC)", "DADAR (DR)", "DAHANU ROAD (DRD)", "DAHOD (DHD)", "DALGAON (DLO)", "DALTONGANJ (DTO)", "DALLIRAJHARA (DRZ)", "DAMOH (DMO)", "DANAPUR (DNR)", "DARBHANGA (DBG)", "DAUND (DD)", "DAVANGERE (DVG)", "DEHRADUN (DDN)", "DEHRI-ON-SONE (DOS)", "DELHI (DLI)", "NEW DELHI (NDLS)", "DELHI CANTT. (DEC)", "DELHI SARAI ROHILLA (DEE)", "DELHI SHAHDARA (DSA)", "DEORIASADAR (DEOS)", "DEVLALI (DVL)", "DHAMANGAON (DMN)", "DHANBAD (DHN)", "DHARMABAD (DAB)", "dharmanagar (dmr)", "DHARMAPURI (DPJ)", "DHARMAVARAM (DMM)", "DHARWAD (DWR)", "DHASA (DAS)", "DHAULPUR (DHO)", "Dhenuanal (dnul)", "DHOLA (DLJ)", "DHONE (DHNE)", "DHRANGADHRA (DHG)", "dhubri (dbb)", "DHURI (DUI)", "DIBRUGARH (DBRG)", "DIBRUGARH TOWN (DBRT)", "digha (dgha)", "DILDARNAGAR (DLN)", "DIMAPUR (DMV)", "DINDIGUL Jn. (DG)", "DONGARGARH (DGG)", "DORNAKAL (DKJ)", "DUNGARPUR (DNRP)", "DURG (DURG)", "DURGAPUR (DGR)", "duvvada (dvd)", "DWARKA (DWK)", "ELURU (EE)", "ERNAKULAM Jn. (ERS)", "ERNAKULAM TOWN (ERN)", "ERODE (ED)", "ETAWAH (ETW)", "FAIZABAD (FD)", "FARIDABAD (FDB)", "FARRUKHABAD (FBD)", "FATEhABAD CHAND (FTD)", "FATEHPUR (FTP)", "FATUHA (FUT)", "FAZILKA (FKA)", "FIROZABAD (FZD)", "FIROZPUR CITY (FZP)", "FIROZPUR CANTT. (FZR)", "FORBESGANJ (FBG)", "FURKATING (FKG)", "GADAG (GDG)", "GAJRAULA (GJL)", "GANDHIDHAM (GIM)", "GANDHINAGAR (GADJ)", "GANGAPUR CITY (GGC)", "GARWA ROAD (GHD)", "GAYA (GAYA)", "GEVRA ROAD (GAD)", "GHATSILA (GTS)", "GHAZIABAD GZB", "GOALPARA TOWN (GLPT)", "GODHRA (GDA)", "GOLA GOKARANNATH (GK)", "GONDA (GD)", "GONDIA (G)", "GOOTY (GY)", "GORAKHPUR (GKP)", "GOSsAINGAon HAT (GOGH)", "GUDIVADA (GDV)", "GUDUR (GDR)", "GULBARGA (GR)", "GUNA (GUNA)", "GUNTAKAL (GTL)", "GUNTUR (GNT)", "gurgaon (ggn)", "GUruvayUR (Guv)", "GUWAHATI (GHY)", "GWALIOR (GWL)", "GYANPUR ROAD (GYN)", "HABIBGANJ (HBJ)", "HAJIPUR (HJP)", "HALDIA (HLZ)", "HALDIBARI (HDB)", "HAMILTONGANJ (HOJ)", "HANUMANGARH (HMH)", "HAPA (HAPA)", "HAPUR (HPU)", "HARDA (HD)", "HARIDWAR (HW)", "HARIHAR (HRR)", "HARPALPUR (HPP)", "HASIMARA (HSA)", "HATIA (HTE)", "HAZUR SAHIB NANDED (NED)", "HILSA (HIL)", "HIMMAT NAGAR (HMT)", "HINDUPUR (HUP)", "HINGOLI (HNL)", "HISAR (HSR)", "HOSHANGABAD (HBD)", "HOSPET (HPT)", "HOSUR (HSRA)", "HOWBAdH (HBG)", "HOWRAH (HWH)", "HUBLI (UBL)", "HYDERABAD (HYB)", "IGATPURI (IGP)", "INDARA (IAA)", "INDORE (INDB)", "ISLAMPUR (IPR)", "ITARSI (ET)", "JABALPUR (JBP)", "Jagdalpur (jdb)", "JAIPUR (JP)", "Jaypur (jyp)", "JAISALMER (JSM)", "JAJPUR KEONJHAR ROAD (JJKR)", "JAKHAL (JHL)", "JALAMB (JM)", "JALANDHAR CANTT. (JRC)", "JALANDHAR CITY (JUC)", "JALGAON (JL)", "JALNA (J)", "JALPAIGURI (JPG)", "JAMALPUR (JMP)", "JAMMU TAWI (JAT)", "JAMNAGAR (JAM)", "JANGHAI (JNH)", "JASIDIH (JSME)", "JAUNPUR Jn. (JNU)", "JAYNAGAR (JYG)", "JETALSAR (JLR)", "JHAJHA (JAJ)", "JHANSI (JHS)", "JHARGRAM (JGM)", "JHARSUGUDA (JSG)", "JIND (JIND)", "JODHPUR (JU)", "jogbani (JBN)", "JOLARPETTAI (JTJ)", "JORHAT (JT)", "JUNAGARH Jn. (JND)", "KACHEGUDA (KCG)", "KAKINADA PORT (COA)", "KALCHINI (KCF)", "KALKA (KLK)", "KALOL (KLL)", "KALYAN (KYN)", "KAMAKHYA (KYQ)", "KANCHIPURAM (CJ)", "KANDHLA (KQL)", "KANNIYAKUMARI (CAPE)", "KANNUR (CAN)", "KANPUR CENTRAL (CNB)", "KANPUR ANWARGANJ (CPA)", "KAPTANGANJ (CPJ)", "Karaikal (kik)", "KARAIKKUDI Jn. (KKDI)", "KARimganj (kxj)", "KARNAL (KUN)", "KARUR (KRR)", "KARWAR (KAWR)", "KASARaGOD (KGQ)", "KASGANJ (KSJ)", "KATHGODAM (KGM)", "KATIHAR (KIR)", "KATNI (KTE)", "KATNI MURWARA (KMZ)", "KATPADI (KPD)", "KATWA (KWAE)", "KAZIPET (KZJ)", "kESINGA (ksng)", "KENDUJHARGARH (KDJR)", "KHAGARIA (KGG)", "KHALILABAD (KLD)", "KHAMMAM (KMT)", "KHANDWA (KNW)", "KHARAGPUR (KGP)", "KHEKRA (KEX)", "KHURDA ROAD (KUR)", "KHURJA (KRJ)", "KISHANGANJ (KNE)", "KISHANGARH (KSG)", "KIUL (KIUL)", "KOCHUVELI (KCVL)", "KODAIKANAL ROAD (KQN)", "kolkata (koaa)", "kollam (QLN)", "KOPERGAON (KPG)", "KORAPUT (KRPU)", "KORBA (KRBA)", "KOTA (KOTA)", "KOTDWARA (KTW)", "KOT KAPURA (KKP)", "KOTTAYAM (KTYM)", "KOZHIKODE (CLT)", "KRISHNANAGAR CITY (KNJ)", "KRISHNARAJAPURAM (KJM)", "kumarghat (kugt)", "KUMBAKONAM (KMU)", "KUNDAPURA (KUDA)", "KURDUWADI (KWV)", "KURNOOL TOWN (KRNT)", "KURUKSHETRA (KKDE)", "LAKHIMPUR (LMP)", "LAKSAR (LRJ)", "LALGARH (LGH)", "LALGOLA (LGL)", "LALITPUR (LAR)", "LALKUAN JN. (LKU)", "LATUR (LUR)", "LEDO (LEDO)", "LOHARU (LHU)", "LOKMANYA TILAK T (LTT)", "LONAVLA (LNL)", "LONDA (LD)", "LOWER HALFLONG (LFG)", "LUCKNOW (LJN)", "LUDHIANA (LDH)", "LUMDING (LMG)", "LUNI (LUNI)", "MACHILIPATNAM (MTM)", "MADARIHAT (MDT)", "MADDUR (MAD)", "MADGAON GOA (MAO)", "MADHUBANI (MBI)", "MADHUPUR (MDP)", "MADURAI Jn. (MDU)", "MAHASAMUND (msmD)", "MAHBUBNAGAR (MBNR)", "MAHuva (mhv)", "MUNIGUDA (mngd)", "MAHESANA (MSH)", "MAHOBA (MBA)", "MAILANI (MLN)", "MAKSI (MKC)", "MALDA TOWN (MLDT)", "MANAMADURAI (MNM)", "MANDUADIH (MUV)", "MANGALORE CENTRAL (MAQ)", "MANGALORE JN. (MAJN)", "MANIKPUR (MKP)", "MANKAPUR (MUR)", "MANMAD (MMR)", "Mannargudi (MQ)", "MANSI (MNE)", "manu (manu)", "MARIANI (MXN)", "MARWAR Jn. (MJ)", "MATHURA (MTJ)", "MAU (MAU)", "MAYILADUTURAI Jn. (MV)", "MEERUT CITY (MTC)", "MERTA ROAD (MTD)", "METTUPALAYAM (MTP)", "MIDNAPore (MDN)", "MIRAJ (MRJ)", "MIRYALAGUDA (MRGA)", "MIRZAPUR (MZP)", "MOGA (MOF)", "MOKAMA (mka)", "PUDUKOTTAI (PDKT)", "PULGAON (PLO)", "PUNE Jn. (PUNE)", "PURANPUR (PP)", "PURI (PURI)", "PURNA (PAU)", "PURNIA (PRNA)", "PURULIA (PRR)", "RADHIKAPUR (RDP)", "RAE BARELI (RBL)", "RAICHUR (RC)", "RAIGARH (RIG)", "RAIPUR (R)", "RAJAHMUNDRY (RJY)", "RAJA-KA-SAHASPUR (RJK)", "RAJA-KI-MANDI (RKM)", "RAJENDRANAGAR (RJQ)", "RAJGIR (RGD)", "RAJKOT (RJT)", "RAJNANDGAON (RJN)", "RAJPURA (RPJ)", "RAMAGUNDAM (RDM)", "RAMANATHAPURAM (RMD)", "RAMESWARAM (RMM)", "RAMNAGAR (RMR)", "RAMPUR JN. (RMU)", "RAMPURHAT (RPH)", "RANAGHAT (RHA)", "RANCHI (RNC)", "RANGAPARA NORTH (RPAN)", "RANGIYA (RNY)", "RANINAGAR (ROJ)", "RATANGARH (RTGH)", "RATLAM (RTM)", "RATNAGIRI (RN)", "RAWATGANJ (RJ)", "RAXAUL (RXL)", "RAYAGADA (RGDA)", "RENIGUNTA (RU)", "REWA (REWA)", "REWARI (RE)", "RINGUS (RGS)", "ROHTAK (ROK)", "ROORKEE (RK)", "ROURKELA (ROU)", "SADULPUR (SDLP)", "SAGAR jambagaru (SRF)", "SAGAULI (SGL)", "SAGOUR (SGO)", "SAHARANPUR (SRE)", "SAHARSA (SHC)", "SAHIBGANJ (SBG)", "SAI NAGAR SHIRDI (SNSI)", "SALEM (SA)", "SALEMPUR (SRU)", "SAMALKOT (SLO)", "SAMASTIPUR (SPJ)", "SAMBALPUR (SBP)", "SAMBALPUR CITY (SBPY)", "SAMDARI (SMR)", "SAMUKTALA road (AMTA)", "SANGLI (SLI)", "santragachi (src)", "SARNATH (SRNT)", "SATARA (STR)", "SATNA (STA)", "SATTENAPALLE (SAP)", "SAWAIMADHOPUR (SWM)", "SAWANTWADI ROAD (SWV)", "SEALDAH (SDAH)", "SECUNDERABAD (SC)", "SENGOTTAI (SCT)", "SENSOA (scf)", "SEWAGRAM (SEGM)", "SHAHABAD (SDB)", "SHAHGANJ (SHG)", "SHAHJAHANPUR (SPN)", "SHAHPUR PATOREE (SPP)", "SHAKTINAGAR (SKTN)", "SHALIMAR (SHM)", "SHAMGARH (SGZ)", "SHAMLI (SMqL)", "SHIKOHABAD (SKB)", "SHIMLA (SML)", "SHIMOGA TOWN (SMET)", "SHIVPURI (SVPI)", "SHORANUR JN. (SRR)", "SHRI MAHABIRJI (SMBJ)", "SIHOR gujarat (SOJN)", "SIKAR (SIKR)", "MORADABAD (MB)", "MOTIHARI (MKI)", "MUDKHED (MUE)", "MUGHALSARAI (MGS)", "MUMBAI CENTRAL (BCT)", "MUMBAI CST (CSTM)", "Muniguda (mngd)", "MURI (MURI)", "MURKeONGSELEK (MZS)", "MURTAJAPUR (MZR)", "MUZAFFAR NAGAR (MOZ)", "MUZAFFARPUR (MFP)", "MYSORE (MYS)", "nabadwipdham (ndae)", "NADIAD (ND)", "NADIKUDi (NDKD)", "Nagappattinam (Ngt)", "nagarkata (nkb)", "NAGARSOL (NSL)", "NAGBHIR (NAB)", "NAGDA (NAD)", "NAGERCOIL Jn. (NCJ)", "NAGORE (NCR)", "NAGPUR (NGP)", "nagrakata (nkb)", "NAINPUR (NIR)", "NAJIBABAD (NBD)", "NALANDA (NLD)", "NALGONDA (NLDA)", "Namakkal (nmkl)", "NANDALUR (NRE)", "NANDGAON (NGN)", "NANDURBAR (NDB)", "NANDYAL (NDL)", "NANGAL DAM (NLDM)", "NARKATIAGANJ (NKE)", "NARASAPUR (NS)", "NARSINGPUR (NU)", "NARWANA (NRW)", "NASIK ROAD (NK)", "NAUGARH (NUH)", "NELLORE (NLR)", "netajI subhash chandra bose gomoh (GMO)", "NEW ALIPURDUAR (NOQ)", "NEW BONGAIGAON (NBQ)", "NEW COOCHBEHAR (NCB)", "NEW DELHI (NDLS)", "NEW FARAKKA (NFK)", "NEW JALPAIGURI (NJP)", "NEWMAL Jn. (NMZ)", "NEW TINSUKIA (NTSK)", "NIDADAVOLU (NDD)", "Nidamangalam (NMJ)", "NIDUBROLU (NDO)", "NIMACH (NMH)", "NIZAMABAD (NZB)", "NIZAMUDDIN (NZM)", "NOLI (NOLI)", "NORTH LAKHIMPUR (NLP)", "odlabari (odb)", "OKHA (OKHA)", "ONGOLE (OGL)", "ORAI (ORAI)", "PACHORA (PC)", "Palani (PLNI)", "PALANPUR (PNU)", "PALASA (PSA)", "PALakkad (PGT)", "PALakkad TOWN (PGTN)", "PALIAKALAN (PLK)", "PANDHARAPUR (PVR)", "PANIPAT (PNP)", "pARADEEP (PRDP)", "PARASNATH (PNME)", "PANVEL (PNVL)", "PARBHANI (PBN)", "pARVATIPURAM TOWN (PVPT)", "PATHANKOT (PTK)", "PATIALA (PTA)", "PATNA (PNBE)", "PATNA SAHIB (PNC)", "PHALODI (PLC)", "PHAPHAMAU (PFM)", "PHULERA (FL)", "PILIBHIT (PBE)", "PIPARIYA (PPI)", "PODANUR (PTJ)", "PORBANDAR (PBR)", "PRATAPGARH (PBH)", "Puducherry (pdy)", "SILCHAR (SCL)", "SILGHAT (SHTT)", "SILIGURI (SGUJ)", "SILIGURI TOWN (SGuT)", "SIMALuGURI SLGR SINGRAULI (SGRL)", "SIRPUR KAGAZNAGAR (SKZR)", "SIRSA (SSA)", "SISWA BAZAR (SBZ)", "SITAMARHI (SMI)", "SITAPUR city (SPC)", "SITAPUR CANTT. (SCC)", "SIURI (SURI)", "SIWAN (SV)", "SOJAT ROAD (SOD)", "SOLAN (SOL)", "SOLAPUR (SUR)", "SOMNATH (SMNH)", "SOMPETA (SPT)", "SONPUR (SEE)", "SRI CHHATRAPATI SHAHU MAHARAJ T (CSMT)", "SRI DUNGARgARH (SDgH)", "SRIGANGA NAGAR (SGNr)", "SRIKAKULAM ROAD (CHE)", "SRI SAThYASAI PRASHANTI NILAYAM (SSPN)", "Sujangarh (sujh)", "SULTANPUR (SLN)", "SURAT (ST)", "SURATGARH (SOG)", "SURATHKAL (Sl)", "SURENDRA NAGAR (SUNR)", "TADEPALLIGUDEM (TDD)", "TAMBARAM (TBM)", "TATANAGAR (TATA)", "Thalassery (TLY)", "TENALI (TEL)", "TENKASI (TS)", "TEZPUR (TZTB)", "THANJAVUR (TJ)", "THIRUVARUR. (TVR)", "TIRUchchirappalli Jn. (TPJ)", "TIRUCHENDUR (tcn)", "TIRUNELVELI (TEN)", "TIRUPATI (TPTY)", "tiruppur (TUP)", "TIRUR (TIR)", "TITLAGARH (TIG)", "Thrisur (TCR)", "Thiruvananthapuram (TVC)", "Tiruvannamalai (tnm)", "TUMSAR ROAD (TMR)", "TUNDLA (TDL)", "TUNI (TUNI)", "TUTICORIN (TN)", "UDAIPUR CITY (UDZ)", "UDHAMPUR (UHP)", "UDHNA (UDN)", "UDUPI (UD)", "UJJAIN (UJN)", "UNA (UNA)", "UNCHAHAR (UCR)", "UNNAO (ON)", "VADAKARA (BDJ)", "VADODARA (BRC)", "VALSAD (BL)", "VANCHI MANIYACHCHI Jn. (MEJ)", "VARANASI (BSB)", "VARKALA (VAK)", "VASAI ROAD (BSR)", "VASCO-DA-GAMA (VSG)", "Velankanni (VLKN)", "VERAVAL (VRL)", "VIDISHA (BHS)", "VIJAYAWADA (BZA)", "VILLUPURAM Jn. (VM)", "VIRAMGAM (VG)", "VIRUDUNAGAR JN. (vpt)", "VISAKHAPATNAM (VSKP)", "VIZIANAGARAM (VZM)", "VRIDDHACHALAM Jn. (VRI)", "WADI (WADI)", "WANKANER (WKR)", "WARANGAL (WL)", "WARDHA Jn. (WR)", "YESVANTPUR (YPR)", "ZAFARABAD (ZBD)"];

  const fromCity = () =>{
  //   let city = document.getElementById("train_from_city").value;
  //   console.log(city)
  //  autocomplete(document.getElementById("train_from_city"), countries);

  }
  const toCity = () =>{
    // let city = document.getElementById("train_to_city").value;
    // console.log(city)
    // autocomplete(document.getElementById("train_to_city"), countries);

  }

  const checkTrain = () => {

    console.log("Check checkTrain")
    console.log(document.getElementById('train_from_city').value)
    console.log(document.getElementById('train_to_city').value)
    console.log(document.getElementById('train_departure_date').value)
    console.log(document.getElementById('train_return_date').value)

    var from = document.getElementById('train_from_city').value      
    from = from.split("(")
    from = from[1]
    from = from.substring(0, from.length - 1)

    var to = document.getElementById('train_to_city').value
    to = to.split("(")
    to = to[1]
    to = to.substring(0, from.length - 1)

    localStorage.setItem("train_from_city", document.getElementById('train_from_city').value);
    localStorage.setItem("train_to_city", document.getElementById('train_to_city').value);
    localStorage.setItem("train_departure_date", document.getElementById('train_departure_date').value);
    localStorage.setItem("train_return_date", document.getElementById('train_return_date').value);

    localStorage.setItem("train_from_city_code", from);
    localStorage.setItem("train_to_city_code", to);
    document.getElementById('train_available').click();

    // window.location.href = "/train/available"


  }
  return (
    <div>
      
    <div
      style={{
        backgroundImage: "url(https://cdn.wallpapersafari.com/72/2/OPoc7R.jpg)",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        backgroundSize: "100% 100%"
      }}
    >
      <div className="container">
        <br />
        <br />
        <img src="https://mybea.onrender.com/public/img/icone/logo1.png" width={340} alt="" />
        <br />
        <br />
        <div>
           
        <Link to="/flight">
      <button type="button" className="btn btn-primary ">
          <img src="https://mybea.onrender.com/public/img/icone/outline_airplane_ticket_white_24dp.png" width={25} />
          <b> Flight</b>
      </button>
      </Link>

      <Link to="/">
      <button type="button" className="btn btn-primary mx-1">
          <img src="https://mybea.onrender.com/public/img/icone/outline_tram_white_24dp.png" width={25} />
          <b> Train</b>
      </button>
      </Link>

      <Link to="/bus">
      <button type="button" className="btn btn-primary ">
          <img src="https://mybea.onrender.com/public/img/icone/outline_directions_bus_filled_white_24dp.png" width={25} />
          <b> Bus</b>
      </button>
      </Link>
        </div>
        <div>
          <hr />
          <form autoComplete="off" action="availabletrain" method="get">
            <div className="row">
              <div
                className="col-12 col-md-3 col-xl-3 "
                style={{ height: "auto" }}
              >
                <div className="autocomplete my-2" style={{ width: "100%" }}>
                  <h6>
                    <b>
                      <samp style={{ color: "red" }}>*</samp>From:{" "}
                    </b>
                    <i className="bi bi-arrow-right-square-fill" />
                  </h6>
                  <input
                    id="train_from_city"
                    onKeyUp={fromCity()}
                    className="form-control"
                    type="text"
                    name="from"
                    defaultValue="Mumbai (BDTS)"
                    placeholder="From"
                    
                  />
                </div>
              </div>
              <div
                className="col-12 col-md-3 col-xl-3"
                style={{ height: "auto" }}
              >
                <div className="autocomplete  my-2" style={{ width: "100%" }}>
                  <h6>
                    <i className="bi bi-arrow-right-square-fill" />
                    <b>
                      <samp style={{ color: "red" }}> *</samp>To:
                    </b>
                  </h6>
                  <input
                    id="train_to_city"
                    onKeyUp={toCity()}
                    className="form-control"
                    
                    type="text"
                    name="to"
                    defaultValue="DELHI SHAHDARA JN (DSA)"
                    placeholder="To"
                  />
                </div>
              </div>
              <div
                className="col-12 col-md-3 col-xl-2"
                style={{ height: "auto" }}
              >
                <div className="autocomplete my-2" style={{ width: "100%" }}>
                  <h6>
                    <b>
                      <samp style={{ color: "red" }}>*</samp>Departure:
                    </b>
                  </h6>
                  <input
                    style={{ width: "100%", border: "1px solid black" }}
                    className="form-control"
                    id="train_departure_date"
                    name="departureDate"
                    type="date"
                    placeholder="To"
                  />
                </div>
              </div>
              <div
                className="col-12 col-md-3 col-xl-2"
                style={{ height: "auto" }}
              >
                <div className="autocomplete my-2" style={{ width: "100%" }}>
                  <h6>
                    <b>Return:</b>
                  </h6>
                  <input
                    style={{ width: "100%", border: "1px solid black" }}
                    className="form-control"
                    id="train_return_date"
                    name="returnDate"
                    type="date"
                    placeholder="To"
                  />
                </div>
              </div>
              <div
                className="col-12 col-md-3 col-xl-2"
                style={{ height: "auto", marginTop: 3 }}
              >
                <div className="autocomplete my-1" style={{ width: "100%" }}>
                  <h6 style={{ color: "rgba(128, 8, 240, 0)" }}>submit</h6>
                  <button className="btn btn-success" type="button" onClick={checkTrain}>
                    <b>Check</b>
                  </button>
                </div>
              </div>
            </div>
          </form>
          <hr />
          <br />
        </div>
      </div>
    </div>
    <hr />
    <Link to="/train/available">
    <button
      type="button"
      id='train_available'
      style={{ display: "none" }}
    >
      Train Available 
    </button>
    </Link>
  
 
  </div>
  )
}
