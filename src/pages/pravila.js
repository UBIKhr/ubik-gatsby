import * as React from "react";
import { graphql, useStaticQuery } from 'gatsby';
import Layout from "../components/layout.js"
import { Link } from "gatsby";
import Section from "../components/section.js";

const links = [
    {
        url: '/pravila/#1',
        text: 'Članak 1: UBIKourt'
    },
    {
        url: '/pravila/#2',
        text: 'Članak 2: Definicije'
    },
    {
        url: '/pravila/#3',
        text: 'Članak 3: Način komunikacije; Vremenska ograničenja'
    },
    {
        url: '/pravila/#4',
        text: 'Članak 4: Zahtjev za arbitražu'
    },
    {
        url: '/pravila/#5',
        text: 'Članak 5: Odgovor na zahtjev; Protutužba'
    },
    {
        url: '/pravila/#6',
        text: 'Članak 6: Učinak arbitražnog sporazuma'
    },
    {
        url: '/pravila/#7',
        text: 'Članak 7: Pridruživanje dodatnih stranaka'
    },
    {
        url: '/pravila/#8',
        text: 'Članak 8: Potraživanja između više stranaka'
    },
    {
        url: '/pravila/#9',
        text: 'Članak 9: Višestruki ugovori'
    },
    {
        url: '/pravila/#10',
        text: 'Članak 10: Objedinjavanje arbitraža'
    },
    {
        url: '/pravila/#11',
        text: 'Članak 11: Opće odredbe'
    },
    {
        url: '/pravila/#12',
        text: 'Članak 12: Formiranje arbitražnog suda, Broj arbitara'
    },
    {
        url: '/pravila/#13',
        text: 'Članak 13: Imenovanje i potvrđivanje arbitara'
    },
    {
        url: '/pravila/#14',
        text: 'Članak 14: Izuzeće arbitra'
    },
    {
        url: '/pravila/#15',
        text: 'Članak 15: Zamjena arbitara'
    },
    {
        url: '/pravila/#16',
        text: 'Članak 16: Prijenos spisa Arbitražnom sudu'
    },
    {
        url: '/pravila/#17',
        text: 'Članak 17: Zastupništvo stranke'
    },
    {
        url: '/pravila/#18',
        text: 'Članak 18: Mjesto arbitraže'
    },
    {
        url: '/pravila/#19',
        text: 'Članak 19: Pravila postupka'
    },
    {
        url: '/pravila/#20',
        text: 'Članak 20: Jezik arbitraže'
    },
    {
        url: '/pravila/#21',
        text: 'Članak 21: Primjenjivi pravni propisi'
    },
    {
        url: '/pravila/#22',
        text: 'Članak 22: Vođenje arbitraže'
    },
    {
        url: '/pravila/#23',
        text: 'Članak 23: Projektni zadatak'
    },
    {
        url: '/pravila/#24',
        text: 'Članak 24: Konferencija o upravljanju predmetima i proceduralni raspored'
    },
    {
        url: '/pravila/#25',
        text: 'Članak 25: Utvrđivanje činjenica slučaja'
    },
    {
        url: '/pravila/#26',
        text: 'Članak 26: Saslušanja'
    },
    {
        url: '/pravila/#27',
        text: 'Članak 27: Zatvaranje postupka i datum za podnošenje nacrta nagrada'
    },
    {
        url: '/pravila/#28',
        text: 'Članak 28: Konzervatorij i privremene mjere'
    },
    {
        url: '/pravila/#29',
        text: 'Članak 29: Ubrzani postupak'
    },
    {
        url: '/pravila/#30',
        text: 'ČČlanak 30: Vremensko ograničenje za konačnu nagradu'
    },
    {
        url: '/pravila/#31',
        text: 'Članak 31: Dodijeliti'
    },
    {
        url: '/pravila/#32',
        text: 'Članak 32: Dodjela uz suglasnost'
    },
    {
        url: '/pravila/#33',
        text: 'Članak 33: Sudsko ispitivanje pravorijeka'
    },
    {
        url: '/pravila/#34',
        text: 'Članak 34: Obavijest, polog i ovršnost pravorijeka'
    },
    {
        url: '/pravila/#35',
        text: 'Članak 35: Ispravak i tumačenje pravorijeka; Dodatna nagrada; Oprost od nagrada'
    },
    {
        url: '/pravila/#36',
        text: 'Članak 36: Odluka o troškovima arbitraže'
    },
    {
        url: '/pravila/#37',
        text: 'Članak 37: Izmijenjena vremenska ograničenja'
    },
    {
        url: '/pravila/#38',
        text: 'Članak 38: Ograničenje odgovornosti'
    },
    {
        url: '/pravila/#39',
        text: 'Članak 39: Opće pravilo'
    },
    {
        url: '/pravila/#40',
        text: 'Članak 40: Mjerodavno pravo i rješavanje sporova'
    },

]

