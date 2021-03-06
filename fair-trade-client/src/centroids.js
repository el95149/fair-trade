const centroids = [
  {
    'lat': '12.5156286292',
    'country': 'Aruba',
    'lng': '-69.9756409642',
    'fips': 'AA',
    'img': 'AA.png'
  },
  {
    'lat': '17.2798156269',
    'country': 'Antigua & Barbuda',
    'lng': '-61.791237924',
    'fips': 'AC',
    'img': 'AC.png'
  },
  {
    'lat': '23.9109334544',
    'country': 'United Arab Emirates',
    'lng': '54.335154375',
    'fips': 'AE',
    'img': 'AE.png'
  },
  {
    'lat': '33.8388058589',
    'country': 'Afghanistan',
    'lng': '66.0264709848',
    'fips': 'AF',
    'img': 'AF.png'
  },
  {
    'lat': '28.1632395889',
    'country': 'Algeria',
    'lng': '2.6323881222',
    'fips': 'AG',
    'img': 'AG.png'
  },
  {
    'lat': '40.2969909006',
    'country': 'Azerbaijan',
    'lng': '48.8198273256',
    'fips': 'AJ',
    'img': 'AJ.png'
  },
  {
    'lat': '41.1422845912',
    'country': 'Albania',
    'lng': '20.0683841514',
    'fips': 'AL',
    'img': 'AL.png'
  },
  {
    'lat': '40.2862004973',
    'country': 'Armenia',
    'lng': '44.9473915019',
    'fips': 'AM',
    'img': 'AM.png'
  },
  {
    'lat': '42.54865426',
    'country': 'Andorra',
    'lng': '1.5767665021',
    'fips': 'AN',
    'img': 'AN.png'
  },
  {
    'lat': '-12.2952856818',
    'country': 'Angola',
    'lng': '17.5446760208',
    'fips': 'AO',
    'img': 'AO.png'
  },
  {
    'lat': '-14.3044053954',
    'country': 'American Samoa',
    'lng': '-170.707833227',
    'fips': 'AQ',
    'img': 'AQ.png'
  },
  {
    'lat': '-35.376437289',
    'country': 'Argentina',
    'lng': '-65.1677275197',
    'fips': 'AR',
    'img': 'AR.png'
  },
  {
    'lat': '-25.7349685465',
    'country': 'Australia',
    'lng': '134.4895627824',
    'fips': 'AS',
    'img': 'AS.png'
  },
  {
    'lat': '47.5929026313',
    'country': 'Austria',
    'lng': '14.1401917728',
    'fips': 'AU',
    'img': 'AU.png'
  },
  {
    'lat': '18.2228744511',
    'country': 'Anguilla',
    'lng': '-63.0600807006',
    'fips': 'AV',
    'img': 'AV.png'
  },
  {
    'lat': '-80.4459290152',
    'country': 'Antarctica',
    'lng': '21.3033866217',
    'fips': 'AY',
    'img': 'AY.png'
  },
  {
    'lat': '26.0224069283',
    'country': 'Bahrain',
    'lng': '50.559643947',
    'fips': 'BA',
    'img': 'BA.png'
  },
  {
    'lat': '13.1787146982',
    'country': 'Barbados',
    'lng': '-59.561954658',
    'fips': 'BB',
    'img': 'BB.png'
  },
  {
    'lat': '-22.1820037049',
    'country': 'Botswana',
    'lng': '23.8150278309',
    'fips': 'BC',
    'img': 'BC.png'
  },
  {
    'lat': '32.3160852682',
    'country': 'Bermuda',
    'lng': '-64.7396065879',
    'fips': 'BD',
    'img': 'BD.png'
  },
  {
    'lat': '50.6428512328',
    'country': 'Belgium',
    'lng': '4.6639886769',
    'fips': 'BE',
    'img': 'BE.png'
  },
  {
    'lat': '24.2011282537',
    'country': 'The Bahamas',
    'lng': '-76.5466239857',
    'fips': 'BF',
    'img': 'BF.png'
  },
  {
    'lat': '23.8432327493',
    'country': 'Bangladesh',
    'lng': '90.2684982586',
    'fips': 'BG',
    'img': 'BG.png'
  },
  {
    'lat': '17.2176683696',
    'country': 'Belize',
    'lng': '-88.6847662307',
    'fips': 'BH',
    'img': 'BH.png'
  },
  {
    'lat': '44.1681150713',
    'country': 'Bosnia & Herzegovina',
    'lng': '17.7865309991',
    'fips': 'BK',
    'img': 'BK.png'
  },
  {
    'lat': '-16.7146100726',
    'country': 'Bolivia',
    'lng': '-64.6709324867',
    'fips': 'BL',
    'img': 'BL.png'
  },
  {
    'lat': '21.1543188126',
    'country': 'Myanmar',
    'lng': '96.5069211448',
    'fips': 'BM',
    'img': 'BM.png'
  },
  {
    'lat': '9.6473194709',
    'country': 'Benin',
    'lng': '2.3431346425',
    'fips': 'BN',
    'img': 'BN.png'
  },
  {
    'lat': '53.5399976559',
    'country': 'Belarus',
    'lng': '28.046787503',
    'fips': 'BO',
    'img': 'BO.png'
  },
  {
    'lat': '-8.9182158489',
    'country': 'Solomon Is.',
    'lng': '159.6343165388',
    'fips': 'BP',
    'img': 'BP.png'
  },
  {
    'lat': '-10.7731087469',
    'country': 'Brazil',
    'lng': '-53.0898196579',
    'fips': 'BR',
    'img': 'BR.png'
  },
  {
    'lat': '27.4154148028',
    'country': 'Bhutan',
    'lng': '90.4294341107',
    'fips': 'BT',
    'img': 'BT.png'
  },
  {
    'lat': '42.7613767152',
    'country': 'Bulgaria',
    'lng': '25.2315070042',
    'fips': 'BU',
    'img': 'BU.png'
  },
  {
    'lat': '-54.421904825',
    'country': 'Bouvet I.',
    'lng': '3.4125220127',
    'fips': 'BV',
    'img': 'BV.png'
  },
  {
    'lat': '4.521445464',
    'country': 'Brunei',
    'lng': '114.7611010271',
    'fips': 'BX',
    'img': 'BX.png'
  },
  {
    'lat': '-3.3561746504',
    'country': 'Burundi',
    'lng': '29.8871461264',
    'fips': 'BY',
    'img': 'BY.png'
  },
  {
    'lat': '61.3920161323',
    'country': 'Canada',
    'lng': '-98.2653306081',
    'fips': 'CA',
    'img': 'CA.png'
  },
  {
    'lat': '12.716431897',
    'country': 'Cambodia',
    'lng': '104.923981336',
    'fips': 'CB',
    'img': 'CB.png'
  },
  {
    'lat': '15.3611667278',
    'country': 'Chad',
    'lng': '18.6644791181',
    'fips': 'CD',
    'img': 'CD.png'
  },
  {
    'lat': '7.6080851912',
    'country': 'Sri Lanka',
    'lng': '80.7047272533',
    'fips': 'CE',
    'img': 'CE.png'
  },
  {
    'lat': '-0.840231822',
    'country': 'Congo',
    'lng': '15.2242938734',
    'fips': 'CF',
    'img': 'CF.png'
  },
  {
    'lat': '-2.8762350964',
    'country': 'Congo, DRC',
    'lng': '23.6550057356',
    'fips': 'CG',
    'img': 'CG.png'
  },
  {
    'lat': '36.5630069394',
    'country': 'China',
    'lng': '103.8342663548',
    'fips': 'CH',
    'img': 'CH.png'
  },
  {
    'lat': '-37.8524898927',
    'country': 'Chile',
    'lng': '-71.3739795024',
    'fips': 'CI',
    'img': 'CI.png'
  },
  {
    'lat': '19.3086622633',
    'country': 'Cayman Is.',
    'lng': '-81.2384512433',
    'fips': 'CJ',
    'img': 'CJ.png'
  },
  {
    'lat': '-12.1712486884',
    'country': 'Cocos Is.',
    'lng': '96.8368860504',
    'fips': 'CK',
    'img': 'CK.png'
  },
  {
    'lat': '5.685951589',
    'country': 'Cameroon',
    'lng': '12.7435941773',
    'fips': 'CM',
    'img': 'CM.png'
  },
  {
    'lat': '-11.89275515',
    'country': 'Comoros',
    'lng': '43.6759171207',
    'fips': 'CN',
    'img': 'CN.png'
  },
  {
    'lat': '3.9011550603',
    'country': 'Colombia',
    'lng': '-73.0733685916',
    'fips': 'CO',
    'img': 'CO.png'
  },
  {
    'lat': '15.0885181891',
    'country': 'Northern Mariana Is.',
    'lng': '145.6792177533',
    'fips': 'CQ',
    'img': 'CQ.png'
  },
  {
    'lat': '9.9702029712',
    'country': 'Costa Rica',
    'lng': '-84.1879420449',
    'fips': 'CS',
    'img': 'CS.png'
  },
  {
    'lat': '6.5712322149',
    'country': 'Central African Republic',
    'lng': '20.4829667857',
    'fips': 'CT',
    'img': 'CT.png'
  },
  {
    'lat': '21.6211706451',
    'country': 'Cuba',
    'lng': '-79.0363523212',
    'fips': 'CU',
    'img': 'CU.png'
  },
  {
    'lat': '15.9789657676',
    'country': 'Cape Verde',
    'lng': '-23.9677869856',
    'fips': 'CV',
    'img': 'CV.png'
  },
  {
    'lat': '-20.9340103596',
    'country': 'Cook Is.',
    'lng': '-158.9089498078',
    'fips': 'CW',
    'img': 'CW.png'
  },
  {
    'lat': '35.0458815895',
    'country': 'Cyprus',
    'lng': '33.2217623859',
    'fips': 'CY',
    'img': 'CY.png'
  },
  {
    'lat': '55.963397907',
    'country': 'Denmark',
    'lng': '10.0462968075',
    'fips': 'DA',
    'img': 'DA.png'
  },
  {
    'lat': '11.7496765226',
    'country': 'Djibouti',
    'lng': '42.5777653626',
    'fips': 'DJ',
    'img': 'DJ.png'
  },
  {
    'lat': '15.4355974675',
    'country': 'Dominica',
    'lng': '-61.3557578133',
    'fips': 'DO',
    'img': 'DO.png'
  },
  {
    'lat': '-0.3860174663',
    'country': 'Jarvis I.',
    'lng': '-160.0272248207',
    'fips': 'DQ',
    'img': 'DQ.png'
  },
  {
    'lat': '18.894447574',
    'country': 'Dominican Republic',
    'lng': '-70.4846349822',
    'fips': 'DR',
    'img': 'DR.png'
  },
  {
    'lat': '-1.427420109',
    'country': 'Ecuador',
    'lng': '-78.7670731277',
    'fips': 'EC',
    'img': 'EC.png'
  },
  {
    'lat': '26.4942544098',
    'country': 'Egypt',
    'lng': '29.8719576705',
    'fips': 'EG',
    'img': 'EG.png'
  },
  {
    'lat': '53.1763807059',
    'country': 'Ireland',
    'lng': '-8.1505798307',
    'fips': 'EI',
    'img': 'EI.png'
  },
  {
    'lat': '1.7123378658',
    'country': 'Equatorial Guinea',
    'lng': '10.3419833616',
    'fips': 'EK',
    'img': 'EK.png'
  },
  {
    'lat': '58.6741361414',
    'country': 'Estonia',
    'lng': '25.5276159945',
    'fips': 'EN',
    'img': 'EN.png'
  },
  {
    'lat': '15.3584948564',
    'country': 'Eritrea',
    'lng': '38.8514830646',
    'fips': 'ER',
    'img': 'ER.png'
  },
  {
    'lat': '13.7368968996',
    'country': 'El Salvador',
    'lng': '-88.8665114529',
    'fips': 'ES',
    'img': 'ES.png'
  },
  {
    'lat': '8.6262196022',
    'country': 'Ethiopia',
    'lng': '39.6160319786',
    'fips': 'ET',
    'img': 'ET.png'
  },
  {
    'lat': '49.7428590028',
    'country': 'Czech Republic',
    'lng': '15.3384118221',
    'fips': 'EZ',
    'img': 'EZ.png'
  },
  {
    'lat': '3.9246880283',
    'country': 'French Guiana',
    'lng': '-53.2412237641',
    'fips': 'FG',
    'img': 'FG.png'
  },
  {
    'lat': '64.500422299',
    'country': 'Finland',
    'lng': '26.2663706977',
    'fips': 'FI',
    'img': 'FI.png'
  },
  {
    'lat': '-17.4535299285',
    'country': 'Fiji',
    'lng': '171.9831074714',
    'fips': 'FJ',
    'img': 'FJ.png'
  },
  {
    'lat': '-51.7371165184',
    'country': 'Falkland Is.',
    'lng': '-59.36329821',
    'fips': 'FK',
    'img': 'FK.png'
  },
  {
    'lat': '6.492370489',
    'country': 'Micronesia',
    'lng': '159.4042471653',
    'fips': 'FM',
    'img': 'FM.png'
  },
  {
    'lat': '62.0310655581',
    'country': 'Faroe Is.',
    'lng': '-6.8841095464',
    'fips': 'FO',
    'img': 'FO.png'
  },
  {
    'lat': '-14.8549297702',
    'country': 'French Polynesia',
    'lng': '-146.4185449065',
    'fips': 'FP',
    'img': 'FP.png'
  },
  {
    'lat': '0.2190971722',
    'country': 'Baker I.',
    'lng': '-176.4616444906',
    'fips': 'FQ',
    'img': 'FQ.png'
  },
  {
    'lat': '46.564502139',
    'country': 'France',
    'lng': '2.5519552759',
    'fips': 'FR',
    'img': 'FR.png'
  },
  {
    'lat': '-49.1917939992',
    'country': 'French S. / Antarctic Lands',
    'lng': '68.8619203878',
    'fips': 'FS',
    'img': 'FS.png'
  },
  {
    'lat': '13.4526500812',
    'country': 'The Gambia',
    'lng': '-15.3866392529',
    'fips': 'GA',
    'img': 'GA.png'
  },
  {
    'lat': '-0.5909451794',
    'country': 'Gabon',
    'lng': '11.7972366687',
    'fips': 'GB',
    'img': 'GB.png'
  },
  {
    'lat': '42.1763109244',
    'country': 'Georgia',
    'lng': '43.5174484679',
    'fips': 'GG',
    'img': 'GG.png'
  },
  {
    'lat': '7.9598481082',
    'country': 'Ghana',
    'lng': '-1.2073013989',
    'fips': 'GH',
    'img': 'GH.png'
  },
  {
    'lat': '36.1382127986',
    'country': 'Gibraltar',
    'lng': '-5.3448935297',
    'fips': 'GI',
    'img': 'GI.png'
  },
  {
    'lat': '12.1129258198',
    'country': 'Grenada',
    'lng': '-61.6793774861',
    'fips': 'GJ',
    'img': 'GJ.png'
  },
  {
    'lat': '49.4587084426',
    'country': 'Guernsey',
    'lng': '-2.5763929339',
    'fips': 'GK',
    'img': 'GK.png'
  },
  {
    'lat': '74.7209182579',
    'country': 'Greenland',
    'lng': '-41.389501085',
    'fips': 'GL',
    'img': 'GL.png'
  },
  {
    'lat': '51.1065619193',
    'country': 'Germany',
    'lng': '10.3936466271',
    'fips': 'GM',
    'img': 'GM.png'
  },
  {
    'lat': '-11.5662229194',
    'country': 'Glorioso Is.',
    'lng': '47.2909482897',
    'fips': 'GO',
    'img': 'GO.png'
  },
  {
    'lat': '16.2034605638',
    'country': 'Guadeloupe',
    'lng': '-61.5367445054',
    'fips': 'GP',
    'img': 'GP.png'
  },
  {
    'lat': '13.4435651451',
    'country': 'Guam',
    'lng': '144.7755967772',
    'fips': 'GQ',
    'img': 'GQ.png'
  },
  {
    'lat': '39.0685384801',
    'country': 'Greece',
    'lng': '22.9597435789',
    'fips': 'GR',
    'img': 'GR.png'
  },
  {
    'lat': '15.7021347684',
    'country': 'Guatemala',
    'lng': '-90.3562422707',
    'fips': 'GT',
    'img': 'GT.png'
  },
  {
    'lat': '10.438211559',
    'country': 'Guinea',
    'lng': '-10.9417724629',
    'fips': 'GV',
    'img': 'GV.png'
  },
  {
    'lat': '4.7920175082',
    'country': 'Guyana',
    'lng': '-58.9747808712',
    'fips': 'GY',
    'img': 'GY.png'
  },
  {
    'lat': '31.4018653858',
    'country': 'Gaza Strip',
    'lng': '34.3727499454',
    'fips': 'GZ',
    'img': 'GZ.png'
  },
  {
    'lat': '18.9416084612',
    'country': 'Haiti',
    'lng': '-72.679458966',
    'fips': 'HA',
    'img': 'HA.png'
  },
  {
    'lat': '-53.0913325875',
    'country': 'Heard I. & McDonald Is.',
    'lng': '73.4983733435',
    'fips': 'HM',
    'img': 'HM.png'
  },
  {
    'lat': '14.8192212122',
    'country': 'Honduras',
    'lng': '-86.6191449608',
    'fips': 'HO',
    'img': 'HO.png'
  },
  {
    'lat': '0.8000965796',
    'country': 'Howland I.',
    'lng': '-176.6374175602',
    'fips': 'HQ',
    'img': 'HQ.png'
  },
  {
    'lat': '45.0511621486',
    'country': 'Croatia',
    'lng': '16.4117801486',
    'fips': 'HR',
    'img': 'HR.png'
  },
  {
    'lat': '47.166502594',
    'country': 'Hungary',
    'lng': '19.413449085',
    'fips': 'HU',
    'img': 'HU.png'
  },
  {
    'lat': '64.9975884418',
    'country': 'Iceland',
    'lng': '-18.6054667962',
    'fips': 'IC',
    'img': 'IC.png'
  },
  {
    'lat': '-2.2302139955',
    'country': 'Indonesia',
    'lng': '117.3004266434',
    'fips': 'ID',
    'img': 'ID.png'
  },
  {
    'lat': '54.2290801915',
    'country': 'Isle of Man',
    'lng': '-4.525850221',
    'fips': 'IM',
    'img': 'IM.png'
  },
  {
    'lat': '22.8834780333',
    'country': 'India',
    'lng': '79.6162011905',
    'fips': 'IN',
    'img': 'IN.png'
  },
  {
    'lat': '-7.3342682097',
    'country': 'British Indian Ocean Territory',
    'lng': '72.4340289911',
    'fips': 'IO',
    'img': 'IO.png'
  },
  {
    'lat': '32.7394630394',
    'country': 'Iran',
    'lng': '54.1977659143',
    'fips': 'IR',
    'img': 'IR.png'
  },
  {
    'lat': '31.358528326',
    'country': 'Israel',
    'lng': '34.9658562215',
    'fips': 'IS',
    'img': 'IS.png'
  },
  {
    'lat': '42.7957820482',
    'country': 'Italy',
    'lng': '12.0717417432',
    'fips': 'IT',
    'img': 'IT.png'
  },
  {
    'lat': '7.6315331668',
    'country': "Cote d'Ivory",
    'lng': '-5.5556193247',
    'fips': 'IV',
    'img': 'IV.png'
  },
  {
    'lat': '33.0480242185',
    'country': 'Iraq',
    'lng': '43.7721354458',
    'fips': 'IZ',
    'img': 'IZ.png'
  },
  {
    'lat': '37.5621614418',
    'country': 'Japan',
    'lng': '137.9907443825',
    'fips': 'JA',
    'img': 'JA.png'
  },
  {
    'lat': '49.2191163593',
    'country': 'Jersey',
    'lng': '-2.1286497627',
    'fips': 'JE',
    'img': 'JE.png'
  },
  {
    'lat': '18.1514194157',
    'country': 'Jamaica',
    'lng': '-77.3190118263',
    'fips': 'JM',
    'img': 'JM.png'
  },
  {
    'lat': '71.0208481107',
    'country': 'Jan Mayen',
    'lng': '-8.4035323299',
    'fips': 'JN',
    'img': 'JN.png'
  },
  {
    'lat': '31.2533160047',
    'country': 'Jordan',
    'lng': '36.7867290878',
    'fips': 'JO',
    'img': 'JO.png'
  },
  {
    'lat': '16.7280483246',
    'country': 'Johnston Atoll',
    'lng': '-169.5339253743',
    'fips': 'JQ',
    'img': 'JQ.png'
  },
  {
    'lat': '-17.0644908019',
    'country': 'Juan De Nova I.',
    'lng': '42.7437456739',
    'fips': 'JU',
    'img': 'JU.png'
  },
  {
    'lat': '0.5298624646',
    'country': 'Kenya',
    'lng': '37.8578818755',
    'fips': 'KE',
    'img': 'KE.png'
  },
  {
    'lat': '41.465053959',
    'country': 'Kyrgyzstan',
    'lng': '74.5555962844',
    'fips': 'KG',
    'img': 'KG.png'
  },
  {
    'lat': '40.143063848',
    'country': 'North Korea',
    'lng': '127.1819577036',
    'fips': 'KN',
    'img': 'KN.png'
  },
  {
    'lat': '1.8345653845',
    'country': 'Kiribati',
    'lng': '-154.458988433',
    'fips': 'KR',
    'img': 'KR.png'
  },
  {
    'lat': '36.3750892848',
    'country': 'South Korea',
    'lng': '127.8347719843',
    'fips': 'KS',
    'img': 'KS.png'
  },
  {
    'lat': '-10.444115262',
    'country': 'Christmas I.',
    'lng': '105.703698324',
    'fips': 'KT',
    'img': 'KT.png'
  },
  {
    'lat': '29.3407925054',
    'country': 'Kuwait',
    'lng': '47.5908785152',
    'fips': 'KU',
    'img': 'KU.png'
  },
  {
    'lat': '48.0159850867',
    'country': 'Kazakhstan',
    'lng': '66.6578230818',
    'fips': 'KZ',
    'img': 'KZ.png'
  },
  {
    'lat': '18.5027427532',
    'country': 'Laos',
    'lng': '103.7632910152',
    'fips': 'LA',
    'img': 'LA.png'
  },
  {
    'lat': '33.9202653991',
    'country': 'Lebanon',
    'lng': '35.8880260697',
    'fips': 'LE',
    'img': 'LE.png'
  },
  {
    'lat': '56.857534554',
    'country': 'Latvia',
    'lng': '24.9294249471',
    'fips': 'LG',
    'img': 'LG.png'
  },
  {
    'lat': '55.3356704206',
    'country': 'Lithuania',
    'lng': '23.8981221633',
    'fips': 'LH',
    'img': 'LH.png'
  },
  {
    'lat': '6.4480918587',
    'country': 'Liberia',
    'lng': '-9.307913504',
    'fips': 'LI',
    'img': 'LI.png'
  },
  {
    'lat': '48.7075308513',
    'country': 'Slovakia',
    'lng': '19.4916510637',
    'fips': 'LO',
    'img': 'LO.png'
  },
  {
    'lat': '47.1518476121',
    'country': 'Liechtenstein',
    'lng': '9.5542691297',
    'fips': 'LS',
    'img': 'LS.png'
  },
  {
    'lat': '-29.5809998538',
    'country': 'Lesotho',
    'lng': '28.2430108766',
    'fips': 'LT',
    'img': 'LT.png'
  },
  {
    'lat': '49.770627962',
    'country': 'Luxembourg',
    'lng': '6.0878136254',
    'fips': 'LU',
    'img': 'LU.png'
  },
  {
    'lat': '27.043953931',
    'country': 'Libya',
    'lng': '18.0232871897',
    'fips': 'LY',
    'img': 'LY.png'
  },
  {
    'lat': '-19.3733833655',
    'country': 'Madagascar',
    'lng': '46.7060394066',
    'fips': 'MA',
    'img': 'MA.png'
  },
  {
    'lat': '14.6525485467',
    'country': 'Martinique',
    'lng': '-61.021286998',
    'fips': 'MB',
    'img': 'MB.png'
  },
  {
    'lat': '47.1938708614',
    'country': 'Moldova',
    'lng': '28.4739305894',
    'fips': 'MD',
    'img': 'MD.png'
  },
  {
    'lat': '-12.8187119746',
    'country': 'Mayotte',
    'lng': '45.1387002794',
    'fips': 'MF',
    'img': 'MF.png'
  },
  {
    'lat': '46.8352906916',
    'country': 'Mongolia',
    'lng': '103.0832177941',
    'fips': 'MG',
    'img': 'MG.png'
  },
  {
    'lat': '16.7353646189',
    'country': 'Montserrat',
    'lng': '-62.1869336173',
    'fips': 'MH',
    'img': 'MH.png'
  },
  {
    'lat': '-13.2158036593',
    'country': 'Malawi',
    'lng': '34.3072332123',
    'fips': 'MI',
    'img': 'MI.png'
  },
  {
    'lat': '41.5996826693',
    'country': 'Macedonia',
    'lng': '21.697475751',
    'fips': 'MK',
    'img': 'MK.png'
  },
  {
    'lat': '17.3502793552',
    'country': 'Mali',
    'lng': '-3.5244221985',
    'fips': 'ML',
    'img': 'ML.png'
  },
  {
    'lat': '43.7479808824',
    'country': 'Monaco',
    'lng': '7.4128214711',
    'fips': 'MN',
    'img': 'MN.png'
  },
  {
    'lat': '31.8836259303',
    'country': 'Morocco',
    'lng': '-6.3178446279',
    'fips': 'MO',
    'img': 'MO.png'
  },
  {
    'lat': '-20.2518681282',
    'country': 'Mauritius',
    'lng': '57.8707552746',
    'fips': 'MP',
    'img': 'MP.png'
  },
  {
    'lat': '28.2051968018',
    'country': 'Midway Is.',
    'lng': '-177.3788154397',
    'fips': 'MQ',
    'img': 'MQ.png'
  },
  {
    'lat': '20.2598513898',
    'country': 'Mauritania',
    'lng': '-10.332297562',
    'fips': 'MR',
    'img': 'MR.png'
  },
  {
    'lat': '35.8905224404',
    'country': 'Malta',
    'lng': '14.4419214047',
    'fips': 'MT',
    'img': 'MT.png'
  },
  {
    'lat': '20.6022860676',
    'country': 'Oman',
    'lng': '56.1098391067',
    'fips': 'MU',
    'img': 'MU.png'
  },
  {
    'lat': '3.2164667656',
    'country': 'Maldives',
    'lng': '73.2522196829',
    'fips': 'MV',
    'img': 'MV.png'
  },
  {
    'lat': '42.7913240316',
    'country': 'Montenegro',
    'lng': '19.253240468',
    'fips': 'MW',
    'img': 'MW.png'
  },
  {
    'lat': '23.9504646696',
    'country': 'Mexico',
    'lng': '-102.5328862819',
    'fips': 'MX',
    'img': 'MX.png'
  },
  {
    'lat': '3.7923674817',
    'country': 'Malaysia',
    'lng': '109.7081896062',
    'fips': 'MY',
    'img': 'MY.png'
  },
  {
    'lat': '-17.2600546024',
    'country': 'Mozambique',
    'lng': '35.5521993916',
    'fips': 'MZ',
    'img': 'MZ.png'
  },
  {
    'lat': '-21.3163377621',
    'country': 'New Caledonia',
    'lng': '165.7154891688',
    'fips': 'NC',
    'img': 'NC.png'
  },
  {
    'lat': '-19.0523092906',
    'country': 'Niue',
    'lng': '-169.86878192',
    'fips': 'NE',
    'img': 'NE.png'
  },
  {
    'lat': '-29.0376570493',
    'country': 'Norfolk I.',
    'lng': '167.9525967968',
    'fips': 'NF',
    'img': 'NF.png'
  },
  {
    'lat': '17.4261488449',
    'country': 'Niger',
    'lng': '9.3976477402',
    'fips': 'NG',
    'img': 'NG.png'
  },
  {
    'lat': '-16.2550521292',
    'country': 'Vanuatu',
    'lng': '167.7181487246',
    'fips': 'NH',
    'img': 'NH.png'
  },
  {
    'lat': '9.5939598936',
    'country': 'Nigeria',
    'lng': '8.1053064224',
    'fips': 'NI',
    'img': 'NI.png'
  },
  {
    'lat': '52.249263505',
    'country': 'Netherlands',
    'lng': '5.603418502',
    'fips': 'NL',
    'img': 'NL.png'
  },
  {
    'lat': '64.4481697928',
    'country': 'Norway',
    'lng': '14.0848003543',
    'fips': 'NO',
    'img': 'NO.png'
  },
  {
    'lat': '28.253007281',
    'country': 'Nepal',
    'lng': '83.9385480053',
    'fips': 'NP',
    'img': 'NP.png'
  },
  {
    'lat': '-0.5221031125',
    'country': 'Nauru',
    'lng': '166.9293765129',
    'fips': 'NR',
    'img': 'NR.png'
  },
  {
    'lat': '4.1263944848',
    'country': 'Suriname',
    'lng': '-55.9118262293',
    'fips': 'NS',
    'img': 'NS.png'
  },
  {
    'lat': '12.1878031272',
    'country': 'Netherlands Antilles',
    'lng': '-68.693669483',
    'fips': 'NT',
    'img': 'NT.png'
  },
  {
    'lat': '12.8399054731',
    'country': 'Nicaragua',
    'lng': '-85.034782707',
    'fips': 'NU',
    'img': 'NU.png'
  },
  {
    'lat': '-41.8388736224',
    'country': 'New Zealand',
    'lng': '171.7799023103',
    'fips': 'NZ',
    'img': 'NZ.png'
  },
  {
    'lat': '-23.2362106562',
    'country': 'Paraguay',
    'lng': '-58.3910238872',
    'fips': 'PA',
    'img': 'PA.png'
  },
  {
    'lat': '-24.4765215459',
    'country': 'Pitcairn Is.',
    'lng': '-128.5932103798',
    'fips': 'PC',
    'img': 'PC.png'
  },
  {
    'lat': '-9.1637599766',
    'country': 'Peru',
    'lng': '-74.3756274569',
    'fips': 'PE',
    'img': 'PE.png'
  },
  {
    'lat': '16.7016881529',
    'country': 'Paracel Is.',
    'lng': '112.3755588649',
    'fips': 'PF',
    'img': 'PF.png'
  },
  {
    'lat': '10.5629339971',
    'country': 'Spratly Is.',
    'lng': '115.59794854',
    'fips': 'PG',
    'img': 'PG.png'
  },
  {
    'lat': '29.9670223543',
    'country': 'Pakistan',
    'lng': '69.3859662029',
    'fips': 'PK',
    'img': 'PK.png'
  },
  {
    'lat': '52.1246098981',
    'country': 'Poland',
    'lng': '19.4008838477',
    'fips': 'PL',
    'img': 'PL.png'
  },
  {
    'lat': '8.5071867',
    'country': 'Panama',
    'lng': '-80.1026624716',
    'fips': 'PM',
    'img': 'PM.png'
  },
  {
    'lat': '39.6009884693',
    'country': 'Portugal',
    'lng': '-8.5627379468',
    'fips': 'PO',
    'img': 'PO.png'
  },
  {
    'lat': '-6.4787677799',
    'country': 'Papua New Guinea',
    'lng': '145.2412188412',
    'fips': 'PP',
    'img': 'PP.png'
  },
  {
    'lat': '7.5018817725',
    'country': 'Palau',
    'lng': '134.5686869486',
    'fips': 'PS',
    'img': 'PS.png'
  },
  {
    'lat': '12.030308389',
    'country': 'Guinea-Bissau',
    'lng': '-14.9652173495',
    'fips': 'PU',
    'img': 'PU.png'
  },
  {
    'lat': '25.3150785135',
    'country': 'Qatar',
    'lng': '51.1912009694',
    'fips': 'QA',
    'img': 'QA.png'
  },
  {
    'lat': '-21.1216611735',
    'country': 'Reunion',
    'lng': '55.5381791919',
    'fips': 'RE',
    'img': 'RE.png'
  },
  {
    'lat': '7.6432342928',
    'country': 'Marshall Is.',
    'lng': '168.6268293688',
    'fips': 'RM',
    'img': 'RM.png'
  },
  {
    'lat': '45.8436147469',
    'country': 'Romania',
    'lng': '24.9692584847',
    'fips': 'RO',
    'img': 'RO.png'
  },
  {
    'lat': '11.7418337883',
    'country': 'Philippines',
    'lng': '122.8787083611',
    'fips': 'RP',
    'img': 'RP.png'
  },
  {
    'lat': '18.2213294431',
    'country': 'Puerto Rico',
    'lng': '-66.4623392392',
    'fips': 'RQ',
    'img': 'RQ.png'
  },
  {
    'lat': '61.9461350986',
    'country': 'Russia',
    'lng': '96.5776888656',
    'fips': 'RS',
    'img': 'RS.png'
  },
  {
    'lat': '-1.9978919535',
    'country': 'Rwanda',
    'lng': '29.9176516498',
    'fips': 'RW',
    'img': 'RW.png'
  },
  {
    'lat': '24.0231440345',
    'country': 'Saudi Arabia',
    'lng': '44.5855881588',
    'fips': 'SA',
    'img': 'SA.png'
  },
  {
    'lat': '46.930916536',
    'country': 'St. Pierre & Miquelon',
    'lng': '-56.3061006505',
    'fips': 'SB',
    'img': 'SB.png'
  },
  {
    'lat': '17.3261892751',
    'country': 'St. Kitts & Nevis',
    'lng': '-62.7535175679',
    'fips': 'SC',
    'img': 'SC.png'
  },
  {
    'lat': '-6.3543857599',
    'country': 'Seychelles',
    'lng': '52.2298693358',
    'fips': 'SE',
    'img': 'SE.png'
  },
  {
    'lat': '-28.9985300038',
    'country': 'South Africa',
    'lng': '25.0925389771',
    'fips': 'SF',
    'img': 'SF.png'
  },
  {
    'lat': '14.3669650064',
    'country': 'Senegal',
    'lng': '-14.4676532753',
    'fips': 'SG',
    'img': 'SG.png'
  },
  {
    'lat': '-15.9615447817',
    'country': 'St. Helena',
    'lng': '-5.7171496994',
    'fips': 'SH',
    'img': 'SH.png'
  },
  {
    'lat': '46.1235634028',
    'country': 'Slovenia',
    'lng': '14.8265364091',
    'fips': 'SI',
    'img': 'SI.png'
  },
  {
    'lat': '8.5602844426',
    'country': 'Sierra Leone',
    'lng': '-11.7919215836',
    'fips': 'SL',
    'img': 'SL.png'
  },
  {
    'lat': '43.9429432581',
    'country': 'San Marino',
    'lng': '12.4609765541',
    'fips': 'SM',
    'img': 'SM.png'
  },
  {
    'lat': '1.3516161349',
    'country': 'Singapore',
    'lng': '103.8080525943',
    'fips': 'SN',
    'img': 'SN.png'
  },
  {
    'lat': '6.0637235107',
    'country': 'Somalia',
    'lng': '45.8625906118',
    'fips': 'SO',
    'img': 'SO.png'
  },
  {
    'lat': '40.2268287642',
    'country': 'Spain',
    'lng': '-3.6495659383',
    'fips': 'SP',
    'img': 'SP.png'
  },
  {
    'lat': '44.0320459143',
    'country': 'Serbia',
    'lng': '20.8054576928',
    'fips': 'SR',
    'img': 'SR.png'
  },
  {
    'lat': '13.8978692895',
    'country': 'St. Lucia',
    'lng': '-60.9687124782',
    'fips': 'ST',
    'img': 'ST.png'
  },
  {
    'lat': '13.831534268',
    'country': 'Sudan',
    'lng': '30.0499519198',
    'fips': 'SU',
    'img': 'SU.png'
  },
  {
    'lat': '78.8636572818',
    'country': 'Svalbard',
    'lng': '18.4835424111',
    'fips': 'SV',
    'img': 'SV.png'
  },
  {
    'lat': '62.7898967161',
    'country': 'Sweden',
    'lng': '16.7397540162',
    'fips': 'SW',
    'img': 'SW.png'
  },
  {
    'lat': '-54.4881451569',
    'country': 'South Georgia',
    'lng': '-36.3823745102',
    'fips': 'SX',
    'img': 'SX.png'
  },
  {
    'lat': '35.0131337887',
    'country': 'Syria',
    'lng': '38.5051308318',
    'fips': 'SY',
    'img': 'SY.png'
  },
  {
    'lat': '46.8024955746',
    'country': 'Switzerland',
    'lng': '8.2343918773',
    'fips': 'SZ',
    'img': 'SZ.png'
  },
  {
    'lat': '10.468643096',
    'country': 'Trinidad & Tobago',
    'lng': '-61.2531756773',
    'fips': 'TD',
    'img': 'TD.png'
  },
  {
    'lat': '15.1270374444',
    'country': 'Thailand',
    'lng': '101.0173614445',
    'fips': 'TH',
    'img': 'TH.png'
  },
  {
    'lat': '38.528177658',
    'country': 'Tajikistan',
    'lng': '71.0420037679',
    'fips': 'TI',
    'img': 'TI.png'
  },
  {
    'lat': '21.8366876656',
    'country': 'Turks & Caicos Is.',
    'lng': '-71.8129587031',
    'fips': 'TK',
    'img': 'TK.png'
  },
  {
    'lat': '-9.1951744243',
    'country': 'Tokelau',
    'lng': '-171.852659649',
    'fips': 'TL',
    'img': 'TL.png'
  },
  {
    'lat': '-8.8229773563',
    'country': 'East Timor',
    'lng': '125.8536726188',
    'fips': 'TM',
    'img': 'TM.png'
  },
  {
    'lat': '-20.4029142695',
    'country': 'Tonga',
    'lng': '-174.8362827841',
    'fips': 'TN',
    'img': 'TN.png'
  },
  {
    'lat': '8.5349607191',
    'country': 'Togo',
    'lng': '0.9757212134',
    'fips': 'TO',
    'img': 'TO.png'
  },
  {
    'lat': '0.456984037',
    'country': 'Sao Tome & Principe',
    'lng': '6.736587813',
    'fips': 'TP',
    'img': 'TP.png'
  },
  {
    'lat': '34.1108585284',
    'country': 'Tunisia',
    'lng': '9.5613358998',
    'fips': 'TS',
    'img': 'TS.png'
  },
  {
    'lat': '39.0605957734',
    'country': 'Turkey',
    'lng': '35.1796715101',
    'fips': 'TU',
    'img': 'TU.png'
  },
  {
    'lat': '-7.8278110986',
    'country': 'Tuvalu',
    'lng': '178.5575687379',
    'fips': 'TV',
    'img': 'TV.png'
  },
  {
    'lat': '23.7540118342',
    'country': 'Taiwan',
    'lng': '120.9507985677',
    'fips': 'TW',
    'img': 'TW.png'
  },
  {
    'lat': '39.2187927477',
    'country': 'Turkmenistan',
    'lng': '58.3913143123',
    'fips': 'TX',
    'img': 'TX.png'
  },
  {
    'lat': '-6.2703533809',
    'country': 'Tanzania',
    'lng': '34.8234540306',
    'fips': 'TZ',
    'img': 'TZ.png'
  },
  {
    'lat': '1.2799635291',
    'country': 'Uganda',
    'lng': '32.3862178774',
    'fips': 'UG',
    'img': 'UG.png'
  },
  {
    'lat': '54.1553498764',
    'country': 'United Kingdom',
    'lng': '-2.8955842669',
    'fips': 'UK',
    'img': 'UK.png'
  },
  {
    'lat': '49.0170881693',
    'country': 'Ukraine',
    'lng': '31.3871146434',
    'fips': 'UP',
    'img': 'UP.png'
  },
  {
    'lat': '45.6955770979',
    'country': 'United States',
    'lng': '-112.4915093261',
    'fips': 'US',
    'img': 'US.png'
  },
  {
    'lat': '12.2779295229',
    'country': 'Burkina Faso',
    'lng': '-1.74014151',
    'fips': 'UV',
    'img': 'UV.png'
  },
  {
    'lat': '-32.7996455062',
    'country': 'Uruguay',
    'lng': '-56.012396232',
    'fips': 'UY',
    'img': 'UY.png'
  },
  {
    'lat': '41.7504368115',
    'country': 'Uzbekistan',
    'lng': '63.1693719842',
    'fips': 'UZ',
    'img': 'UZ.png'
  },
  {
    'lat': '13.2548078202',
    'country': 'St. Vincent & the Grenadines',
    'lng': '-61.1937651967',
    'fips': 'VC',
    'img': 'VC.png'
  },
  {
    'lat': '7.1224486701',
    'country': 'Venezuela',
    'lng': '-66.1695637783',
    'fips': 'VE',
    'img': 'VE.png'
  },
  {
    'lat': '18.4445876102',
    'country': 'British Virgin Is.',
    'lng': '-64.5304257485',
    'fips': 'VI',
    'img': 'VI.png'
  },
  {
    'lat': '16.6592573364',
    'country': 'Vietnam',
    'lng': '106.301473618',
    'fips': 'VM',
    'img': 'VM.png'
  },
  {
    'lat': '17.9051117732',
    'country': 'Virgin Is.',
    'lng': '-64.8070331619',
    'fips': 'VQ',
    'img': 'VQ.png'
  },
  {
    'lat': '41.903986718',
    'country': 'Vatican City',
    'lng': '12.4513576326',
    'fips': 'VT',
    'img': 'VT.png'
  },
  {
    'lat': '-22.1332473336',
    'country': 'Namibia',
    'lng': '17.2182775317',
    'fips': 'WA',
    'img': 'WA.png'
  },
  {
    'lat': '31.9466365517',
    'country': 'West Bank',
    'lng': '35.2564175501',
    'fips': 'WE',
    'img': 'WE.png'
  },
  {
    'lat': '-13.7874263999',
    'country': 'Wallis & Futuna',
    'lng': '-177.1507759436',
    'fips': 'WF',
    'img': 'WF.png'
  },
  {
    'lat': '24.6616706806',
    'country': 'Western Sahara',
    'lng': '-13.1365402191',
    'fips': 'WI',
    'img': 'WI.png'
  },
  {
    'lat': '19.3020423877',
    'country': 'Wake I.',
    'lng': '166.6380028031',
    'fips': 'WQ',
    'img': 'WQ.png'
  },
  {
    'lat': '-13.758365248',
    'country': 'Samoa',
    'lng': '-172.1594626981',
    'fips': 'WS',
    'img': 'WS.png'
  },
  {
    'lat': '-26.5626421143',
    'country': 'Swaziland',
    'lng': '31.4975289712',
    'fips': 'WZ',
    'img': 'WZ.png'
  },
  {
    'lat': '15.8078137106',
    'country': 'Yemen',
    'lng': '47.6254526672',
    'fips': 'YM',
    'img': 'YM.png'
  },
  {
    'lat': '-13.4530183398',
    'country': 'Zambia',
    'lng': '27.7982494285',
    'fips': 'ZA',
    'img': 'ZA.png'
  },
  {
    'lat': '-19.000098103',
    'country': 'Zimbabwe',
    'lng': '29.87183767',
    'fips': 'ZI',
    'img': 'ZI.png'
  }
]

export default centroids
