function FindProxyForURL(url, host){

//bypass proxy for these domains
if (dnsDomainIs(host, ".ampproject.org")||
dnsDomainIs(host, ".cdn.ampproject.org")||
dnsDomainIs(host, ".fonts.gstatic.com")||
dnsDomainIs(host, ".gmail.com")||
dnsDomainIs(host, "gmail.com")||
dnsDomainIs(host, ".googleusercontent.com")||
dnsDomainIs(host, ".gstatic.com")||
dnsDomainIs(host, ".google.com")||
dnsDomainIs(host, ".google.pl")||
dnsDomainIs(host, "google.com")||
dnsDomainIs(host, "google.pl")||
dnsDomainIs(host, ".mee2.macmillan.education")||
dnsDomainIs(host, "duolingo.com")||
dnsDomainIs(host, ".duolingo.com")||
dnsDomainIs(host, "wikipedia.org")||
dnsDomainIs(host, ".wikipedia.org")||
dnsDomainIs(host, ".wikimedia.org")||
dnsDomainIs(host, ".cloudfront.net")||
dnsDomainIs(host, ".macmillaneducationeverywhere.com")||
dnsDomainIs(host, ".macmillaneducationeverywhere.com")||
dnsDomainIs(host, ".education")||
dnsDomainIs(host, ".localhost")||
dnsDomainIs(host, ".lh3.googleusercontent.com")||
dnsDomainIs(host, ".cloudfront.net")||
dnsDomainIs(host, ".ssl.gstatic.com")||
dnsDomainIs(host, ".wikimedia.org")||
dnsDomainIs(host, ".microsoft.com")||
dnsDomainIs(host, ".office.com")||
dnsDomainIs(host, ".live.com")||
dnsDomainIs(host, ".office.net")||
dnsDomainIs(host, ".microsoftonline.com")||
dnsDomainIs(host, ".azureedge.net")||
dnsDomainIs(host, ".msftauth.net")||
dnsDomainIs(host, ".live.net")||
dnsDomainIs(host, "wikipedia.org")||
dnsDomainIs(host, "wikimedia.org")||
dnsDomainIs(host, "cloudfront.net")||
dnsDomainIs(host, "macmillaneducationeverywhere.com")||
dnsDomainIs(host, "macmillaneducationeverywhere.com")||
dnsDomainIs(host, "education")||
dnsDomainIs(host, "localhost")||
dnsDomainIs(host, "lh3.googleusercontent.com")||
dnsDomainIs(host, "cloudfront.net")||
dnsDomainIs(host, "ssl.gstatic.com")||
dnsDomainIs(host, "wikimedia.org")||
dnsDomainIs(host, "microsoft.com")||
dnsDomainIs(host, "office.com")||
dnsDomainIs(host, "live.com")||
dnsDomainIs(host, "office.net")||
dnsDomainIs(host, "microsoftonline.com")||
dnsDomainIs(host, "azureedge.net")||
dnsDomainIs(host, "msftauth.net")||
dnsDomainIs(host, "live.net")||
dnsDomainIs(host, "calculator.apps.chrome")||
dnsDomainIs(host, "canvas.apps.chrome")||
dnsDomainIs(host, ".githubusercontent.com")||
dnsDomainIs(host, ".github.com")||
dnsDomainIs(host, "github.com"))
{
return "DIRECT";
}

// bypass only domains
// bypass ip addresses and hosts
// in the app profile
//
return "PROXY localhost:443";
}