const Pravila = () => {
    return (
        <Layout>
        <main className="text-white">
            <div className="px-4 lg:px-32 font-regular pt-24 lg:pt-40">
                <h1 className="text-left uppercase text-md2 lg:text-xl font-regular font-extralight mb-4">PRAVILA ARBITRAŽE</h1>
                <p className="text-tiny lg:text-sm text-left font-regular font-normal lg:w-2/3 pt-4 pb-6 ">Ova knjižica sadrži postupak rješavanja sporova koji nudi Arbitražni sud Udruge za blockchain i kriptovalute (UBIKourt). Arbitraža prema ovim Arbitražnim pravilima formalni je postupak koji vodi do obvezujuće odluke neutralnog arbitražnog suda, podložnoj izvršenju u skladu s domaćim zakonima o arbitraži i međunarodnim ugovorima.</p>
                <p className="text-tiny lg:text-sm text-left font-regular font-normal lg:w-2/3 pt-4 pb-6 ">Ova Pravila definiraju strukturirani okvir namijenjen osiguravanju transparentnosti, učinkovitosti i pravednosti u procesu rješavanja sporova, a istodobno dopuštaju strankama da izvrše svoj izbor u mnogim aspektima postupka. Arbitražom upravlja UBIKourt i to je jedino tijelo ovlašteno za upravljanje postupcima prema svojim odgovarajućim Pravilima.</p>
                <h1 className="text-left uppercase text-md lg:text-lg lg:text-left font-regular font-extralight mb-4 pt-10">SADRŽAJ</h1>
                <ul className="flex flex-col justify-between">
                    {links.map((link) => (
                        <li key={link.url}
                            className={`text-white active:text-orange2 pt-5 relative before:content-[''] before:absolute before:block before:w-full before:h-[2px] 
                            before:bottom-0 before:left-0 before:bg-orange2
                            before:hover:scale-x-100 before:scale-x-0 before:origin-top-left
                             before:transition before:ease-in-out before:duration-300`}>
                            <Link to={link.url}>
                                    {link.text}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
            <Section id={1} clanak={'ČLANAK 1'} naziv={'UBIKourt'}>
                <p className="text-tiny lg:text-sm text-left font-regular font-light pt-4">
                    1.1 UBIKourt (“ UBIKourt ” ili “Sud”) neovisno je tijelo za rješavanje sporova UBIK-a – Hrvatske udruge za blockchain i kriptovalute . Organizacija UBIKourt-a navedena je u Dodatku I. ("Statut").
                    </p>
                <p className="text-tiny lg:text-sm text-left font-regular font-light pt-4">
                    1.2 UBIKourt sam ne rješava sporove. Administrira rješavanje sporova od strane arbitražnih sudova, u skladu s Arbitražnim pravilima ("Pravila"). UBIKourt je jedino tijelo ovlašteno za vođenje arbitraža u skladu s Pravilima, uključujući provjeru i odobravanje pravorijeka donesenih u skladu s Pravilima. Izrađuje vlastita interna pravila koja su navedena u Dodatku I.
                    </p>
                <p className="text-tiny lg:text-sm text-left font-regular font-light pt-4">
                    1.3 Predsjednik Odbora („Predsjedatelj”) imat će ovlast donošenja hitnih odluka u ime Suda, pod uvjetom da se o svakoj takvoj odluci izvijesti Odbor na jednoj od njegovih sljedećih sjednica. Na zahtjev predsjednika, u njegovoj odsutnosti ili u drugim slučajevima kada predsjednik nije u mogućnosti djelovati, potpredsjednik ima istu ovlast.
                </p>
                <p className="text-tiny lg:text-sm text-left font-regular font-light pt-4">
                    1.4 Kao što je predviđeno Statutom, Odbor može delegirati jednom ili više odbora sastavljenih od svojih članova ovlast donošenja određenih odluka ili davanja mišljenja, pod uvjetom da se o svakoj takvoj odluci izvijesti Odbor na jednoj od njegovih sljedećih sjednica.
                </p>
                <p className="text-tiny lg:text-sm text-left font-regular font-light pt-4">
                    1.5 Sudu u radu pomaže Sudsko vijeće ("Odbor") pod vodstvom svog predsjednika ("Predsjedatelj"). Odboru u radu pomaže Tajništvo.
                </p>
            </Section>
            <Section id={2} clanak={'ČLANAK 2'} naziv={'Definicije'}>
                <p className="text-tiny lg:text-sm text-left font-regular font-light pt-4">
                    U Pravilima:
                </p>
                <p className="text-tiny lg:text-sm text-left font-regular font-light pt-4">
                    ( i ) "arbitražni sud" ili "sudište" uključuje jednog ili više arbitara;
                </p> 
                <p className="text-tiny lg:text-sm text-left font-regular font-light pt-4">
                    (ii) "tužitelj" uključuje jednog ili više tužitelja, "tuženik" uključuje jednog ili više tuženika, a "dodatna strana" uključuje jednu ili više dodatnih strana;
                </p> 
                <p className="text-tiny lg:text-sm text-left font-regular font-light pt-4">
                    (iii) "stranka" ili "stranke" uključuju tužitelje, tužene ili dodatne stranke;
                </p> 
                <p className="text-tiny lg:text-sm text-left font-regular font-light pt-4">
                    (iv) "potraživanje" ili "potraživanja" uključuje bilo koje potraživanje bilo koje strane protiv bilo koje druge strane;
                </p> 
                <p className="text-tiny lg:text-sm text-left font-regular font-light pt-4">
                    (v) "nagrada" uključuje, između ostalog, privremenu, djelomičnu, konačnu, dodatnu nagradu ili on-chain nagradu.
                </p>
                <p className="text-tiny lg:text-sm text-left font-regular font-light pt-4">
                    (vi) "on-chain pravorijek" znači svaku odluku koja se automatski izvršava pomoću blockchaina ili bilo koje slične tehnologije koja omogućuje automatsko izvršenje arbitražnih odluka
                </p>
            </Section>
            <Section id={3} clanak={'ČLANAK 3'} naziv={'Način komunikacije; Vremenska ograničenja'}>
                <p className="text-tiny lg:text-sm text-left font-regular font-light pt-4">
                3.1 Osim ako je drugačije navedeno u člancima 4.4.b i 5.3, svi podnesci i druga pisana komunikacija koju je podnijela bilo koja stranka, kao i svi dokumenti koji su im priloženi, bit će poslani svakoj stranci, svakom arbitru i Odboru. Također, svaka obavijest ili priopćenje arbitražnog suda strankama poslati će se u preslici Odboru.</p>
                <p className="text-tiny lg:text-sm text-left font-regular font-light pt-4">
                3.2 Sve obavijesti ili priopćenja Odbora i arbitražnog suda šalju se elektroničkim putem stranci ili njezinom predstavniku kojemu su namijenjene, kao što ih je obavijestila dotična stranka ili bilo koja druga stranka. Sud će komunicirati isključivo e-poštom ili drugim dogovorenim oblikom elektroničke komunikacije kada se predmet unese u online alat za upravljanje predmetima koji koristi Sud.
                    </p>
                <p className="text-tiny lg:text-sm text-left font-regular font-light pt-4">
                3.3 Obavijest ili priopćenje smatrat će se da je poslano na dan kada je elektronički poslano samoj stranci ili njezinom predstavniku.                </p>
                <p className="text-tiny lg:text-sm text-left font-regular font-light pt-4">
                3.4 Rokovi navedeni ili utvrđeni u Pravilima počinju teći dan nakon datuma za koji se smatra da je obavijest ili komunikacija poslana u skladu s člankom 3.3. Praznici, vikendi i drugi neradni dani ne utječu na rokove ili vremenska ograničenja.
                </p>
                <p className="text-tiny lg:text-sm text-left font-regular font-light pt-4">
                3.5. Svi podnesci Sudu, Tribunalu i drugoj stranci ili njezinim predstavnicima bit će poslani isključivo u PDF formatu, ovjereni skeniranim fizičkim potpisom ili kvalificiranim elektroničkim potpisom.                </p>
                <p className="text-tiny lg:text-sm text-left font-regular font-light pt-4">
                3.6. Svi dokumenti bit će poslani Sudu, Tribunalu ili drugoj stranci ili njezinim predstavnicima skenirani u PDF formatu. Svaka stranka će predočiti izvornik skeniranog dokumenta ako to zatraži Tribunal. Ako stranka ne udovolji takvom zahtjevu, Tribunal može slobodno odlučiti o vjerodostojnosti skeniranog dokumenta                </p>
            </Section>
            <Section id={4} clanak={'ČLANAK 4'} naziv={'Zahtjev za arbitražu'}>
    <p className="text-tiny lg:text-sm text-left font-regular font-light pt-4">
        4.1 Stranka koja se želi obratiti arbitraži u skladu s Pravilima podnijet će svoj Zahtjev za arbitražu ("Zahtjev") Sudu e-poštom na adresu e-pošte Odbora, navedenu u Statutu ili putem Internet platforme koju koristi Sud. Odbor će obavijestiti tužitelja i tuženika o primitku Zahtjeva i datumu takvog primitka.
    </p>
    <p className="text-tiny lg:text-sm text-left font-regular font-light pt-4">
        4.2 Datum na koji Odbor primi Zahtjev smatrat će se za sve svrhe datumom početka arbitraže.
    </p>
    <p className="text-tiny lg:text-sm text-left font-regular font-light pt-4">
        4.3 Zahtjev će sadržavati sljedeće podatke: <br></br>
        a) puno ime, opis, adresu i druge podatke za kontakt svake od stranaka; <br></br>
        b) puno ime, adresu i druge podatke za kontakt bilo koje osobe(a) koja predstavlja tužitelja u arbitraži; <br></br>
        c) opis prirode i okolnosti spora koji je doveo do Zahtjeva i osnove na kojoj su zahtjevi postavljeni; <br></br>
        d) izjavu o odštetnom zahtjevu, zajedno s iznosima svih kvantificiranih potraživanja i u mjeri u kojoj je to moguće, procjenu novčane vrijednosti svih drugih potraživanja; <br></br>
        e) sve relevantne sporazume i posebno, arbitražni sporazum(e) u bilo kojem obliku;<br></br>
        f) ako su zahtjevi postavljeni prema više od jednog arbitražnog sporazuma, naznaka arbitražnog sporazuma prema kojem je svaki zahtjev podnesen;<br></br>
        g) sve relevantne pojedinosti i sve primjedbe ili prijedloge koji se tiču broja arbitara i njihovog izbora u skladu s odredbama članaka 12. i 13., te bilo kakvo imenovanje arbitara koje se time zahtijeva; i <br></br>
        h) sve relevantne pojedinosti i sve primjedbe ili prijedloge u vezi s mjestom arbitraže, važećim zakonskim pravilima i jezikom arbitraže. <br></br>
        Tužitelj uz Zahtjev može dostaviti i druge dokumente ili podatke koje smatra prikladnima ili koji mogu doprinijeti učinkovitom rješavanju spora.
    </p>
    <p className="text-tiny lg:text-sm text-left font-regular font-light pt-4">
        4.4 Zajedno sa Zahtjevom, tužitelj će platiti pristojbu za podnošenje Zahtjeva prema Dodatku II (“Arbitražni troškovi i naknade”) koji je na snazi na dan podnošenja Zahtjeva; i ako je primjenjivo prema ovim Pravilima i njegovim dodacima, kreirati novčanik s više potpisa ili poslati njegovu adresu i položiti troškove arbitraže i naknade na taj novčanik. U slučaju da tužitelj ne ispuni ovaj zahtjev, Odbor može odrediti vremensko ograničenje unutar kojeg tužitelj mora ispuniti zahtjeve, a u suprotnom će se spis zatvoriti ne dovodeći u pitanje pravo tužitelja da podnese iste zahtjeve kasnije u drugom Zahtjevu.
    </p>
</Section>
<Section id={5} clanak={'ČLANAK 5'} naziv={'Odgovor na zahtjev; Protutužba'}>
    <p className="text-tiny lg:text-sm text-left font-regular font-light pt-4">
        5.1 U roku od 30 dana od primitka Zahtjeva od strane Odbora, tuženik treba dostaviti Odgovor ("Odgovor") koji će sadržavati sljedeće podatke:<br></br>
        a) puni naziv, opis, adresu i druge podatke za kontakt;<br></br>
        b) puno ime, adresu i druge podatke za kontakt bilo koje osobe(a) koja predstavlja tuženika u arbitraži;<br></br>
        c) svoje komentare u vezi s prirodom i okolnostima spora koji je doveo do zahtjeva i osnovu na kojoj su zahtjevi postavljeni;<br></br>
        d) odgovor i/ili protutužbu;<br></br>
        e) sve primjedbe ili prijedloge koji se tiču broja arbitara i njihovog izbora u svjetlu tužiteljevih prijedloga i u skladu s odredbama članaka 12. i 13., te bilo kakvo imenovanje arbitara koje se time zahtijeva; i<br></br>
        f) sve primjedbe ili prijedlozi u vezi s mjestom arbitraže, primjenjivim zakonskim pravilima i jezikom arbitraže.<br></br>
        Tuženik može uz Odgovor podnijeti druge dokumente ili informacije koje smatra primjerenim ili koji mogu doprinijeti učinkovitom rješavanju spora.
    </p>
    <p className="text-tiny lg:text-sm text-left font-regular font-light pt-4">
        5.2 Odbor može odobriti tuženiku produženje roka za podnošenje odgovora na tužbu, pod uvjetom da zahtjev za takvo produženje sadrži primjedbe ili prijedloge tuženika koji se odnose na broj arbitara i njihov izbor te, ako to zahtijevaju članci 12. i 13., imenovanje od arbitra. Ako tuženik to ne učini, Sud će postupiti u skladu s Pravilnikom.
    </p>
    <p className="text-tiny lg:text-sm text-left font-regular font-light pt-4">
        5.3 Odbor će dostaviti odgovor na tužbu i priložene dokumente svim ostalim strankama.
    </p>
    <p className="text-tiny lg:text-sm text-left font-regular font-light pt-4">
        5.4 Sve protutužbe koje podnese tuženik dostavljaju se uz odgovor i sadrže:<br></br>
        a) opis prirode i okolnosti spora koji je doveo do protutužbi i osnove na kojoj se podnose protutužbe;<br></br>
        b) izjavu o traženom zajedno s iznosima svih kvantificiranih protutužbi i, u mjeri u kojoj je to moguće, procjenu novčane vrijednosti svih drugih protutužbi;<br></br>
        c) sve relevantne sporazume, a posebno sporazum(e) o arbitraži; i<br></br>
        d) ako se podnose protutužbe na temelju više od jednog arbitražnog sporazuma, potrebna je naznaka arbitražnog sporazuma prema kojem je podnesena svaka protutužba.<br></br>
        Tuženik može uz protutužbe podnijeti druge dokumente ili podatke koje smatra prikladnima ili koji mogu pridonijeti učinkovitom rješavanju spora.
    </p>
    <p className="text-tiny lg:text-sm text-left font-regular font-light pt-4">
        5.5 Tužitelj će podnijeti odgovor na bilo koju protutužbu u roku od 30 dana od primitka protutužbe koju je priopćio Odbor. Prije prosljeđivanja spisa arbitražnom sudu, Odbor može tužitelju odobriti produženje roka za podnošenje odgovora.
    </p>
