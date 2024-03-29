import React, { useEffect } from 'react';

function HomePage() {
	useEffect(() => {
    document.title = 'SWA Next.js';
  });
   return (
      <>
		<div>
			
		</div>
         <div style={{ fontSize: "120px", margin: "20px", textAlign: "center" }}>Welcome to Next.js!</div>
		 <div style={{ padding: "10px 20px", fontSize: "50px", margin: "5%", textAlign: "center", color: "white"}}>
			<a href="/feature/ssr">SSR Demo</a><br></br><br></br>
			<a href="/feature/isr">ISR Demo with revalidate time of 10s.</a>
		 </div>
      </>	    
   )
}

export default HomePage

// SIG // Begin signature block
// SIG // MIIr8QYJKoZIhvcNAQcCoIIr4jCCK94CAQExDzANBglg
// SIG // hkgBZQMEAgEFADB3BgorBgEEAYI3AgEEoGkwZzAyBgor
// SIG // BgEEAYI3AgEeMCQCAQEEEBDgyQbOONQRoqMAEEvTUJAC
// SIG // AQACAQACAQACAQACAQAwMTANBglghkgBZQMEAgEFAAQg
// SIG // Mrs5ycu2OvQVELNzMLiCdfiH7Z96r+O+L/UrxJlAkbeg
// SIG // ghF9MIIIjTCCB3WgAwIBAgITNgAAAclwIbGGt0CyHQAC
// SIG // AAAByTANBgkqhkiG9w0BAQsFADBBMRMwEQYKCZImiZPy
// SIG // LGQBGRYDR0JMMRMwEQYKCZImiZPyLGQBGRYDQU1FMRUw
// SIG // EwYDVQQDEwxBTUUgQ1MgQ0EgMDEwHhcNMjMwMzIwMjAw
// SIG // MDMxWhcNMjQwMzE5MjAwMDMxWjAkMSIwIAYDVQQDExlN
// SIG // aWNyb3NvZnQgQXp1cmUgQ29kZSBTaWduMIIBIjANBgkq
// SIG // hkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAxa9UuxHcu4Pi
// SIG // Dk75ILwpx2fCBTvWGM+0I91ZlOLEXmJ8lnyRht4A8t/d
// SIG // eQNUUWAvFxoOLXEW+EOBvNYUY8ERwZ+QRhsp9dmokHvE
// SIG // XPqUA1Fn+QBmoFNuH0xmmqDLz0TKQ39mhAc0jn2BRZ2c
// SIG // UeCwC4pqCHbNWgYLazn4ADET+AGGKfrqHAAohxr1487s
// SIG // E+kber/brQ5b5r61Slpz/4mcBjXDRCz7SQ9BLk1GbpML
// SIG // +HLQ2m6yUE+t8V57y1Wx7hQ86WZEaKStW4JI1cLIZPaH
// SIG // J1NR59uolzXUrvuglYyrucwJ249JhDYqBEGDxubGDrNQ
// SIG // XYoOOnfQfby03srj54j/ZwIDAQABo4IFmTCCBZUwKQYJ
// SIG // KwYBBAGCNxUKBBwwGjAMBgorBgEEAYI3WwEBMAoGCCsG
// SIG // AQUFBwMDMD0GCSsGAQQBgjcVBwQwMC4GJisGAQQBgjcV
// SIG // CIaQ4w2E1bR4hPGLPoWb3RbOnRKBYIPdzWaGlIwyAgFk
// SIG // AgEMMIICdgYIKwYBBQUHAQEEggJoMIICZDBiBggrBgEF
// SIG // BQcwAoZWaHR0cDovL2NybC5taWNyb3NvZnQuY29tL3Br
// SIG // aWluZnJhL0NlcnRzL0JZMlBLSUNTQ0EwMS5BTUUuR0JM
// SIG // X0FNRSUyMENTJTIwQ0ElMjAwMSgyKS5jcnQwUgYIKwYB
// SIG // BQUHMAKGRmh0dHA6Ly9jcmwxLmFtZS5nYmwvYWlhL0JZ
// SIG // MlBLSUNTQ0EwMS5BTUUuR0JMX0FNRSUyMENTJTIwQ0El
// SIG // MjAwMSgyKS5jcnQwUgYIKwYBBQUHMAKGRmh0dHA6Ly9j
// SIG // cmwyLmFtZS5nYmwvYWlhL0JZMlBLSUNTQ0EwMS5BTUUu
// SIG // R0JMX0FNRSUyMENTJTIwQ0ElMjAwMSgyKS5jcnQwUgYI
// SIG // KwYBBQUHMAKGRmh0dHA6Ly9jcmwzLmFtZS5nYmwvYWlh
// SIG // L0JZMlBLSUNTQ0EwMS5BTUUuR0JMX0FNRSUyMENTJTIw
// SIG // Q0ElMjAwMSgyKS5jcnQwUgYIKwYBBQUHMAKGRmh0dHA6
// SIG // Ly9jcmw0LmFtZS5nYmwvYWlhL0JZMlBLSUNTQ0EwMS5B
// SIG // TUUuR0JMX0FNRSUyMENTJTIwQ0ElMjAwMSgyKS5jcnQw
// SIG // ga0GCCsGAQUFBzAChoGgbGRhcDovLy9DTj1BTUUlMjBD
// SIG // UyUyMENBJTIwMDEsQ049QUlBLENOPVB1YmxpYyUyMEtl
// SIG // eSUyMFNlcnZpY2VzLENOPVNlcnZpY2VzLENOPUNvbmZp
// SIG // Z3VyYXRpb24sREM9QU1FLERDPUdCTD9jQUNlcnRpZmlj
// SIG // YXRlP2Jhc2U/b2JqZWN0Q2xhc3M9Y2VydGlmaWNhdGlv
// SIG // bkF1dGhvcml0eTAdBgNVHQ4EFgQUnVRygb7XvjwTW2HQ
// SIG // hPeoinHl2xwwDgYDVR0PAQH/BAQDAgeAMFQGA1UdEQRN
// SIG // MEukSTBHMS0wKwYDVQQLEyRNaWNyb3NvZnQgSXJlbGFu
// SIG // ZCBPcGVyYXRpb25zIExpbWl0ZWQxFjAUBgNVBAUTDTIz
// SIG // NjE2Nys1MDAzNjEwggHmBgNVHR8EggHdMIIB2TCCAdWg
// SIG // ggHRoIIBzYY/aHR0cDovL2NybC5taWNyb3NvZnQuY29t
// SIG // L3BraWluZnJhL0NSTC9BTUUlMjBDUyUyMENBJTIwMDEo
// SIG // MikuY3JshjFodHRwOi8vY3JsMS5hbWUuZ2JsL2NybC9B
// SIG // TUUlMjBDUyUyMENBJTIwMDEoMikuY3JshjFodHRwOi8v
// SIG // Y3JsMi5hbWUuZ2JsL2NybC9BTUUlMjBDUyUyMENBJTIw
// SIG // MDEoMikuY3JshjFodHRwOi8vY3JsMy5hbWUuZ2JsL2Ny
// SIG // bC9BTUUlMjBDUyUyMENBJTIwMDEoMikuY3JshjFodHRw
// SIG // Oi8vY3JsNC5hbWUuZ2JsL2NybC9BTUUlMjBDUyUyMENB
// SIG // JTIwMDEoMikuY3JshoG9bGRhcDovLy9DTj1BTUUlMjBD
// SIG // UyUyMENBJTIwMDEoMiksQ049QlkyUEtJQ1NDQTAxLENO
// SIG // PUNEUCxDTj1QdWJsaWMlMjBLZXklMjBTZXJ2aWNlcyxD
// SIG // Tj1TZXJ2aWNlcyxDTj1Db25maWd1cmF0aW9uLERDPUFN
// SIG // RSxEQz1HQkw/Y2VydGlmaWNhdGVSZXZvY2F0aW9uTGlz
// SIG // dD9iYXNlP29iamVjdENsYXNzPWNSTERpc3RyaWJ1dGlv
// SIG // blBvaW50MB8GA1UdIwQYMBaAFJZRhOBrb3v+2Aarw/KF
// SIG // 5imuavnUMB8GA1UdJQQYMBYGCisGAQQBgjdbAQEGCCsG
// SIG // AQUFBwMDMA0GCSqGSIb3DQEBCwUAA4IBAQBBp4Ct6QxN
// SIG // gKxrkeWINdpmVzOwH+AT5LSCfeqaQXlGtRY8/OHQEJKk
// SIG // tcu7K5OnAjzH2mYyWi57EJQb6ygpGKSz+qog6t/j8nel
// SIG // skDr8IhhZh/1WOOOuczWTarBOwluPpxDJibTH3c/oFDo
// SIG // s5FnTT0MyjgcJrz37fvWPAoC8JvCAWu2Sx9yO3BosdYC
// SIG // PMcc89MPCVJyvr42ZNgeJK8fpEhJP/ctR2gwQtehnBG+
// SIG // B7CWyNb5GA9X+AgXPQoDM3XPDQweeX/NRjHU/cExC3j8
// SIG // WW12b2tnOmd2u+VrKO8Za09FN1lvaF+VUdPvEKm8Ovte
// SIG // v2ykVRq6wEiE+IdpXxPESDH/MIII6DCCBtCgAwIBAgIT
// SIG // HwAAAFHqj/accwyoOwAAAAAAUTANBgkqhkiG9w0BAQsF
// SIG // ADA8MRMwEQYKCZImiZPyLGQBGRYDR0JMMRMwEQYKCZIm
// SIG // iZPyLGQBGRYDQU1FMRAwDgYDVQQDEwdhbWVyb290MB4X
// SIG // DTIxMDUyMTE4NDQxNFoXDTI2MDUyMTE4NTQxNFowQTET
// SIG // MBEGCgmSJomT8ixkARkWA0dCTDETMBEGCgmSJomT8ixk
// SIG // ARkWA0FNRTEVMBMGA1UEAxMMQU1FIENTIENBIDAxMIIB
// SIG // IjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAyZpS
// SIG // CX0Bno1W1yqXMhT6BUlJZWpa4p3xFeiTHO4vm2Q6C/az
// SIG // R5xwxnyYHrkSGDtS2P9X+KDE64V20mmEQkubxnPNeOVn
// SIG // E2RvdPGxgwlq+BhS3ONdVsQPj79q7XgHM9HhzB9+qk0P
// SIG // C9KN1zm9p/seyiRS6JF1dbOqRf1pUl7FAVxmgiCFgV8h
// SIG // HIb/rDPXig7FDi3S0yEx2CUDVpIq8jEhG8anUFE1WYxM
// SIG // +ni0S5KHwwKPKV4qyGDoDO+9AmDoma3Chyu5WDlW5cdt
// SIG // qXTWsGPE3umtnX6AmlldUFLms4OVR4guKf+n5LIBCC6b
// SIG // TiocfXPomqYjYTKx7AGMfaVLaaXmhQIDAQABo4IE3DCC
// SIG // BNgwEgYJKwYBBAGCNxUBBAUCAwIAAjAjBgkrBgEEAYI3
// SIG // FQIEFgQUEmgkQiFHy9RrvjHPIKTACyN/P0cwHQYDVR0O
// SIG // BBYEFJZRhOBrb3v+2Aarw/KF5imuavnUMIIBBAYDVR0l
// SIG // BIH8MIH5BgcrBgEFAgMFBggrBgEFBQcDAQYIKwYBBQUH
// SIG // AwIGCisGAQQBgjcUAgEGCSsGAQQBgjcVBgYKKwYBBAGC
// SIG // NwoDDAYJKwYBBAGCNxUGBggrBgEFBQcDCQYIKwYBBQUI
// SIG // AgIGCisGAQQBgjdAAQEGCysGAQQBgjcKAwQBBgorBgEE
// SIG // AYI3CgMEBgkrBgEEAYI3FQUGCisGAQQBgjcUAgIGCisG
// SIG // AQQBgjcUAgMGCCsGAQUFBwMDBgorBgEEAYI3WwEBBgor
// SIG // BgEEAYI3WwIBBgorBgEEAYI3WwMBBgorBgEEAYI3WwUB
// SIG // BgorBgEEAYI3WwQBBgorBgEEAYI3WwQCMBkGCSsGAQQB
// SIG // gjcUAgQMHgoAUwB1AGIAQwBBMAsGA1UdDwQEAwIBhjAS
// SIG // BgNVHRMBAf8ECDAGAQH/AgEAMB8GA1UdIwQYMBaAFCle
// SIG // UV5krjS566ycDaeMdQHRCQsoMIIBaAYDVR0fBIIBXzCC
// SIG // AVswggFXoIIBU6CCAU+GMWh0dHA6Ly9jcmwubWljcm9z
// SIG // b2Z0LmNvbS9wa2lpbmZyYS9jcmwvYW1lcm9vdC5jcmyG
// SIG // I2h0dHA6Ly9jcmwyLmFtZS5nYmwvY3JsL2FtZXJvb3Qu
// SIG // Y3JshiNodHRwOi8vY3JsMy5hbWUuZ2JsL2NybC9hbWVy
// SIG // b290LmNybIYjaHR0cDovL2NybDEuYW1lLmdibC9jcmwv
// SIG // YW1lcm9vdC5jcmyGgapsZGFwOi8vL0NOPWFtZXJvb3Qs
// SIG // Q049QU1FUm9vdCxDTj1DRFAsQ049UHVibGljJTIwS2V5
// SIG // JTIwU2VydmljZXMsQ049U2VydmljZXMsQ049Q29uZmln
// SIG // dXJhdGlvbixEQz1BTUUsREM9R0JMP2NlcnRpZmljYXRl
// SIG // UmV2b2NhdGlvbkxpc3Q/YmFzZT9vYmplY3RDbGFzcz1j
// SIG // UkxEaXN0cmlidXRpb25Qb2ludDCCAasGCCsGAQUFBwEB
// SIG // BIIBnTCCAZkwRwYIKwYBBQUHMAKGO2h0dHA6Ly9jcmwu
// SIG // bWljcm9zb2Z0LmNvbS9wa2lpbmZyYS9jZXJ0cy9BTUVS
// SIG // b290X2FtZXJvb3QuY3J0MDcGCCsGAQUFBzAChitodHRw
// SIG // Oi8vY3JsMi5hbWUuZ2JsL2FpYS9BTUVSb290X2FtZXJv
// SIG // b3QuY3J0MDcGCCsGAQUFBzAChitodHRwOi8vY3JsMy5h
// SIG // bWUuZ2JsL2FpYS9BTUVSb290X2FtZXJvb3QuY3J0MDcG
// SIG // CCsGAQUFBzAChitodHRwOi8vY3JsMS5hbWUuZ2JsL2Fp
// SIG // YS9BTUVSb290X2FtZXJvb3QuY3J0MIGiBggrBgEFBQcw
// SIG // AoaBlWxkYXA6Ly8vQ049YW1lcm9vdCxDTj1BSUEsQ049
// SIG // UHVibGljJTIwS2V5JTIwU2VydmljZXMsQ049U2Vydmlj
// SIG // ZXMsQ049Q29uZmlndXJhdGlvbixEQz1BTUUsREM9R0JM
// SIG // P2NBQ2VydGlmaWNhdGU/YmFzZT9vYmplY3RDbGFzcz1j
// SIG // ZXJ0aWZpY2F0aW9uQXV0aG9yaXR5MA0GCSqGSIb3DQEB
// SIG // CwUAA4ICAQBQECO3Tw/o317Rrd7yadqcswPx1LvIYymk
// SIG // aTN6KcmuRt6HKa0Xe73Ux2/AQ30TfgA9GBJngweRykKB
// SIG // usRzyOU17iIubJvy3gA21dwtqtB0DsoEv1U/ptVu2v++
// SIG // doTCJ/i+GbssVXkgaX8H+6EOGEmT4evp4GbwR4HwWlc+
// SIG // Dvf8HH8PdUA2Z04CvcwIfckSipbNm84jxJ8XjmTFTWsc
// SIG // ldL9edj2NsY6iGnyJFIyur2PS7VRYyV3p1VAJp91gj1j
// SIG // RQtWEyCB8P5g9nE3z8u0ANaU/hjwEQCrdGyravWgnf2J
// SIG // tG+bT26YAokbc8m+32zUtXRO+NK3tAjhOu2FdsG3qNrF
// SIG // 4sc7y37R/C+7Pcb/cFfhttqsirepZii4xStcjMODYuXz
// SIG // Gm3IJs0b0owHG6oKd7ZOGvHpmmh9K8/DLriD/sq8bURD
// SIG // 10qi/wuW8zM7IpLg1vcR9dIK2mc0pj44pc6UX0XbttP/
// SIG // VEJgu3lT2eI9VjWtaKjx38xE9woSMyekPRtzTwgfuysF
// SIG // 9DkJisr+yA4po/FPxpbBw9c/hBf32DH/GFxteS2pmjgK
// SIG // IbMP8sDukmEq3lVvuWNJsybrZwQvQpvaM49fv+JKpLK5
// SIG // YWYEfwksYRR9wU8Hh/ID9hRCEkbUoQ2W7mMpsp2Nbp/k
// SIG // cn4ivfolUy3Q9Yf0scsQ6WTLYpm+AoCUJTGCGcwwghnI
// SIG // AgEBMFgwQTETMBEGCgmSJomT8ixkARkWA0dCTDETMBEG
// SIG // CgmSJomT8ixkARkWA0FNRTEVMBMGA1UEAxMMQU1FIENT
// SIG // IENBIDAxAhM2AAAByXAhsYa3QLIdAAIAAAHJMA0GCWCG
// SIG // SAFlAwQCAQUAoIGuMBkGCSqGSIb3DQEJAzEMBgorBgEE
// SIG // AYI3AgEEMBwGCisGAQQBgjcCAQsxDjAMBgorBgEEAYI3
// SIG // AgEVMC8GCSqGSIb3DQEJBDEiBCDnmYSXZ0HbyYwcbQA2
// SIG // sHperE+1ibeBlAWY9mB2oU8LIjBCBgorBgEEAYI3AgEM
// SIG // MTQwMqAUgBIATQBpAGMAcgBvAHMAbwBmAHShGoAYaHR0
// SIG // cDovL3d3dy5taWNyb3NvZnQuY29tMA0GCSqGSIb3DQEB
// SIG // AQUABIIBAKSPftdxQRHtfJStL760wbqpaIfTbu4ZImP1
// SIG // AAOLXDn1vEsfdUk+ORLQpIM4H6VcAbaeUSDK3loBbD47
// SIG // 1U/KHvSIdxJ4drQvWOIHKSpWzvSo9dxPWQdQnm3JQicE
// SIG // 5t1KSK8dnpW9ivYnn8PhhooMeVg6GNZZX2m1YsrB/PRj
// SIG // Iq7X8SakgPRcqeT/CIqeCRA7fCO2VGYnSnsC1hZ5CUFU
// SIG // hoiJpMxVubtn2sYpEnTV6KwS/2cBEbEPEm5TCYsxzLlN
// SIG // WmVUdN4vrC2oqfVkdnOznmm0aePpmHwfNFnOI/nFH3E0
// SIG // zmC1V6xN1C5qFwpblZ7OjnfnC/LMOEsQsExzrdWsiZyh
// SIG // gheUMIIXkAYKKwYBBAGCNwMDATGCF4Awghd8BgkqhkiG
// SIG // 9w0BBwKgghdtMIIXaQIBAzEPMA0GCWCGSAFlAwQCAQUA
// SIG // MIIBUgYLKoZIhvcNAQkQAQSgggFBBIIBPTCCATkCAQEG
// SIG // CisGAQQBhFkKAwEwMTANBglghkgBZQMEAgEFAAQgFGuO
// SIG // 6yY6jUcMBFhhOoICwdtuioUCk+MTz9rdzGFEDggCBmW8
// SIG // Ez+wtRgTMjAyNDAyMDcxODI2MjkuMTc5WjAEgAIB9KCB
// SIG // 0aSBzjCByzELMAkGA1UEBhMCVVMxEzARBgNVBAgTCldh
// SIG // c2hpbmd0b24xEDAOBgNVBAcTB1JlZG1vbmQxHjAcBgNV
// SIG // BAoTFU1pY3Jvc29mdCBDb3Jwb3JhdGlvbjElMCMGA1UE
// SIG // CxMcTWljcm9zb2Z0IEFtZXJpY2EgT3BlcmF0aW9uczEn
// SIG // MCUGA1UECxMeblNoaWVsZCBUU1MgRVNOOkE0MDAtMDVF
// SIG // MC1EOTQ3MSUwIwYDVQQDExxNaWNyb3NvZnQgVGltZS1T
// SIG // dGFtcCBTZXJ2aWNloIIR6jCCByAwggUIoAMCAQICEzMA
// SIG // AAHs4CukgtCRUoAAAQAAAewwDQYJKoZIhvcNAQELBQAw
// SIG // fDELMAkGA1UEBhMCVVMxEzARBgNVBAgTCldhc2hpbmd0
// SIG // b24xEDAOBgNVBAcTB1JlZG1vbmQxHjAcBgNVBAoTFU1p
// SIG // Y3Jvc29mdCBDb3Jwb3JhdGlvbjEmMCQGA1UEAxMdTWlj
// SIG // cm9zb2Z0IFRpbWUtU3RhbXAgUENBIDIwMTAwHhcNMjMx
// SIG // MjA2MTg0NTM4WhcNMjUwMzA1MTg0NTM4WjCByzELMAkG
// SIG // A1UEBhMCVVMxEzARBgNVBAgTCldhc2hpbmd0b24xEDAO
// SIG // BgNVBAcTB1JlZG1vbmQxHjAcBgNVBAoTFU1pY3Jvc29m
// SIG // dCBDb3Jwb3JhdGlvbjElMCMGA1UECxMcTWljcm9zb2Z0
// SIG // IEFtZXJpY2EgT3BlcmF0aW9uczEnMCUGA1UECxMeblNo
// SIG // aWVsZCBUU1MgRVNOOkE0MDAtMDVFMC1EOTQ3MSUwIwYD
// SIG // VQQDExxNaWNyb3NvZnQgVGltZS1TdGFtcCBTZXJ2aWNl
// SIG // MIICIjANBgkqhkiG9w0BAQEFAAOCAg8AMIICCgKCAgEA
// SIG // sEf0bgk24MVFlZv1XbpdtrsHRGZtCKABbOqCK9/VSvyL
// SIG // T/NHJ/vE5rT+u4mmweA5gCifRh+nSRoRDyaWOL0ykUjs
// SIG // K0TcVSCqDz3lBd3+FchxHKP7tUFGnZcA9d9jbmQsW54e
// SIG // jItpSxu6Q77M2ajBu0tzAotm5Np77RinXgCC/h++4C+K
// SIG // 9NU0lm+67BNiW9T/zemP1tQqg4tfyG9/80all7eM8b3S
// SIG // BnD40uGSskBBd0hGQKuFyI4sqMDx2qjW2cXX9pFjv2o3
// SIG // X01PObfd+AlwIp29KPrkPSrWijS1VXDX+UKUuH+vzLFz
// SIG // ryBbgmDEXSg46Zr6MAHi/tY9u2wsQgaQ0B61pHz82af1
// SIG // /m7fQuxOYTz+h1UaKgWEe7tYFH+RhKvua9RwNI2o59EO
// SIG // jr32HJBNB3Tr+ilmvrAJiRuzw702Wnu+4aJs8eiD6oIF
// SIG // aTWbgpO/Un1ZpyrvRefFAJ1OfE6gxxMxrEJzFECrLUt8
// SIG // 45+klNDSxBTQnrZbmipKlg0VSxFm7t9vSBId7alz138u
// SIG // kYf8Am8HvUgiSKKrQXsQaz8kGANl2s9XyvcrE7MdJAPV
// SIG // dScFVeOCGvXPjMLQEerKinQIEaP27P17vILmvCw3uils
// SIG // rve+HvZhlu2TvJ2qwxawE9RFxhw7nsoEir79iu8AfJQI
// SIG // DBiY+9wkL6/o6qFsMel3cnkCAwEAAaOCAUkwggFFMB0G
// SIG // A1UdDgQWBBT0WtBHZP4r9cIWELFfFIBH+EyFhjAfBgNV
// SIG // HSMEGDAWgBSfpxVdAF5iXYP05dJlpxtTNRnpcjBfBgNV
// SIG // HR8EWDBWMFSgUqBQhk5odHRwOi8vd3d3Lm1pY3Jvc29m
// SIG // dC5jb20vcGtpb3BzL2NybC9NaWNyb3NvZnQlMjBUaW1l
// SIG // LVN0YW1wJTIwUENBJTIwMjAxMCgxKS5jcmwwbAYIKwYB
// SIG // BQUHAQEEYDBeMFwGCCsGAQUFBzAChlBodHRwOi8vd3d3
// SIG // Lm1pY3Jvc29mdC5jb20vcGtpb3BzL2NlcnRzL01pY3Jv
// SIG // c29mdCUyMFRpbWUtU3RhbXAlMjBQQ0ElMjAyMDEwKDEp
// SIG // LmNydDAMBgNVHRMBAf8EAjAAMBYGA1UdJQEB/wQMMAoG
// SIG // CCsGAQUFBwMIMA4GA1UdDwEB/wQEAwIHgDANBgkqhkiG
// SIG // 9w0BAQsFAAOCAgEAkrzEpDEq745Qz2oPAEW9DhawELUi
// SIG // zA6TdFGNxY7z4cBig664sZp7jH465lY0atbvCIZA7xhf
// SIG // 2332xU6/iAJw0noPEwfc3xv+Mm5J7qKZJW3ho27ezC8a
// SIG // X4aJQhEchHNtDzGSic/Ur837jtZ+ca6yzi/JtJ5r+ZAX
// SIG // L/stQFyeUHC4nJoXtiKd/w+uxHeqD6kCNN5g42GktTUI
// SIG // QTbbue8Dyl2dRKDU6AZPGwOvN/cNdfW/mvVk6KiLJHUR
// SIG // qD+cYwyL/pnNLwR4WRpCVb3yIZuAKfM6bQu8VQJctI3j
// SIG // r+XVBjAmIGY76E5oHeOW6gMLp3Zj5Rrq+3pXlmHnS0H+
// SIG // 7Ny+fqn2mP8RIf/bqNe0pzP4B1UhgM7563hoTqwdi7XS
// SIG // qFUnuS22KYoV3LQ3u+omLS/pocVzxKc3Wt2yZYT0zkNy
// SIG // jhGQKVREQaOcpbVozwlpV8cgqZeY4/Z2NJ33dO9W3pp6
// SIG // LvAN61Ga3YCiGrrbB+0hzojnm2RqjbvuttrybWt3gGLA
// SIG // gGsQHAfQYiT5Wu12nfaq02HU+OVZQmE7QUmOKFUbHnUg
// SIG // A7/fY7/4mCABstWwsrbmtKP0Kr/Xqyps0Ak1TF2g3NuQ
// SIG // 0y3DBia0bmtytMYr3bZ6AXsc1Sa+sl6jPgWtsISFUbxn
// SIG // K4gZCl9BSRXlu69vV1/pNHuA5xuogRykI3nOlTcwggdx
// SIG // MIIFWaADAgECAhMzAAAAFcXna54Cm0mZAAAAAAAVMA0G
// SIG // CSqGSIb3DQEBCwUAMIGIMQswCQYDVQQGEwJVUzETMBEG
// SIG // A1UECBMKV2FzaGluZ3RvbjEQMA4GA1UEBxMHUmVkbW9u
// SIG // ZDEeMBwGA1UEChMVTWljcm9zb2Z0IENvcnBvcmF0aW9u
// SIG // MTIwMAYDVQQDEylNaWNyb3NvZnQgUm9vdCBDZXJ0aWZp
// SIG // Y2F0ZSBBdXRob3JpdHkgMjAxMDAeFw0yMTA5MzAxODIy
// SIG // MjVaFw0zMDA5MzAxODMyMjVaMHwxCzAJBgNVBAYTAlVT
// SIG // MRMwEQYDVQQIEwpXYXNoaW5ndG9uMRAwDgYDVQQHEwdS
// SIG // ZWRtb25kMR4wHAYDVQQKExVNaWNyb3NvZnQgQ29ycG9y
// SIG // YXRpb24xJjAkBgNVBAMTHU1pY3Jvc29mdCBUaW1lLVN0
// SIG // YW1wIFBDQSAyMDEwMIICIjANBgkqhkiG9w0BAQEFAAOC
// SIG // Ag8AMIICCgKCAgEA5OGmTOe0ciELeaLL1yR5vQ7VgtP9
// SIG // 7pwHB9KpbE51yMo1V/YBf2xK4OK9uT4XYDP/XE/HZveV
// SIG // U3Fa4n5KWv64NmeFRiMMtY0Tz3cywBAY6GB9alKDRLem
// SIG // jkZrBxTzxXb1hlDcwUTIcVxRMTegCjhuje3XD9gmU3w5
// SIG // YQJ6xKr9cmmvHaus9ja+NSZk2pg7uhp7M62AW36MEByd
// SIG // Uv626GIl3GoPz130/o5Tz9bshVZN7928jaTjkY+yOSxR
// SIG // nOlwaQ3KNi1wjjHINSi947SHJMPgyY9+tVSP3PoFVZht
// SIG // aDuaRr3tpK56KTesy+uDRedGbsoy1cCGMFxPLOJiss25
// SIG // 4o2I5JasAUq7vnGpF1tnYN74kpEeHT39IM9zfUGaRnXN
// SIG // xF803RKJ1v2lIH1+/NmeRd+2ci/bfV+AutuqfjbsNkz2
// SIG // K26oElHovwUDo9Fzpk03dJQcNIIP8BDyt0cY7afomXw/
// SIG // TNuvXsLz1dhzPUNOwTM5TI4CvEJoLhDqhFFG4tG9ahha
// SIG // YQFzymeiXtcodgLiMxhy16cg8ML6EgrXY28MyTZki1ug
// SIG // poMhXV8wdJGUlNi5UPkLiWHzNgY1GIRH29wb0f2y1BzF
// SIG // a/ZcUlFdEtsluq9QBXpsxREdcu+N+VLEhReTwDwV2xo3
// SIG // xwgVGD94q0W29R6HXtqPnhZyacaue7e3PmriLq0CAwEA
// SIG // AaOCAd0wggHZMBIGCSsGAQQBgjcVAQQFAgMBAAEwIwYJ
// SIG // KwYBBAGCNxUCBBYEFCqnUv5kxJq+gpE8RjUpzxD/LwTu
// SIG // MB0GA1UdDgQWBBSfpxVdAF5iXYP05dJlpxtTNRnpcjBc
// SIG // BgNVHSAEVTBTMFEGDCsGAQQBgjdMg30BATBBMD8GCCsG
// SIG // AQUFBwIBFjNodHRwOi8vd3d3Lm1pY3Jvc29mdC5jb20v
// SIG // cGtpb3BzL0RvY3MvUmVwb3NpdG9yeS5odG0wEwYDVR0l
// SIG // BAwwCgYIKwYBBQUHAwgwGQYJKwYBBAGCNxQCBAweCgBT
// SIG // AHUAYgBDAEEwCwYDVR0PBAQDAgGGMA8GA1UdEwEB/wQF
// SIG // MAMBAf8wHwYDVR0jBBgwFoAU1fZWy4/oolxiaNE9lJBb
// SIG // 186aGMQwVgYDVR0fBE8wTTBLoEmgR4ZFaHR0cDovL2Ny
// SIG // bC5taWNyb3NvZnQuY29tL3BraS9jcmwvcHJvZHVjdHMv
// SIG // TWljUm9vQ2VyQXV0XzIwMTAtMDYtMjMuY3JsMFoGCCsG
// SIG // AQUFBwEBBE4wTDBKBggrBgEFBQcwAoY+aHR0cDovL3d3
// SIG // dy5taWNyb3NvZnQuY29tL3BraS9jZXJ0cy9NaWNSb29D
// SIG // ZXJBdXRfMjAxMC0wNi0yMy5jcnQwDQYJKoZIhvcNAQEL
// SIG // BQADggIBAJ1VffwqreEsH2cBMSRb4Z5yS/ypb+pcFLY+
// SIG // TkdkeLEGk5c9MTO1OdfCcTY/2mRsfNB1OW27DzHkwo/7
// SIG // bNGhlBgi7ulmZzpTTd2YurYeeNg2LpypglYAA7AFvono
// SIG // aeC6Ce5732pvvinLbtg/SHUB2RjebYIM9W0jVOR4U3Uk
// SIG // V7ndn/OOPcbzaN9l9qRWqveVtihVJ9AkvUCgvxm2EhIR
// SIG // XT0n4ECWOKz3+SmJw7wXsFSFQrP8DJ6LGYnn8AtqgcKB
// SIG // GUIZUnWKNsIdw2FzLixre24/LAl4FOmRsqlb30mjdAy8
// SIG // 7JGA0j3mSj5mO0+7hvoyGtmW9I/2kQH2zsZ0/fZMcm8Q
// SIG // q3UwxTSwethQ/gpY3UA8x1RtnWN0SCyxTkctwRQEcb9k
// SIG // +SS+c23Kjgm9swFXSVRk2XPXfx5bRAGOWhmRaw2fpCjc
// SIG // ZxkoJLo4S5pu+yFUa2pFEUep8beuyOiJXk+d0tBMdrVX
// SIG // VAmxaQFEfnyhYWxz/gq77EFmPWn9y8FBSX5+k77L+Dvk
// SIG // txW/tM4+pTFRhLy/AsGConsXHRWJjXD+57XQKBqJC482
// SIG // 2rpM+Zv/Cuk0+CQ1ZyvgDbjmjJnW4SLq8CdCPSWU5nR0
// SIG // W2rRnj7tfqAxM328y+l7vzhwRNGQ8cirOoo6CGJ/2XBj
// SIG // U02N7oJtpQUQwXEGahC0HVUzWLOhcGbyoYIDTTCCAjUC
// SIG // AQEwgfmhgdGkgc4wgcsxCzAJBgNVBAYTAlVTMRMwEQYD
// SIG // VQQIEwpXYXNoaW5ndG9uMRAwDgYDVQQHEwdSZWRtb25k
// SIG // MR4wHAYDVQQKExVNaWNyb3NvZnQgQ29ycG9yYXRpb24x
// SIG // JTAjBgNVBAsTHE1pY3Jvc29mdCBBbWVyaWNhIE9wZXJh
// SIG // dGlvbnMxJzAlBgNVBAsTHm5TaGllbGQgVFNTIEVTTjpB
// SIG // NDAwLTA1RTAtRDk0NzElMCMGA1UEAxMcTWljcm9zb2Z0
// SIG // IFRpbWUtU3RhbXAgU2VydmljZaIjCgEBMAcGBSsOAwIa
// SIG // AxUAjhz7YFXc/RFtIjzS/wV6iaKlTH+ggYMwgYCkfjB8
// SIG // MQswCQYDVQQGEwJVUzETMBEGA1UECBMKV2FzaGluZ3Rv
// SIG // bjEQMA4GA1UEBxMHUmVkbW9uZDEeMBwGA1UEChMVTWlj
// SIG // cm9zb2Z0IENvcnBvcmF0aW9uMSYwJAYDVQQDEx1NaWNy
// SIG // b3NvZnQgVGltZS1TdGFtcCBQQ0EgMjAxMDANBgkqhkiG
// SIG // 9w0BAQsFAAIFAOlt0RgwIhgPMjAyNDAyMDcwOTUxMjBa
// SIG // GA8yMDI0MDIwODA5NTEyMFowdDA6BgorBgEEAYRZCgQB
// SIG // MSwwKjAKAgUA6W3RGAIBADAHAgEAAgIRyDAHAgEAAgIU
// SIG // ATAKAgUA6W8imAIBADA2BgorBgEEAYRZCgQCMSgwJjAM
// SIG // BgorBgEEAYRZCgMCoAowCAIBAAIDB6EgoQowCAIBAAID
// SIG // AYagMA0GCSqGSIb3DQEBCwUAA4IBAQCIh2n87iqp32gU
// SIG // K7N704OvWReOxp2eYjB32a32lhu5L6AI6i8e4MtwoJmc
// SIG // zSEd7itEioXYU0HPeCKkIfgCpMq1TzDBk/hCT/8XJc0J
// SIG // nrWow7yIA9JjmRj40GkoQigWK2fUSTR+5CXXElqzKHHp
// SIG // c0TDkZlaSGdoWWftH3KcunsZW8hnLMeI6hbIirq029nJ
// SIG // CpUoEZo0+NhiY4o3vCp+YUjEpOSnEmXK6F2PGfHD75cN
// SIG // l3eNpXv3RE9+2WwOjYuVQnh9bklOpvhHboZ9cW2lXtO0
// SIG // 2V6zKUv8jwV19GBkCpn0mQxC0xBcw4W/csK+R0nrpGTs
// SIG // unmhZRMFLiYFryyx8JokMYIEDTCCBAkCAQEwgZMwfDEL
// SIG // MAkGA1UEBhMCVVMxEzARBgNVBAgTCldhc2hpbmd0b24x
// SIG // EDAOBgNVBAcTB1JlZG1vbmQxHjAcBgNVBAoTFU1pY3Jv
// SIG // c29mdCBDb3Jwb3JhdGlvbjEmMCQGA1UEAxMdTWljcm9z
// SIG // b2Z0IFRpbWUtU3RhbXAgUENBIDIwMTACEzMAAAHs4Cuk
// SIG // gtCRUoAAAQAAAewwDQYJYIZIAWUDBAIBBQCgggFKMBoG
// SIG // CSqGSIb3DQEJAzENBgsqhkiG9w0BCRABBDAvBgkqhkiG
// SIG // 9w0BCQQxIgQgErrHIIJP9jAzIEcEIps+EI0s/apy/RXA
// SIG // /SSq3lbvfTgwgfoGCyqGSIb3DQEJEAIvMYHqMIHnMIHk
// SIG // MIG9BCAnCeb1an03yIcdtUAQWysqP8XIkCF2qDFlC3ow
// SIG // BNUKgzCBmDCBgKR+MHwxCzAJBgNVBAYTAlVTMRMwEQYD
// SIG // VQQIEwpXYXNoaW5ndG9uMRAwDgYDVQQHEwdSZWRtb25k
// SIG // MR4wHAYDVQQKExVNaWNyb3NvZnQgQ29ycG9yYXRpb24x
// SIG // JjAkBgNVBAMTHU1pY3Jvc29mdCBUaW1lLVN0YW1wIFBD
// SIG // QSAyMDEwAhMzAAAB7OArpILQkVKAAAEAAAHsMCIEIMIM
// SIG // b1MYyDBbAfmYlJIk3H2Eh7Pv2ClFTQkmtQv6cyz/MA0G
// SIG // CSqGSIb3DQEBCwUABIICAKQPu44Db0fpd5J8G9G/Gvhg
// SIG // P8aryRgl5jGjTCU3ypb/JRojLltxCiPpXUH2NR4foZk6
// SIG // 9Z2eVet7jqszuXV0hjjUxpKYWiQ7Jkr/1kxL5zxyx4fI
// SIG // zWaChVDUcUTv56hwto68deV6h0QTxoiKg1O4fjW9F26L
// SIG // K1hHloGfcyFHA9TF7wlK9P05jR3rrQ761LDAr94OaVN9
// SIG // Y8zvSJgy+LA5KQEL3VIKzY2J2OGqGU8QIF0BQqNw3Fj0
// SIG // mAhTufUVMZOMwoPUaTzDeulYlfOM9XFCvajjISj7MDY4
// SIG // 1uX0KvJJDKgXQYvSlL7fwFa4k9uo4SgrqO6wieh+aAmw
// SIG // ZVfMX+O6ZYXL/c8DAepyybYgqNDl/tDJbLPmOKGXxXTY
// SIG // fk2l+lEiSrI6rpKOcLkZL4U6PsewASQELc7DjAAxvl3O
// SIG // xj1LXJr/rpkOEOf23HxxWuQo5VwUZptsH8dVV7M2Y9+f
// SIG // 7Nr/p1GDgUGZrXpt+F4eDs0vnAwI3GKoZvqNFa0oQgyo
// SIG // DlHEZGeASCZfB9RIGR+YJTmbP0Btmhhhsg8N2gP84kYe
// SIG // lnqu+G8qW528SRjHQyOxCl7B2dIn4M4nnnPrjzk6HfjP
// SIG // oCLVJUdDisyCDMvaqbAcTPFP5iu/PpxhYWYRnRSyp9dS
// SIG // tbwFJk+n55gZdunOKPDnipfPUKTJ8yPxrWIld2QYIoER
// SIG // End signature block
