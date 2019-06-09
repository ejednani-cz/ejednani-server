*(The information below is in Czech language. For English please wait until the first stable release.)*

*Aplikace je stále ve vıvoji, specifikace, funkce, chování atd. se mohou zmìnit. Prosím, vyèkejte s instalací do prvního stabilního vydání, které bude vèas oznámeno na webu https://ejednani.cz/*

# eJednání
Elektronickı systém pro vedení jednání organizací a samospráv

## Co to umí?
eJednání je systém, kterı øeší prùbìh jednání (bude doplòováno dle naimplementovanıch funkcí):
- ~~svolání jednání~~
- ~~tvorby programu~~
- ~~vedení jednání~~
- ~~jmenovité hlasování (pro tajné hlasování prosím pouijte systém [Helios](https://heliosvoting.org/))~~
- ~~hlášení úèastníkù do rozpravy èi s technickou nebo faktickou poznámkou~~
- ~~hlídání èasu na projednávanı bod~~
- ~~udìlování slova a hlídaní jeho èasu~~
- ~~fyzickou i vzdálenou úèast na jednáních (mùe vyuívat mikrofon, reproduktor a kameru koncovıch zaøízení, lze tak pøipojit napøíklad audiotechniku a projektor/tv v jednacím sále)~~
- ~~tvorbu a ovìøení zápisu~~
- ~~mód tabule (pro projektor/tv)~~
- ~~veøejnı mód (pro monost úèasti veøejnosti, lze vyadovat autentizaci pomocí identity tøetích stran, nutno nakonfigurovat)~~
- webová aplikace s responzivním designem - odpadá nutnost vlastnit specializované hlasovací zaøízení (funguje v prohlíeèi v PC/tabletu/telefonu - pro pøedsedajícího silnì doporuèujeme vìtší tablet nebo PC s dotykovou obrazovkou, pro zapisovatele pak PC s klávesnicí)

## Licence
Aplikace je zatím zveøejnìna pod licencí Non-Profit Open Software License 3.0. Úèelem je, aby samosprávy, pøíspìvkové a neziskové organizace èi jiní uivatelé nekomerèní povahy mohli systém vyuívat zdarma bez omezení.

Pro komerèní uivatele (firmy, které chtìjí nabízet provoz aplikace, její podporu èi rozšíøení kódu o další funkcionalitu za úèelem prodeje) nabízíme monost individuálního smluvního vztahu na pronájem licence poskytující vám taková práva, jaká budete potøebovat pro vaši náplò podnikání.

Aplikace vzniká ve volném èase [tımu (aktuálnì jen já)](https://github.com/orgs/ejednani-cz/people) a není dotována ádnımi granty nebo sponzory. Rád bych proto aplikoval myšlenku uvedenou vıše, nejspíš proto vznikne speciální licence pro tento úèel aplikovatelná v èeském právu a Non-Profit OSL se opustí. Tzv stay tuned :)

## Instalace
### Pøedpoklady:
- NodeJS
- npm (správce balíèkù)
- bower (správce balíèkù komponent)
- nodemon (není potøeba, ale je doporuèeno)

### Postup:
- Zkopírujte obsah z adresáøe src na svùj server
- Upravte hodnoty v souboru .env
- Otevøete pøíkazovou øádku v adresáøi se zkopírovanou aplikací
- Nainstalujte serverové závislosti pomocí pøíkazu `npm install`
- Nainstalujte klientské závislosti pomocí pøíkazu `bower install`
- Spuste aplikaci pomocí pøíkazu `node ./server.js` (pøípadnì `nodemon ./server.js`)
- Vaše instance je dostupná na adrese http://{serverIP}:{portZvolenıVsoubour.env}

**Aplikace nevyaduje ke svému bìhu pøipojení k veøejnému Internetu.** Zpøístupnìní aplikace do sítì proto doporuèujeme pøedem promyslet dle jejího zamıšleného vyuití.
- Napøíklad pro fyzická zasedání mùete aplikaci provozovat na lokální lan/wifi síti, intranetu, metropolitní síti.
- Pro úèastníky zasedání úèastnící se na dálku mùete aplikaci zpøístupnit pomocí VPN protokolu
- Pokud potøebujete, aby se pøípravy èi prùbìhu jednání úèastnila veøejnost (pøi zapnutém *veøejném módu*) nebo ji vyuívala vaše organizace v rùznıch obcích, doporuèujeme ji zabezpeèit alespoò pomocí reverzní proxy se zapnutou SSL (pøesmìrovat tedy veškerı pøíchozí datovı tok pøes šifrované spojení a vynucovat jej).
- Fantazii vašeho síového administrátora se meze nekladou a v pøípadì jednání, pøi kterém se i hlasuje, bude tøeba myslet na bezpeènost dat a uivatelù.

© 2019, Ondøej Kotas