</Section>

<Section id={6} clanak={'ČLANAK 6'} naziv={'Učinak arbitražnog sporazuma'}>
    <p className="text-tiny lg:text-sm text-left font-regular font-light pt-4">
        6.1 Ako su se stranke sporazumjele podvrgnuti arbitraži prema Pravilima, smatrat će se da su se ipso facto podvrgle Pravilima koja su na snazi na dan početka arbitraže.
    </p>
    <p className="text-tiny lg:text-sm text-left font-regular font-light pt-4">
        6.2 Pristajući na arbitražu prema Pravilima, stranke su prihvatile da će arbitražu voditi sud.
    </p>
    <p className="text-tiny lg:text-sm text-left font-regular font-light pt-4">
        6.3 Ako bilo koja stranka protiv koje je podnesena tužba ne podnese odgovor na tužbu, ili ako bilo koja stranka postavi jedan ili više prigovora koji se tiču postojanja, valjanosti ili opsega arbitražnog sporazuma ili može li o svim zahtjevima iznesenim u arbitraži biti odlučeno zajedno u jednoj arbitraži, arbitraža će se nastaviti i o svakom pitanju nadležnosti ili pitanja o tome mogu li se o zahtjevima odlučivati zajedno u toj arbitraži odlučit će izravno arbitražni sud, osim ako glavni tajnik ne uputi predmet Odboru na donošenje odluke sukladno članku 6.4.
    </p>
    <p className="text-tiny lg:text-sm text-left font-regular font-light pt-4">
        6.4 U svim predmetima upućenim sudu prema članku 6.3, Sud će odlučiti hoće li se i u kojoj mjeri nastaviti arbitraža. Arbitraža će se nastaviti ako i u mjeri u kojoj je Sud prima facie uvjeren da sporazum o arbitraži prema Pravilima može postojati. Posebno:<br></br>
        (i) kada postoji više od dvije stranke u arbitraži, arbitraža će se odvijati između stranaka, uključujući sve dodatne stranke spojene u skladu s člankom 7.1, u pogledu kojih je Sud prima facie uvjeren da arbitražni sporazum prema Pravilima koji ih obvezuju može postojati; i <br></br>
        (ii) kada su zahtjevi u skladu s člankom 9. postavljeni prema više od jednog arbitražnog sporazuma, arbitraža će postupiti prema onim zahtjevima u pogledu kojih je Sud prima facie zadovoljan (a) da arbitražni sporazumi na temelju kojih su ti zahtjevi postavljeni mogu biti kompatibilni; i (b) da su se sve stranke u arbitraži složile da se ti zahtjevi mogu rješavati zajedno u jednoj arbitraži.<br></br>
        Odluka Suda u skladu s člankom 6.4 ne dovodi u pitanje dopuštenost ili osnovanost prigovora bilo koje stranke.
    </p>
    <p className="text-tiny lg:text-sm text-left font-regular font-light pt-4">
        6.5 U svim stvarima o kojima odlučuje Sud prema članku 6.4, svaku odluku o nadležnosti arbitražnog suda donositi će arbitražni sud osim u slučajevima u kojima Sud utvrdi da arbitražu nije moguće nastaviti.
    </p>
    <p className="text-tiny lg:text-sm text-left font-regular font-light pt-4">
        6.6 Kada su stranke obaviještene o odluci Suda u skladu s člankom 6.4 da se arbitraža ne može nastaviti u odnosu na neke ili sve njih, svaka stranka zadržava pravo pitati bilo koji nadležan sud hoće li ili ne, i u odnosu na koje od njih, postoji obvezujući arbitražni sporazum.
    </p>
    <p className="text-tiny lg:text-sm text-left font-regular font-light pt-4">
        6.7 Ako je Sud odlučio u skladu s člankom 6.4 da se arbitraža ne može nastaviti u odnosu na bilo koji od zahtjeva, takva odluka ne sprječava stranku da ponovno podnese isti zahtjev u drugom postupku.
    </p>
    <p className="text-tiny lg:text-sm text-left font-regular font-light pt-4">
        6.8 Ako bilo koja stranka odbije ili ne uspije sudjelovati u arbitraži ili bilo kojoj njezinoj fazi, arbitraža će se nastaviti bez obzira na takvo odbijanje ili neuspjeh.
    </p>
    <p className="text-tiny lg:text-sm text-left font-regular font-light pt-4">
        6.9 Osim ako nije drugačije dogovoreno, odluka arbitražnog suda o postojanju ili valjanosti ugovora, sama po sebi ne znači da arbitražna klauzula nije valjana. Arbitražni sud će i dalje biti nadležan za utvrđivanje prava stranaka i odlučivanje o njihovim zahtjevima i prigovorima neovisno o odluci o valjanosti ili ništetnosti ugovora.
    </p>
</Section>
<Section id={7} clanak={'ČLANAK 7'} naziv={'Pridruživanje dodatnih stranaka'}>
    <p className="text-tiny lg:text-sm text-left font-regular font-light pt-4">
        7.1 Stranka koja se želi pridružiti dodatnoj stranci u arbitraži podnijet će svoj zahtjev za arbitražu protiv dodatne stranke ("Zahtjev za pridruživanje") Odboru. Datum na koji Odbor primi Zahtjev za spajanje smatrat će se, za sve svrhe, datumom početka arbitraže protiv dodatne stranke. Svako takvo spajanje podliježe odredbama članaka 6.3 – 6.7 i 9. Osim ako se sve stranke, uključujući dodatnu stranku, drugačije ne dogovore ili kako je predviđeno u članku 7.5, nijedna dodatna stranka ne može se pridružiti nakon potvrde ili imenovanja bilo kojeg arbitra. Odbor može odrediti vremenski rok za podnošenje Zahtjeva za pridruživanje.
    </p>
    <p className="text-tiny lg:text-sm text-left font-regular font-light pt-4">
        7.2 Zahtjev za pridruživanje sadržavat će sljedeće podatke:<br />
        a) naznaku predmeta postojeće arbitraže;<br />
        b) puno ime, opis, adresu i druge podatke za kontakt svake od stranaka, uključujući dodatnu stranku; i<br />
        c) podatke navedene u članku 4.3, podstavcima c), d), e) i f).<br />
        Stranka koja podnosi Zahtjev za spajanje može uz njega podnijeti druge dokumente ili podatke koje smatra prikladnima ili koji mogu doprinijeti učinkovitom rješavanju spora.
    </p>
    <p className="text-tiny lg:text-sm text-left font-regular font-light pt-4">
        7.3 Odredbe članaka 4.4 i 4.5 primjenjuju se, mutatis mutandis, na Zahtjev za spajanje.
    </p>
    <p className="text-tiny lg:text-sm text-left font-regular font-light pt-4">
        7.4 Dodatna stranka dostavlja odgovor u skladu, mutatis mutandis, s odredbama članaka 5.1–5.4. Dodatna stranka može podnijeti zahtjeve protiv bilo koje druge stranke u skladu s odredbama članka 8.
    </p>
    <p className="text-tiny lg:text-sm text-left font-regular font-light pt-4">
        7.5 O svakom Zahtjevu za pridruživanje podnesenom nakon potvrde ili imenovanja bilo kojeg arbitra odlučit će arbitražni sud nakon što je konstituiran i podložan je prihvaćanju dodatne stranke osnivanja arbitražnog suda i pristanku na Uvjete rada, gdje je to primjenjivo. Pri odlučivanju o takvom zahtjevu za pridruživanje, arbitražni sud će uzeti u obzir sve relevantne okolnosti, koje mogu uključivati ima li arbitražni sud prima facie nadležnost nad dodatnom strankom, vrijeme podnošenja zahtjeva za pridruživanje, moguće sukobe interesa i utjecaj spajanja na arbitražni postupak. Bilo koja odluka o pridruživanju dodatnoj stranci ne dovodi u pitanje odluku arbitražnog suda o njegovoj nadležnosti u odnosu na tu stranku.
