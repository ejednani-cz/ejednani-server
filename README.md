*(The information below is in Czech language. For English please wait until the first stable release.)*

*Aplikace je st�le ve v�voji, specifikace, funkce, chov�n� atd. se mohou zm�nit. Pros�m, vy�kejte s instalac� do prvn�ho stabiln�ho vyd�n�, kter� bude v�as ozn�meno na webu https://ejednani.cz/*

# eJedn�n�
Elektronick� syst�m pro veden� jedn�n� organizac� a samospr�v

## Co to um�?
eJedn�n� je syst�m, kter� �e�� pr�b�h jedn�n� (bude dopl�ov�no dle naimplementovan�ch funkc�):
- ~~svol�n� jedn�n�~~
- ~~tvorby programu~~
- ~~veden� jedn�n�~~
- ~~jmenovit� hlasov�n� (pro tajn� hlasov�n� pros�m pou�ijte syst�m [Helios](https://heliosvoting.org/))~~
- ~~hl�en� ��astn�k� do rozpravy �i s technickou nebo faktickou pozn�mkou~~
- ~~hl�d�n� �asu na projedn�van� bod~~
- ~~ud�lov�n� slova a hl�dan� jeho �asu~~
- ~~fyzickou i vzd�lenou ��ast na jedn�n�ch (m��e vyu��vat mikrofon, reproduktor a kameru koncov�ch za��zen�, lze tak p�ipojit nap��klad audiotechniku a projektor/tv v jednac�m s�le)~~
- ~~tvorbu a ov��en� z�pisu~~
- ~~m�d tabule (pro projektor/tv)~~
- ~~ve�ejn� m�d (pro mo�nost ��asti ve�ejnosti, lze vy�adovat autentizaci pomoc� identity t�et�ch stran, nutno nakonfigurovat)~~
- webov� aplikace s responzivn�m designem - odpad� nutnost vlastnit specializovan� hlasovac� za��zen� (funguje v prohl�e�i v PC/tabletu/telefonu - pro p�edsedaj�c�ho siln� doporu�ujeme v�t�� tablet nebo PC s dotykovou obrazovkou, pro zapisovatele pak PC s kl�vesnic�)

## Licence
Aplikace je zat�m zve�ejn�na pod licenc� Non-Profit Open Software License 3.0. ��elem je, aby samospr�vy, p��sp�vkov� a neziskov� organizace �i jin� u�ivatel� nekomer�n� povahy mohli syst�m vyu��vat zdarma bez omezen�.

Pro komer�n� u�ivatele (firmy, kter� cht�j� nab�zet provoz aplikace, jej� podporu �i roz���en� k�du o dal�� funkcionalitu za ��elem prodeje) nab�z�me mo�nost individu�ln�ho smluvn�ho vztahu na pron�jem licence poskytuj�c� v�m takov� pr�va, jak� budete pot�ebovat pro va�i n�pl� podnik�n�.

Aplikace vznik� ve voln�m �ase [t�mu (aktu�ln� jen j�)](https://github.com/orgs/ejednani-cz/people) a nen� dotov�na ��dn�mi granty nebo sponzory. R�d bych proto aplikoval my�lenku uvedenou v��e, nejsp� proto vznikne speci�ln� licence pro tento ��el aplikovateln� v �esk�m pr�vu a Non-Profit OSL se opust�. Tzv stay tuned :)

## Instalace
### P�edpoklady:
- NodeJS
- npm (spr�vce bal��k�)
- bower (spr�vce bal��k� komponent)
- nodemon (nen� pot�eba, ale je doporu�eno)

### Postup:
- Zkop�rujte obsah z adres��e src na sv�j server
- Upravte hodnoty v souboru .env
- Otev�ete p��kazovou ��dku v adres��i se zkop�rovanou aplikac�
- Nainstalujte serverov� z�vislosti pomoc� p��kazu `npm install`
- Nainstalujte klientsk� z�vislosti pomoc� p��kazu `bower install`
- Spus�te aplikaci pomoc� p��kazu `node ./server.js` (p��padn� `nodemon ./server.js`)
- Va�e instance je dostupn� na adrese http://{serverIP}:{portZvolen�Vsoubour.env}

**Aplikace nevy�aduje ke sv�mu b�hu p�ipojen� k ve�ejn�mu Internetu.** Zp��stupn�n� aplikace do s�t� proto doporu�ujeme p�edem promyslet dle jej�ho zam��len�ho vyu�it�.
- Nap��klad pro fyzick� zased�n� m��ete aplikaci provozovat na lok�ln� lan/wifi s�ti, intranetu, metropolitn� s�ti.
- Pro ��astn�ky zased�n� ��astn�c� se na d�lku m��ete aplikaci zp��stupnit pomoc� VPN protokolu
- Pokud pot�ebujete, aby se p��pravy �i pr�b�hu jedn�n� ��astnila ve�ejnost (p�i zapnut�m *ve�ejn�m m�du*) nebo ji vyu��vala va�e organizace v r�zn�ch obc�ch, doporu�ujeme ji zabezpe�it alespo� pomoc� reverzn� proxy se zapnutou SSL (p�esm�rovat tedy ve�ker� p��choz� datov� tok p�es �ifrovan� spojen� a vynucovat jej).
- Fantazii va�eho s�ov�ho administr�tora se meze nekladou a v p��pad� jedn�n�, p�i kter�m se i hlasuje, bude t�eba myslet na bezpe�nost dat a u�ivatel�.

� 2019, Ond�ej Kotas