</p>
</Section>
<Section id={8} clanak={'ČLANAK 8'} naziv={'Potraživanja između više stranaka'}>
    <p className="text-tiny lg:text-sm text-left font-regular font-light pt-4">
        8.1 U arbitraži s više stranaka, bilo koja stranka može podnijeti zahtjeve protiv bilo koje druge stranke, u skladu s odredbama članaka 6.3–6.7 i 9 i pod uvjetom da se ne smiju postavljati novi zahtjevi nakon što Projektni zadatak potpiše ili odobri sud bez ovlaštenja arbitražnog suda u skladu s člankom 23.4.
    </p>
    <p className="text-tiny lg:text-sm text-left font-regular font-light pt-4">
        8.2 Svaka stranka koja podnosi zahtjev u skladu s člankom 8.1 dužna je dostaviti informacije navedene u članku 4.3, podstavcima c), d), e) i f).
    </p>
    <p className="text-tiny lg:text-sm text-left font-regular font-light pt-4">
        8.3 Prije nego što Odbor proslijedi spis arbitražnom sudu u skladu s člankom 16., sljedeće odredbe primjenjivat će se, mutatis mutandis, na bilo koji zahtjev: članak 4.4 podstavak b); članak 4.5; Članak 5.1 osim podstavaka a), b), e) i f); članak 5.2; Članak 5.3 i članak 5.4. Nakon toga će arbitražni sud odrediti postupak podnošenja zahtjeva.
    </p>
</Section>
<Section id={9} clanak={'ČLANAK 9'}>
    <p className="text-tiny lg:text-sm text-left font-regular font-light pt-4">
        Podložno odredbama članaka 6.3–6.7 i 23.4, zahtjevi koji proizlaze iz ili u vezi s više od jednog ugovora mogu se podnijeti u jednoj arbitraži, bez obzira na to jesu li takvi zahtjevi postavljeni prema jednom ili više od jednog arbitražnog sporazuma prema Pravilima.
    </p>
</Section>

<Section id={10} clanak={'ČLANAK 10'}>
    <p className="text-tiny lg:text-sm text-left font-regular font-light pt-4">
        10.1 Sud može, na zahtjev stranke, objediniti dvije ili više arbitraža koje su u tijeku prema Pravilima u jednu arbitražu, kada:
        <br />
        a) stranke su se dogovorile o objedinjenju; ili
        <br />
        b) svi zahtjevi u arbitraži su podneseni prema istom arbitražnom sporazumu ili sporazumima; ili
        <br />
        c) zahtjevi u arbitraži nisu postavljeni temeljem istog arbitražnog sporazuma ili sporazuma, već se arbitraže vode između istih stranaka, sporovi u arbitraži nastaju u vezi s istim pravnim odnosom, a sud smatra da su arbitražni sporazumi kompatibilan.
        <br />
        Pri odlučivanju hoće li doći do objedinjenja, Sud može uzeti u obzir sve okolnosti koje smatra relevantnima, uključujući jesu li jedan ili više arbitara potvrđeni ili imenovani u više od jedne arbitraže i, ako je tako, jesu li iste ili različite osobe potvrđen ili imenovan.
    </p>
    <p className="text-tiny lg:text-sm text-left font-regular font-light pt-4">
        10.2 Kada se arbitraže objedinjuju, bit će objedinjene u arbitražu koja je prva započela, osim ako se sve stranke drugačije ne dogovore.
    </p>
</Section>

<Section id={11} clanak={'ČLANAK 11'}>
    <p className="text-tiny lg:text-sm text-left font-regular font-light pt-4">
        11.1 Svaki arbitar mora biti i ostat će nepristran i neovisan o strankama uključenim u arbitražu.
    </p>
    <p className="text-tiny lg:text-sm text-left font-regular font-light pt-4">
        11.2 Prije imenovanja ili potvrde, potencijalni arbitar će potpisati izjavu o prihvaćanju, dostupnosti, nepristranosti i neovisnosti. Potencijalni arbitar dužan je Odboru u pisanom obliku otkriti sve činjenice ili okolnosti koje bi mogle dovesti u pitanje neovisnost arbitra, kao i sve okolnosti koje bi mogle dovesti do opravdane sumnje u nepristranost arbitra. Odbor će dostaviti takve informacije strankama u pisanom obliku i odrediti vremenski rok za očitovanje.
    </p>
    <p className="text-tiny lg:text-sm text-left font-regular font-light pt-4">
        11.3 Arbitar treba odmah, u pisanom obliku obavijestiti Odbor i stranke o svim činjenicama ili okolnostima slične prirode onima navedenima u članku 11.2 u vezi s nepristranošću ili neovisnošću arbitra koje se mogu pojaviti tijekom arbitražnog postupka.
    </p>
    <p className="text-tiny lg:text-sm text-left font-regular font-light pt-4">
        11.4 Odluke Odbora o imenovanju, potvrdi, izuzeću ili zamjeni arbitra bit će konačne.
    </p>
    <p className="text-tiny lg:text-sm text-left font-regular font-light pt-4">
        11.5 Prihvaćanjem sudjelovanja, arbitri se obvezuju izvršavati svoje obveze u skladu s Pravilima.
    </p>
    <p className="text-tiny lg:text-sm text-left font-regular font-light pt-4">
        11.6 Arbitražni sud će biti konstituiran u skladu s odredbama članaka 12. i 13.
    </p>
    <p className="text-tiny lg:text-sm text-left font-regular font-light pt-4">
        11.7 Kako bi se budućim arbitrima i trenutnim arbitrima pomoglo u ispunjavanju njihovih dužnosti prema Člancima 11.2 i 11.3, svaka stranka mora odmah obavijestiti Odbor, Sud i druge stranke o postojanju i identitetu bilo koje osobe koja je ušla u aranžman za financiranje tužbi ili obrana i prema kojem ima ekonomski interes u ishodu arbitraže.
    </p>
</Section>
<Section id={12} clanak={'ČLANAK 12'}>
    <p className="text-tiny lg:text-sm text-left font-regular font-light pt-4">
        12.1 Arbitražne sporove rješavat će arbitar pojedinac ili arbitražno vijeće od tri arbitra.
    </p>
    <p className="text-tiny lg:text-sm text-left font-regular font-light pt-4">
        12.2 Ako se stranke nisu dogovorile o broju arbitara, spor će rješavati arbitražno vijeće od tri arbitra. U tom slučaju tužitelj će imenovati arbitra u roku od 15 dana od primitka obavijesti o odluci Odbora, a tuženik će imenovati arbitra u roku od 15 dana od primitka obavijesti o imenovanju arbitra od strane tužitelja. Ako stranka ne imenuje arbitra, imenovanje će izvršiti Odbor.
    </p>
    <p className="text-tiny lg:text-sm text-left font-regular font-light pt-4">
        12.3 Ako su se stranke dogovorile da će spor rješavati arbitar pojedinac, mogu sporazumno imenovati arbitra pojedinca za potvrdu. Ako stranke ne imenuju arbitra pojedinca u roku od 30 dana od datuma kada je druga stranka ili stranke primila Zahtjev tužitelja za arbitražu, ili u dodatnom roku koji može odobriti Odbor, Odbor će imenovati arbitra pojedinca.
    </p>
    <p className="text-tiny lg:text-sm text-left font-regular font-light pt-4">
        12.4 Ako su se stranke dogovorile da će spor rješavati arbitražno vijeće od tri arbitra, svaka će stranka u tužbi i odgovoru na tužbu imenovati jednog arbitra. Ako stranka ne imenuje arbitra, imenovanje će izvršiti Odbor.
    </p>
    <p className="text-tiny lg:text-sm text-left font-regular font-light pt-4">
        12.5 Ako se spor treba iznijeti pred arbitražno vijeće od tri suca, trećeg arbitra, koji će djelovati kao predsjednik arbitražnog suda, imenuju arbitri koje su imenovale stranke i koje imenovanje je potvrdio Odbor. Ako takav postupak ne rezultira imenovanjem u roku od 30 dana od potvrde ili imenovanja suarbitara ili bilo kojeg drugog vremenskog roka koji su dogovorile stranke ili utvrdio Odbor, trećeg arbitra će imenovati Odbor.
    </p>
    <p className="text-tiny lg:text-sm text-left font-regular font-light pt-4">
        12.6 Ako u jednom sporu sudjeluje više tužitelja ili više tuženih kao suparničari, a spor treba uputiti trima arbitrima, više tužitelja odnosno više tuženih zajedno trebaju se sporazumjeti o imenovanju zajedničkog arbitra u skladu s člankom 13.
    </p>
    <p className="text-tiny lg:text-sm text-left font-regular font-light pt-4">
        12.7 Ako se pridruži dodatna stranka i ako se spor treba uputiti trima arbitrima, dodatna stranka može, zajedno s tužiteljem(ima) ili s tuženikom(ima), imenovati arbitra za potvrdu u skladu s člankom 13. i sukladno članku 7.5.
    </p>
    <p className="text-tiny lg:text-sm text-left font-regular font-light pt-4">
        12.8 U nedostatku zajedničkog imenovanja u skladu s člancima 12.6 ili 12.7 i kada se sve stranke ne mogu složiti oko metode osnivanja arbitražnog suda, Odbor može imenovati sve članove arbitražnog vijeća te imenovati jednog od njih kao predsjednik vijeća. U takvim slučajevima, Odbor će imati slobodu izabrati bilo koju osobu koju smatra prikladnom da djeluje kao arbitar, primjenjujući članak 13. kada to smatra prikladnim.
    </p>
    <p className="text-tiny lg:text-sm text-left font-regular font-light pt-4">
        12.9 Bez obzira na bilo kakav dogovor stranaka o metodi osnivanja arbitražnog suda, u iznimnim okolnostima Odbor može imenovati svakog člana arbitražnog suda kako bi se izbjegao značajan rizik od nejednakog tretmana i nepoštenosti koji mogu utjecati na valjanost pravorijeka.
    </p>
    <p className="text-tiny lg:text-sm text-left font-regular font-light pt-4">
        12.10 U svakom slučaju, svaki arbitar koji sudjeluje u arbitražnom postupku mora biti naveden na UBIKourt listi arbitara u trenutku potvrde njihovog imenovanja. Ako imenovani arbitar nije na UBIKourt listi arbitara u trenutku njihova imenovanja, tužba ili odgovor na tužbu koji sadrži takvo imenovanje također mora sadržavati zahtjev tog arbitra da bude dodan na UBIKourt listu arbitara. Odbor će o zahtjevu arbitra odlučiti u roku od 5 dana od primitka zahtjeva, a u svakom slučaju prije potvrde arbitra.
    </p>
    <p className="text-tiny lg:text-sm text-left font-regular font-light pt-4">
        Ako tužba ili odgovor na tužbu ne sadrži takav zahtjev ili ako je zahtjev odbijen od strane Odbora, Odbor će obavijestiti stranku da imenuje drugog arbitra u roku od dodatnih 5 dana. Ako stranka ne postupi u skladu s obavijesti ili ako zahtjev arbitra ponovno bude odbijen, Odbor će imenovati arbitra za tu stranku.
    </p>
    <p className="text-tiny lg:text-sm text-left font-regular font-light pt-4">
        12.11 Ako treći arbitar nije na UBIKourt listi u trenutku njihova imenovanja, njihovo imenovanje također mora sadržavati zahtjev tog arbitra da bude dodan na UBIKourt listu arbitara.
    </p>
</Section>
<Section id={13} clanak={'ČLANAK 13'}>
    <p className="text-tiny lg:text-sm text-left font-regular font-light pt-4">
        13.1 Prilikom potvrđivanja ili imenovanja arbitara, Odbor će razmotriti dostupnost, nepristranost i sposobnost budućeg arbitra da vodi arbitražu u skladu s Pravilima. Odbor će razmotriti područje stručnosti arbitra tako da pokrije svako područje stručnosti potrebno za donošenje odluke o predmetu spora. Isto se primjenjuje kada Odbor potvrdi arbitre u skladu s člankom 13.2.
    </p>
    <p className="text-tiny lg:text-sm text-left font-regular font-light pt-4">
        13.2 Odbor može potvrditi kao arbitre, arbitre pojedince i predsjednike arbitražnih sudova osobe koje su imenovale stranke ili u skladu s njihovim posebnim sporazumima, pod uvjetom da izjava koju su podnijeli ne sadrži nikakvu kvalifikaciju u pogledu nepristranosti ili neovisnosti ili da je kvalificirana izjava u vezi s nepristranošću ili neovisnost nije bilo prigovora. O takvoj potvrdi izvijestit će se Odboru na jednoj od njegovih sljedećih sjednica. Ako predsjedatelj smatra da suarbitar, arbitar pojedinac ili predsjednik arbitražnog suda ne treba potvrditi, predmet se podnosi Odboru.
    </p>
    <p className="text-tiny lg:text-sm text-left font-regular font-light pt-4">
        13.3 Kada imenovani arbitar nije na UBIKourt listi arbitara u trenutku njihova imenovanja, a tužba ili odgovor na tužbu sadrži zahtjev imenovanog arbitra da se doda na UBIKourt listu arbitara, Odbor će o zahtjevu arbitra odlučiti u skraćenom postupku. Odbor će samostalno odlučiti o zahtjevu arbitra ne dovodeći u pitanje kasniju potvrdu arbitra.
    </p>
</Section>

<Section id={14} clanak={'ČLANAK 14'}>
    <p className="text-tiny lg:text-sm text-left font-regular font-light pt-4">
        14.1 Ako postoje okolnosti koje dovode u sumnju nepristranost ili neovisnost arbitra, potrebno je podnijeti Odboru pisanu izjavu u kojoj se navode činjenice i okolnosti na kojima se temelji izuzeće.
    </p>
    <p className="text-tiny lg:text-sm text-left font-regular font-light pt-4">
        14.2 Da bi izuzeće bilo dopušteno, stranka ga mora podnijeti u roku od 30 dana od primitka obavijesti o imenovanju ili potvrdi arbitra, ili u roku od 30 dana od dana saznanja o činjenicama ili okolnostima na kojima se temelji izuzeće ako je takav dan uslijedio nakon primitka obavijesti.
    </p>
    <p className="text-tiny lg:text-sm text-left font-regular font-light pt-4">
        14.3 Odbor će odlučiti o dopuštenosti i u isto vrijeme, ako je potrebno, o osnovanosti prigovora nakon što je Odbor dao priliku dotičnom arbitru, drugoj stranci ili strankama i svim drugim članovima arbitražnog suda da se u odgovarajućem vremenskom roku očituju u pisanom obliku komentirati u pisanom obliku u odgovarajućem vremenskom roku. Takvi se komentari dostavljaju strankama i arbitrima.
    </p>
</Section>

<Section id={15} clanak={'ČLANAK 15'}>
    <p className="text-tiny lg:text-sm text-left font-regular font-light pt-4">
        15.1 Arbitar će biti zamijenjen u slučaju smrti, nakon prihvaćanja ostavke arbitra od strane Suda, nakon prihvaćanja prigovora od strane Odbora ili nakon prihvaćanja zajedničkog zahtjeva svih stranaka od strane Suda.
    </p>
    <p className="text-tiny lg:text-sm text-left font-regular font-light pt-4">
        15.2 Arbitar će također biti zamijenjen na vlastitu inicijativu Odbora kada odluči da je arbitar de jure ili de facto spriječen ispunjavati svoje funkcije ili da arbitar ne ispunjava funkcije u skladu s Pravilima ili u propisanim rokovima.
    </p>
    <p className="text-tiny lg:text-sm text-left font-regular font-light pt-4">
        15.3 Kada, na temelju informacija koje su mu došle do znanja, Odbor razmatra primjenu članka 15.2, o predmetu će odlučiti nakon što su dotični arbitar, stranke i svi drugi članovi arbitražnog suda imali priliku komentirati pisanje u odgovarajućem roku. Takvi se komentari dostavljaju strankama i arbitrima.
    </p>
    <p className="text-tiny lg:text-sm text-left font-regular font-light pt-4">
        15.4 Kada arbitar treba biti zamijenjen, Odbor ima diskrecijsko pravo odlučiti hoće li slijediti izvorni postupak imenovanja. Nakon ponovnog sastavljanja i nakon što je pozvao stranke da daju primjedbe, arbitražni sud će odlučiti hoće li se i u kojoj će se mjeri prethodni postupci ponoviti pred obnovljenim arbitražnim sudom.
    </p>
    <p className="text-tiny lg:text-sm text-left font-regular font-light pt-4">
        15.5 Nakon zatvaranja postupka, umjesto zamjene arbitra koji je umro ili ga je Odbor smijenio, Odbor može odlučiti da će preostali arbitri nastaviti arbitražu. Pri donošenju takve odluke, Sud će uzeti u obzir stajališta preostalih arbitara i stranaka te druga pitanja koja smatra prikladnima u danim okolnostima.
    </p>
</Section>
<Section id={16} clanak={'ČLANAK 16'}>
    <p className="text-tiny lg:text-sm text-left font-regular font-light pt-4">
        Odbor će proslijediti spis arbitražnom sudu čim bude konstituiran, pod uvjetom da su plaćeni predujam za troškove i svi drugi novčani preduvjeti koje je Odbor zatražio u ovoj fazi.
    </p>
</Section>

<Section id={17} clanak={'ČLANAK 17'}>
    <p className="text-tiny lg:text-sm text-left font-regular font-light pt-4">
        17.1 Svaka stranka mora odmah obavijestiti Odbor, arbitražni sud i druge stranke o svim promjenama u svom zastupanju.
    </p>
    <p className="text-tiny lg:text-sm text-left font-regular font-light pt-4">
        17.2 Arbitražni sud može, nakon što je konstituiran i nakon što je strankama dana prilika na pisana očitovanja unutar odgovarajućeg vremenskog razdoblja, poduzeti sve potrebne mjere za izbjegavanje sukoba interesa između arbitra koji proizlazi iz promjene u zastupanju stranaka, uključujući isključenje novih zastupnika stranaka iz potpunog ili djelomičnog sudjelovanja u arbitražnom postupku.
    </p>
    <p className="text-tiny lg:text-sm text-left font-regular font-light pt-4">
        17.3 U bilo kojem trenutku nakon početka arbitraže, arbitražni sud ili Odbor mogu zahtijevati dokaz o ovlasti predstavnika bilo koje stranke.
    </p>
    <p className="text-tiny lg:text-sm text-left font-regular font-light pt-4">
        17.4. Ako bi stranka, prema primjenjivim zakonskim pravilima, bila organizacija kojom u cijelosti ili djelomično upravlja decentralizirani softver (DAO) i za koju se ne bi smatralo da ima pravni status da djeluje kao stranka u arbitražnom postupku, ta će organizacija imenovati opunomoćenika sa pravnim statusom da djeluje kao predstavnik stranke koji će djelovati u interesu organizacije i koji može u određenim slučajevima biti odgovoran za troškove i nagrade druge stranke. Takva organizacija mora pružiti dokaz o imenovanju takve osobe i izjavu te osobe o prihvaćanju ovog zastupanja.
    </p>
</Section>

<Section id={18} clanak={'ČLANAK 18'}>
    <p className="text-tiny lg:text-sm text-left font-regular font-light pt-4">
        18.1 Mjesto arbitraže odredit će Odbor, ukoliko ne postoji sporazum stranaka.
    </p>
    <p className="text-tiny lg:text-sm text-left font-regular font-light pt-4">
        18.2 Arbitražni sud može održavati saslušanja i sastanke na bilo kojem mjestu koje smatra prikladnim ili udaljeno (pomoću sredstava video-komunikacije), osim ako se stranke drugačije ne dogovore.
    </p>
    <p className="text-tiny lg:text-sm text-left font-regular font-light pt-4">
        18.3 Arbitražni sud može raspravljati na bilo kojem mjestu koje smatra prikladnim.
    </p>
</Section>

<Section id={19} clanak={'ČLANAK 19'}>
    <p className="text-tiny lg:text-sm text-left font-regular font-light pt-4">
        Postupci pred arbitražnim sudom bit će uređeni Pravilima i ako Pravila ne sadrže, bilo kojim pravilima o kojima se stranke dogovorile ili, ako to ne uspiju, koja je Sud odredio, bez obzira upućuje li se pritom na pravila nacionalnog prava koje će se primijeniti na arbitražu.
    </p>
</Section>
<Section id={20} clanak={'ČLANAK 20'}>
    <p className="text-tiny lg:text-sm text-left font-regular font-light pt-4">
        20.1 U nedostatku sporazuma stranaka, arbitražni sud odredit će jezik ili jezike arbitraže, uzimajući u obzir sve relevantne okolnosti, uključujući jezik ugovora.
    </p>
</Section>

<Section id={21} clanak={'ČLANAK 21'}>
    <p className="text-tiny lg:text-sm text-left font-regular font-light pt-4">
        21.1 Stranke će se slobodno dogovoriti o pravnim pravilima koja će arbitražni sud primijeniti na meritum spora. U nedostatku bilo kakvog takvog sporazuma, arbitražni sud će primijeniti pravna pravila koja smatra prikladnima.
    </p>
    <p className="text-tiny lg:text-sm text-left font-regular font-light pt-4">
        21.2 Arbitražni sud će uzeti u obzir odredbe ugovora, ako postoje, između stranaka i sve relevantne trgovačke običaje.
    </p>
    <p className="text-tiny lg:text-sm text-left font-regular font-light pt-4">
        21.3 Arbitražni sud preuzima ovlasti amiable compositeur odlučuje, odnosno ex aequo et bono samo ako su se stranke složile da mu daju takve ovlasti.
    </p>
</Section>

<Section id={22} clanak={'ČLANAK 22'}>
    <p className="text-tiny lg:text-sm text-left font-regular font-light pt-4">
        22.1 Arbitražni sud i stranke uložit će sve napore da provedu arbitražu na ekspeditivan i ekonomičan način, s obzirom na složenost i vrijednost spora.
    </p>
    <p className="text-tiny lg:text-sm text-left font-regular font-light pt-4">
        22.2 Kako bi se osiguralo učinkovito upravljanje postupkom, nakon savjetovanja sa strankama, arbitražni sud će usvojiti proceduralne mjere koje smatra primjerenim, pod uvjetom da nisu u suprotnosti s bilo kojim sporazumom stranaka.
    </p>
    <p className="text-tiny lg:text-sm text-left font-regular font-light pt-4">
        22.3 Postupci prema ovim Pravilima su povjerljivi. Stranke, arbitri i sve druge osobe koje sudjeluju u postupku obvezuju se da neće otkrivati trećim osobama nikakve činjenice ili druge podatke koji se odnose na spor ili postupak bez dopuštenja Odbora. Nagrade neće biti objavljene osim ako se sve stranke ne dogovore.
    </p>
    <p className="text-tiny lg:text-sm text-left font-regular font-light pt-4">
        22.4 U svim slučajevima, arbitražni sud će djelovati pošteno i nepristrano i osigurati da svaka stranka ima razumnu priliku da iznese svoj slučaj.
    </p>
    <p className="text-tiny lg:text-sm text-left font-regular font-light pt-4">
        22.5 Stranke se obvezuju poštivati sve naloge arbitražnog suda.
    </p>
</Section>
<Section id={23} clanak={'ČLANAK 23'}>
    <p className="text-tiny lg:text-sm text-left font-regular font-light pt-4">
        23.1 Čim primi spis od Odbora, arbitražni sud će na temelju dokumenata i u svjetlu najnovijih podnesaka stranaka sastaviti dokument kojim se definiraju njegovi projektni zadaci. Ovaj dokument uključuje sljedeće podatke:
    </p>
    <ol className="list-decimal list-inside text-tiny lg:text-sm text-left font-regular font-light pt-2 pl-4">
        <li>potpuna imena, opis, adresu i druge podatke za kontakt svake od stranaka i bilo koje osobe(a) koja predstavlja stranku u arbitraži;</li>
        <li>adrese na koje se mogu uputiti obavijesti i komunikacija tijekom arbitraže;</li>
        <li>sažetak pojedinačnih zahtjeva stranaka i/ili mjere koju traži svaka stranka, zajedno s iznosima svih kvantificiranih zahtjeva i, u mjeri u kojoj je to moguće, procjenom novčane vrijednosti svih drugih zahtjeva;</li>
        <li>osim ako arbitražni sud to smatra neprikladnim, popis pitanja koja treba utvrditi;</li>
        <li>puna imena, adresu i druge podatke za kontakt svakog od arbitara;</li>
        <li>mjesto arbitraže; i</li>
        <li>pojedinosti primjenjivih proceduralnih pravila i, ako je takav slučaj, upućivanje na ovlast dodijeljenu arbitražnom sudu da djeluje kao amiable compositeur ili da odlučuje ex aequo et bono.</li>
    </ol>
    <p className="text-tiny lg:text-sm text-left font-regular font-light pt-4">
        23.2 Opis poslova potpisuje arbitražni sud. U roku od 30 dana od datuma kada mu je spis proslijeđen, arbitražni sud prosljeđuje Odboru potpisani Opis poslova.
    </p>
    <p className="text-tiny lg:text-sm text-left font-regular font-light pt-4">
        23.3 Ako bilo koji od arbitara odbije sudjelovati u sastavljanju Opisa poslova ili ih potpisati, nacrt će se podnijeti Odboru na odobrenje. Kada se projektni zadatak potpiše u skladu s člankom 23.2 ili odobri Odbor, arbitraža će se nastaviti.
    </p>
    <p className="text-tiny lg:text-sm text-left font-regular font-light pt-4">
        23.4 Nakon što Upravni odbor potpiše ili odobri Projektni zadatak, nijedna stranka neće postavljati nove zahtjeve koji su izvan granica Opisa poslova osim ako je za to ne ovlasti arbitražni sud, koji će razmotriti prirodu takvog novog zahtjeva, stadij arbitraže i druge relevantne okolnosti.
    </p>
</Section>

<Section id={24} clanak={'ČLANAK 24'}>
    <p className="text-tiny lg:text-sm text-left font-regular font-light pt-4">
        24.1 Prilikom sastavljanja Opisa poslova ili što je prije moguće nakon toga, arbitražni sud će održati konferenciju o upravljanju predmetom kako bi konzultirao stranke o proceduralnim mjerama koje se mogu usvojiti u skladu s člankom 22.2.
    </p>
    <p className="text-tiny lg:text-sm text-left font-regular font-light pt-4">
        24.2 Tijekom takve konferencije, ili što je prije moguće nakon toga, arbitražni sud će utvrditi proceduralni raspored koji namjerava slijediti za učinkovito vođenje arbitraže. Proceduralni raspored i sve njegove izmjene bit će priopćeni Odboru i strankama.
    </p>
    <p className="text-tiny lg:text-sm text-left font-regular font-light pt-4">
        24.3 Kako bi se osiguralo kontinuirano učinkovito vođenje predmeta, arbitražni sud, nakon savjetovanja sa strankama putem dodatne konferencije o vođenju predmeta ili na drugi način, može usvojiti daljnje proceduralne mjere ili izmijeniti proceduralni raspored.
    </p>
    <p className="text-tiny lg:text-sm text-left font-regular font-light pt-4">
        24.4 Konferencije o vođenju slučaja mogu se održavati videokonferencijom ili sličnim načinom komunikacije ili kao iznimka osobno. U nedostatku sporazuma stranaka, arbitražni sud će odrediti način na koji će se održati konferencija. Arbitražni sud može zatražiti od stranaka da podnesu prijedloge za vođenje predmeta prije konferencije o vođenju predmeta i može zatražiti prisustvo stranaka na bilo kojoj konferenciji o vođenju predmeta osobno ili preko internog predstavnika.
    </p>
</Section>
<Section id={25} clanak={'ČLANAK 25'}>
    <p className="text-tiny lg:text-sm text-left font-regular font-light pt-4">
        25.1 Arbitražni sud će nastaviti u što kraćem roku kako bi odgovarajućim sredstvima utvrdio činjenice slučaja.
    </p>
    <p className="text-tiny lg:text-sm text-left font-regular font-light pt-4">
        25.2 Arbitražni sud može odlučiti saslušati svjedoke, stručnjake koje su imenovale stranke ili arbitražni sud ili bilo koju drugu osobu, u nazočnosti stranaka ili u njihovoj odsutnosti pod uvjetom da su uredno pozvani.
    </p>
    <p className="text-tiny lg:text-sm text-left font-regular font-light pt-4">
        25.3 Arbitražni sud, nakon savjetovanja sa strankama, može imenovati jednog ili više stručnjaka, definirati njihove zadatke i primiti njihova izvješća. Na zahtjev stranke, strankama će se dati mogućnost da na ročištu ispitaju svakog takvog vještaka.
    </p>
    <p className="text-tiny lg:text-sm text-left font-regular font-light pt-4">
        25.4 U bilo kojem trenutku tijekom postupka, arbitražni sud može pozvati bilo koju stranku da pruži dodatne dokaze.
    </p>
    <p className="text-tiny lg:text-sm text-left font-regular font-light pt-4">
        25.5 Arbitražni sud može odlučiti o slučaju isključivo na temelju isprava koje su dostavile stranke osim ako bilo koja od stranaka ne zatraži saslušanje.
    </p>
</Section>

<Section id={26} clanak={'ČLANAK 26'}>
    <p className="text-tiny lg:text-sm text-left font-regular font-light pt-4">
        26.1 Ročište će se održati ako bilo koja od stranaka to zatraži ili u nedostatku takvog zahtjeva, ako arbitražni sud na vlastitu inicijativu odluči saslušati stranke, svjedoke ili stručnjake. Kada treba održati ročište, arbitražni će sud, u razumnom roku, pozvati stranke da pristupe pred sud određenog dana i na određenom mjestu. Arbitražni sud može odlučiti, nakon savjetovanja sa strankama, te na temelju relevantnih činjenica i okolnosti slučaja, da će se svako ročište prvenstveno održati videokonferencijom ili drugim odgovarajućim sredstvom komunikacije ili kao iznimka fizičkim prisustvom.
    </p>
    <p className="text-tiny lg:text-sm text-left font-regular font-light pt-4">
        26.2 Ako se bilo koja od stranaka, iako je uredno pozvana, ne pojavi bez valjanog opravdanja, arbitražni sud će imati ovlasti nastaviti s raspravom.
    </p>
    <p className="text-tiny lg:text-sm text-left font-regular font-light pt-4">
        26.3 Arbitražni sud u potpunosti će voditi rasprave, na kojima sve stranke imaju pravo biti prisutne. Osobe koje nisu stranke u postupku, ne mogu sudjelovati u postupku bez posebnog odobrenja arbitražnog suda.
    </p>
    <p className="text-tiny lg:text-sm text-left font-regular font-light pt-4">
        26.4 Stranke se mogu pojaviti osobno ili preko propisno ovlaštenih predstavnika. Osim toga, mogu im pomoći i savjetnici.
    </p>
    <p className="text-tiny lg:text-sm text-left font-regular font-light pt-4">
        26.5 Svaki član Odbora može biti prisutan na bilo kojem saslušanju, ali neće sudjelovati u bilo kojem svojstvu osim promatrača osim ako nije imenovan kao arbitar ili vještak u tom postupku.
    </p>
    <p className="text-tiny lg:text-sm text-left font-regular font-light pt-4">
        26.6. Sva saslušanja se snimaju, a snimke ili zapisnici sa saslušanja šalju se Odboru nakon saslušanja bez odlaganja.
    </p>
    <p className="text-tiny lg:text-sm text-left font-regular font-light pt-4">
        26.7. Predsjednik suda ima ovlaštenje i dužnost voditi rasprave i brinuti se da se rasprave odvijaju uredno. Ostali arbitri, stranke i sve druge osobe koje sudjeluju ili su prisutne na raspravama podvrgnut će se uputama i nalozima predsjednika suda.
    </p>
</Section>
<Section id={27} clanak={'ČLANAK 27'}>
    <p className="text-tiny lg:text-sm text-left font-regular font-light pt-4">
        Što je prije moguće nakon zadnjeg ročišta u vezi s pitanjima o kojima se odlučuje u pravorijeku ili podnošenja posljednjih ovlaštenih podnesaka u vezi s takvim pitanjima, što god je kasnije, arbitražni sud će:
        <br />
        a) zatvoriti postupak u odnosu na pitanja o kojima će se odlučiti u pravorijeku; i
        <br />
        b) obavijestiti Odbor i stranke o datumu do kojeg očekuje podnošenje svog nacrta odluke Odboru na odobrenje u skladu s člankom 34.
        <br />
        Nakon što je postupak zatvoren, ne mogu se podnositi nikakvi daljnji podnesci ili argumenti, niti izvoditi dokazi u vezi s pitanjima o kojima će se odlučiti u pravorijeku, osim ako to zatraži ili odobri arbitražni sud.
    </p>
</Section>

<Section id={28} clanak={'ČLANAK 28'}>
    <p className="text-tiny lg:text-sm text-left font-regular font-light pt-4">
        28.1 Osim ako se stranke nisu drukčije dogovorile, čim mu je spis proslijeđen, arbitražni sud može, na zahtjev stranke, narediti bilo koju privremenu mjeru koju smatra prikladnom. Arbitražni sud može odobriti bilo koju takvu mjeru pod uvjetom da stranka koja je podnijela zahtjev položi odgovarajuće jamstvo. Svaka takva mjera bit će u obliku naloga s obrazloženjem ili pravorijeka, što arbitražni sud smatra prikladnim.
        <br />
        28.2 Prije nego što se spis proslijedi arbitražnom sudu, a u odgovarajućim okolnostima čak i nakon toga, stranke mogu podnijeti zahtjev bilo kojem nadležnom pravosudnom tijelu za privremene mjere. Zahtjev stranke pravosudnom tijelu za takve mjere ili za provedbu bilo kojih takvih mjera koje je odredio arbitražni sud neće se smatrati kršenjem ili odricanjem od arbitražnog sporazuma i neće utjecati na relevantne ovlasti rezervirane za arbitražni sud. O svakom takvom zahtjevu i svim mjerama koje su poduzela pravosudna tijela mora se bez odlaganja obavijestiti Odbor. Odbor će o tome obavijestiti arbitražni sud.
    </p>
</Section>

<Section id={29} clanak={'ČLANAK 29'}>
    <p className="text-tiny lg:text-sm text-left font-regular font-light pt-4">
        29.1 Pristajući na arbitražu prema Pravilima, stranke su suglasne da će ovaj članak 29. imati prednost nad svim suprotnim odredbama sporazuma o arbitraži.
        <br />
        29.2 Pravila ubrzanog postupka primjenjuju se ako:
        <br />
        a) iznos u sporu ne premašuje 50.000,00 EUR (pedeset tisuća eura) u vrijeme trenutka njegovog početka, i
        <br />
        b) stranke su suglasne da će umjesto redovne arbitraže provesti ubrzani postupak.
        <br />
        29.3 Odredbe o ubrzanom postupku neće se primjenjivati ako:
        <br />
        a) stranke su se složile isključiti odredbe o ubrzanom postupku; ili
        <br />
        b) Odbor, na zahtjev stranke prije osnivanja arbitražnog suda ili na vlastitu inicijativu, utvrdi da je neprimjereno u datim okolnostima primjenjivati Pravila ubrzanog postupka.
        <br />
        29.4. Ubrzani postupak je pojednostavljen na način da:
        <br />
        a) nisu potrebni nikakvi projektni zadaci
        <br />
        b) konferencija o upravljanju predmetom bit će sazvana u roku od 15 dana nakon datuma kada je spis proslijeđen arbitražnom sudu
        <br />
        c) arbitražni sud može odlučivati samo na temelju dokumenata
        <br />
        d) arbitražni sud može ograničiti broj, duljinu i opseg pisanih podnesaka i pisanih izjava svjedoka.
    </p>
</Section>
<Section id={30} clanak={'ČLANAK 30'}>
    <p className="text-tiny lg:text-sm text-left font-regular font-light pt-4">
        30.1 Rok unutar kojeg arbitražni sud mora donijeti konačni pravorijek je šest mjeseci. Taj rok počinje teći od datuma posljednjeg potpisa arbitražnog suda ili stranaka na Opis poslova ili, u slučaju primjene članka 23.3, datuma obavijesti arbitražnom sudu od strane odbora odobrenja Projektnog zadatka od strane Odbora. Odbor može odrediti drugačiji vremenski rok na temelju proceduralnog rasporeda utvrđenog u skladu s člankom 24.2.
        <br />
        30.2 Odbor može produljiti rok na temelju zahtjeva arbitražnog suda ili na vlastitu inicijativu ako odluči da je to potrebno učiniti.
    </p>
</Section>

<Section id={31} clanak={'ČLANAK 31'}>
    <p className="text-tiny lg:text-sm text-left font-regular font-light pt-4">
        31.1 Kada je arbitražni sud sastavljen od više od jednog arbitra, odluka se donosi većinom glasova.  . Ako nije postignuta većina glasova, odluku donosi predsjednik arbitražnog suda.
        <br />
        31.2 U odluci će biti navedeni razlozi na kojima se temelji.
        <br />
        31.3 Smatrat će se da je odluka donesena na mjestu arbitraže i na datum koji je u njoj naveden.
    </p>
</Section>

<Section id={32} clanak={'ČLANAK 32'}>
    <p className="text-tiny lg:text-sm text-left font-regular font-light pt-4">
        Ako stranke postignu nagodbu nakon što je spis proslijeđen arbitražnom sudu u skladu s člankom 16., nagodba će se zabilježiti u obliku pravorijeka donesenog uz suglasnost stranaka, ako to stranke zahtijevaju i ako arbitražni sud pristaje na to.
    </p>
</Section>

<Section id={33} clanak={'ČLANAK 33'}>
    <p className="text-tiny lg:text-sm text-left font-regular font-light pt-4">
        Prije potpisivanja bilo koje odluke, arbitražni sud će je u obliku nacrta dostaviti Odboru. Odbor može utvrditi izmjene u pogledu oblika pravorijeka i bez utjecaja na slobodu odlučivanja arbitražnog suda, također mu može skrenuti pozornost na bitna pitanja. Arbitražni sud ne može donijeti pravorijek dok ga Odbor ne odobri u pogledu oblika.
    </p>
</Section>

<Section id={34} clanak={'ČLANAK 34'}>
    <p className="text-tiny lg:text-sm text-left font-regular font-light pt-4">
        34.1 Nakon što je pravorijek donesen, Odbor će obavijestiti stranke o tekstu potpisanom od strane arbitražnog suda, pod uvjetom da su sve troškove arbitraže sudu u potpunosti platile stranke ili jedna od njih.
        <br />
        34.2 Dodatne kopije koje je ovjerio predsjednik odbora bit će dostupne strankama na zahtjev i u bilo koje vrijeme.
        <br />
        34.3 Na temelju obavijesti dane u skladu s člankom 34.1, stranke se odriču bilo kojeg drugog oblika obavijesti ili pologa od strane arbitražnog suda.
        <br />
        34.4 Izvornik svake odluke donesene u skladu s Pravilima bit će pohranjen kod suda.
        <br />
        34.5 Arbitražni sud i Odbor pomoći će strankama u ispunjavanju svih daljnjih formalnosti koje mogu biti potrebne.
        <br />
        34. 6 Svaki pravorijek obvezuje stranke. Podnošenjem spora arbitraži prema Pravilima, stranke se obvezuju izvršiti bilo koji pravorijek bez odgode i smatrat će se da su se odrekle prava na bilo koji oblik pravnog lijeka u onoj mjeri u kojoj se takvo odricanje može učiniti valjano.
    </p>
</Section>
<Section id={35} clanak={'ČLANAK 35'}>
    <p className="text-tiny lg:text-sm text-left font-regular font-light pt-4">
        35.1 Na vlastitu inicijativu, arbitražni sud može ispraviti pisanu, računsku ili tiskarsku pogrešku, ili bilo koju pogrešku slične prirode sadržanu u pravorijeku, pod uvjetom da se takav ispravak podnese na odobrenje Odboru u roku od 30 dana od obavijesti o pravorijeku od stranke Odbor na temelju članka 34.1.
        <br />
        35.2 Svaki zahtjev stranke za ispravak pogreške vrste navedene u Članku 35.1, ili za tumačenje odluke, mora se podnijeti Odboru u roku od 30 dana od primitka odluke od strane te strane.
        <br />
        35.3 Svaki zahtjev stranke za dopunski pravorijek u vezi sa zahtjevima iznesenim u arbitražnom postupku o kojima je arbitražni sud propustio odlučiti mora se podnijeti Odboru u roku od 30 dana od primitka pravorijeka od strane te stranke.
        <br />
        35.4 Nakon prijenosa zahtjeva u skladu s člancima 35.2 ili 35.3 arbitražnom sudu, potonji će dati drugoj strani ili strankama kratak rok, koji obično ne prelazi 30 dana, od primitka zahtjeva od strane te stranke ili stranaka, za podnošenje bilo kakvih komentara na to. Arbitražni sud će svoju odluku o zahtjevu u obliku nacrta dostaviti Odboru najkasnije 30 dana od isteka roka za primitak bilo kakvih komentara od druge strane ili stranaka ili u drugom roku koji Odbor može odlučiti. Odluka o ispravljanju ili tumačenju pravorijeka ima oblik dodatka i čini dio pravorijeka. Odluka o odobravanju zahtjeva prema stavku 3. donosi se u obliku dodatne odluke. Odredbe članaka 31., 33. i 34. primjenjuju se na odgovarajući način.
        <br />
        35.5 Kada sud vrati pravorijek arbitražnom sudu, odredbe članaka 31., 33., 34. i ovog članka 35. primjenjivat će se mutatis mutandis na bilo koji dodatak ili pravorijek donesen u skladu s uvjetima takvog vraćanja.. Odbor može poduzeti sve potrebne korake kako bi se omogućilo arbitražnom sudu da se pridržava uvjeta takvog vraćanja i može odrediti predujam za pokrivanje svih dodatnih naknada i troškova arbitražnog suda i svih dodatnih administrativnih troškova.
    </p>
</Section>

<Section id={36} clanak={'ČLANAK 36'}>
    <p className="text-tiny lg:text-sm text-left font-regular font-light pt-4">
        36.1 Troškovi arbitraže uključuju naknade i troškove arbitara i administrativne troškove Suda koje odredi Sud, u skladu s rasporedom naknada koji je na snazi u vrijeme početka arbitraže, kao i naknade i troškove bilo kojih stručnjaka koje je imenovao arbitražni sud te razumne pravne i druge troškove koje su stranke imale tijekom arbitraže.
        <br />
        36.2 Sud može utvrditi naknade arbitara na iznos veći ili niži od iznosa koji bi proizašao iz primjene relevantne ljestvice ako se to smatra potrebnim zbog iznimnih okolnosti slučaja.
        <br />
        36.3 U bilo kojem trenutku tijekom arbitražnog postupka, arbitražni sud može donijeti odluku o troškovima, osim onih koje određuje Sud, i narediti plaćanje.
        <br />
        36.4 Konačna odluka utvrđuje troškove arbitraže i odlučuje koja će ih stranka snositi ili u kojem omjeru će ih snositi stranke.
        <br />
        36.5 Pri donošenju odluka o troškovima, arbitražni sud može uzeti u obzir okolnosti koje smatra relevantnima, uključujući opseg u kojem je svaka stranka provela arbitražu na ekspeditivan i troškovno učinkovit način.
        <br />
        36.6 U slučaju povlačenja svih zahtjeva ili prekida arbitraže prije donošenja konačne odluke, Sud će odrediti naknade i troškove arbitara i administrativne troškove Suda. Ako se stranke nisu dogovorile o raspodjeli troškova arbitraže ili drugim relevantnim pitanjima u vezi s troškovima, o takvim će stvarima odlučiti arbitražni sud. Ako arbitražni sud nije konstituiran u vrijeme takvog povlačenja ili raskida, bilo koja stranka može zatražiti od Odbora da nastavi s konstituiranjem arbitražnog suda u skladu s Pravilima kako bi arbitražni sud mogao donijeti odluke o troškovima.
    </p>
</Section>
<Section id={37} clanak={'ČLANAK 37'}>
    <p className="text-tiny lg:text-sm text-left font-regular font-light pt-4">
        37.1 Stranke se mogu dogovoriti da skrate rokove navedene u Pravilima. Svaki takav sporazum sklopljen nakon osnivanja arbitražnog suda stupa na snagu tek nakon odobrenja arbitražnog suda.
        <br />
        37.2 Odbor, na vlastitu inicijativu, može produljiti bilo koji rok koji je izmijenjen u skladu s člankom 37.1 ako odluči da je to potrebno učiniti kako bi arbitražni sud i Odbor mogli ispuniti svoje odgovornosti u skladu s Pravilima.
    </p>
</Section>

<Section id={38} clanak={'ČLANAK 38'}>
    <p className="text-tiny lg:text-sm text-left font-regular font-light pt-4">
        38.1 Arbitri, bilo koja osoba imenovana od strane arbitražnog suda, Suda i njegovih članova i zaposlenika, neće biti odgovorni bilo kojoj osobi za bilo kakvu radnju ili propust u vezi s arbitražom, osim u mjeri u kojoj je takvo ograničenje odgovornosti zabranjeno primjenjivim zakonom.
    </p>
</Section>

<Section id={39} clanak={'ČLANAK 39'}>
    <p className="text-tiny lg:text-sm text-left font-regular font-light pt-4">
        39.1 U svim stvarima koje nisu izričito navedene u Pravilima, Sud i arbitražni sud će postupati u duhu Pravila i poduzet će sve napore kako bi osigurali da pravorijek bude ovršan po zakonu. U slučaju on-chain pravorijeka, Sud i arbitražni sud uložit će sve napore kako bi bili sigurni da se pravorijek automatski provodi pomoću blockchaina ili bilo koje slične tehnologije koja omogućuje automatsko izvršenje dosuđenih iznosa/potraživanja.
    </p>
</Section>

<Section id={40} clanak={'ČLANAK 40'}>
    <p className="text-tiny lg:text-sm text-left font-regular font-light pt-4">
        40.1 Za sve zahtjeve koji proizlaze iz ili u vezi s vođenjem arbitražnog postupka od strane Suda prema ovim Pravilima primjenjivat će se hrvatsko pravo, a rješavat će ih Trgovački sud u Zagrebu, koji će imati isključivu nadležnost.
    </p>
</Section>

                
        </main>
        </Layout>
    );
}

export default Pravila;
