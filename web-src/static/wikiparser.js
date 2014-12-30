
'use strict';

var namespace_langs =  {
		"aln": ["Diskutim", ["P\u00ebrdorues", "Perdoruesi", "P\u00ebrdoruesi"], ["P\u00ebrdoruesi_diskutim", "P\u00ebrdoruesi_diskutim", "Perdoruesi_diskutim"], ["Skeda", "Figura"], ["Skeda_diskutim", "Figura_diskutim"], "MediaWiki", "MediaWiki_diskutim", "Stampa", "Stampa_diskutim", "Ndihm\u00eb", "Ndihm\u00eb_diskutim", ["Kategoria", "Kategori"], ["Kategoria_diskutim", "Kategori_Diskutim"], "Speciale", "Media", "%s_diskutim"],
			"gv": ["Resooney", "Ymmydeyr", "Resooney_ymmydeyr", "Coadan", "Resooney_coadan", "MediaWiki", "Resooney_MediaWiki", "Clowan", "Resooney_clowan", "Cooney", "Resooney_cooney", "Ronney", "Resooney_ronney", "Er_lheh", "Meanyn", "Resooney_%s"],
			"gu": ["\u0a9a\u0ab0\u0acd\u0a9a\u0abe", "\u0ab8\u0aad\u0acd\u0aaf", "\u0ab8\u0aad\u0acd\u0aaf\u0aa8\u0ac0_\u0a9a\u0ab0\u0acd\u0a9a\u0abe", "\u0a9a\u0abf\u0aa4\u0acd\u0ab0", "\u0a9a\u0abf\u0aa4\u0acd\u0ab0\u0aa8\u0ac0_\u0a9a\u0ab0\u0acd\u0a9a\u0abe", "\u0aae\u0ac0\u0aa1\u0abf\u0aaf\u0abe\u0ab5\u0abf\u0a95\u0abf", "\u0aae\u0ac0\u0aa1\u0abf\u0aaf\u0abe\u0ab5\u0abf\u0a95\u0abf_\u0a9a\u0ab0\u0acd\u0a9a\u0abe", "\u0aa2\u0abe\u0a82\u0a9a\u0acb", "\u0aa2\u0abe\u0a82\u0a9a\u0abe\u0aa8\u0ac0_\u0a9a\u0ab0\u0acd\u0a9a\u0abe", "\u0aae\u0aa6\u0aa6", "\u0aae\u0aa6\u0aa6\u0aa8\u0ac0_\u0a9a\u0ab0\u0acd\u0a9a\u0abe", "\u0ab6\u0acd\u0ab0\u0ac7\u0aa3\u0ac0", "\u0ab6\u0acd\u0ab0\u0ac7\u0aa3\u0ac0\u0aa8\u0ac0_\u0a9a\u0ab0\u0acd\u0a9a\u0abe", "\u0ab5\u0abf\u0ab6\u0ac7\u0ab7", "\u0aa6\u0acd\u0ab0\u0ab6\u0acd\u0aaf-\u0ab6\u0acd\u0ab0\u0abe\u0ab5\u0acd\u0aaf_(\u0aae\u0abf\u0aa1\u0abf\u0aaf\u0abe)", "%s_\u0a9a\u0ab0\u0acd\u0a9a\u0abe"],
			"scn": ["Discussioni", "Utenti", ["Discussioni_utenti", "Discussioni_Utenti"], ["File", "Mm\u00e0ggini"], "Discussioni_file", "MediaWiki", "Discussioni_MediaWiki", "Template", ["Discussioni_template", "Discussioni_Template"], "Aiutu", ["Discussioni_aiutu", "Discussioni_Aiutu"], "Catigur\u00eca", ["Discussioni_catigur\u00eca", "Discussioni_Catigur\u00eca"], "Spiciali", "M\u00e8dia", "Discussioni_%s"],
			"sr-ec": [["\u0420\u0430\u0437\u0433\u043e\u0432\u043e\u0440", "Razgovor"], ["\u041a\u043e\u0440\u0438\u0441\u043d\u0438\u043a", "Korisnik"], ["\u0420\u0430\u0437\u0433\u043e\u0432\u043e\u0440_\u0441\u0430_\u043a\u043e\u0440\u0438\u0441\u043d\u0438\u043a\u043e\u043c", "Razgovor_sa_korisnikom"], ["\u0414\u0430\u0442\u043e\u0442\u0435\u043a\u0430", "\u0421\u043b\u0438\u043a\u0430", "Slika"], ["\u0420\u0430\u0437\u0433\u043e\u0432\u043e\u0440_\u043e_\u0434\u0430\u0442\u043e\u0442\u0435\u0446\u0438", "Razgovor_o_slici", "\u0420\u0430\u0437\u0433\u043e\u0432\u043e\u0440_\u043e_\u0441\u043b\u0438\u0446\u0438"], ["\u041c\u0435\u0434\u0438\u0458\u0430\u0432\u0438\u043a\u0438", "MedijaViki", "\u041c\u0435\u0434\u0438\u0458\u0430\u0412\u0438\u043a\u0438"], ["\u0420\u0430\u0437\u0433\u043e\u0432\u043e\u0440_\u043e_\u041c\u0435\u0434\u0438\u0458\u0430\u0432\u0438\u043a\u0438\u0458\u0443", "\u0420\u0430\u0437\u0433\u043e\u0432\u043e\u0440_\u043e_\u041c\u0435\u0434\u0438\u0458\u0430\u0412\u0438\u043a\u0438\u0458\u0443", "Razgovor_o_MedijaVikiju"], ["\u0428\u0430\u0431\u043b\u043e\u043d", "\u0160ablon"], ["\u0420\u0430\u0437\u0433\u043e\u0432\u043e\u0440_\u043e_\u0448\u0430\u0431\u043b\u043e\u043d\u0443", "Razgovor_o_\u0161ablonu"], ["\u041f\u043e\u043c\u043e\u045b", "Pomo\u0107"], ["\u0420\u0430\u0437\u0433\u043e\u0432\u043e\u0440_\u043e_\u043f\u043e\u043c\u043e\u045b\u0438", "Razgovor_o_pomo\u0107i"], ["\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u0458\u0430", "Kategorija"], ["\u0420\u0430\u0437\u0433\u043e\u0432\u043e\u0440_\u043e_\u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u0458\u0438", "Razgovor_o_kategoriji"], ["\u041f\u043e\u0441\u0435\u0431\u043d\u043e", "Posebno"], ["\u041c\u0435\u0434\u0438\u0458", "\u041c\u0435\u0434\u0438\u0458\u0430", "Medija"], ["\u0420\u0430\u0437\u0433\u043e\u0432\u043e\u0440_\u043e_%s", "Razgovor_o_$1"]],
			"szl": [["Dyskusyjo", "Dyskusja"], ["U\u017cywacz", "U\u017cytkownik"], ["Dyskusyjo_u\u017cywacza", "Dyskusja_u\u017cytkownika"], "Plik", ["Dyskusyjo_plika", "Dyskusja_pliku"], "MediaWiki", ["Dyskusyjo_MediaWiki", "Dyskusja_MediaWiki"], ["Muster", "Szablon"], ["Dyskusyjo_mustra", "Dyskusja_szablonu"], ["P\u016fmoc", "Pomoc"], ["Dyskusyjo_p\u016fmocy", "Dyskusja_pomocy"], ["Kategoryjo", "Kategoria"], ["Dyskusyjo_kategoryji", "Dyskusja_kategorii"], ["Szpecyjalna", "Specjalna"], "Media", ["Dyskusyjo_%s", "Dyskusja_$1"]],
			"tcy": ["\u0c9a\u0cb0\u0ccd\u0c9a\u0cc6\u0caa\u0cc1\u0c9f", "\u0cb8\u0ca6\u0cb8\u0ccd\u0caf", "\u0cb8\u0ca6\u0cb8\u0ccd\u0caf\u0cb0_\u0c9a\u0cb0\u0ccd\u0c9a\u0cc6\u0caa\u0cc1\u0c9f", "\u0c9a\u0cbf\u0ca4\u0ccd\u0cb0", "\u0c9a\u0cbf\u0ca4\u0ccd\u0cb0_\u0c9a\u0cb0\u0ccd\u0c9a\u0cc6\u0caa\u0cc1\u0c9f", "\u0cae\u0cc0\u0ca1\u0cbf\u0caf\u0cb5\u0cbf\u0c95\u0cbf", "\u0cae\u0cc0\u0ca1\u0cc0\u0caf\u0cb5\u0cbf\u0c95\u0cbf_\u0c9a\u0cb0\u0ccd\u0c9a\u0cc6", "\u0c9f\u0cc6\u0c82\u0caa\u0ccd\u0cb2\u0cc7\u0c9f\u0cc1", "\u0c9f\u0cc6\u0c82\u0caa\u0ccd\u0cb2\u0cc7\u0c9f\u0cc1_\u0c9a\u0cb0\u0ccd\u0c9a\u0cc6", "\u0cb8\u0cb9\u0cbe\u0caf", "\u0cb8\u0cb9\u0cbe\u0caf_\u0c9a\u0cb0\u0ccd\u0c9a\u0cc6", "\u0cb5\u0cb0\u0ccd\u0c97", "\u0cb5\u0cb0\u0ccd\u0c97_\u0c9a\u0cb0\u0ccd\u0c9a\u0cc6", "\u0cb5\u0cbf\u0cb6\u0cc7\u0cb7", "\u0cae\u0cc0\u0ca1\u0cbf\u0caf", "%s_\u0c9a\u0cb0\u0ccd\u0c9a\u0cc6"],
			"vmf": ["Disghusjoon", "B\u00e4nuds\u00e2r", "B\u00e4nuds\u00e2rdisghusjoon", "D\u00f4daj", "D\u00f4dajdisghusjoon", "Meedjawigi", "Meedjawigidisghusjoon", "Foorlaach\u00e2", "Foorlaach\u00e2ndisghusjoon", "Hilw\u00e2", "Hilw\u00e2disghusjoon", "Gad\u00e2gorii", "Gad\u00e2goriidisghusjoon", "Schb\u00e4dsjaal", "Media", "%sdisghusjoon"],
			"sr-el": [["Razgovor", "\u0420\u0430\u0437\u0433\u043e\u0432\u043e\u0440"], ["Korisnik", "\u041a\u043e\u0440\u0438\u0441\u043d\u0438\u043a"], ["Razgovor_sa_korisnikom", "\u0420\u0430\u0437\u0433\u043e\u0432\u043e\u0440_\u0441\u0430_\u043a\u043e\u0440\u0438\u0441\u043d\u0438\u043a\u043e\u043c"], ["Datoteka", "\u0421\u043b\u0438\u043a\u0430", "Slika"], ["Razgovor_o_datoteci", "Razgovor_o_slici", "\u0420\u0430\u0437\u0433\u043e\u0432\u043e\u0440_\u043e_\u0441\u043b\u0438\u0446\u0438"], ["Medijaviki", "\u041c\u0435\u0434\u0438\u0458\u0430\u0412\u0438\u043a\u0438"], ["Razgovor_o_Medijavikiju", "\u0420\u0430\u0437\u0433\u043e\u0432\u043e\u0440_\u043e_\u041c\u0435\u0434\u0438\u0458\u0430\u0412\u0438\u043a\u0438\u0458\u0443"], ["\u0160ablon", "\u0428\u0430\u0431\u043b\u043e\u043d"], ["Razgovor_o_\u0161ablonu", "\u0420\u0430\u0437\u0433\u043e\u0432\u043e\u0440_\u043e_\u0448\u0430\u0431\u043b\u043e\u043d\u0443"], ["Pomo\u0107", "\u041f\u043e\u043c\u043e\u045b"], ["Razgovor_o_pomo\u0107i", "\u0420\u0430\u0437\u0433\u043e\u0432\u043e\u0440_\u043e_\u043f\u043e\u043c\u043e\u045b\u0438"], ["Kategorija", "\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u0458\u0430"], ["Razgovor_o_kategoriji", "\u0420\u0430\u0437\u0433\u043e\u0432\u043e\u0440_\u043e_\u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u0458\u0438"], ["Posebno", "\u041f\u043e\u0441\u0435\u0431\u043d\u043e"], ["Medij", "Medija", "\u041c\u0435\u0434\u0438\u0458\u0430"], ["Razgovor_o_%s", "\u0420\u0430\u0437\u0433\u043e\u0432\u043e\u0440_\u043e_$1"]],
			"gd": ["Deasbaireachd", "Cleachdaiche", "Deasbaireachd_a\\'_chleachdaiche", "Faidhle", "Deasbaireachd_an_fhaidhle", "MediaWiki", "Deasbaireachd_MediaWiki", "Teamplaid", "Deasbaireachd_na_teamplaid", "Cobhair", "Deasbaireachd_na_cobharach", "Roinn-se\u00f2rsa", "Deasbaireachd_na_roinn-se\u00f2rsa", "S\u00f2nraichte", "Meadhan", "An_deasbaireachd_aig_%s"],
			"pt-br": ["Discuss\u00e3o", "Usu\u00e1rio", "Usu\u00e1rio_Discuss\u00e3o", ["Arquivo", "Ficheiro", "Imagem"], ["Arquivo_Discuss\u00e3o", "Imagem_Discuss\u00e3o", "Ficheiro_Discuss\u00e3o"], "MediaWiki", "MediaWiki_Discuss\u00e3o", "Predefini\u00e7\u00e3o", "Predefini\u00e7\u00e3o_Discuss\u00e3o", "Ajuda", "Ajuda_Discuss\u00e3o", "Categoria", "Categoria_Discuss\u00e3o", "Especial", "M\u00eddia", "%s_Discuss\u00e3o"],
			"ga": ["Pl\u00e9", "\u00das\u00e1ideoir", "Pl\u00e9_\u00fas\u00e1ideora", "\u00cdomh\u00e1", ["Pl\u00e9_\u00edomh\u00e1", "Pl\u00e9_\u00ed\u00adomh\u00e1"], "MediaWiki", "Pl\u00e9_MediaWiki", ["Teimpl\u00e9ad", "M\u00fanla"], ["Pl\u00e9_teimpl\u00e9id", "Pl\u00e9_m\u00fanla"], "Cabhair", "Pl\u00e9_cabhrach", ["Catag\u00f3ir", "Rang"], "Pl\u00e9_catag\u00f3ire", "Speisialta", "Me\u00e1n", "Pl\u00e9_{{grammar:genitive|%s}}"],
			"gn": ["Myangek\u00f5i", "Puruh\u00e1ra", "Puruh\u00e1ra_myangek\u00f5i", "Ta\\'\u00e3nga", "Ta\\'\u00e3nga_myangek\u00f5i", "MediaWiki", "MediaWiki_myangek\u00f5i", "Tembiechar\u00e3", "Tembiechar\u00e3_myangek\u00f5i", "Pytyv\u00f5", "Pytyv\u00f5_myangek\u00f5i", "\u00d1emohenda", "\u00d1emohenda_myangek\u00f5i", "Mba\\'ech\u0129ch\u0129", "Medio", "%s_myangek\u00f5i"],
			"gl": ["Conversa", "Usuario", ["Conversa_usuario", "Conversa_Usuario"], ["Ficheiro", "Imaxe"], ["Conversa_ficheiro", "Conversa_Imaxe"], "MediaWiki", "Conversa_MediaWiki", "Modelo", ["Conversa_modelo", "Conversa_Modelo"], "Axuda", ["Conversa_axuda", "Conversa_Axuda"], "Categor\u00eda", ["Conversa_categor\u00eda", "Conversa_Categor\u00eda"], "Especial", "Media", "Conversa_%s"],
			"lb": ["Diskussioun", "Benotzer", "Benotzer_Diskussioun", ["Fichier", "Bild"], ["Fichier_Diskussioun", "Bild_Diskussioun"], "MediaWiki", "MediaWiki_Diskussioun", "Schabloun", "Schabloun_Diskussioun", "H\u00ebllef", "H\u00ebllef_Diskussioun", "Kategorie", "Kategorie_Diskussioun", "Spezial", "Media", "%s_Diskussioun"],
			"wuu": ["\u8ba8\u8bba", "\u7528\u6237", "\u7528\u6237\u8ba8\u8bba", "\u6587\u4ef6", "\u6587\u4ef6\u8ba8\u8bba", "MediaWiki", "MediaWiki\u8ba8\u8bba", "\u6a21\u677f", "\u6a21\u677f\u8ba8\u8bba", "\u5e2e\u52a9", "\u5e2e\u52a9\u8ba8\u8bba", "\u5206\u7c7b", "\u5206\u7c7b\u8ba8\u8bba", "\u7279\u6b8a", "\u5a92\u4f53\u6587\u4ef6", "%s\u8ba8\u8bba"],
			"fit": ["Keskustelu", "K\u00e4ytt\u00e4j\u00e4", "Keskustelu_k\u00e4ytt\u00e4j\u00e4st\u00e4", "Tiedosto", "Keskustelu_tiedostosta", "J\u00e4rjestelm\u00e4viesti", "Keskustelu_j\u00e4rjestelm\u00e4viestist\u00e4", "Malline", "Keskustelu_mallineesta", "Ohje", "Keskustelu_ohjeesta", "Luokka", "Keskustelu_luokasta", "Toiminnot", "Media", "Keskustelu_{{GRAMMAR:elative|%s}}"],
			"la": ["Disputatio", "Usor", "Disputatio_Usoris", ["Fasciculus", "Imago"], ["Disputatio_Fasciculi", "Disputatio_Imaginis"], "MediaWiki", "Disputatio_MediaWiki", "Formula", "Disputatio_Formulae", "Auxilium", "Disputatio_Auxilii", "Categoria", "Disputatio_Categoriae", "Specialis", "Media", "Disputatio_{{GRAMMAR:genitive|%s}}"],
			"ln": ["Discussion", "Utilisateur", "Discussion_utilisateur", "Fichier", "Discussion_fichier", "MediaWiki", "Discussion_MediaWiki", "Mod\u00e8le", "Discussion_mod\u00e8le", "Aide", "Discussion_aide", "Cat\u00e9gorie", "Discussion_cat\u00e9gorie", "Sp\u00e9cial", "M\u00e9dia", "Discussion_%s"],
			"lo": ["\u0eaa\u0ebb\u0e99\u0e97\u0eb0\u0e99\u0eb2", "\u0e9c\u0eb9\u0ec9\u0ec3\u0e8a\u0ec9", "\u0eaa\u0ebb\u0e99\u0e97\u0eb0\u0e99\u0eb2\u0e82\u0ead\u0e87\u0e9c\u0eb9\u0ec9\u0ec3\u0e8a\u0ec9", "\u0eae\u0eb9\u0e9a", "\u0eaa\u0ebb\u0e99\u0e97\u0eb0\u0e99\u0eb2\u0e81\u0ec8\u0ebd\u0ea7\u0e81\u0eb1\u0e9a\u0eae\u0eb9\u0e9a", "\u0ea1\u0eb5\u0ec0\u0e94\u0e8d\u0ea7\u0eb4\u0e81\u0eb4", "\u0eaa\u0ebb\u0e99\u0e97\u0eb0\u0e99\u0eb2\u0e81\u0ec8\u0ebd\u0ea7\u0e81\u0eb1\u0e9a\u0ea1\u0eb5\u0ec0\u0e94\u0e8d\u0ea7\u0eb4\u0e81\u0eb4", "\u0ec1\u0ea1\u0ec8\u0ec1\u0e9a\u0e9a", "\u0eaa\u0ebb\u0e99\u0e97\u0eb0\u0e99\u0eb2\u0e81\u0ec8\u0ebd\u0ea7\u0e81\u0eb1\u0e9a\u0ec1\u0ea1\u0ec8\u0ec1\u0e9a\u0e9a", "\u0e8a\u0ec8\u0ea7\u0e8d\u0ec0\u0eab\u0ebc\u0eb7\u0ead", "\u0eaa\u0ebb\u0e99\u0e97\u0eb0\u0e99\u0eb2\u0e81\u0ec8\u0ebd\u0ea7\u0e81\u0eb1\u0e9a\u0e8a\u0ec8\u0ea7\u0e8d\u0ec0\u0eab\u0ebc\u0eb7\u0ead", "\u0edd\u0ea7\u0e94", "\u0eaa\u0ebb\u0e99\u0e97\u0eb0\u0e99\u0eb2\u0e81\u0ec8\u0ebd\u0ea7\u0e81\u0eb1\u0e9a\u0edd\u0ea7\u0e94", "\u0e9e\u0eb4\u0ec0\u0eaa\u0e94", ["\u0eaa\u0eb7\u0ec8", "\u0eaa\u0eb7\u0ec8\u0ead"], "\u0eaa\u0ebb\u0e99\u0e97\u0eb0\u0e99\u0eb2\u0e81\u0ec8\u0ebd\u0ea7\u0e81\u0eb1\u0e9a%s"],
			"xmf": ["\u10d2\u10d0\u10dc\u10ee\u10d8\u10da\u10d5\u10d0", "\u10db\u10dd\u10db\u10ee\u10db\u10d0\u10e0\u10d4\u10d1\u10d4\u10da\u10d8", "\u10db\u10dd\u10db\u10ee\u10db\u10d0\u10e0\u10d4\u10d1\u10da\u10d8\u10e1_\u10d2\u10d0\u10dc\u10ee\u10d8\u10da\u10d5\u10d0", "\u10e4\u10d0\u10d8\u10da\u10d8", "\u10e4\u10d0\u10d8\u10da\u10d8\u10e1_\u10d2\u10d0\u10dc\u10ee\u10d8\u10da\u10d5\u10d0", "\u10db\u10d4\u10d3\u10d8\u10d0\u10d5\u10d8\u10d9\u10d8", "\u10db\u10d4\u10d3\u10d8\u10d0\u10d5\u10d8\u10d9\u10d8\u10e1_\u10d2\u10d0\u10dc\u10ee\u10d8\u10da\u10d5\u10d0", "\u10d7\u10d0\u10e0\u10d2\u10d8", "\u10d7\u10d0\u10e0\u10d2\u10d8\u10e1_\u10d2\u10d0\u10dc\u10ee\u10d8\u10da\u10d5\u10d0", "\u10d3\u10d0\u10ee\u10db\u10d0\u10e0\u10d4\u10d1\u10d0", "\u10d3\u10d0\u10ee\u10db\u10d0\u10e0\u10d4\u10d1\u10d8\u10e1_\u10d2\u10d0\u10dc\u10ee\u10d8\u10da\u10d5\u10d0", "\u10d9\u10d0\u10e2\u10d4\u10d2\u10dd\u10e0\u10d8\u10d0", "\u10d9\u10d0\u10e2\u10d4\u10d2\u10dd\u10e0\u10d8\u10d8\u10e1_\u10d2\u10d0\u10dc\u10ee\u10d8\u10da\u10d5\u10d0", "\u10e1\u10de\u10d4\u10ea\u10d8\u10d0\u10da\u10e3\u10e0\u10d8", "\u10db\u10d4\u10d3\u10d8\u10d0", "%s_\u10d2\u10d0\u10dc\u10ee\u10d8\u10da\u10d5\u10d0"],
			"tr": ["Tart\u0131\u015fma", "Kullan\u0131c\u0131", "Kullan\u0131c\u0131_mesaj", ["Dosya", "Resim"], ["Dosya_tart\u0131\u015fma", "Resim_tart\u0131\u015fma"], ["MediaWiki", "MedyaViki"], ["MediaWiki_tart\u0131\u015fma", "MedyaViki_tart\u0131\u015fma"], "\u015eablon", "\u015eablon_tart\u0131\u015fma", "Yard\u0131m", "Yard\u0131m_tart\u0131\u015fma", "Kategori", "Kategori_tart\u0131\u015fma", "\u00d6zel", "Medya", "%s_tart\u0131\u015fma"],
			"liv": ["Arutelu", "Kasutaja", "Kasutaja_arutelu", "Pilt", "Pildi_arutelu", "MediaWiki", "MediaWiki_arutelu", "Mall", "Malli_arutelu", "Juhend", "Juhendi_arutelu", "Kategooria", "Kategooria_arutelu", "Eri", "Meedia", "{{GRAMMAR:genitive|%s}}_arutelu"],
			"bqi": ["\u0628\u062d\u062b", "\u06a9\u0627\u0631\u0628\u0631", "\u0628\u062d\u062b_\u06a9\u0627\u0631\u0628\u0631", "\u067e\u0631\u0648\u0646\u062f\u0647", "\u0628\u062d\u062b_\u067e\u0631\u0648\u0646\u062f\u0647", "\u0645\u062f\u06cc\u0627\u0648\u06cc\u06a9\u06cc", "\u0628\u062d\u062b_\u0645\u062f\u06cc\u0627\u0648\u06cc\u06a9\u06cc", "\u0627\u0644\u06af\u0648", "\u0628\u062d\u062b_\u0627\u0644\u06af\u0648", "\u0631\u0627\u0647\u0646\u0645\u0627", "\u0628\u062d\u062b_\u0631\u0627\u0647\u0646\u0645\u0627", "\u0631\u062f\u0647", "\u0628\u062d\u062b_\u0631\u062f\u0647", "\u0648\u06cc\u0698\u0647", "\u0645\u062f\u06cc\u0627", "\u0628\u062d\u062b_%s"],
			"lv": ["Diskusija", "Lietot\u0101js", "Lietot\u0101ja_diskusija", "Att\u0113ls", "Att\u0113la_diskusija", "MediaWiki", "MediaWiki_diskusija", "Veidne", "Veidnes_diskusija", "Pal\u012bdz\u012bba", "Pal\u012bdz\u012bbas_diskusija", "Kategorija", "Kategorijas_diskusija", "Special", "Media", "{{grammar:\u0123enit\u012bvs|%s}}_diskusija"],
			"lt": ["Aptarimas", "Naudotojas", "Naudotojo_aptarimas", "Vaizdas", "Vaizdo_aptarimas", "MediaWiki", "MediaWiki_aptarimas", "\u0160ablonas", "\u0160ablono_aptarimas", "Pagalba", "Pagalbos_aptarimas", "Kategorija", "Kategorijos_aptarimas", "Specialus", "Medija", "%s_aptarimas"],
			"zh-yue": ["\u50be\u5048", "\u7528\u6236", "\u7528\u6236\u50be\u5048", "\u6587\u4ef6", "\u6587\u4ef6\u50be\u5048", "MediaWiki", "MediaWiki\u50be\u5048", "\u6a21", "\u6a21\u50be\u5048", "\u5e6b\u624b", "\u5e6b\u624b\u50be\u5048", "\u5206\u985e", "\u5206\u985e\u50be\u5048", "\u7279\u5225", "\u5a92\u9ad4", "%s\u50be\u5048"],
			"tk": ["\u00c7eki\u015fme", "Ulanyjy", "Ulanyjy_\u00e7eki\u015fme", "Fa\u00fdl", "Fa\u00fdl_\u00e7eki\u015fme", "MediaWiki", "MediaWiki_\u00e7eki\u015fme", "\u015eablon", "\u015eablon_\u00e7eki\u015fme", "\u00ddardam", "\u00ddardam_\u00e7eki\u015fme", "Kategori\u00fda", "Kategori\u00fda_\u00e7eki\u015fme", "\u00dd\u00f6rite", "Media", "%s_\u00e7eki\u015fme"],
			"nds-nl": ["Overleg", "Gebruker", "Overleg_gebruker", ["Bestaand", "Ofbeelding"], ["Overleg_bestaand", "Overleg_ofbeelding"], "MediaWiki", "Overleg_MediaWiki", ["Mal", "Sjabloon"], ["Overleg_mal", "Overleg_sjabloon"], "Hulpe", ["Overleg_hulpe", "Overleg_kattegerie"], ["Kategorie", "Categorie", "Kattegerie"], ["Overleg_kategorie", "Overleg_categorie"], ["Spesiaal", "Speciaol", "Speciaal"], "Media", "Overleg_%s"],
			"tg": ["\u0411\u0430\u04b3\u0441", "\u041a\u043e\u0440\u0431\u0430\u0440", "\u0411\u0430\u04b3\u0441\u0438_\u043a\u043e\u0440\u0431\u0430\u0440", "\u0410\u043a\u0441", "\u0411\u0430\u04b3\u0441\u0438_\u0430\u043a\u0441", "\u041c\u0435\u0434\u0438\u0430\u0432\u0438\u043a\u0438", "\u0411\u0430\u04b3\u0441\u0438_\u043c\u0435\u0434\u0438\u0430\u0432\u0438\u043a\u0438", "\u0428\u0430\u0431\u043b\u043e\u043d", "\u0411\u0430\u04b3\u0441\u0438_\u0448\u0430\u0431\u043b\u043e\u043d", "\u0420\u043e\u04b3\u043d\u0430\u043c\u043e", "\u0411\u0430\u04b3\u0441\u0438_\u0440\u043e\u04b3\u043d\u0430\u043c\u043e", "\u0413\u0443\u0440\u04ef\u04b3", "\u0411\u0430\u04b3\u0441\u0438_\u0433\u0443\u0440\u04ef\u04b3", "\u0412\u0438\u0436\u0430", "\u041c\u0435\u0434\u0438\u0430", "\u0411\u0430\u04b3\u0441\u0438_%s"],
			"te": ["\u0c1a\u0c30\u0c4d\u0c1a", ["\u0c35\u0c3e\u0c21\u0c41\u0c15\u0c30\u0c3f", "\u0c38\u0c2d\u0c4d\u0c2f\u0c41\u0c32\u0c41"], ["\u0c35\u0c3e\u0c21\u0c41\u0c15\u0c30\u0c3f_\u0c1a\u0c30\u0c4d\u0c1a", "\u0c38\u0c2d\u0c4d\u0c2f\u0c41\u0c28\u0c3f\u0c2a\u0c48_\u0c1a\u0c30\u0c4d\u0c1a", "\u0c38\u0c2d\u0c4d\u0c2f\u0c41\u0c32\u0c2a\u0c48_\u0c1a\u0c30\u0c4d\u0c1a"], ["\u0c26\u0c38\u0c4d\u0c24\u0c4d\u0c30\u0c02", "\u0c2c\u0c4a\u0c2e\u0c4d\u0c2e", "\u0c2b\u0c48\u0c32\u0c41"], ["\u0c26\u0c38\u0c4d\u0c24\u0c4d\u0c30\u0c02\u0c2a\u0c48_\u0c1a\u0c30\u0c4d\u0c1a", "\u0c2b\u0c48\u0c32\u0c41\u0c2a\u0c48_\u0c1a\u0c30\u0c4d\u0c1a", "\u0c2c\u0c4a\u0c2e\u0c4d\u0c2e\u0c2a\u0c48_\u0c1a\u0c30\u0c4d\u0c1a"], "\u0c2e\u0c40\u0c21\u0c3f\u0c2f\u0c3e\u0c35\u0c3f\u0c15\u0c40", "\u0c2e\u0c40\u0c21\u0c3f\u0c2f\u0c3e\u0c35\u0c3f\u0c15\u0c40_\u0c1a\u0c30\u0c4d\u0c1a", "\u0c2e\u0c42\u0c38", "\u0c2e\u0c42\u0c38_\u0c1a\u0c30\u0c4d\u0c1a", ["\u0c38\u0c39\u0c3e\u0c2f\u0c02", "\u0c38\u0c39\u0c3e\u0c2f\u0c2e\u0c41"], ["\u0c38\u0c39\u0c3e\u0c2f\u0c02_\u0c1a\u0c30\u0c4d\u0c1a", "\u0c38\u0c39\u0c3e\u0c2f\u0c2e\u0c41_\u0c1a\u0c30\u0c4d\u0c1a"], "\u0c35\u0c30\u0c4d\u0c17\u0c02", "\u0c35\u0c30\u0c4d\u0c17\u0c02_\u0c1a\u0c30\u0c4d\u0c1a", "\u0c2a\u0c4d\u0c30\u0c24\u0c4d\u0c2f\u0c47\u0c15", "\u0c2e\u0c40\u0c21\u0c3f\u0c2f\u0c3e", "%s_\u0c1a\u0c30\u0c4d\u0c1a"],
			"zh-sg": ["\u8ba8\u8bba", "\u7528\u6237", "\u7528\u6237\u8ba8\u8bba", "\u6587\u4ef6", "\u6587\u4ef6\u8ba8\u8bba", "MediaWiki", "MediaWiki\u8ba8\u8bba", "\u6a21\u677f", "\u6a21\u677f\u8ba8\u8bba", "\u5e2e\u52a9", "\u5e2e\u52a9\u8ba8\u8bba", "\u5206\u7c7b", "\u5206\u7c7b\u8ba8\u8bba", "\u7279\u6b8a", "\u5a92\u4f53\u6587\u4ef6", "%s\u8ba8\u8bba"],
			"ksh": ["Klaaf", ["Metmaacher", "Metmaacherin", "Medmaacher", "Medmaacherin", "Medmaacheren", "Metmaacheren"], ["Metmaacher_Klaaf", "Medmaacher_Klaaf"], ["Datei", "Belld", "Beld"], ["Dateie_Klaaf", "Belder_Klaaf", "Bellder_Klaaf"], ["MediaWiki", "MedijaWikki"], ["MediaWiki_Klaaf", "MedijaWikki_Klaaf"], "Schablon", "Schablone_Klaaf", ["H\u00f6lp", "H\u00fclp"], ["H\u00f6lp_Klaaf", "H\u00fclp_Klaaf"], ["Saachjrupp", "Saachjropp", "Saachjrop", "Kategorie", "Katejori", "Kattejori", "Sachjrop"], ["Saachjruppe_Klaaf", "Saachjroppe_Klaaf", "Saachjrupp_Klaaf", "Sachjrop_Klaaf", "Kattejorije_Klaaf", "Kategorie_Klaaf", "Kattejori_Klaaf", "Katejorije_Klaaf"], ["Extra", "Shpezjal", "Spezial"], ["Medie", "Medium", "Meedije", "Meedijum"], "%s_Klaaf"],
			"pcd": ["Discussion", "Utilisateur", "Discussion_utilisateur", "Fichier", "Discussion_fichier", "MediaWiki", "Discussion_MediaWiki", "Mod\u00e8le", "Discussion_mod\u00e8le", "Aide", "Discussion_aide", "Cat\u00e9gorie", "Discussion_cat\u00e9gorie", "Sp\u00e9cial", "M\u00e9dia", "Discussion_%s"],
			"haw": ["K\u016bk\u0101k\u016bk\u0101", "Mea_ho\u02bbohana", "K\u016bk\u0101k\u016bk\u0101_o_mea_ho\u02bbohana", ["Waihona", "Ki\u02bbi"], ["K\u016bk\u0101k\u016bk\u0101_o_waihona", "K\u016bk\u0101k\u016bk\u0101_o_ki\u02bbi"], "MediaWiki", "K\u016bk\u0101k\u016bk\u0101_o_MediaWiki", "Anakuhi", "K\u016bk\u0101k\u016bk\u0101_o_anakuhi", "K\u014dkua", "K\u016bk\u0101k\u016bk\u0101_o_k\u014dkua", "M\u0101hele", "K\u016bk\u0101k\u016bk\u0101_o_m\u0101hele", "Papa_nui", "P\u0101paho", "K\u016bk\u0101k\u016bk\u0101_o_Wikipikia"],
			"rmy": ["Vakyarimata", "Jeno", "Jeno_vakyarimata", "Chitro", "Chitro_vakyarimata", "MediyaViki", "MediyaViki_vakyarimata", "Sikavno", "Sikavno_vakyarimata", "Zhutipen", "Zhutipen_vakyarimata", "Shopni", "Shopni_vakyarimata", "Uzalutno", "Mediya", "{{grammar:genitive-pl|%s}}_vakyarimata"],
			"lzz": [["\u011ear\u011fala", "Tart\u0131\u015fma"], ["Maxmare", "Kullan\u0131c\u0131"], ["Maxmare_mesaji", "Kullan\u0131c\u0131_mesaj"], ["Dosya", "Dosya"], ["Dosya_\u011far\u011fala", "Dosya_tart\u0131\u015fma"], "MediaWiki", ["MediaWiki_\u011far\u011fala", "MediaWiki_tart\u0131\u015fma"], ["\u015eabloni", "\u015eablon"], ["\u015eabloni_\u011far\u011fala", "\u015eablon_tart\u0131\u015fma"], ["Me\u015fvela", "Yard\u0131m"], ["Me\u015fvela_\u011far\u011fala", "Yard\u0131m_tart\u0131\u015fma"], ["K\u02bcat\u02bcegori", "Kategori"], ["K\u02bcat\u02bcegori_\u011far\u011fala", "Kategori_tart\u0131\u015fma"], ["Doxmeli", "\u00d6zel"], ["Medya", "Medya"], ["%s_\u011far\u011fala", "$1_tart\u0131\u015fma"]],
			"ceb": ["Hisgot", "Gumagamit", "Hisgot_sa_Gumagamit", ["Payl", "Imahen"], ["Hisgot_sa_Payl", "Hisgot_sa_Imahen"], "MediaWiki", "Hisgot_sa_MediaWiki", "Plantilya", "Hisgot_sa_Plantilya", "Tabang", "Hisgot_sa_Tabang", "Kategoriya", "Hisgot_sa_Kategoriya", "Espesyal", "Medya", ["Hisgot_sa_%s", "Hisgot_sa$1"]],
			"yo": ["\u1ecc\u0300r\u1ecd\u0300", "On\u00ed\u1e63e", "\u1ecc\u0300r\u1ecd\u0300_on\u00ed\u1e63e", ["F\u00e1\u00ecl\u00ec", "\u00c0w\u00f2r\u00e1n"], ["\u1ecc\u0300r\u1ecd\u0300_f\u00e1\u00ecl\u00ec", "\u1ecc\u0300r\u1ecd\u0300_\u00e0w\u00f2r\u00e1n"], "MediaWiki", "\u1ecc\u0300r\u1ecd\u0300_mediaWiki", "\u00c0d\u00e0k\u1ecd", "\u1ecc\u0300r\u1ecd\u0300_\u00e0d\u00e0k\u1ecd", "\u00ccr\u00e0nl\u1ecd\u0301w\u1ecd\u0301", "\u1ecc\u0300r\u1ecd\u0300_\u00ecr\u00e0nl\u1ecd\u0301w\u1ecd\u0301", "\u1eb8\u0300ka", "\u1ecc\u0300r\u1ecd\u0300_\u1eb9\u0300ka", "P\u00e0t\u00e0k\u00ec", "Am\u00f3h\u00f9nm\u00e1w\u00f2r\u00e1n", "\u1ecc\u0300r\u1ecd\u0300_%s"],
			"kk-kz": ["\u0422\u0430\u043b\u049b\u044b\u043b\u0430\u0443", "\u049a\u0430\u0442\u044b\u0441\u0443\u0448\u044b", "\u049a\u0430\u0442\u044b\u0441\u0443\u0448\u044b_\u0442\u0430\u043b\u049b\u044b\u043b\u0430\u0443\u044b", "\u0421\u0443\u0440\u0435\u0442", "\u0421\u0443\u0440\u0435\u0442_\u0442\u0430\u043b\u049b\u044b\u043b\u0430\u0443\u044b", "\u041c\u0435\u0434\u0438\u0430\u0423\u0438\u043a\u0438", "\u041c\u0435\u0434\u0438\u0430\u0423\u0438\u043a\u0438_\u0442\u0430\u043b\u049b\u044b\u043b\u0430\u0443\u044b", "\u04ae\u043b\u0433\u0456", "\u04ae\u043b\u0433\u0456_\u0442\u0430\u043b\u049b\u044b\u043b\u0430\u0443\u044b", "\u0410\u043d\u044b\u049b\u0442\u0430\u043c\u0430", "\u0410\u043d\u044b\u049b\u0442\u0430\u043c\u0430_\u0442\u0430\u043b\u049b\u044b\u043b\u0430\u0443\u044b", "\u0421\u0430\u043d\u0430\u0442", "\u0421\u0430\u043d\u0430\u0442_\u0442\u0430\u043b\u049b\u044b\u043b\u0430\u0443\u044b", "\u0410\u0440\u043d\u0430\u0439\u044b", "\u0422\u0430\u0441\u043f\u0430", "%s_\u0442\u0430\u043b\u049b\u044b\u043b\u0430\u0443\u044b"],
			"vep": ["Lodu", "K\u00e4vutai", "Lodu_k\u00e4vutajas", "Fail", "Lodu_failas", "MediaWiki", "Lodu_MediaWiki\u0161", "\u0160ablon", "Lodu_\u0161ablonas", "Abu", "Lodu_abus", "Kategorii", "Lodu_kategorijas", "Specialine", "Media", "Lodu_%s-saitas"],
			"de": ["Diskussion", "Benutzer", "Benutzer_Diskussion", ["Datei", "Bild"], ["Datei_Diskussion", "Bild_Diskussion"], "MediaWiki", "MediaWiki_Diskussion", "Vorlage", "Vorlage_Diskussion", "Hilfe", "Hilfe_Diskussion", "Kategorie", "Kategorie_Diskussion", "Spezial", "Medium", "%s_Diskussion"],
			"vo": ["Bespik", "Geban", "Gebanibespik", ["Ragiv", "Magod"], ["Ragivibespik", "Magodibespik"], "Sitanuns", "Bespik_d\u00f6_sitanuns", "Samafomot", "Samafomotibespik", "Yuf", "Yufibespik", "Klad", "Kladibespik", "Patikos", "N\u00fcnamakan\u00e4d", "Bespik_d\u00f6_%s"],
			"da": ["Diskussion", "Bruger", "Brugerdiskussion", ["Fil", "Billede"], ["Fildiskussion", "Billeddiskussion"], "MediaWiki", ["MediaWiki_diskussion", "MediaWiki-diskussion"], "Skabelon", "Skabelondiskussion", "Hj\u00e6lp", ["Hj\u00e6lp_diskussion", "Hj\u00e6lp-diskussion"], "Kategori", "Kategoridiskussion", "Speciel", "Media", ["%s_diskussion", "$1-diskussion"]],
			"za": ["\u8ba8\u8bba", "\u7528\u6237", "\u7528\u6237\u8ba8\u8bba", "\u6587\u4ef6", "\u6587\u4ef6\u8ba8\u8bba", "MediaWiki", "MediaWiki\u8ba8\u8bba", "\u6a21\u677f", "\u6a21\u677f\u8ba8\u8bba", "\u5e2e\u52a9", "\u5e2e\u52a9\u8ba8\u8bba", "\u5206\u7c7b", "\u5206\u7c7b\u8ba8\u8bba", "\u7279\u6b8a", "\u5a92\u4f53\u6587\u4ef6", "%s\u8ba8\u8bba"],
			"ta": ["\u0baa\u0bc7\u0b9a\u0bcd\u0b9a\u0bc1", "\u0baa\u0baf\u0ba9\u0bb0\u0bcd", "\u0baa\u0baf\u0ba9\u0bb0\u0bcd_\u0baa\u0bc7\u0b9a\u0bcd\u0b9a\u0bc1", "\u0baa\u0b9f\u0bbf\u0bae\u0bae\u0bcd", ["\u0baa\u0b9f\u0bbf\u0bae\u0baa\u0bcd_\u0baa\u0bc7\u0b9a\u0bcd\u0b9a\u0bc1", "\u0b89\u0bb0\u0bc1\u0bb5\u0baa\u0bcd_\u0baa\u0bc7\u0b9a\u0bcd\u0b9a\u0bc1"], "\u0bae\u0bc0\u0b9f\u0bbf\u0baf\u0bbe\u0bb5\u0bbf\u0b95\u0bcd\u0b95\u0bbf", "\u0bae\u0bc0\u0b9f\u0bbf\u0baf\u0bbe\u0bb5\u0bbf\u0b95\u0bcd\u0b95\u0bbf_\u0baa\u0bc7\u0b9a\u0bcd\u0b9a\u0bc1", "\u0bb5\u0bbe\u0bb0\u0bcd\u0baa\u0bcd\u0baa\u0bc1\u0bb0\u0bc1", "\u0bb5\u0bbe\u0bb0\u0bcd\u0baa\u0bcd\u0baa\u0bc1\u0bb0\u0bc1_\u0baa\u0bc7\u0b9a\u0bcd\u0b9a\u0bc1", "\u0b89\u0ba4\u0bb5\u0bbf", "\u0b89\u0ba4\u0bb5\u0bbf_\u0baa\u0bc7\u0b9a\u0bcd\u0b9a\u0bc1", "\u0baa\u0b95\u0bc1\u0baa\u0bcd\u0baa\u0bc1", "\u0baa\u0b95\u0bc1\u0baa\u0bcd\u0baa\u0bc1_\u0baa\u0bc7\u0b9a\u0bcd\u0b9a\u0bc1", "\u0b9a\u0bbf\u0bb1\u0baa\u0bcd\u0baa\u0bc1", "\u0b8a\u0b9f\u0b95\u0bae\u0bcd", ["%s_\u0baa\u0bc7\u0b9a\u0bcd\u0b9a\u0bc1", "\u0bb5\u0bbf\u0b95\u0bcd\u0b95\u0bbf\u0baa\u0bc0\u0b9f\u0bbf\u0baf\u0bbe_\u0baa\u0bc7\u0b9a\u0bcd\u0b9a\u0bc1"]],
			"hif": ["baat", "sadasya", "sadasya_ke_baat", "file", "file_ke_baat", "MediaWiki", "Mediawiki_ke_baat", "Template", "Template_ke_baat", "madat", "madat_ke_baat", "vibhag", "voibhag_ke_baat", "khaas", "saadhan", "%s_baat"],
			"new": ["\u0916\u0901\u0932\u093e\u092c\u0901\u0932\u093e", "\u091b\u094d\u092f\u0947\u0932\u0947\u092e\u093f", "\u091b\u094d\u092f\u0947\u0932\u0947\u092e\u093f_\u0916\u0901\u0932\u093e\u092c\u0901\u0932\u093e", "\u0915\u093f\u092a\u093e", "\u0915\u093f\u092a\u093e_\u0916\u0901\u0932\u093e\u092c\u0901\u0932\u093e", "\u092e\u093f\u0921\u093f\u092f\u093e\u0935\u093f\u0915\u093f", "\u092e\u093f\u0921\u093f\u092f\u093e\u0935\u093f\u0915\u093f_\u0916\u0901\u0932\u093e\u092c\u0901\u0932\u093e", "Template", "Template_talk", "\u0917\u094d\u0935\u093e\u0939\u093e\u0932\u093f", "\u0917\u094d\u0935\u093e\u0939\u093e\u0932\u093f_\u0916\u0901\u0932\u093e\u092c\u0901\u0932\u093e", "\u092a\u0941\u091a\u0903", "\u092a\u0941\u091a\u0903_\u0916\u0901\u0932\u093e\u092c\u0901\u0932\u093e", "\u0935\u093f\u0936\u0947\u0937", "\u092e\u093e\u0927\u094d\u092f\u092e", "%s_\u0916\u0901\u0932\u093e\u092c\u0901\u0932\u093e"],
			"dv": ["\u079a\u07a8\u0794\u07a7\u078d\u07aa", "\u0789\u07ac\u0789\u07b0\u0784\u07a6\u0783\u07aa", "User_talk", "\u078a\u07a6\u0787\u07a8\u078d\u07b0", "\u078a\u07a6\u0787\u07a8\u078d\u07b0_\u079a\u07a8\u0794\u07a7\u078d\u07aa", "\u0789\u07a9\u0791\u07a8\u0787\u07a7\u0788\u07a8\u0786\u07a9", "\u0789\u07a9\u0791\u07a8\u0794\u07a7\u0788\u07a8\u0786\u07a8_\u079a\u07a8\u0794\u07a7\u078d\u07aa", "\u078a\u07a6\u0782\u07b0\u0788\u07a6\u078c\u07b0", "\u078a\u07a6\u0782\u07b0\u0788\u07a6\u078c\u07b0_\u079a\u07a8\u0794\u07a7\u078d\u07aa", "\u0787\u07ac\u0780\u07a9", "\u0787\u07ac\u0780\u07a9_\u079a\u07a8\u0794\u07a7\u078d\u07aa", "\u07a4\u07a8\u0790\u07b0\u0789\u07aa", "\u07a4\u07a8\u0790\u07b0\u0789\u07aa_\u079a\u07a8\u0794\u07a7\u078d\u07aa", "\u0780\u07a7\u0787\u07b0\u079e\u07a6", "Media", "%s_talk"],
			"li": ["Euverl\u00e8k", "Gebroeker", "Euverl\u00e8k_gebroeker", ["Plaetje", "Aafbeilding"], ["Euverl\u00e8k_plaetje", "Euverl\u00e8k_afbeelding"], "MediaWiki", "Euverl\u00e8k_MediaWiki", "Sjabloon", "Euverl\u00e8k_sjabloon", "Help", "Euverl\u00e8k_help", ["Categorie", "Kategorie"], ["Euverl\u00e8k_categorie", "Euverl\u00e8k_kategorie"], "Speciaal", "Media", "Euverl\u00e8k_%s"],
			"vls": ["Discuusje", "Gebruker", "Discuusje_gebruker", "Ofbeeldienge", "Discuusje_ofbeeldienge", "MediaWiki", "Discuusje_MediaWiki", "Patr\u00f4on", "Discuusje_patr\u00f4on", "Ulpe", "Discuusje_ulpe", "Categorie", "Discuusje_categorie", "Specioal", "Media", "Discuusje_%s"],
			"koi": ["\u041e\u0431\u0441\u0443\u0436\u0434\u0435\u043d\u0438\u0435", "\u0423\u0447\u0430\u0441\u0442\u043d\u0438\u043a", "\u041e\u0431\u0441\u0443\u0436\u0434\u0435\u043d\u0438\u0435_\u0443\u0447\u0430\u0441\u0442\u043d\u0438\u043a\u0430", "\u0424\u0430\u0439\u043b", "\u041e\u0431\u0441\u0443\u0436\u0434\u0435\u043d\u0438\u0435_\u0444\u0430\u0439\u043b\u0430", "MediaWiki", "\u041e\u0431\u0441\u0443\u0436\u0434\u0435\u043d\u0438\u0435_MediaWiki", "\u0428\u0430\u0431\u043b\u043e\u043d", "\u041e\u0431\u0441\u0443\u0436\u0434\u0435\u043d\u0438\u0435_\u0448\u0430\u0431\u043b\u043e\u043d\u0430", "\u0421\u043f\u0440\u0430\u0432\u043a\u0430", "\u041e\u0431\u0441\u0443\u0436\u0434\u0435\u043d\u0438\u0435_\u0441\u043f\u0440\u0430\u0432\u043a\u0438", "\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044f", "\u041e\u0431\u0441\u0443\u0436\u0434\u0435\u043d\u0438\u0435_\u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u0438", "\u0421\u043b\u0443\u0436\u0435\u0431\u043d\u0430\u044f", "\u041c\u0435\u0434\u0438\u0430", "\u041e\u0431\u0441\u0443\u0436\u0434\u0435\u043d\u0438\u0435_{{GRAMMAR:genitive|%s}}"],
			"bar": ["Diskussion", "Benutzer", "Benutzer_Diskussion", "Datei", "Datei_Diskussion", "MediaWiki", "MediaWiki_Diskussion", "Vorlage", "Vorlage_Diskussion", "Hilfe", "Hilfe_Diskussion", "Kategorie", "Kategorie_Diskussion", "Spezial", "Medium", "%s_Diskussion"],
			"war": ["Hiruhimangraw", "Gumaramit", "Hiruhimangaw_hiton_gumaramit", ["Paypay", "Fayl"], ["Hiruhimangraw_hiton_paypay", "Hiruhimangraw_hiton_fayl"], "MedyaWiki", ["Hiruhimangraw_hiton_MedyaWiki", "Hiruhimangraw_hiton_MediaWiki"], "Batakan", "Hiruhimangraw_hiton_batakan", "Bulig", "Hiruhimangaw_hiton_bulig", "Kaarangay", "Hiruhimangraw_hiton_kaarangay", "Pinaurog", "Medya", "Hiruhimangraw_hiton_%s"],
			"zh-hans": [["\u8ba8\u8bba", "\u8ba8\u8bba", "\u5bf9\u8bdd"], ["\u7528\u6237", "\u7528\u6237"], ["\u7528\u6237\u8ba8\u8bba", "\u7528\u6237\u5bf9\u8bdd", "\u7528\u6237\u8ba8\u8bba"], ["\u6587\u4ef6", "\u6587\u4ef6", "\u56fe\u50cf", "\u6863\u6848", "Image"], ["\u6587\u4ef6\u8ba8\u8bba", "Image_talk", "\u56fe\u50cf\u8ba8\u8bba", "\u6587\u4ef6\u5bf9\u8bdd", "\u56fe\u50cf\u5bf9\u8bdd", "\u6863\u6848\u5bf9\u8bdd", "\u6863\u6848\u8ba8\u8bba", "\u6587\u4ef6\u8ba8\u8bba"], "MediaWiki", "MediaWiki\u8ba8\u8bba", ["\u6a21\u677f", "\u6a21\u677f"], ["\u6a21\u677f\u8ba8\u8bba", "\u6a21\u677f\u8ba8\u8bba", "\u6a21\u677f\u5bf9\u8bdd"], ["\u5e2e\u52a9", "\u5e2e\u52a9"], ["\u5e2e\u52a9\u8ba8\u8bba", "\u5e2e\u52a9\u8ba8\u8bba", "\u5e2e\u52a9\u5bf9\u8bdd"], ["\u5206\u7c7b", "\u5206\u7c7b"], ["\u5206\u7c7b\u8ba8\u8bba", "\u5206\u7c7b\u8ba8\u8bba", "\u5206\u7c7b\u5bf9\u8bdd"], ["\u7279\u6b8a", "\u7279\u6b8a"], ["\u5a92\u4f53\u6587\u4ef6", "\u5a92\u4f53"], "%s\u8ba8\u8bba"],
			"eml": ["Discussione", "Utente", "Discussioni_utente", "File", "Discussioni_file", "MediaWiki", "Discussioni_MediaWiki", "Template", "Discussioni_template", "Aiuto", "Discussioni_aiuto", "Categoria", "Discussioni_categoria", "Speciale", "Media", "Discussioni_%s"],
			"de-ch": ["Diskussion", "Benutzer", "Benutzer_Diskussion", "Datei", "Datei_Diskussion", "MediaWiki", "MediaWiki_Diskussion", "Vorlage", "Vorlage_Diskussion", "Hilfe", "Hilfe_Diskussion", "Kategorie", "Kategorie_Diskussion", "Spezial", "Medium", "%s_Diskussion"],
			"zh-hant": [["\u8a0e\u8ad6", "\u5c0d\u8a71", "\u8a0e\u8ad6"], ["\u7528\u6236", "\u7528\u6236"], ["\u7528\u6236\u8a0e\u8ad6", "\u7528\u6236\u5c0d\u8a71", "\u7528\u6236\u8a0e\u8ad6"], ["\u6a94\u6848", "\u5716\u50cf", "\u6587\u4ef6", "\u6a94\u6848", "Image"], ["\u6a94\u6848\u8a0e\u8ad6", "\u6587\u4ef6\u5c0d\u8a71", "\u6a94\u6848\u8a0e\u8ad6", "\u5716\u50cf\u8a0e\u8ad6", "\u6a94\u6848\u5c0d\u8a71", "\u5716\u50cf\u5c0d\u8a71", "\u6587\u4ef6\u8a0e\u8ad6", "Image_talk"], "MediaWiki", "MediaWiki\u8a0e\u8ad6", ["\u6a21\u677f", "\u6a23\u677f", "\u6a21\u677f"], ["\u6a21\u677f\u8a0e\u8ad6", "\u6a23\u677f\u5c0d\u8a71", "\u6a21\u677f\u8a0e\u8ad6", "\u6a21\u677f\u5c0d\u8a71", "\u6a23\u677f\u8a0e\u8ad6"], ["\u5e6b\u52a9", "\u5e6b\u52a9"], ["\u5e6b\u52a9\u8a0e\u8ad6", "\u5e6b\u52a9\u5c0d\u8a71", "\u5e6b\u52a9\u8a0e\u8ad6"], ["\u5206\u985e", "\u5206\u985e"], ["\u5206\u985e\u8a0e\u8ad6", "\u5206\u985e\u5c0d\u8a71", "\u5206\u985e\u8a0e\u8ad6"], ["\u7279\u6b8a", "\u7279\u6b8a"], ["\u5a92\u9ad4", "\u5a92\u9ad4"], "%s\u8a0e\u8ad6"],
			"tt-cyrl": [["\u0411\u04d9\u0445\u04d9\u0441", "\u041e\u0431\u0441\u0443\u0436\u0434\u0435\u043d\u0438\u0435", "B\u00e4x\u00e4s"], ["\u041a\u0443\u043b\u043b\u0430\u043d\u0443\u0447\u044b", "\u0423\u0447\u0430\u0441\u0442\u043d\u0438\u0446\u0430", "\u00c4\u011fz\u00e4", "\u0423\u0447\u0430\u0441\u0442\u043d\u0438\u043a"], ["\u041a\u0443\u043b\u043b\u0430\u043d\u0443\u0447\u044b_\u0431\u04d9\u0445\u04d9\u0441\u0435", "\u00c4\u011fz\u00e4_b\u00e4x\u00e4se", "\u041e\u0431\u0441\u0443\u0436\u0434\u0435\u043d\u0438\u0435_\u0443\u0447\u0430\u0441\u0442\u043d\u0438\u043a\u0430"], ["\u0424\u0430\u0439\u043b", "\u0420\u04d9\u0441\u0435\u043c", "\u0418\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435", "R\u00e4sem"], ["\u0424\u0430\u0439\u043b_\u0431\u04d9\u0445\u04d9\u0441\u0435", "R\u00e4sem_b\u00e4x\u00e4se", "\u0420\u04d9\u0441\u0435\u043c_\u0431\u04d9\u0445\u04d9\u0441\u0435", "\u041e\u0431\u0441\u0443\u0436\u0434\u0435\u043d\u0438\u0435_\u0444\u0430\u0439\u043b\u0430", "\u041e\u0431\u0441\u0443\u0436\u0434\u0435\u043d\u0438\u0435_\u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f"], ["\u041c\u0435\u0434\u0438\u0430\u0412\u0438\u043a\u0438", "\u041c\u0435\u0434\u0438\u0430_\u0412\u0438\u043a\u0438"], ["\u041c\u0435\u0434\u0438\u0430\u0412\u0438\u043a\u0438_\u0431\u04d9\u0445\u04d9\u0441\u0435", "MediaWiki_b\u00e4x\u00e4se", "\u041c\u0435\u0434\u0438\u0430_\u0412\u0438\u043a\u0438_\u0431\u04d9\u0445\u04d9\u0441\u0435", "\u041e\u0431\u0441\u0443\u0436\u0434\u0435\u043d\u0438\u0435_MediaWiki"], ["\u041a\u0430\u043b\u044b\u043f", "\u04ae\u0440\u043d\u04d9\u043a", "\u00dcrn\u00e4k", "\u0428\u0430\u0431\u043b\u043e\u043d"], ["\u041a\u0430\u043b\u044b\u043f_\u0431\u04d9\u0445\u04d9\u0441\u0435", "\u00dcrn\u00e4k_b\u00e4x\u00e4se", "\u041e\u0431\u0441\u0443\u0436\u0434\u0435\u043d\u0438\u0435_\u0448\u0430\u0431\u043b\u043e\u043d\u0430", "\u04ae\u0440\u043d\u04d9\u043a_\u0431\u04d9\u0445\u04d9\u0441\u0435", "\u0428\u0430\u0431\u043b\u043e\u043d_\u0431\u04d9\u0445\u04d9\u0441\u0435"], ["\u042f\u0440\u0434\u04d9\u043c", "\u0421\u043f\u0440\u0430\u0432\u043a\u0430", "Y\u00e4rd\u00e4m"], ["\u042f\u0440\u0434\u04d9\u043c_\u0431\u04d9\u0445\u04d9\u0441\u0435", "\u041e\u0431\u0441\u0443\u0436\u0434\u0435\u043d\u0438\u0435_\u0441\u043f\u0440\u0430\u0432\u043a\u0438", "Y\u00e4rd\u00e4m_b\u00e4x\u00e4se"], ["\u0422\u04e9\u0440\u043a\u0435\u043c", "\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044f", "T\u00f6rkem"], ["\u0422\u04e9\u0440\u043a\u0435\u043c_\u0431\u04d9\u0445\u04d9\u0441\u0435", "\u041e\u0431\u0441\u0443\u0436\u0434\u0435\u043d\u0438\u0435_\u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u0438", "T\u00f6rkem_b\u00e4x\u00e4se"], ["\u041c\u0430\u0445\u0441\u0443\u0441", "\u0421\u043b\u0443\u0436\u0435\u0431\u043d\u0430\u044f", "Maxsus"], "\u041c\u0435\u0434\u0438\u0430", ["%s_\u0431\u04d9\u0445\u04d9\u0441\u0435", "\u041e\u0431\u0441\u0443\u0436\u0434\u0435\u043d\u0438\u0435_{{GRAMMAR:genitive|$1}}", "$1_b\u00e4x\u00e4se"]],
			"bpy": ["\u09af\u09bc\u09cd\u09af\u09be\u09b0\u09c0", "\u0986\u09a4\u09be\u0995\u09c1\u09b0\u09be", "\u0986\u09a4\u09be\u0995\u09c1\u09b0\u09be\u09b0_\u09af\u09bc\u09cd\u09af\u09be\u09b0\u09c0", "\u099b\u09ac\u09bf", "\u099b\u09ac\u09bf_\u09af\u09bc\u09cd\u09af\u09be\u09b0\u09c0", "\u09ae\u09bf\u09a1\u09bf\u09af\u09bc\u09be\u0989\u0987\u0995\u09bf", "\u09ae\u09bf\u09a1\u09bf\u09af\u09bc\u09be\u0989\u0987\u0995\u09bf\u09b0_\u09af\u09bc\u09cd\u09af\u09be\u09b0\u09c0", "\u09ae\u09a1\u09c7\u09b2", "\u09ae\u09a1\u09c7\u09b2\u09b0_\u09af\u09bc\u09cd\u09af\u09be\u09b0\u09c0", "\u09aa\u09be\u0982\u09b2\u09be\u0995", "\u09aa\u09be\u0982\u09b2\u09be\u0995\u09b0_\u09af\u09bc\u09cd\u09af\u09be\u09b0\u09c0", "\u09a5\u09be\u0995", "\u09a5\u09be\u0995\u09b0_\u09af\u09bc\u09cd\u09af\u09be\u09b0\u09c0", "\u09ac\u09bf\u09b6\u09c7\u09b7", "\u09ae\u09bf\u09a1\u09bf\u09af\u09bc\u09be", "%s_\u09af\u09bc\u09cd\u09af\u09be\u09b0\u09c0"],
			"crh": ["Muzakere", "Qullan\u0131c\u0131", "Qullan\u0131c\u0131_muzakeresi", "Fayl", "Fayl_muzakeresi", "MediaViki", "MediaViki_muzakeresi", "\u015eablon", "\u015eablon_muzakeresi", "Yard\u0131m", "Yard\u0131m_muzakeresi", "Kategoriya", "Kategoriya_muzakeresi", "Mahsus", "Media", "%s_muzakeresi"],
			"mhr": [["\u041a\u0430\u04a5\u0430\u0448\u044b\u043c\u0430\u0448", "\u041e\u0431\u0441\u0443\u0436\u0434\u0435\u043d\u0438\u0435"], ["\u041f\u0430\u0439\u0434\u0430\u043b\u0430\u043d\u044b\u0448\u0435", "\u0423\u0447\u0430\u0441\u0442\u043d\u0438\u043a"], ["\u041f\u0430\u0439\u0434\u0430\u043b\u0430\u043d\u044b\u0448\u044b\u043d_\u043a\u0430\u04a5\u0430\u0448\u044b\u043c\u0430\u0448", "\u041e\u0431\u0441\u0443\u0436\u0434\u0435\u043d\u0438\u0435_\u0443\u0447\u0430\u0441\u0442\u043d\u0438\u043a\u0430"], ["\u0424\u0430\u0439\u043b", "\u0424\u0430\u0439\u043b"], ["\u0424\u0430\u0439\u043b_\u0448\u043e\u0442\u044b\u0448\u0442\u043e_\u043a\u0430\u04a5\u0430\u0448\u044b\u043c\u0430\u0448", "\u041e\u0431\u0441\u0443\u0436\u0434\u0435\u043d\u0438\u0435_\u0444\u0430\u0439\u043b\u0430", "\u0424\u0430\u0439\u043b\u044b\u043d_\u043a\u0430\u04a5\u0430\u0448\u044b\u043c\u0430\u0448"], "MediaWiki", "\u041e\u0431\u0441\u0443\u0436\u0434\u0435\u043d\u0438\u0435_MediaWiki", ["\u041a\u044b\u0448\u043a\u0430\u0440", "\u0428\u0430\u0431\u043b\u043e\u043d", "\u042f\u043c\u0434\u044b\u043b\u044b\u043a"], ["\u041a\u044b\u0448\u043a\u0430\u0440_\u0448\u043e\u0442\u044b\u0448\u0442\u043e_\u043a\u0430\u04a5\u0430\u0448\u044b\u043c\u0430\u0448", "\u042f\u043c\u0434\u044b\u043b\u044b\u043a_\u0448\u043e\u0442\u044b\u0448\u0442\u043e_\u043a\u0430\u04a5\u0430\u0448\u044b\u043c\u0430\u0448", "\u042f\u043c\u0434\u044b\u043b\u044b\u043a\u044b\u043d_\u043a\u0430\u04a5\u0430\u0448\u044b\u043c\u0430\u0448", "\u041e\u0431\u0441\u0443\u0436\u0434\u0435\u043d\u0438\u0435_\u0448\u0430\u0431\u043b\u043e\u043d\u0430"], ["\u041f\u043e\u043b\u0448\u044b\u043a", "\u0421\u043f\u0440\u0430\u0432\u043a\u0430"], ["\u041f\u043e\u043b\u0448\u044b\u043a_\u0448\u043e\u0442\u044b\u0448\u0442\u043e_\u043a\u0430\u04a5\u0430\u0448\u044b\u043c\u0430\u0448", "\u041f\u043e\u043b\u0448\u044b\u043a\u044b\u043d_\u043a\u0430\u04a5\u0430\u0448\u044b\u043c\u0430\u0448", "\u041e\u0431\u0441\u0443\u0436\u0434\u0435\u043d\u0438\u0435_\u0441\u043f\u0440\u0430\u0432\u043a\u0438"], ["\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u0439", "\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044f"], ["\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u0439_\u0448\u043e\u0442\u044b\u0448\u0442\u043e_\u043a\u0430\u04a5\u0430\u0448\u044b\u043c\u0430\u0448", "\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u0439\u044b\u043d_\u043a\u0430\u04a5\u0430\u0448\u044b\u043c\u0430\u0448", "\u041e\u0431\u0441\u0443\u0436\u0434\u0435\u043d\u0438\u0435_\u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u0438"], ["\u041b\u04f1\u043c\u044b\u043d_\u044b\u0448\u0442\u044b\u043c\u0435", "\u0421\u043b\u0443\u0436\u0435\u0431\u043d\u0430\u044f"], "\u041c\u0435\u0434\u0438\u0430", ["%s\u044b\u043d_\u043a\u0430\u04a5\u0430\u0448\u044b\u043c\u0430\u0448", "\u041e\u0431\u0441\u0443\u0436\u0434\u0435\u043d\u0438\u0435_{{GRAMMAR:genitive|$1}}"]],
			"diq": ["Wer\u00eanay\u0131\u015f", "Karber", ["Karber_wer\u00eanay\u0131\u015f", "Karber_mesac"], "Dosya", "Dosya_wer\u00eanay\u0131\u015f", "MediaWiki", "MediaWiki_wer\u00eanay\u0131\u015f", "\u015eablon", "\u015eablon_wer\u00eanay\u0131\u015f", ["Pe\u015fti", "Desteg"], ["Pe\u015fti_wer\u00eanay\u0131\u015f", "Desteg_wer\u00eanay\u0131\u015f"], ["Kategoriye", "Kategori"], ["Kategoriye_wer\u00eanay\u0131\u015f", "Kategori_wer\u00eanay\u0131\u015f"], "X\u0131susi", "Medya", "%s_wer\u00eanay\u0131\u015f"],
			"el": ["\u03a3\u03c5\u03b6\u03ae\u03c4\u03b7\u03c3\u03b7", "\u03a7\u03c1\u03ae\u03c3\u03c4\u03b7\u03c2", "\u03a3\u03c5\u03b6\u03ae\u03c4\u03b7\u03c3\u03b7_\u03c7\u03c1\u03ae\u03c3\u03c4\u03b7", ["\u0391\u03c1\u03c7\u03b5\u03af\u03bf", "\u0395\u03b9\u03ba\u03cc\u03bd\u03b1"], ["\u03a3\u03c5\u03b6\u03ae\u03c4\u03b7\u03c3\u03b7_\u03b1\u03c1\u03c7\u03b5\u03af\u03bf\u03c5", "\u03a3\u03c5\u03b6\u03ae\u03c4\u03b7\u03c3\u03b7_\u03b5\u03b9\u03ba\u03cc\u03bd\u03b1\u03c2"], "MediaWiki", "\u03a3\u03c5\u03b6\u03ae\u03c4\u03b7\u03c3\u03b7_MediaWiki", "\u03a0\u03c1\u03cc\u03c4\u03c5\u03c0\u03bf", "\u03a3\u03c5\u03b6\u03ae\u03c4\u03b7\u03c3\u03b7_\u03c0\u03c1\u03bf\u03c4\u03cd\u03c0\u03bf\u03c5", "\u0392\u03bf\u03ae\u03b8\u03b5\u03b9\u03b1", "\u03a3\u03c5\u03b6\u03ae\u03c4\u03b7\u03c3\u03b7_\u03b2\u03bf\u03ae\u03b8\u03b5\u03b9\u03b1\u03c2", "\u039a\u03b1\u03c4\u03b7\u03b3\u03bf\u03c1\u03af\u03b1", "\u03a3\u03c5\u03b6\u03ae\u03c4\u03b7\u03c3\u03b7_\u03ba\u03b1\u03c4\u03b7\u03b3\u03bf\u03c1\u03af\u03b1\u03c2", "\u0395\u03b9\u03b4\u03b9\u03ba\u03cc", ["\u039c\u03ad\u03c3\u03bf", "\u039c\u03ad\u03c3\u03bf\u03bd"], "%s_\u03c3\u03c5\u03b6\u03ae\u03c4\u03b7\u03c3\u03b7"],
			"eo": ["Diskuto", ["Uzanto", "Uzanto", "Uzulo", "Vikipediisto"], ["Uzanto-Diskuto", "Uzula_diskuto", "Vikipediista_diskuto", "Uzanta_diskuto"], "Dosiero", ["Dosiero-Diskuto", "Dosiera_diskuto"], ["MediaWiki", "MediaVikio"], ["MediaWiki-Diskuto", "MediaVikia_diskuto", "MediaWiki_diskuto"], "\u015cablono", ["\u015cablono-Diskuto", "\u015cablona_diskuto"], "Helpo", ["Helpo-Diskuto", "Helpa_diskuto"], "Kategorio", ["Kategorio-Diskuto", "Kategoria_diskuto"], ["Speciala\u0135o", "Speciala"], "A\u016ddvida\u0135o", ["%s-Diskuto", "$1_diskuto"]],
			"en": ["Talk", "User", "User_talk", ["File", "Image"], ["File_talk", "Image talk"], "MediaWiki", "MediaWiki_talk", "Template", "Template_talk", "Help", "Help_talk", "Category", "Category_talk", "Special", "Media", "%s_talk"],
			"zh": [["Talk", "\u5c0d\u8a71", "\u8ba8\u8bba", "\u5bf9\u8bdd", "\u8a0e\u8ad6"], ["User", "\u7528\u6236", "\u7528\u6237"], ["User_talk", "\u7528\u6236\u5c0d\u8a71", "\u7528\u6237\u5bf9\u8bdd", "\u7528\u6237\u8ba8\u8bba", "\u7528\u6236\u8a0e\u8ad6"], ["File", "\u5716\u50cf", "\u6587\u4ef6", "\u56fe\u50cf", "\u6863\u6848", "\u6a94\u6848"], ["File_talk", "\u6587\u4ef6\u5c0d\u8a71", "\u56fe\u50cf\u8ba8\u8bba", "\u6a94\u6848\u8a0e\u8ad6", "\u5716\u50cf\u8a0e\u8ad6", "\u56fe\u50cf\u5bf9\u8bdd", "\u6a94\u6848\u5c0d\u8a71", "\u5716\u50cf\u5c0d\u8a71", "\u6863\u6848\u5bf9\u8bdd", "\u6863\u6848\u8ba8\u8bba", "\u6587\u4ef6\u8a0e\u8ad6", "\u6587\u4ef6\u5bf9\u8bdd", "\u6587\u4ef6\u8ba8\u8bba"], "MediaWiki", "MediaWiki_talk", ["Template", "\u6837\u677f", "\u6a23\u677f", "\u6a21\u677f"], ["Template_talk", "\u6a21\u677f\u8ba8\u8bba", "\u6837\u677f\u8ba8\u8bba", "\u6a23\u677f\u5c0d\u8a71", "\u6a21\u677f\u8a0e\u8ad6", "\u6a21\u677f\u5bf9\u8bdd", "\u6837\u677f\u5bf9\u8bdd", "\u6a23\u677f\u8a0e\u8ad6", "\u6a21\u677f\u5c0d\u8a71"], ["Help", "\u5e6b\u52a9", "\u5e2e\u52a9"], ["Help_talk", "\u5e2e\u52a9\u5bf9\u8bdd", "\u5e6b\u52a9\u8a0e\u8ad6", "\u5e6b\u52a9\u5c0d\u8a71", "\u5e2e\u52a9\u8ba8\u8bba"], ["Category", "\u5206\u7c7b", "\u5206\u985e"], ["Category_talk", "\u5206\u7c7b\u8ba8\u8bba", "\u5206\u985e\u5c0d\u8a71", "\u5206\u7c7b\u5bf9\u8bdd", "\u5206\u985e\u8a0e\u8ad6"], ["Special", "\u7279\u6b8a"], ["Media", "\u5a92\u9ad4", "\u5a92\u4f53"], "%s_talk"],
			"mwl": [["Cumbersa", "Discuss\u00e3o"], ["Outelizador", "Usu\u00e1rio"], ["Cumbersa_outelizador", "Usu\u00e1rio_Discuss\u00e3o"], ["Fexeiro", "Imagem", "Ficheiro"], ["Cumbersa_fexeiro", "Ficheiro_Discuss\u00e3o", "Imagem_Discuss\u00e3o"], "Biqui", ["Cumbersa_Biqui", "MediaWiki_Discuss\u00e3o"], ["Modelo", "Predefini\u00e7\u00e3o"], ["Cumbersa_Modelo", "Predefini\u00e7\u00e3o_Discuss\u00e3o"], "Ajuda", ["Cumbersa_ajuda", "Ajuda_Discuss\u00e3o"], ["Catadorie", "Categoria"], ["Cumbersa_catadorie", "Categoria_Discuss\u00e3o"], ["Special", "Especial"], "Media", ["%s_cumbersa", "$1_Discuss\u00e3o"]],
			"pms": ["Discussion", "Utent", "Ciaciarade", "Figura", "Discussion_dla_figura", "MediaWiki", "Discussion_dla_MediaWiki", "Stamp", "Discussion_dl\u00eb_stamp", "Agiut", "Discussion_ant_sl\\'agiut", "Categor\u00eca", "Discussion_ant_sla_categor\u00eca", "Special", "Media", "Discussion_ant_sla_%s"],
			"tpi": ["Toktok", "Yusa", "Toktok_bilong_yusa", "Fail", "Toktok_bilong_fail", "MediaWiki", "Toktok_bilong_mediawiki", "Templet", "Toktok_bilong_templet", "Halivim", "Toktok_bilong_halivim", "Grup", "Toktok_bilong_grup", "Sipesol", "Media", "%s_toktok"],
			"arz": ["\u0646\u0642\u0627\u0634", "\u0645\u0633\u062a\u062e\u062f\u0645", "\u0646\u0642\u0627\u0634_\u0627\u0644\u0645\u0633\u062a\u062e\u062f\u0645", ["\u0645\u0644\u0641", "\u0635\u0648\u0631\u0629"], ["\u0646\u0642\u0627\u0634_\u0627\u0644\u0645\u0644\u0641", "\u0646\u0642\u0627\u0634_\u0627\u0644\u0635\u0648\u0631\u0629"], "\u0645\u064a\u062f\u064a\u0627\u0648\u064a\u0643\u0649", "\u0646\u0642\u0627\u0634_\u0645\u064a\u062f\u064a\u0627\u0648\u064a\u0643\u0649", "\u0642\u0627\u0644\u0628", "\u0646\u0642\u0627\u0634_\u0627\u0644\u0642\u0627\u0644\u0628", "\u0645\u0633\u0627\u0639\u062f\u0629", "\u0646\u0642\u0627\u0634_\u0627\u0644\u0645\u0633\u0627\u0639\u062f\u0629", "\u062a\u0635\u0646\u064a\u0641", "\u0646\u0642\u0627\u0634_\u0627\u0644\u062a\u0635\u0646\u064a\u0641", "\u062e\u0627\u0635", ["\u0645\u064a\u062f\u064a\u0627", "\u0648\u0633\u0627\u0626\u0637"], "\u0646\u0642\u0627\u0634_%s"],
			"lfn": ["Discute", "Usor", "Usor_Discute", "Fix", "Fix_Discute", "MediaWiki", "MediaWiki_talk", "Model", "Model_Discute", "Aida", "Aida_Discute", "Categoria", "Categoria_Discute", "Spesial", "Media", "%s_Discute"],
			"mdf": [["\u041a\u043e\u0440\u0445\u043d\u0435\u043c\u0430", "\u041e\u0431\u0441\u0443\u0436\u0434\u0435\u043d\u0438\u0435"], ["\u0422\u0438\u0438\u0441\u044c", "\u0423\u0447\u0430\u0441\u0442\u043d\u0438\u043a"], ["\u0422\u0438\u0438\u0441\u044c_\u043a\u043e\u0440\u0445\u043d\u0435\u043c\u0430", "\u041e\u0431\u0441\u0443\u0436\u0434\u0435\u043d\u0438\u0435_\u0443\u0447\u0430\u0441\u0442\u043d\u0438\u043a\u0430"], ["\u041d\u044f\u0439\u0444", "\u0418\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435"], ["\u041d\u044f\u0439\u0444_\u043a\u043e\u0440\u0445\u043d\u0435\u043c\u0430", "\u041e\u0431\u0441\u0443\u0436\u0434\u0435\u043d\u0438\u0435_\u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f"], ["\u041c\u0435\u0434\u0438\u0430\u0412\u0438\u043a\u0438", "MediaWiki"], ["\u041c\u0435\u0434\u0438\u0430\u0412\u0438\u043a\u0438_\u043a\u043e\u0440\u0445\u043d\u0435\u043c\u0430", "\u041e\u0431\u0441\u0443\u0436\u0434\u0435\u043d\u0438\u0435_MediaWiki"], ["\u0428\u0430\u0431\u043b\u043e\u043d", "\u0428\u0430\u0431\u043b\u043e\u043d"], ["\u0428\u0430\u0431\u043b\u043e\u043d_\u043a\u043e\u0440\u0445\u043d\u0435\u043c\u0430", "\u041e\u0431\u0441\u0443\u0436\u0434\u0435\u043d\u0438\u0435_\u0448\u0430\u0431\u043b\u043e\u043d\u0430"], ["\u041b\u0435\u0437\u043a\u0441", "\u0421\u043f\u0440\u0430\u0432\u043a\u0430"], ["\u041b\u0435\u0437\u043a\u0441_\u043a\u043e\u0440\u0445\u043d\u0435\u043c\u0430", "\u041e\u0431\u0441\u0443\u0436\u0434\u0435\u043d\u0438\u0435_\u0441\u043f\u0440\u0430\u0432\u043a\u0438"], ["\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u0435", "\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044f"], ["\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u0435_\u043a\u043e\u0440\u0445\u043d\u0435\u043c\u0430", "\u041e\u0431\u0441\u0443\u0436\u0434\u0435\u043d\u0438\u0435_\u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u0438"], ["\u0411\u0430\u0448\u043a\u0430", "\u0421\u043b\u0443\u0436\u0435\u0431\u043d\u0430\u044f"], "\u041c\u0435\u0434\u0438\u0430", ["%s_\u043a\u043e\u0440\u0445\u043d\u0435\u043c\u0430", "\u041e\u0431\u0441\u0443\u0436\u0434\u0435\u043d\u0438\u0435_{{GRAMMAR:genitive|$1}}"]],
			"kaa": ["Sa\\'wbet", "Paydalan\u0131wsh\u0131", "Paydalan\u0131wsh\u0131_sa\\'wbeti", "Su\\'wret", "Su\\'wret_sa\\'wbeti", "MediaWiki", "MediaWiki_sa\\'wbeti", "Shablon", "Shablon_sa\\'wbeti", "An\u0131qlama", "An\u0131qlama_sa\\'wbeti", "Kategoriya", "Kategoriya_sa\\'wbeti", "Arnawl\u0131", "Media", "%s_sa\\'wbeti"],
			"arc": ["\u0721\u0721\u0720\u0720\u0710", ["\u0721\u0726\u0720\u071a\u0722\u0710", "\u0721\u072c\u071a\u072b\u071a\u0722\u0710"], ["\u0721\u0721\u0720\u0720\u0710_\u0715\u0721\u0726\u0720\u071a\u0722\u0710", "\u0721\u0721\u0720\u0720\u0710_\u0715\u0721\u072c\u071a\u072b\u071a\u0722\u0710"], "\u0720\u0726\u0726\u0710", "\u0721\u0721\u0720\u0720\u0710_\u0715\u0720\u0726\u0726\u0710", "\u0721\u071d\u0715\u071d\u0710\u0718\u071d\u0729\u071d", "\u0721\u0721\u0720\u0720\u0710_\u0715\u0721\u071d\u0715\u071d\u0710\u0718\u071d\u0729\u071d", "\u0729\u0720\u0712\u0710", "\u0721\u0721\u0720\u0720\u0710_\u0715\u0729\u0720\u0712\u0710", "\u0725\u0718\u0715\u072a\u0722\u0710", "\u0721\u0721\u0720\u0720\u0710_\u0715\u0725\u0718\u0715\u072a\u0722\u0710", "\u0723\u0715\u072a\u0710", "\u0721\u0721\u0720\u0720\u0710_\u0715\u0723\u0715\u072a\u0710", "\u0715\u071d\u0720\u0722\u071d\u0710", "\u0721\u071d\u0715\u071d\u0710", "\u0721\u0721\u0720\u0720\u0710_\u0715%s"],
			"kk-cyrl": [["\u0422\u0430\u043b\u049b\u044b\u043b\u0430\u0443", "Talq\u0131law", "\u062a\u0627\u0644\u0642\u0649\u0644\u0627\u06cb"], ["\u049a\u0430\u0442\u044b\u0441\u0443\u0448\u044b", "\u0642\u0627\u062a\u0649\u0633\u06cb\u0634\u0649", "Qat\u0131sw\u015f\u0131"], ["\u049a\u0430\u0442\u044b\u0441\u0443\u0448\u044b_\u0442\u0430\u043b\u049b\u044b\u043b\u0430\u0443\u044b", "\u0642\u0627\u062a\u0649\u0633\u06cb\u0634\u0649_\u062a\u0627\u0644\u0642\u0649\u0644\u0627\u06cb\u0649", "Qat\u0131sw\u015f\u0131_talq\u0131law\u0131"], ["\u0421\u0443\u0440\u0435\u0442", "\u0633\u06cb\u0631\u06d5\u062a", "Swret"], ["\u0421\u0443\u0440\u0435\u0442_\u0442\u0430\u043b\u049b\u044b\u043b\u0430\u0443\u044b", "\u0633\u06cb\u0631\u06d5\u062a_\u062a\u0627\u0644\u0642\u0649\u0644\u0627\u06cb\u0649", "Swret_talq\u0131law\u0131"], ["\u041c\u0435\u0434\u0438\u0430\u0423\u0438\u043a\u0438", "\u0645\u06d5\u062f\u064a\u0627\u06cb\u064a\u0643\u064a", "Med\u00efaW\u00efk\u00ef"], ["\u041c\u0435\u0434\u0438\u0430\u0423\u0438\u043a\u0438_\u0442\u0430\u043b\u049b\u044b\u043b\u0430\u0443\u044b", "Med\u00efaW\u00efk\u00ef_talq\u0131law\u0131", "\u0645\u06d5\u062f\u064a\u0627\u06cb\u064a\u0643\u064a_\u062a\u0627\u0644\u0642\u0649\u0644\u0627\u06cb\u0649"], ["\u04ae\u043b\u0433\u0456", "\u00dclgi", "\u0674\u06c7\u0644\u06af\u0674\u0649", "\u0677\u0644\u06af\u0678"], ["\u04ae\u043b\u0433\u0456_\u0442\u0430\u043b\u049b\u044b\u043b\u0430\u0443\u044b", "\u00dclgi_talq\u0131law\u0131", "\u0677\u0644\u06af\u0678_\u062a\u0627\u0644\u0642\u0649\u0644\u0627\u06cb\u0649", "\u0674\u06c7\u0644\u06af\u0674\u0649_\u062a\u0627\u0644\u0642\u0649\u0644\u0627\u06cb\u0649"], ["\u0410\u043d\u044b\u049b\u0442\u0430\u043c\u0430", "An\u0131qtama", "\u0627\u0646\u0649\u0642\u062a\u0627\u0645\u0627"], ["\u0410\u043d\u044b\u049b\u0442\u0430\u043c\u0430_\u0442\u0430\u043b\u049b\u044b\u043b\u0430\u0443\u044b", "An\u0131qtama_talq\u0131law\u0131", "\u0627\u0646\u0649\u0642\u062a\u0627\u0645\u0627_\u062a\u0627\u0644\u0642\u0649\u0644\u0627\u06cb\u0649"], ["\u0421\u0430\u043d\u0430\u0442", "Sanat", "\u0633\u0627\u0646\u0627\u062a"], ["\u0421\u0430\u043d\u0430\u0442_\u0442\u0430\u043b\u049b\u044b\u043b\u0430\u0443\u044b", "Sanat_talq\u0131law\u0131", "\u0633\u0627\u0646\u0627\u062a_\u062a\u0627\u0644\u0642\u0649\u0644\u0627\u06cb\u0649"], ["\u0410\u0440\u043d\u0430\u0439\u044b", "Arna\u00fd\u0131", "\u0627\u0631\u0646\u0627\u064a\u0649"], ["\u0422\u0430\u0441\u043f\u0430", "\u062a\u0627\u0633\u067e\u0627", "Taspa"], ["%s_\u0442\u0430\u043b\u049b\u044b\u043b\u0430\u0443\u044b", "$1_talq\u0131law\u0131", "$1_\u062a\u0627\u0644\u0642\u0649\u0644\u0627\u06cb\u0649"]],
			"eu": ["Eztabaida", "Lankide", "Lankide_eztabaida", ["Fitxategi", "Irudi"], ["Fitxategi_eztabaida", "Irudi_eztabaida"], "MediaWiki", "MediaWiki_eztabaida", "Txantiloi", "Txantiloi_eztabaida", "Laguntza", "Laguntza_eztabaida", "Kategoria", "Kategoria_eztabaida", ["Berezi", "Aparteko"], "Media", "%s_eztabaida"],
			"et": ["Arutelu", "Kasutaja", "Kasutaja_arutelu", "Pilt", "Pildi_arutelu", "MediaWiki", "MediaWiki_arutelu", "Mall", "Malli_arutelu", "Juhend", "Juhendi_arutelu", "Kategooria", "Kategooria_arutelu", "Eri", "Meedia", ["{{GRAMMAR:genitive|%s}}_arutelu", "$1_arutelu"]],
			"tet": ["Diskusaun", "Uza-na\\'in", "Diskusaun_Uza-na\\'in", "Imajen", "Diskusaun_Imajen", "MediaWiki", "Diskusaun_MediaWiki", "Template", "Diskusaun_Template", "Ajuda", "Diskusaun_Ajuda", ["Kategoria", "Kategor\u00eda"], ["Diskusaun_Kategoria", "Diskusaun_Kategor\u00eda"], "Espesi\u00e1l", "Media", "Diskusaun_%s"],
			"tt-latn": ["B\u00e4x\u00e4s", ["Qullanu\u00e7\u0131", "\u00c4\u011fz\u00e4"], ["Qullanu\u00e7\u0131_b\u00e4x\u00e4se", "\u00c4\u011fz\u00e4_b\u00e4x\u00e4se"], ["Fayl", "R\u00e4sem"], ["Fayl_b\u00e4x\u00e4se", "R\u00e4sem_b\u00e4x\u00e4se"], "MediaWiki", "MediaWiki_b\u00e4x\u00e4se", "\u00dcrn\u00e4k", "\u00dcrn\u00e4k_b\u00e4x\u00e4se", "Y\u00e4rd\u00e4m", "Y\u00e4rd\u00e4m_b\u00e4x\u00e4se", "T\u00f6rkem", "T\u00f6rkem_b\u00e4x\u00e4se", "Maxsus", "Media", "%s_b\u00e4x\u00e4se"],
			"arn": ["Discusi\u00f3n", "Usuario", "Usuario_discusi\u00f3n", "Archivo", "Archivo_discusi\u00f3n", "MediaWiki", "MediaWiki_discusi\u00f3n", "Plantilla", "Plantilla_discusi\u00f3n", "Ayuda", "Ayuda_discusi\u00f3n", "Categor\u00eda", "Categor\u00eda_discusi\u00f3n", "Especial", "Medio", "%s_discusi\u00f3n"],
			"nap": [["Chi\u00e0cchiera", "Discussione"], ["Utente", "Utente"], ["Utente_chi\u00e0cchiera", "Discussioni_utente"], ["Fi\u00f9ra", "Immagine"], ["Fi\u00f9ra_chi\u00e0cchiera", "Discussioni_immagine"], ["MediaWiki", "MediaWiki"], ["MediaWiki_chi\u00e0cchiera", "Discussioni_MediaWiki"], "Modello", ["Modello_chi\u00e0cchiera", "Discussioni_template"], ["Aj\u00f9to", "Aiuto"], ["Aj\u00f9to_chi\u00e0cchiera", "Discussioni_aiuto"], ["Categur\u00eca", "Categoria"], ["Categur\u00eca_chi\u00e0cchiera", "Discussioni_categoria"], ["Speci\u00e0le", "Speciale"], "Media", ["%s_chi\u00e0cchiera", "Discussioni_$1"]],
			"ru": ["\u041e\u0431\u0441\u0443\u0436\u0434\u0435\u043d\u0438\u0435", "\u0423\u0447\u0430\u0441\u0442\u043d\u0438\u043a", "\u041e\u0431\u0441\u0443\u0436\u0434\u0435\u043d\u0438\u0435_\u0443\u0447\u0430\u0441\u0442\u043d\u0438\u043a\u0430", ["\u0424\u0430\u0439\u043b", "\u0418\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435"], ["\u041e\u0431\u0441\u0443\u0436\u0434\u0435\u043d\u0438\u0435_\u0444\u0430\u0439\u043b\u0430", "\u041e\u0431\u0441\u0443\u0436\u0434\u0435\u043d\u0438\u0435_\u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f"], "MediaWiki", "\u041e\u0431\u0441\u0443\u0436\u0434\u0435\u043d\u0438\u0435_MediaWiki", "\u0428\u0430\u0431\u043b\u043e\u043d", "\u041e\u0431\u0441\u0443\u0436\u0434\u0435\u043d\u0438\u0435_\u0448\u0430\u0431\u043b\u043e\u043d\u0430", "\u0421\u043f\u0440\u0430\u0432\u043a\u0430", "\u041e\u0431\u0441\u0443\u0436\u0434\u0435\u043d\u0438\u0435_\u0441\u043f\u0440\u0430\u0432\u043a\u0438", "\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044f", "\u041e\u0431\u0441\u0443\u0436\u0434\u0435\u043d\u0438\u0435_\u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u0438", "\u0421\u043b\u0443\u0436\u0435\u0431\u043d\u0430\u044f", "\u041c\u0435\u0434\u0438\u0430", "\u041e\u0431\u0441\u0443\u0436\u0434\u0435\u043d\u0438\u0435_{{GRAMMAR:genitive|%s}}"],
			"kl": [["Oqallinneq", "Diskussion"], ["Atuisoq", "Bruger"], ["Atuisup_oqalliffia", "Brugerdiskussion"], ["Fiileq", "Billede", "Fil"], ["Fiilip_oqalliffia", "Billeddiskussion", "Fildiskussion"], ["MediaWiki", "MediaWiki"], ["Mediawikip_oqalliffia", "MediaWiki-diskussion"], ["Ilisserut", "Skabelon"], ["Ilisserummi_oqallinneq", "Skabelondiskussion"], ["Ikiuutit", "Hj\u00e6lp"], ["Ikiuutini_oqallinneq", "Hj\u00e6lp-diskussion"], ["Sumut_atassuseq", "Kategori"], ["Sumut_atassusermi_oqallinneq", "Kategoridiskussion"], ["Immikkut", "Speciel"], "Media", ["%s-p_oqalliffia", "$1-diskussion"]],
			"zh-cn": ["\u8ba8\u8bba", "\u7528\u6237", "\u7528\u6237\u8ba8\u8bba", "\u6587\u4ef6", "\u6587\u4ef6\u8ba8\u8bba", "MediaWiki", "MediaWiki\u8ba8\u8bba", "\u6a21\u677f", "\u6a21\u677f\u8ba8\u8bba", "\u5e2e\u52a9", "\u5e2e\u52a9\u8ba8\u8bba", "\u5206\u7c7b", "\u5206\u7c7b\u8ba8\u8bba", "\u7279\u6b8a", "\u5a92\u4f53\u6587\u4ef6", "%s\u8ba8\u8bba"],
			"rm": ["Discussiun", "Utilisader", "Utilisader_discussiun", "Datoteca", "Datoteca_discussiun", "MediaWiki", "MediaWiki_discussiun", "Model", "Model_discussiun", "Agid", "Agid_discussiun", "Categoria", "Categoria_discussiun", "Spezial", "Multimedia", "%s_discussiun"],
			"si": ["\u0dc3\u0dcf\u0d9a\u0da0\u0dca\u0da1\u0dcf\u0dc0", "\u0db4\u0dbb\u0dd2\u0dc1\u0dd3\u0dbd\u0d9a", "\u0db4\u0dbb\u0dd2\u0dc1\u0dd3\u0dbd\u0d9a_\u0dc3\u0dcf\u0d9a\u0da0\u0dca\u0da1\u0dcf\u0dc0", ["\u0d9c\u0ddc\u0db1\u0dd4\u0dc0", "\u0dbb\u0dd6\u0db4\u0dba"], ["\u0d9c\u0ddc\u0db1\u0dd4\u0dc0_\u0dc3\u0dcf\u0d9a\u0da0\u0dca\u0da1\u0dcf\u0dc0", "\u0dbb\u0dd6\u0db4\u0dba_\u0dc3\u0dcf\u0d9a\u0da0\u0dca\u0da1\u0dcf\u0dc0"], ["\u0db8\u0dcf\u0db0\u0dca\u200d\u0dba\u0dc0\u0dd2\u0d9a\u0dd2", "\u0dc0\u0dd2\u0d9a\u0dd2\u0db8\u0dcf\u0db0\u0dca\u200d\u0dba"], ["\u0db8\u0dcf\u0db0\u0dca\u200d\u0dba\u0dc0\u0dd2\u0d9a\u0dd2_\u0dc3\u0dcf\u0d9a\u0da0\u0dca\u0da1\u0dcf\u0dc0", "\u0dc0\u0dd2\u0d9a\u0dd2\u0db8\u0dcf\u0db0\u0dca\u200d\u0dba_\u0dc3\u0dcf\u0d9a\u0da0\u0dca\u0da1\u0dcf\u0dc0"], "\u0dc3\u0dd0\u0d9a\u0dd2\u0dbd\u0dca\u0dbd", "\u0dc3\u0dd0\u0d9a\u0dd2\u0dbd\u0dd2_\u0dc3\u0dcf\u0d9a\u0da0\u0dca\u0da1\u0dcf\u0dc0", "\u0d8b\u0daf\u0dc0\u0dd4", ["\u0d8b\u0daf\u0dc0\u0dd4_\u0dc3\u0dcf\u0d9a\u0da0\u0dca\u0da1\u0dcf\u0dc0", "\u0d8b\u0daf\u0dc0_\u0dc3\u0dcf\u0d9a\u0da0\u0dca\u0da1\u0dcf\u0dc0"], "\u0db4\u0dca\u200d\u0dbb\u0dc0\u0dbb\u0dca\u0d9c\u0dba", "\u0db4\u0dca\u200d\u0dbb\u0dc0\u0dbb\u0dca\u0d9c_\u0dc3\u0dcf\u0d9a\u0da0\u0dca\u0da1\u0dcf\u0dc0", "\u0dc0\u0dd2\u0dc1\u0dda\u0dc2", "\u0db8\u0dcf\u0db0\u0dca\u200d\u0dba\u0dba", "%s_\u0dc3\u0dcf\u0d9a\u0da0\u0dca\u0da1\u0dcf\u0dc0"],
			"got": ["Talk", "\ud800\udf3d\ud800\udf39\ud800\udf3f\ud800\udf44\ud800\udf30\ud800\udf3d\ud800\udf33\ud800\udf43", "\ud800\udf3d\ud800\udf39\ud800\udf3f\ud800\udf44\ud800\udf30\ud800\udf3d\ud800\udf33\ud800\udf39\ud800\udf43_\ud800\udf32\ud800\udf30\ud800\udf45\ud800\udf30\ud800\udf3f\ud800\udf42\ud800\udf33\ud800\udf3e\ud800\udf30", "\ud800\udf46\ud800\udf34\ud800\udf39\ud800\udf3b\ud800\udf30", "\ud800\udf46\ud800\udf34\ud800\udf39\ud800\udf3b\ud800\udf39\ud800\udf3d\ud800\udf43_\ud800\udf32\ud800\udf30\ud800\udf45\ud800\udf30\ud800\udf3f\ud800\udf42\ud800\udf33\ud800\udf3e\ud800\udf30", "MediaWiki", "MediaWiki_talk", "\ud800\udf46\ud800\udf30\ud800\udf3f\ud800\udf42\ud800\udf30\ud800\udf3c\ud800\udf34\ud800\udf3b\ud800\udf34\ud800\udf39\ud800\udf3d\ud800\udf43", "\ud800\udf46\ud800\udf30\ud800\udf3f\ud800\udf42\ud800\udf30\ud800\udf3c\ud800\udf34\ud800\udf3b\ud800\udf34\ud800\udf39\ud800\udf3d\ud800\udf30\ud800\udf39\ud800\udf43_\ud800\udf32\ud800\udf30\ud800\udf45\ud800\udf30\ud800\udf3f\ud800\udf42\ud800\udf33\ud800\udf3e\ud800\udf30", "\ud800\udf37\ud800\udf39\ud800\udf3b\ud800\udf40\ud800\udf30", "\ud800\udf37\ud800\udf39\ud800\udf3b\ud800\udf40\ud800\udf49\ud800\udf43_\ud800\udf32\ud800\udf30\ud800\udf45\ud800\udf30\ud800\udf3f\ud800\udf42\ud800\udf33\ud800\udf3e\ud800\udf30", "\ud800\udf37\ud800\udf30\ud800\udf3d\ud800\udf43\ud800\udf30", "\ud800\udf37\ud800\udf30\ud800\udf3d\ud800\udf43\ud800\udf49\ud800\udf43_\ud800\udf32\ud800\udf30\ud800\udf45\ud800\udf30\ud800\udf3f\ud800\udf42\ud800\udf33\ud800\udf3e\ud800\udf30", "Special", "Media", "\ud800\udf38\ud800\udf39\ud800\udf43_%s_\ud800\udf32\ud800\udf30\ud800\udf45\ud800\udf30\ud800\udf3f\ud800\udf42\ud800\udf33\ud800\udf3e\ud800\udf30"],
			"ro": [["Discu\u021bie", "Discu\u0163ie"], "Utilizator", ["Discu\u021bie_Utilizator", "Discu\u0163ie_Utilizator"], ["Fi\u0219ier", "Fi\u015fier", "Imagine"], ["Discu\u021bie_Fi\u0219ier", "Discu\u0163ie_Imagine", "Discu\u0163ie_Fi\u015fier"], "MediaWiki", ["Discu\u021bie_MediaWiki", "Discu\u0163ie_MediaWiki"], "Format", ["Discu\u021bie_Format", "Discu\u0163ie_Format"], "Ajutor", ["Discu\u021bie_Ajutor", "Discu\u0163ie_Ajutor"], "Categorie", ["Discu\u021bie_Categorie", "Discu\u0163ie_Categorie"], "Special", "Media", ["Discu\u021bie_%s", "Discu\u0163ie_$1"]],
			"dsb": ["Diskusija", "Wu\u017eywa\u0155", "Diskusija_wu\u017eywarja", ["Dataja", "Wobraz"], "Diskusija_w\u00f3_wobrazu", "MediaWiki", "MediaWiki_diskusija", "P\u015bed\u0142oga", "Diskusija_w\u00f3_p\u015bed\u0142oze", "Pomoc", "Diskusija_w\u00f3_pomocy", "Kategorija", "Diskusija_w\u00f3_kategoriji", "Specialne", "Medija", "%s_talk"],
			"jv": ["Dhiskusi", "Panganggo", "Dhiskusi_Panganggo", "Gambar", ["Dhiskusi_Gambar", "Gambar_Dhiskusi"], "MediaWiki", ["Dhiskusi_MediaWiki", "MediaWiki_Dhiskusi"], "Cithakan", ["Dhiskusi_Cithakan", "Cithakan_Dhiskusi"], "Pitulung", ["Dhiskusi_Pitulung", "Pitulung_Dhiskusi"], "Kategori", ["Dhiskusi_Kategori", "Kategori_Dhiskusi"], "Astamiwa", "Media", "Dhiskusi_%s"],
			"sli": ["Diskussion", "Benutzer", "Benutzer_Diskussion", "Datei", "Datei_Diskussion", "MediaWiki", "MediaWiki_Diskussion", "Vorlage", "Vorlage_Diskussion", "Hilfe", "Hilfe_Diskussion", "Kategorie", "Kategorie_Diskussion", "Spezial", "Medium", "%s_Diskussion"],
			"hsb": ["Diskusija", "Wu\u017eiwar", "Diskusija_z_wu\u017eiwarjom", ["Dataja", "Wobraz"], ["Diskusija_k_dataji", "Diskusija_k_wobrazej"], "MediaWiki", "MediaWiki_diskusija", "P\u0159ed\u0142oha", "Diskusija_k_p\u0159ed\u0142oze", "Pomoc", "Pomoc_diskusija", "Kategorija", "Diskusija_ke_kategoriji", "Specialnje", "Media", "%s_diskusija"],
			"be": ["\u0420\u0430\u0437\u043c\u043e\u0432\u044b", "\u0423\u0434\u0437\u0435\u043b\u044c\u043d\u0456\u043a", "\u0420\u0430\u0437\u043c\u043e\u0432\u044b_\u0437_\u0443\u0434\u0437\u0435\u043b\u044c\u043d\u0456\u043a\u0430\u043c", "\u0412\u044b\u044f\u0432\u0430", "\u0420\u0430\u0437\u043c\u043e\u0432\u044b_\u043f\u0440\u0430_\u0432\u044b\u044f\u0432\u0443", "MediaWiki", "\u0420\u0430\u0437\u043c\u043e\u0432\u044b_\u043f\u0440\u0430_MediaWiki", "\u0428\u0430\u0431\u043b\u043e\u043d", "\u0420\u0430\u0437\u043c\u043e\u0432\u044b_\u043f\u0440\u0430_\u0448\u0430\u0431\u043b\u043e\u043d", "\u0414\u0430\u0432\u0435\u0434\u043a\u0430", "\u0420\u0430\u0437\u043c\u043e\u0432\u044b_\u043f\u0440\u0430_\u0434\u0430\u0432\u0435\u0434\u043a\u0443", "\u041a\u0430\u0442\u044d\u0433\u043e\u0440\u044b\u044f", "\u0420\u0430\u0437\u043c\u043e\u0432\u044b_\u043f\u0440\u0430_\u043a\u0430\u0442\u044d\u0433\u043e\u0440\u044b\u044e", "\u0410\u0434\u043c\u044b\u0441\u043b\u043e\u0432\u0430\u0435", "\u041c\u0443\u043b\u044c\u0442\u044b\u043c\u0435\u0434\u044b\u044f", ["\u0420\u0430\u0437\u043c\u043e\u0432\u044b_\u043f\u0440\u0430_{{GRAMMAR:\u0432\u0456\u043d\u0430\u0432\u0430\u043b\u044c\u043d\u044b|%s}}", "$1_\u0440\u0430\u0437\u043c\u043e\u0432\u044b"]],
			"bg": ["\u0411\u0435\u0441\u0435\u0434\u0430", "\u041f\u043e\u0442\u0440\u0435\u0431\u0438\u0442\u0435\u043b", "\u041f\u043e\u0442\u0440\u0435\u0431\u0438\u0442\u0435\u043b_\u0431\u0435\u0441\u0435\u0434\u0430", ["\u0424\u0430\u0439\u043b", "\u041a\u0430\u0440\u0442\u0438\u043d\u043a\u0430"], "\u0424\u0430\u0439\u043b_\u0431\u0435\u0441\u0435\u0434\u0430", "\u041c\u0435\u0434\u0438\u044f\u0423\u0438\u043a\u0438", "\u041c\u0435\u0434\u0438\u044f\u0423\u0438\u043a\u0438_\u0431\u0435\u0441\u0435\u0434\u0430", "\u0428\u0430\u0431\u043b\u043e\u043d", "\u0428\u0430\u0431\u043b\u043e\u043d_\u0431\u0435\u0441\u0435\u0434\u0430", "\u041f\u043e\u043c\u043e\u0449", "\u041f\u043e\u043c\u043e\u0449_\u0431\u0435\u0441\u0435\u0434\u0430", "\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044f", "\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044f_\u0431\u0435\u0441\u0435\u0434\u0430", "\u0421\u043f\u0435\u0446\u0438\u0430\u043b\u043d\u0438", "\u041c\u0435\u0434\u0438\u044f", "%s_\u0431\u0435\u0441\u0435\u0434\u0430"],
			"be-x-old": ["\u0410\u0431\u043c\u0435\u0440\u043a\u0430\u0432\u0430\u043d\u044c\u043d\u0435", "\u0423\u0434\u0437\u0435\u043b\u044c\u043d\u0456\u043a", "\u0413\u0443\u0442\u0430\u0440\u043a\u0456_\u045e\u0434\u0437\u0435\u043b\u044c\u043d\u0456\u043a\u0430", "\u0424\u0430\u0439\u043b", "\u0410\u0431\u043c\u0435\u0440\u043a\u0430\u0432\u0430\u043d\u044c\u043d\u0435_\u0444\u0430\u0439\u043b\u0430", "MediaWiki", "\u0410\u0431\u043c\u0435\u0440\u043a\u0430\u0432\u0430\u043d\u044c\u043d\u0435_MediaWiki", "\u0428\u0430\u0431\u043b\u0451\u043d", "\u0410\u0431\u043c\u0435\u0440\u043a\u0430\u0432\u0430\u043d\u044c\u043d\u0435_\u0448\u0430\u0431\u043b\u0451\u043d\u0443", "\u0414\u0430\u043f\u0430\u043c\u043e\u0433\u0430", "\u0410\u0431\u043c\u0435\u0440\u043a\u0430\u0432\u0430\u043d\u044c\u043d\u0435_\u0434\u0430\u043f\u0430\u043c\u043e\u0433\u0456", "\u041a\u0430\u0442\u044d\u0433\u043e\u0440\u044b\u044f", "\u0410\u0431\u043c\u0435\u0440\u043a\u0430\u0432\u0430\u043d\u044c\u043d\u0435_\u043a\u0430\u0442\u044d\u0433\u043e\u0440\u044b\u0456", "\u0421\u043f\u044d\u0446\u044b\u044f\u043b\u044c\u043d\u044b\u044f", "\u041c\u044d\u0434\u044b\u044f", "\u0410\u0431\u043c\u0435\u0440\u043a\u0430\u0432\u0430\u043d\u044c\u043d\u0435_{{GRAMMAR:\u0440\u043e\u0434\u043d\u044b|%s}}"],
			"ba": [["\u0424\u0435\u043a\u0435\u0440\u043b\u04d9\u0448\u0435\u04af", "\u0424\u0435\u043a\u0435\u0440_\u0430\u043b\u044b\u0448\u044b\u0443"], "\u04a0\u0430\u0442\u043d\u0430\u0448\u044b\u0443\u0441\u044b", ["\u04a0\u0430\u0442\u043d\u0430\u0448\u044b\u0443\u0441\u044b_\u043c\u0435\u043d\u04d9\u043d_\u04bb\u04e9\u0439\u043b\u04d9\u0448\u0435\u04af", "\u04a0\u0430\u0442\u043d\u0430\u0448\u044b\u0443\u0441\u044b_\u043c-\u043d_\u0444\u0435\u043a\u0435\u0440_\u0430\u043b\u044b\u0448\u044b\u0443"], "\u0420\u04d9\u0441\u0435\u043c", ["\u0420\u04d9\u0441\u0435\u043c_\u0431\u0443\u0439\u044b\u043d\u0441\u0430_\u0444\u0435\u043a\u0435\u0440\u043b\u04d9\u0448\u0435\u04af", "\u0420\u04d9\u0441\u0435\u043c_\u0431-\u0441\u0430_\u0444\u0435\u043a\u0435\u0440_\u0430\u043b\u044b\u0448\u044b\u0443"], "MediaWiki", ["MediaWiki_\u0431\u0443\u0439\u044b\u043d\u0441\u0430_\u0444\u0435\u043a\u0435\u0440\u043b\u04d9\u0448\u0435\u04af", "MediaWiki_\u0431-\u0441\u0430_\u0444\u0435\u043a\u0435\u0440_\u0430\u043b\u044b\u0448\u044b\u0443"], "\u04a0\u0430\u043b\u044b\u043f", ["\u04a0\u0430\u043b\u044b\u043f_\u0431\u0443\u0439\u044b\u043d\u0441\u0430_\u0444\u0435\u043a\u0435\u0440\u043b\u04d9\u0448\u0435\u04af", "\u04a0\u0430\u043b\u044b\u043f_\u0431-\u0441\u0430_\u0444\u0435\u043a\u0435\u0440_\u0430\u043b\u044b\u0448\u044b\u0443"], "\u0411\u0435\u043b\u0435\u0448\u043c\u04d9", ["\u0411\u0435\u043b\u0435\u0448\u043c\u04d9_\u0431\u0443\u0439\u044b\u043d\u0441\u0430_\u0444\u0435\u043a\u0435\u0440\u043b\u04d9\u0448\u0435\u04af", "\u0411\u0435\u043b\u0435\u0448\u043c\u04d9_\u0431-\u0441\u0430_\u0444\u0435\u043a\u0435\u0440_\u0430\u043b\u044b\u0448\u044b\u0443"], ["\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044f", "\u0422\u04e9\u0440\u043a\u04e9\u043c"], ["\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044f_\u0431\u0443\u0439\u044b\u043d\u0441\u0430_\u0444\u0435\u043a\u0435\u0440\u043b\u04d9\u0448\u0435\u04af", "\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044f_\u0431-\u0441\u0430_\u0444\u0435\u043a\u0435\u0440_\u0430\u043b\u044b\u0448\u044b\u0443", "\u0422\u04e9\u0440\u043a\u04e9\u043c_\u0431\u0443\u0439\u044b\u043d\u0441\u0430_\u0444\u0435\u043a\u0435\u0440\u043b\u04d9\u0448\u0435\u04af"], "\u042f\u0440\u0499\u0430\u043c\u0441\u044b", "\u041c\u0435\u0434\u0438\u0430", ["%s_\u0431\u0443\u0439\u044b\u043d\u0441\u0430_\u0444\u0435\u043a\u0435\u0440\u043b\u04d9\u0448\u0435\u04af", "$1_\u0431-\u0441\u0430_\u0444\u0435\u043a\u0435\u0440_\u0430\u043b\u044b\u0448\u044b\u0443"]],
			"wa": ["Copene", "Uzeu", "Uzeu_copene", "Im\u00e5dje", "Im\u00e5dje_copene", "MediaWiki", "MediaWiki_copene", "Modele", "Modele_copene", "Aidance", "Aidance_copene", "Categoreye", "Categoreye_copene", "Sipeci\u00e5s", "Media", "%s_copene"],
			"ast": [["Alderique", "Discusi\u00f3n"], "Usuariu", ["Usuariu_alderique", "Usuariu_discusi\u00f3n"], ["Archivu", "Imaxen", "Imaxe"], ["Archivu_alderique", "Imaxen_discusi\u00f3n"], "MediaWiki", ["MediaWiki_alderique", "MediaWiki_discusi\u00f3n"], ["Plant\u00eda", "Plantilla"], ["Plant\u00eda_alderique", "Plantilla_discusi\u00f3n"], ["Aida", "Ayuda"], ["Aida_alderique", "Ayuda_discusi\u00f3n"], "Categor\u00eda", ["Categor\u00eda_alderique", "Categor\u00eda_discusi\u00f3n"], "Especial", "Media", ["%s_alderique", "$1_discusi\u00f3n"]],
			"wo": [["Waxtaan", "Discuter"], ["J\u00ebfandikukat", "Utilisateur"], ["Waxtaani_j\u00ebfandikukat", "Discussion_Utilisateur"], "Dencukaay", ["Waxtaani_dencukaay", "Discussion_Image"], "MediaWiki", ["Waxtaani_MediaWiki", "Discussion_MediaWiki"], ["Royuwaay", "Mod\u00e8le"], ["Waxtaani_royuwaay", "Discussion_Mod\u00e8le"], ["Ndimbal", "Aide"], ["Waxtaani_ndimbal", "Discussion_Aide"], ["W\u00e0ll", "Cat\u00e9gorie"], ["Waxtaani_w\u00e0ll", "Discussion_Cat\u00e9gorie"], "Jagleel", "Xibaarukaay", ["%s_waxtaan", "Discussion_$1"]],
			"bm": ["Discussion", "Utilisateur", "Discussion_utilisateur", "Fichier", "Discussion_fichier", "MediaWiki", "Discussion_MediaWiki", "Mod\u00e8le", "Discussion_mod\u00e8le", "Aide", "Discussion_aide", "Cat\u00e9gorie", "Discussion_cat\u00e9gorie", "Sp\u00e9cial", "M\u00e9dia", "Discussion_%s"],
			"bn": ["\u0986\u09b2\u09be\u09aa", "\u09ac\u09cd\u09af\u09ac\u09b9\u09be\u09b0\u0995\u09be\u09b0\u09c0", "\u09ac\u09cd\u09af\u09ac\u09b9\u09be\u09b0\u0995\u09be\u09b0\u09c0_\u0986\u09b2\u09be\u09aa", "\u099a\u09bf\u09a4\u09cd\u09b0", ["\u099a\u09bf\u09a4\u09cd\u09b0_\u0986\u09b2\u09cb\u099a\u09a8\u09be", "MediaWiki_\u0986\u09b2\u09be\u09aa", "\u099a\u09bf\u09a4\u09cd\u09b0_\u0986\u09b2\u09be\u09aa"], "\u09ae\u09bf\u09a1\u09bf\u09af\u09bc\u09be\u0989\u0987\u0995\u09bf", "\u09ae\u09bf\u09a1\u09bf\u09af\u09bc\u09be\u0989\u0987\u0995\u09bf_\u0986\u09b2\u09cb\u099a\u09a8\u09be", "\u099f\u09c7\u09ae\u09aa\u09cd\u09b2\u09c7\u099f", "\u099f\u09c7\u09ae\u09aa\u09cd\u09b2\u09c7\u099f_\u0986\u09b2\u09cb\u099a\u09a8\u09be", "\u09b8\u09be\u09b9\u09be\u09af\u09cd\u09af", "\u09b8\u09be\u09b9\u09be\u09af\u09cd\u09af_\u0986\u09b2\u09cb\u099a\u09a8\u09be", "\u09ac\u09bf\u09b7\u09af\u09bc\u09b6\u09cd\u09b0\u09c7\u09a3\u09c0", "\u09ac\u09bf\u09b7\u09af\u09bc\u09b6\u09cd\u09b0\u09c7\u09a3\u09c0_\u0986\u09b2\u09cb\u099a\u09a8\u09be", "\u09ac\u09bf\u09b6\u09c7\u09b7", "\u09ae\u09bf\u09a1\u09bf\u09af\u09bc\u09be", ["%s_\u0986\u09b2\u09cb\u099a\u09a8\u09be", "$1_\u0986\u09b2\u09be\u09aa"]],
			"bh": ["\u0935\u093e\u0930\u094d\u0924\u093e\u0932\u093e\u092a", "\u092a\u094d\u0930\u092f\u094b\u0917\u0915\u0930\u094d\u0924\u093e", "\u092a\u094d\u0930\u092f\u094b\u0917\u0915\u0930\u094d\u0924\u093e_\u0935\u093e\u0930\u094d\u0924\u093e", "\u091a\u093f\u0924\u094d\u0930", "\u091a\u093f\u0924\u094d\u0930_\u0935\u093e\u0930\u094d\u0924\u093e", "\u092e\u0940\u0921\u093f\u092f\u093e\u0935\u093f\u0915\u093f", "\u092e\u0940\u0921\u093f\u092f\u093e\u0935\u093f\u0915\u093f_\u0935\u093e\u0930\u094d\u0924\u093e", "\u091f\u0947\u092e\u094d\u092a\u0932\u0947\u091f", "\u091f\u0947\u092e\u094d\u092a\u0932\u0947\u091f_\u0935\u093e\u0930\u094d\u0924\u093e", "\u092e\u0926\u0926", "\u092e\u0926\u0926_\u0935\u093e\u0930\u094d\u0924\u093e", "\u0936\u094d\u0930\u0947\u0923\u0940", "\u0936\u094d\u0930\u0947\u0923\u0940_\u0935\u093e\u0930\u094d\u0924\u093e", "\u0935\u093f\u0936\u0947\u0937", "\u092e\u0940\u0921\u093f\u092f\u093e", "%s_\u0935\u093e\u0930\u094d\u0924\u093e"],
			"rue": [["\u0414\u0456\u0441\u043a\u0443\u0437\u0456\u044f", "\u0414\u0456\u0441\u043a\u0443\u0437\u0456\u0430"], "\u0425\u043e\u0441\u043d\u043e\u0432\u0430\u0442\u0435\u043b\u044c", ["\u0414\u0456\u0441\u043a\u0443\u0437\u0456\u044f_\u0437_\u0445\u043e\u0441\u043d\u043e\u0432\u0430\u0442\u0435\u043b\u0451\u043c", "\u0414\u0456\u0441\u043a\u0443\u0437\u0456\u0430_\u0437_\u0445\u043e\u0441\u043d\u043e\u0432\u0430\u0442\u0435\u043b\u0451\u043c"], "\u0424\u0430\u0439\u043b", "\u0414\u0456\u0441\u043a\u0443\u0437\u0456\u044f_\u043a\u0443_\u0444\u0430\u0439\u043b\u0443", "MediaWiki", ["\u0414\u0456\u0441\u043a\u0443\u0437\u0456\u044f_\u043a\u0443_MediaWiki", "\u0414\u0456\u0437\u043a\u0443\u0437\u0456\u044f_\u043a\u0443_MediaWiki"], "\u0428\u0430\u0431\u043b\u043e\u043d\u0430", "\u0414\u0456\u0441\u043a\u0443\u0437\u0456\u044f_\u043a\u0443_\u0448\u0430\u0431\u043b\u043e\u043d\u0457", "\u041f\u043e\u043c\u0456\u0447", "\u0414\u0456\u0441\u043a\u0443\u0437\u0456\u044f_\u043a\u0443_\u043f\u043e\u043c\u043e\u0447\u0456", "\u041a\u0430\u0442\u0435\u0491\u043e\u0440\u0456\u044f", "\u0414\u0456\u0441\u043a\u0443\u0437\u0456\u044f_\u043a\u0443_\u043a\u0430\u0442\u0435\u0491\u043e\u0440\u0456\u0457", "\u0428\u043f\u0435\u0446\u0456\u0430\u043b\u043d\u0430", "\u041c\u0435\u0434\u0456\u0430", "\u0414\u0456\u0441\u043a\u0443\u0437\u0456\u044f_\u043a\u0443_{{grammar:3sg|%s}}"],
			"br": ["Kaozeal", "Implijer", "Kaozeadenn_Implijer", ["Restr", "Skeudenn"], ["Kaozeadenn_Restr", "Kaozeadenn_Skeudenn"], "MediaWiki", "Kaozeadenn_MediaWiki", "Patrom", "Kaozeadenn_Patrom", "Skoazell", "Kaozeadenn_Skoazell", "Rummad", "Kaozeadenn_Rummad", "Dibar", "Media", "Kaozeadenn_%s"],
			"bs": ["Razgovor", "Korisnik", "Razgovor_sa_korisnikom", ["Datoteka", "Slika"], ["Razgovor_o_datoteci", "Razgovor_o_datoteci"], ["MediaWiki", "MedijaViki"], ["MediaWiki_razgovor", "Razgovor_o_MedijaVikiju"], "\u0160ablon", "Razgovor_o_\u0161ablonu", "Pomo\u0107", "Razgovor_o_pomo\u0107i", "Kategorija", "Razgovor_o_kategoriji", "Posebno", ["Mediji", "Medija"], "Razgovor_{{grammar:instrumental|%s}}"],
			"tg-cyrl": ["\u0411\u0430\u04b3\u0441", "\u041a\u043e\u0440\u0431\u0430\u0440", "\u0411\u0430\u04b3\u0441\u0438_\u043a\u043e\u0440\u0431\u0430\u0440", "\u0410\u043a\u0441", "\u0411\u0430\u04b3\u0441\u0438_\u0430\u043a\u0441", "\u041c\u0435\u0434\u0438\u0430\u0432\u0438\u043a\u0438", "\u0411\u0430\u04b3\u0441\u0438_\u043c\u0435\u0434\u0438\u0430\u0432\u0438\u043a\u0438", "\u0428\u0430\u0431\u043b\u043e\u043d", "\u0411\u0430\u04b3\u0441\u0438_\u0448\u0430\u0431\u043b\u043e\u043d", "\u0420\u043e\u04b3\u043d\u0430\u043c\u043e", "\u0411\u0430\u04b3\u0441\u0438_\u0440\u043e\u04b3\u043d\u0430\u043c\u043e", "\u0413\u0443\u0440\u04ef\u04b3", "\u0411\u0430\u04b3\u0441\u0438_\u0433\u0443\u0440\u04ef\u04b3", "\u0412\u0438\u0436\u0430", "\u041c\u0435\u0434\u0438\u0430", "\u0411\u0430\u04b3\u0441\u0438_%s"],
			"lez": ["\u041e\u0431\u0441\u0443\u0436\u0434\u0435\u043d\u0438\u0435", "\u0423\u0447\u0430\u0441\u0442\u043d\u0438\u043a", "\u041e\u0431\u0441\u0443\u0436\u0434\u0435\u043d\u0438\u0435_\u0443\u0447\u0430\u0441\u0442\u043d\u0438\u043a\u0430", "\u0424\u0430\u0439\u043b", "\u041e\u0431\u0441\u0443\u0436\u0434\u0435\u043d\u0438\u0435_\u0444\u0430\u0439\u043b\u0430", "MediaWiki", "\u041e\u0431\u0441\u0443\u0436\u0434\u0435\u043d\u0438\u0435_MediaWiki", "\u0428\u0430\u0431\u043b\u043e\u043d", "\u041e\u0431\u0441\u0443\u0436\u0434\u0435\u043d\u0438\u0435_\u0448\u0430\u0431\u043b\u043e\u043d\u0430", "\u0421\u043f\u0440\u0430\u0432\u043a\u0430", "\u041e\u0431\u0441\u0443\u0436\u0434\u0435\u043d\u0438\u0435_\u0441\u043f\u0440\u0430\u0432\u043a\u0438", "\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044f", "\u041e\u0431\u0441\u0443\u0436\u0434\u0435\u043d\u0438\u0435_\u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u0438", "\u0421\u043b\u0443\u0436\u0435\u0431\u043d\u0430\u044f", "\u041c\u0435\u0434\u0438\u0430", "\u041e\u0431\u0441\u0443\u0436\u0434\u0435\u043d\u0438\u0435_{{GRAMMAR:genitive|%s}}"],
			"vro": ["Arotus", "Pruukja", "Pruukja_arotus", "Pilt", "Pildi_arotus", "MediaWiki", "MediaWiki_arotus", "N\u00e4\u00fcd\u00fcs", "N\u00e4\u00fcd\u00fcse_arotus", "Oppus", "Oppus\u00f5_arotus", "Kat\u00f5gooria", "Kat\u00f5gooria_arotus", "Tallituslehek\u00fclg", "Meedi\u00e4", "%s_arotus"],
			"ja": [["\u30c8\u30fc\u30af", "\u30ce\u30fc\u30c8"], "\u5229\u7528\u8005", ["\u5229\u7528\u8005\u30fb\u30c8\u30fc\u30af", "\u5229\u7528\u8005\u2010\u4f1a\u8a71"], ["\u30d5\u30a1\u30a4\u30eb", "\u753b\u50cf"], ["\u30d5\u30a1\u30a4\u30eb\u30fb\u30c8\u30fc\u30af", "\u753b\u50cf\u2010\u30ce\u30fc\u30c8", "\u30d5\u30a1\u30a4\u30eb\u2010\u30ce\u30fc\u30c8"], "MediaWiki", ["MediaWiki\u30fb\u30c8\u30fc\u30af", "MediaWiki\u2010\u30ce\u30fc\u30c8"], "\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8", ["\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u30fb\u30c8\u30fc\u30af", "Template\u2010\u30ce\u30fc\u30c8"], "\u30d8\u30eb\u30d7", ["\u30d8\u30eb\u30d7\u30fb\u30c8\u30fc\u30af", "Help\u2010\u30ce\u30fc\u30c8"], "\u30ab\u30c6\u30b4\u30ea", ["\u30ab\u30c6\u30b4\u30ea\u30fb\u30c8\u30fc\u30af", "Category\u2010\u30ce\u30fc\u30c8"], "\u7279\u5225", "\u30e1\u30c7\u30a3\u30a2", ["%s\u30fb\u30c8\u30fc\u30af", "$1\u2010\u30ce\u30fc\u30c8"]],
			"glk": ["\u0628\u062d\u062b", "\u06a9\u0627\u0631\u0628\u0631", "\u0628\u062d\u062b_\u06a9\u0627\u0631\u0628\u0631", "\u067e\u0631\u0648\u0646\u062f\u0647", "\u0628\u062d\u062b_\u067e\u0631\u0648\u0646\u062f\u0647", "\u0645\u062f\u06cc\u0627\u0648\u06cc\u06a9\u06cc", "\u0628\u062d\u062b_\u0645\u062f\u06cc\u0627\u0648\u06cc\u06a9\u06cc", "\u0627\u0644\u06af\u0648", "\u0628\u062d\u062b_\u0627\u0644\u06af\u0648", "\u0631\u0627\u0647\u0646\u0645\u0627", "\u0628\u062d\u062b_\u0631\u0627\u0647\u0646\u0645\u0627", "\u0631\u062f\u0647", "\u0628\u062d\u062b_\u0631\u062f\u0647", "\u0648\u06cc\u0698\u0647", "\u0645\u062f\u06cc\u0627", "\u0628\u062d\u062b_%s"],
			"lbe": ["\u0418\u0445\u0442\u0438\u043b\u0430\u0442", "\u0413\u044c\u0443\u0440\u0442\u0442\u0443_\u0445\u044c\u0443\u043c\u0430", "\u0413\u044c\u0443\u0440\u0442\u0442\u0443_\u0445\u044c\u0443\u043c\u0438\u043d\u043d\u0430\u043b_\u0438\u0445\u0442\u0438\u043b\u0430\u0442", "\u0421\u0443\u0440\u0430\u0442", "\u0421\u0443\u0440\u0430\u0442\u0440\u0430\u044f\u0441\u0441\u0430_\u0438\u0445\u0442\u0438\u043b\u0430\u0442", "MediaWiki", "MediaWiki\u043b\u0438\u044f\u0441\u0441\u0430_\u0438\u0445\u0442\u0438\u043b\u0430\u0442", "\u0428\u0430\u0431\u043b\u043e\u043d", "\u0428\u0430\u0431\u043b\u043e\u043d\u0434\u0430\u043b\u0438\u044f\u0441\u0441\u0430_\u0438\u0445\u0442\u0438\u043b\u0430\u0442", "\u041a\u0443\u043c\u0430\u0433", "\u041a\u0443\u043c\u0430\u0433\u0440\u0430\u044f\u0441\u0441\u0430_\u0438\u0445\u0442\u0438\u043b\u0430\u0442", "\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044f", "\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044f\u043b\u0438\u044f\u0441\u0441\u0430_\u0438\u0445\u0442\u0438\u043b\u0430\u0442", "\u041a\u044a\u0443\u043b\u043b\u0443\u0433\u044a\u0438\u0440\u0430\u043b_\u043b\u0430\u0436\u0438\u043d", "\u041c\u0435\u0434\u0438\u0430", "%s\u043b\u0438\u044f\u0441\u0441\u0430_\u0438\u0445\u0442\u0438\u043b\u0430\u0442"],
			"ace": [["Marit", "Pembicaraan", "Bicara"], ["Ureu\u00ebng_Nguy", "Pengguna"], ["Marit_Ureu\u00ebng_Nguy", "Pembicaraan_Pengguna", "Bicara_Pengguna"], ["Beureukaih", "Berkas", "Gambar"], ["Marit_Beureukaih", "Pembicaraan_Gambar", "Gambar_Pembicaraan", "Pembicaraan_Berkas"], "AlatWiki", ["Marit_AlatWiki", "Pembicaraan_MediaWiki", "MediaWiki_Pembicaraan"], ["Pola", "Templat"], ["Marit_Pola", "Pembicaraan_Templat", "Templat_Pembicaraan"], ["Beunantu", "Bantuan"], ["Marit_Beunantu", "Bantuan_Pembicaraan", "Pembicaraan_Bantuan"], ["Kawan", "Kategori"], ["Marit_Kawan", "Kategori_Pembicaraan", "Pembicaraan_Kategori"], ["Kusuih", "Istimewa"], "Alat", ["Marit_%s", "Pembicaraan_$1"]],
			"ilo": ["Tungtungan", "Agar-aramat", "Agar-aramat_tungtungan", "Papeles", "Papeles_tungtungan", "MediaWiki", "MediaWiki_tungtungan", "Plantilia", "Plantilia_tungtungan", "Tulong", "Tulong_tungtungan", "Kategoria", "Kategoria_tungtungan", "Espesial", "Midia", "%s_tungtungan"],
			"tly": ["Nopeg\u0259t", "Oko\u0259d\u0259", "Oko\u0259d\u0259j_nopeg\u0259t", "Fajl", ["Fajl_nopeg\u0259t", "Fajli_nopeg\u0259t"], "MediaWiki", "MediaWiki_nopeg\u0259t", "Numun\u0259", "Numun\u0259_nopeg\u0259t", "Kom\u0259g", ["Kom\u0259g_nopeg\u0259t", "Kom\u0259gi_nopeg\u0259t"], "Tispir", ["Tispir_nopeg\u0259t", "Tispiron_nopeg\u0259t"], "Xususi", "Medja", ["%s_Nopeg\u0259t", "$1_Nopeg\u0259t\u0259ti"]],
			"pdt": ["Diskussion", "Benutzer", "Benutzer_Diskussion", "Datei", "Datei_Diskussion", "MediaWiki", "MediaWiki_Diskussion", "Vorlage", "Vorlage_Diskussion", "Hilfe", "Hilfe_Diskussion", "Kategorie", "Kategorie_Diskussion", "Spezial", "Medium", "%s_Diskussion"],
			"oc": ["Discutir", ["Utilizaire", "Utilisator"], ["Discussion_Utilizaire", "Discussion_Utilisator", "Discutida_Utilisator"], ["Fichi\u00e8r", "Imatge"], ["Discussion_Fichi\u00e8r", "Discutida_Imatge", "Discussion_Imatge"], ["MediaWiki", "Media\u00f2iqui"], ["Discussion_MediaWiki", "Discussion_Media\u00f2iqui", "Discutida_Media\u00f2iqui"], "Mod\u00e8l", ["Discussion_Mod\u00e8l", "Discutida_Mod\u00e8l"], "Ajuda", ["Discussion_Ajuda", "Discutida_Ajuda"], "Categoria", ["Discussion_Categoria", "Discutida_Categoria"], "Especial", "M\u00e8dia", "Discussion_%s"],
			"ltg": ["Spr\u012b\u017ea", "L\u012btuotuojs", "Spr\u012b\u017ea_ap_l\u012btuotuoju", "Fails", "Spr\u012b\u017ea_ap_failu", "MediaWiki", "Spr\u012b\u017ea_ap_MediaWiki", "Taiss", "Spr\u012b\u017ea_ap_taisu", "Paleigs", "Spr\u012b\u017ea_ap_paleigu", "Kategoreja", "Spr\u012b\u017ea_ap_kategoreju", "Sevi\u0161kuo", "Medeja", "Spr\u012b\u017ea_ap_{{GRAMMAR:accusative|%s}}"],
			"be-tarask": ["\u0410\u0431\u043c\u0435\u0440\u043a\u0430\u0432\u0430\u043d\u044c\u043d\u0435", ["\u0423\u0434\u0437\u0435\u043b\u044c\u043d\u0456\u043a", "\u0423\u0434\u0437\u0435\u043b\u044c\u043d\u0456\u0446\u0430"], "\u0413\u0443\u0442\u0430\u0440\u043a\u0456_\u045e\u0434\u0437\u0435\u043b\u044c\u043d\u0456\u043a\u0430", ["\u0424\u0430\u0439\u043b", "\u0412\u044b\u044f\u0432\u0430"], "\u0410\u0431\u043c\u0435\u0440\u043a\u0430\u0432\u0430\u043d\u044c\u043d\u0435_\u0444\u0430\u0439\u043b\u0430", "MediaWiki", "\u0410\u0431\u043c\u0435\u0440\u043a\u0430\u0432\u0430\u043d\u044c\u043d\u0435_MediaWiki", "\u0428\u0430\u0431\u043b\u0451\u043d", "\u0410\u0431\u043c\u0435\u0440\u043a\u0430\u0432\u0430\u043d\u044c\u043d\u0435_\u0448\u0430\u0431\u043b\u0451\u043d\u0443", "\u0414\u0430\u043f\u0430\u043c\u043e\u0433\u0430", "\u0410\u0431\u043c\u0435\u0440\u043a\u0430\u0432\u0430\u043d\u044c\u043d\u0435_\u0434\u0430\u043f\u0430\u043c\u043e\u0433\u0456", "\u041a\u0430\u0442\u044d\u0433\u043e\u0440\u044b\u044f", "\u0410\u0431\u043c\u0435\u0440\u043a\u0430\u0432\u0430\u043d\u044c\u043d\u0435_\u043a\u0430\u0442\u044d\u0433\u043e\u0440\u044b\u0456", "\u0421\u043f\u044d\u0446\u044b\u044f\u043b\u044c\u043d\u044b\u044f", "\u041c\u044d\u0434\u044b\u044f", ["\u0410\u0431\u043c\u0435\u0440\u043a\u0430\u0432\u0430\u043d\u044c\u043d\u0435_{{GRAMMAR:\u0440\u043e\u0434\u043d\u044b|%s}}", "\u0410\u0431\u043c\u0435\u0440\u043a\u0430\u0432\u0430\u043d\u044c\u043d\u0435_$1"]],
			"de-at": ["Diskussion", "Benutzer", "Benutzer_Diskussion", "Datei", "Datei_Diskussion", "MediaWiki", "MediaWiki_Diskussion", "Vorlage", "Vorlage_Diskussion", "Hilfe", "Hilfe_Diskussion", "Kategorie", "Kategorie_Diskussion", "Spezial", "Medium", "%s_Diskussion"],
			"krc": ["\u0421\u044e\u0437\u044e\u0443", "\u041a\u044a\u043e\u0448\u0443\u043b\u0443\u0443\u0447\u0443", "\u041a\u044a\u043e\u0448\u0443\u043b\u0443\u0443\u0447\u0443\u043d\u0443_\u0441\u044e\u0437\u044e\u0443", "\u0424\u0430\u0439\u043b", "\u0424\u0430\u0439\u043b\u043d\u044b_\u0441\u044e\u0437\u044e\u0443", "MediaWiki", "MediaWiki-\u043d\u0438_\u0441\u044e\u0437\u044e\u0443", "\u0428\u0430\u0431\u043b\u043e\u043d", "\u0428\u0430\u0431\u043b\u043e\u043d\u043d\u0443_\u0441\u044e\u0437\u044e\u0443", "\u0411\u043e\u043b\u0443\u0448\u043b\u0443\u043a\u044a", "\u0411\u043e\u043b\u0443\u0448\u043b\u0443\u043a\u044a\u043d\u0443_\u0441\u044e\u0437\u044e\u0443", "\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044f", "\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044f\u043d\u044b_\u0441\u044e\u0437\u044e\u0443", "\u041a\u044a\u0443\u043b\u043b\u0443\u043a\u044a", "\u041c\u0435\u0434\u0438\u0430", "%s_\u0441\u044e\u0437\u044e\u0443"],
			"nds": [["Diskuschoon", "Diskussion"], ["Bruker", "Benutzer"], ["Bruker_Diskuschoon", "Benutzer_Diskussion"], ["Bild", "Datei"], ["Bild_Diskuschoon", "Bild_Diskussion", "Datei_Diskuschoon"], "MediaWiki", ["MediaWiki_Diskuschoon", "MediaWiki_Diskussion"], ["V\u00f6rlaag", "Vorlage"], ["V\u00f6rlaag_Diskuschoon", "Vorlage_Diskussion"], ["H\u00fclp", "Hilfe"], ["H\u00fclp_Diskuschoon", "Hilfe_Diskussion"], ["Kategorie", "Kategorie"], ["Kategorie_Diskuschoon", "Kategorie_Diskussion"], "Spezial", "Media", ["%s_Diskuschoon", "$1_Diskussion"]],
			"os": [["\u0422\u00e6\u0440\u0445\u043e\u043d", "\u0414\u0438\u0441\u043a\u0443\u0441\u0441\u0438"], "\u0410\u0440\u0445\u0430\u0439\u00e6\u0433", ["\u0410\u0440\u0445\u0430\u0439\u00e6\u0434\u0436\u044b_\u043d\u044b\u0445\u0430\u0441", "\u0410\u0440\u0445\u0430\u0439\u00e6\u0434\u0436\u044b_\u0434\u0438\u0441\u043a\u0443\u0441\u0441\u0438"], ["\u0424\u0430\u0439\u043b", "\u041d\u044b\u0432"], ["\u0424\u0430\u0439\u043b\u044b_\u0442\u00e6\u0440\u0445\u043e\u043d", "\u041d\u044b\u0432\u044b_\u0442\u00e6\u0440\u0445\u043e\u043d", "\u041d\u044b\u0432\u044b_\u0442\u044b\u0445\u0445\u00e6\u0439_\u0434\u0438\u0441\u043a\u0443\u0441\u0441\u0438"], "MediaWiki", ["MediaWiki-\u0439\u044b_\u0442\u00e6\u0440\u0445\u043e\u043d", "\u0422\u00e6\u0440\u0445\u043e\u043d_MediaWiki", "\u0414\u0438\u0441\u043a\u0443\u0441\u0441\u0438_MediaWiki"], "\u0428\u0430\u0431\u043b\u043e\u043d", ["\u0428\u0430\u0431\u043b\u043e\u043d\u044b_\u0442\u00e6\u0440\u0445\u043e\u043d", "\u0428\u0430\u0431\u043b\u043e\u043d\u044b_\u0442\u044b\u0445\u0445\u00e6\u0439_\u0434\u0438\u0441\u043a\u0443\u0441\u0441\u0438"], "\u00c6\u0445\u0445\u0443\u044b\u0441", ["\u00c6\u0445\u0445\u0443\u044b\u0441\u044b_\u0442\u00e6\u0440\u0445\u043e\u043d", "\u00c6\u0445\u0445\u0443\u044b\u0441\u044b_\u0442\u044b\u0445\u0445\u00e6\u0439_\u0434\u0438\u0441\u043a\u0443\u0441\u0441\u0438"], "\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0438", ["\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u0439\u044b_\u0442\u00e6\u0440\u0445\u043e\u043d", "\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u0439\u044b_\u0442\u044b\u0445\u0445\u00e6\u0439_\u0434\u0438\u0441\u043a\u0443\u0441\u0441\u0438"], "\u0421\u00e6\u0440\u043c\u0430\u0433\u043e\u043d\u0434", "\u041c\u0435\u0434\u0438\u0430", ["{{GRAMMAR:genitive|%s}}_\u0442\u00e6\u0440\u0445\u043e\u043d", "\u0414\u0438\u0441\u043a\u0443\u0441\u0441\u0438_$1"]],
			"or": ["\u0b06\u0b32\u0b4b\u0b1a\u0b28\u0b3e", ["\u0b2c\u0b4d\u0b5f\u0b2c\u0b39\u0b3e\u0b30\u0b15\u0b3e\u0b30\u0b40", "\u0b2c\u0b4d\u0b5f\u0b2c\u0b39\u0b3e\u0b30\u0b15\u0b3e\u0b30\u0b3f", "\u0b2c\u0b4d\u0b5f\u0b2c\u0b3e\u0b39\u0b3e\u0b30\u0b15\u0b3e\u0b30\u0b40"], ["\u0b2c\u0b4d\u0b5f\u0b2c\u0b39\u0b3e\u0b30\u0b15\u0b3e\u0b30\u0b40\u0b19\u0b4d\u0b15_\u0b06\u0b32\u0b4b\u0b1a\u0b28\u0b3e", "\u0b2c\u0b4d\u0b5f\u0b2c\u0b39\u0b3e\u0b30\u0b15\u0b3e\u0b30\u0b3f\u0b01\u0b15_\u0b06\u0b32\u0b4b\u0b1a\u0b28\u0b3e", "\u0b2c\u0b4d\u0b5f\u0b2c\u0b3e\u0b39\u0b3e\u0b30\u0b15\u0b3e\u0b30\u0b40\u0b19\u0b4d\u0b15_\u0b06\u0b32\u0b4b\u0b1a\u0b28\u0b3e"], "\u0b2b\u0b3e\u0b07\u0b32", "\u0b2b\u0b3e\u0b07\u0b32_\u0b06\u0b32\u0b4b\u0b1a\u0b28\u0b3e", "\u0b2e\u0b3f\u0b21\u0b3c\u0b3f\u0b06\u0b09\u0b07\u0b15\u0b3f", "\u0b2e\u0b3f\u0b21\u0b3c\u0b3f\u0b06\u0b09\u0b07\u0b15\u0b3f_\u0b06\u0b32\u0b4b\u0b1a\u0b28\u0b3e", ["\u0b1b\u0b3e\u0b1e\u0b4d\u0b1a", "\u0b1f\u0b47\u0b01\u0b2a\u0b32\u0b47\u0b1f", "\u0b1f\u0b47\u0b2e\u0b4d\u0b2a\u0b32\u0b47\u0b1f"], ["\u0b1b\u0b3e\u0b1e\u0b4d\u0b1a_\u0b06\u0b32\u0b4b\u0b1a\u0b28\u0b3e", "\u0b1f\u0b47\u0b2e\u0b4d\u0b2a\u0b32\u0b47\u0b1f_\u0b06\u0b32\u0b4b\u0b1a\u0b28\u0b3e", "\u0b1f\u0b47\u0b01\u0b2a\u0b32\u0b47\u0b1f_\u0b06\u0b32\u0b4b\u0b1a\u0b28\u0b3e"], ["\u0b38\u0b39\u0b2f\u0b4b\u0b17", "\u0b38\u0b3e\u0b39\u0b3e\u0b2f\u0b4d\u0b5f"], ["\u0b38\u0b39\u0b2f\u0b4b\u0b17_\u0b06\u0b32\u0b4b\u0b1a\u0b28\u0b3e", "\u0b38\u0b3e\u0b39\u0b3e\u0b2f\u0b4d\u0b5f_\u0b06\u0b32\u0b4b\u0b1a\u0b28\u0b3e"], ["\u0b36\u0b4d\u0b30\u0b47\u0b23\u0b40", "\u0b2c\u0b3f\u0b2d\u0b3e\u0b17"], ["\u0b36\u0b4d\u0b30\u0b47\u0b23\u0b40_\u0b06\u0b32\u0b4b\u0b1a\u0b28\u0b3e", "\u0b2c\u0b3f\u0b2d\u0b3e\u0b17\u0b3f\u0b5f_\u0b06\u0b32\u0b4b\u0b1a\u0b28\u0b3e"], "\u0b2c\u0b3f\u0b36\u0b47\u0b37", "\u0b2e\u0b3e\u0b27\u0b4d\u0b5f\u0b2e", ["%s_\u0b06\u0b32\u0b4b\u0b1a\u0b28\u0b3e", "\u0b09\u0b07\u0b15\u0b3f\u0b2a\u0b3f\u0b21\u0b3c\u0b3f\u0b06_\u0b06\u0b32\u0b4b\u0b1a\u0b28\u0b3e"]],
			"udm": ["\u0412\u0435\u0440\u0430\u0441\u044c\u043a\u043e\u043d", "\u0412\u0438\u043a\u0438\u0430\u0432\u0442\u043e\u0440", "\u0412\u0438\u043a\u0438\u0430\u0432\u0442\u043e\u0440_\u0441\u044f\u0440\u044b\u0441\u044c_\u0432\u0435\u0440\u0430\u0441\u044c\u043a\u043e\u043d", "\u0421\u0443\u0440\u0435\u0434", "\u0421\u0443\u0440\u0435\u0434_\u0441\u044f\u0440\u044b\u0441\u044c_\u0432\u0435\u0440\u0430\u0441\u044c\u043a\u043e\u043d", "MediaWiki", "MediaWiki_\u0441\u044f\u0440\u044b\u0441\u044c_\u0432\u0435\u0440\u0430\u0441\u044c\u043a\u043e\u043d", "\u0428\u0430\u0431\u043b\u043e\u043d", "\u0428\u0430\u0431\u043b\u043e\u043d_\u0441\u044f\u0440\u044b\u0441\u044c_\u0432\u0435\u0440\u0430\u0441\u044c\u043a\u043e\u043d", "\u0412\u0430\u043b\u044d\u043a\u0442\u043e\u043d", "\u0412\u0430\u043b\u044d\u043a\u0442\u043e\u043d_\u0441\u044f\u0440\u044b\u0441\u044c_\u0432\u0435\u0440\u0430\u0441\u044c\u043a\u043e\u043d", "\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044f", "\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044f_\u0441\u044f\u0440\u044b\u0441\u044c_\u0432\u0435\u0440\u0430\u0441\u044c\u043a\u043e\u043d", "\u041f\u0430\u043d\u0435\u043b\u044c", "\u041c\u0435\u0434\u0438\u0430", "%s_\u0441\u044f\u0440\u044b\u0441\u044c_\u0432\u0435\u0440\u0430\u0441\u044c\u043a\u043e\u043d"],
			"ruq-latn": ["Discu\u021bie", "Utilizator", "Discu\u021bie_Utilizator", "Fi\u0219ier", "Discu\u021bie_Fi\u0219ier", "MediaWiki", "Discu\u021bie_MediaWiki", "Format", "Discu\u021bie_Format", "Ajutor", "Discu\u021bie_Ajutor", "Categorie", "Discu\u021bie_Categorie", "Special", "Media", "Discu\u021bie_%s"],
			"ch": ["Kombetsasion", "Muna\\'sesetbi", "Kombetsasion_ni_muna\\'sesetbi", "Litratu", "Kombetsasion_ni_litratu", "MediaWiki", "MediaWiki_talk", "Template", "Template_talk", "Ayudo", "Kombetsasion_ni_ayudo", "Katigoria", "Kombetsasion_ni_katigoria", "Espesiat", "Media", "Kombetsasion_nu_%s"],
			"qug": ["Rimanakuy", "Rurak", "Rurakpa_rimanakuy", "Rikcha", "Rikchapa_rimanakuy", "MediaWiki", "MediaWikipa_rimanakuy", "Plantilla", "Plantillapa_rimanakuy", "Yanapa", "Yanapapak_rimanakuy", "Samiyachiy", "Samiyachiy_rimanakuy", "Sapak", "Midya", "%s-pa_rimanakuy"],
			"nso": ["Boledi\u0161a", "Mo\u0161omi", "Boledi\u0161ana_le_Mo\u0161omi", "Seswant\u0161ho", "Poledi\u0161ano_ya_Seswant\u0161ho", "MediaWiki", "Poledi\u0161ano_ya_MediaWiki", "Template", "Poledi\u0161ano_ya_Template", "Thu\u0161o", "Poledi\u0161ano_ya_Thu\u0161o", "Setensele", "Poledi\u0161ano_ya_Setensele", "Special", "Media", "%s_Poledi\u0161ano"],
			"bjn": [["Pamandiran", "Pembicaraan"], ["Pamakai", "Pengguna"], ["Pamandiran_Pamakai", "Pembicaraan_Pengguna"], ["Barakas", "Berkas"], ["Pamandiran_Barakas", "Pembicaraan_Berkas"], "MediaWiki", ["Pamandiran_MediaWiki", "Pembicaraan_MediaWiki"], ["Citakan", "Templat"], ["Pamandiran_Citakan", "Pembicaraan_Templat"], ["Patulung", "Bantuan"], ["Pamandiran_Patulung", "Pembicaraan_Bantuan"], ["Tumbung", "Kategori"], ["Pamandiran_Tumbung", "Pembicaraan_Kategori"], ["Istimiwa", "Istimewa"], "Media", ["Pamandiran_%s", "Pembicaraan_$1"]],
			"ca": ["Discussi\u00f3", "Usuari", "Usuari_Discussi\u00f3", ["Fitxer", "Imatge"], ["Fitxer_Discussi\u00f3", "Imatge_Discussi\u00f3"], "MediaWiki", "MediaWiki_Discussi\u00f3", "Plantilla", "Plantilla_Discussi\u00f3", "Ajuda", "Ajuda_Discussi\u00f3", "Categoria", "Categoria_Discussi\u00f3", "Especial", "Media", "%s_Discussi\u00f3"],
			"lmo": [["Ciciarada", "Discussione"], ["Druvadur", "Dovrat", "Druvat", "Utente"], ["Ciciarada_Druvadur", "Discussioni_utente", "Ciciarada_Dovrat", "Ciciarada_Druvat"], ["Archivi", "Immagine"], ["Ciciarada_Archivi", "Discussioni_immagine", "Discussioni_file"], "MediaWiki", ["Ciciarada_MediaWiki", "Discussioni_MediaWiki"], ["Mudel", "Model"], ["Ciciarada_Mudel", "Discussioni_template", "Ciciarada_Model"], ["J\u00fct", "Aiuto", "Aida"], ["Ciciarada_J\u00fct", "Discussioni_aiuto", "Ciciarada_Aida"], ["Categuria", "Categoria"], ["Ciciarada_Categuria", "Discussioni_categoria", "Ciciarada_Categoria"], ["Special", "Speciale"], "Media", ["%s_Ciciarada", "Discussioni_$1"]],
			"ku-arab": ["\u0648\u062a\u0648\u0648\u06ce\u0698", "\u0628\u06d5\u06a9\u0627\u0631\u06be\u06ce\u0646\u06d5\u0631", "\u0644\u06ce\u062f\u0648\u0627\u0646\u06cc_\u0628\u06d5\u06a9\u0627\u0631\u06be\u06ce\u0646\u06d5\u0631", "\u067e\u06d5\u0695\u06af\u06d5", "\u0648\u062a\u0648\u0648\u06ce\u0698\u06cc_\u067e\u06d5\u0695\u06af\u06d5", "\u0645\u06cc\u062f\u06cc\u0627\u0648\u06cc\u06a9\u06cc", "\u0648\u062a\u0648\u0648\u06ce\u0698\u06cc_\u0645\u06cc\u062f\u06cc\u0627\u0648\u06cc\u06a9\u06cc", "\u062f\u0627\u0695\u06ce\u0698\u06d5", "\u0648\u062a\u0648\u0648\u06ce\u0698\u06cc_\u062f\u0627\u0695\u06ce\u0698\u06d5", "\u06cc\u0627\u0631\u0645\u06d5\u062a\u06cc", "\u0648\u062a\u0648\u0648\u06ce\u0698\u06cc_\u06cc\u0627\u0631\u0645\u06d5\u062a\u06cc", "\u067e\u06c6\u0644", "\u0648\u062a\u0648\u0648\u06ce\u0698\u06cc_\u067e\u06c6\u0644", "\u062a\u0627\u06cc\u0628\u06d5\u062a", "\u0645\u06cc\u062f\u06cc\u0627", "\u0644\u06ce\u062f\u0648\u0627\u0646\u06cc_%s"],
			"ce": [["\u0414\u0438\u0439\u0446\u0430\u0440\u0435", "\u0414\u0438\u0439\u0446\u0430"], ["\u0414\u0435\u043a\u044a\u0430\u0448\u0445\u043e", "\u042e\u0437\u0435\u0440"], ["\u0414\u0435\u043a\u044a\u0430\u0448\u0445\u043e\u043d_\u0434\u0438\u0439\u0446\u0430\u0440\u0435", "\u0414\u0438\u0439\u0446\u0430\u0440\u0435_\u0434\u0435\u043a\u044a\u0430\u0448\u0445\u043e", "\u042e\u0437\u0435\u0440\u0438_\u0434\u0438\u0439\u0446\u0430"], ["\u0425l\u0443\u043c", "\u0421\u0443\u0440\u0442"], ["\u0425l\u0443\u043c\u0430\u043d_\u0434\u0438\u0439\u0446\u0430\u0440\u0435", "\u0414\u0438\u0439\u0446\u0430\u0440\u0435_\u0445l\u0443\u043c\u0430\u043d", "\u0421\u0443\u0440\u0442\u0438_\u0434\u0438\u0439\u0446\u0430"], ["MediaWiki", "\u041c\u0435\u0434\u0439\u0430\u0412\u0438\u043a\u0438"], ["MediaWiki_\u0434\u0438\u0439\u0446\u0430\u0440\u0435", "MediaWiki_\u0414\u0438\u0439\u0446\u0430\u0440\u0435", "\u041c\u0435\u0434\u0439\u0430\u0412\u0438\u043a\u0438_\u0434\u0438\u0439\u0446\u0430"], ["\u041a\u0443\u0446\u043a\u0435\u043f", "\u0414\u0430\u043a\u044a\u0430\u043d"], ["\u041a\u0443\u0446\u043a\u0435\u043f_\u0434\u0438\u0439\u0446\u0430\u0440\u0435", "\u0414\u0430\u043a\u044a\u0430\u043d_\u0434\u0438\u0439\u0446\u0430"], ["\u0413l\u043e", "\u0413\u0406\u043e"], ["\u0413l\u043e\u043d_\u0434\u0438\u0439\u0446\u0430\u0440\u0435", "\u0413\u0406\u043e\u0434\u0430\u043d_\u0434\u0438\u0439\u0446\u0430"], ["\u041a\u0430\u0434\u0435\u0433\u0430\u0440", "\u0422\u043e\u0431\u0430"], ["\u041a\u0430\u0434\u0435\u0433\u0430\u0440_\u0434\u0438\u0439\u0446\u0430\u0440\u0435", "\u0422\u043e\u0431\u0430\u043d_\u0434\u0438\u0439\u0446\u0430"], ["\u0411\u0435\u043b\u0445\u0430\u043d", "\u0411\u0430\u0448\u0445\u043e"], ["\u041c\u0435\u0434\u0438\u0430", "\u041c\u0435\u0434\u0439\u0430"], ["{{GRAMMAR:genitive|%s}}_\u0434\u0438\u0439\u0446\u0430\u0440\u0435", "\u0414\u0438\u0439\u0446\u0430\u0440\u0435_{{GRAMMAR:genitive|$1}}", "$1_\u0414\u0438\u0439\u0446\u0430"]],
			"cy": ["Sgwrs", "Defnyddiwr", "Sgwrs_Defnyddiwr", "Delwedd", "Sgwrs_Delwedd", "MediaWici", "Sgwrs_MediaWici", "Nodyn", "Sgwrs_Nodyn", "Cymorth", "Help_talk", "Categori", "Sgwrs_Categori", "Arbennig", "Media", "Sgwrs_%s"],
			"ang": ["Gesprec", "User", "User_talk", "Bili\u00fe", "Bili\u00fegesprec", "MediaWiki", "MediaWiki_talk", "Bysen", "Bysengesprec", "Help", "Helpgesprec", "Flocc", "Floccgesprec", "Syndrig", "Media", "%s_talk"],
			"cs": ["Diskuse", "U\u017eivatel", "Diskuse_s_u\u017eivatelem", "Soubor", "Diskuse_k_souboru", "MediaWiki", "Diskuse_k_MediaWiki", "\u0160ablona", "Diskuse_k_\u0161ablon\u011b", "N\u00e1pov\u011bda", "Diskuse_k_n\u00e1pov\u011bd\u011b", "Kategorie", "Diskuse_ke_kategorii", "Speci\u00e1ln\u00ed", "M\u00e9dia", "Diskuse_k_{{grammar:3sg|%s}}"],
			"ty": ["Discussion", "Utilisateur", "Discussion_utilisateur", "Fichier", "Discussion_fichier", "MediaWiki", "Discussion_MediaWiki", "Mod\u00e8le", "Discussion_mod\u00e8le", "Aide", "Discussion_aide", "Cat\u00e9gorie", "Discussion_cat\u00e9gorie", "Sp\u00e9cial", "M\u00e9dia", "Discussion_%s"],
			"ko-kp": ["\ud1a0\ub860", "\uc0ac\uc6a9\uc790", "\uc0ac\uc6a9\uc790\ud1a0\ub860", "\ud30c\uc77c", "\ud30c\uc77c\ud1a0\ub860", "\ubbf8\ub514\uc5b4\uc704\ud0a4", "\ubbf8\ub514\uc5b4\uc704\ud0a4\ud1a0\ub860", "\ud2c0", "\ud2c0\ud1a0\ub860", "\ub3c4\uc6c0\ub9d0", "\ub3c4\uc6c0\ub9d0\ud1a0\ub860", "\ubd84\ub958", "\ubd84\ub958\ud1a0\ub860", "\ud2b9\uc218\uae30\ub2a5", "\ubbf8\ub514\uc5b4", "%s\ud1a0\ub860"],
			"cv": ["\u041e\u0431\u0441\u0443\u0436\u0434\u0435\u043d\u0438\u0435", "\u0425\u0443\u0442\u0448\u0103\u043d\u0430\u043a\u0430\u043d", "\u0425\u0443\u0442\u0448\u0103\u043d\u0430\u043a\u0430\u043d\u0103\u043d_\u043a\u0430\u043d\u0430\u0448\u043b\u0443_\u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0438", "\u04f2\u043a\u0435\u0440\u0447\u0115\u043a", "\u04f2\u043a\u0435\u0440\u0447\u0115\u043a\u0435_\u0441\u04f3\u0442\u0441\u0435_\u044f\u0432\u043c\u0430\u043b\u043b\u0438", "MediaWiki", "MediaWiki_\u0441\u04f3\u0442\u0441\u0435_\u044f\u0432\u043c\u0430\u043b\u043b\u0438", "\u0428\u0430\u0431\u043b\u043e\u043d", "\u0428\u0430\u0431\u043b\u043e\u043d\u0430_\u0441\u04f3\u0442\u0441\u0435_\u044f\u0432\u043c\u0430\u043b\u043b\u0438", "\u041f\u0443\u043b\u0103\u0448\u0443", "\u041f\u0443\u043b\u0103\u0448\u0103\u0432\u0430_\u0441\u04f3\u0442\u0441\u0435_\u044f\u0432\u043c\u0430\u043b\u043b\u0438", "\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0438", "\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u043d\u0435_\u0441\u04f3\u0442\u0441\u0435_\u044f\u0432\u043c\u0430\u043b\u043b\u0438", "\u042f\u0442\u0430\u0440\u043b\u0103", "\u041c\u0435\u0434\u0438\u0430", "%s_\u0441\u04f3\u0442\u0441\u0435_\u044f\u0432\u043c\u0430\u043b\u043b\u0438"],
			"cu": [["\u0411\u0454\u0441\u0463\u0434\u0430", "\u0411\u0435\u0441\u0463\u0434\u0430"], ["\u041f\u043e\u043b\u044c\ua643\u0454\u0432\u0430\u0442\u0454\u043b\u0484\u044c", "\u041f\u043e\u043b\u044c\u0455\u0435\u0432\u0430\u0442\u0435\u043b\u0484\u044c"], ["\u041f\u043e\u043b\u044c\ua643\u0454\u0432\u0430\u0442\u0454\u043b\ua657_\u0431\u0454\u0441\u0463\u0434\u0430", "\u041f\u043e\u043b\u044c\u0455\u0435\u0432\u0430\u0442\u0435\u043b\u0011_\u0431\u0435\u0441\u0463\u0434\u0430"], ["\u0414\u0463\u043b\u043e", "\u0412\u0438\u0301\u0434\u044a", "\u0412\u0438\u0434\u044a"], ["\u0414\u0463\u043b\u0430_\u0431\u0454\u0441\u0463\u0434\u0430", "\u0412\u0438\u0301\u0434\u0430_\u0431\u0454\u0441\u0463\u0301\u0434\u0430", "\u0412\u0438\u0434\u0430_\u0431\u0435\u0441\u0463\u0434\u0430"], "MediaWiki", ["MediaWiki_\u0431\u0454\u0441\u0463\u0434\u0430", "MediaWiki_\u0431\u0435\u0441\u0463\u0434\u0430"], ["\u041e\u0431\u0440\u0430\ua641\u044c\u0446\u044c", "\u041e\u0431\u0440\u0430\u0437\u044c\u0446\u044c"], ["\u041e\u0431\u0440\u0430\ua641\u044c\u0446\u0430_\u0431\u0454\u0441\u0463\u0434\u0430", "\u041e\u0431\u0440\u0430\u0437\u044c\u0446\u0430_\u0431\u0435\u0441\u0463\u0434\u0430"], ["\u041f\u043e\u043c\u043e\u0449\u044c", "\u041f\u043e\u043c\u043e\u0449\u044c"], ["\u041f\u043e\u043c\u043e\u0449\u0438_\u0431\u0454\u0441\u0463\u0434\u0430", "\u041f\u043e\u043c\u043e\u0449\u0438_\u0431\u0435\u0441\u0463\u0434\u0430"], ["\u041a\u0430\u0442\u0438\u0433\u043e\u0440\u0457\ua657", "\u041a\u0430\u0442\u0438\u0433\u043e\u0440\u0457\u0011"], ["\u041a\u0430\u0442\u0438\u0433\u043e\u0440\u0457\u0469_\u0431\u0454\u0441\u0463\u0434\u0430", "\u041a\u0430\u0442\u0438\u0433\u043e\u0440\u0457\u0469_\u0431\u0435\u0441\u0463\u0434\u0430"], ["\u041d\u0430\u0440\u043e\u0447\u044c\u043d\u0430", "\u041d\u0430\u0440\u043e\u0447\u044c\u043d\u0430"], ["\u0421\u0440\u0463\u0434\u044c\u0441\u0442\u0432\u0430", "\u0421\u0440\u0463\u0434\u044c\u0441\u0442\u0432\u0430"], ["{{GRAMMAR:genitive|%s}}_\u0431\u0454\u0441\u0463\u0434\u0430", "{{grammar:genitive|$1}}_\u0431\u0435\u0441\u0463\u0434\u0430"]],
			"frc": ["Discussion", "Utilisateur", "Discussion_utilisateur", "Fichier", "Discussion_fichier", "MediaWiki", "Discussion_MediaWiki", "Mod\u00e8le", "Discussion_mod\u00e8le", "Aide", "Discussion_aide", "Cat\u00e9gorie", "Discussion_cat\u00e9gorie", "Sp\u00e9cial", "M\u00e9dia", "Discussion_%s"],
			"ps": ["\u062e\u0628\u0631\u06d0_\u0627\u062a\u0631\u06d0", ["\u06a9\u0627\u0631\u0646", "\u06a9\u0627\u0631\u0648\u0646\u06a9\u06cc"], ["\u062f_\u06a9\u0627\u0631\u0646_\u062e\u0628\u0631\u06d0_\u0627\u062a\u0631\u06d0", "\u062f_\u06a9\u0627\u0631\u0648\u0646\u06a9\u064a_\u062e\u0628\u0631\u06d0_\u0627\u062a\u0631\u06d0"], ["\u062f\u0648\u062a\u0646\u0647", "\u0627\u0646\u0681\u0648\u0631"], ["\u062f_\u062f\u0648\u062a\u0646\u06d0_\u062e\u0628\u0631\u06d0_\u0627\u062a\u0631\u06d0", "\u062f_\u0627\u0646\u0681\u0648\u0631_\u062e\u0628\u0631\u06d0_\u0627\u062a\u0631\u06d0"], "\u0645\u064a\u0689\u064a\u0627\u0648\u064a\u06a9\u064a", "\u062f_\u0645\u064a\u0689\u064a\u0627\u0648\u064a\u06a9\u064a_\u062e\u0628\u0631\u06d0_\u0627\u062a\u0631\u06d0", "\u06a9\u064a\u0646\u0689\u06cd", "\u062f_\u06a9\u064a\u0646\u0689\u06cd_\u062e\u0628\u0631\u06d0_\u0627\u062a\u0631\u06d0", "\u0644\u0627\u0631\u069a\u0648\u062f", "\u062f_\u0644\u0627\u0631\u069a\u0648\u062f_\u062e\u0628\u0631\u06d0_\u0627\u062a\u0631\u06d0", "\u0648\u06d0\u0634\u0646\u064a\u0632\u0647", "\u062f_\u0648\u06d0\u0634\u0646\u064a\u0632\u06d0_\u062e\u0628\u0631\u06d0_\u0627\u062a\u0631\u06d0", "\u0681\u0627\u0646\u06ab\u0693\u06cc", "\u0631\u0633\u0646\u06cd", "\u062f_%s_\u062e\u0628\u0631\u06d0_\u0627\u062a\u0631\u06d0"],
			"srn": [["Taki", "Overleg"], ["Masyin", "Gebruiker"], ["Taki_fu_masyin", "Overleg_gebruiker"], ["Gefre", "Afbeelding"], ["Taki_fu_gefre", "Overleg_afbeelding"], "MediaWiki", ["Taki_fu_MediaWiki", "Overleg_MediaWiki"], ["Ankra", "Sjabloon"], ["Taki_fu_ankra", "Overleg_sjabloon"], ["Yepi", "Help"], ["Taki_fu_yepi", "Overleg_help"], ["Guru", "Categorie"], ["Taki_fu_guru", "Overleg_categorie"], ["Spesyal", "Speciaal"], "Media", ["Taki_fu_%s", "Overleg_$1"]],
			"pt": ["Discuss\u00e3o", ["Utilizador", "Usu\u00e1rio"], ["Utilizador_Discuss\u00e3o", "Usu\u00e1rio_Discuss\u00e3o"], ["Ficheiro", "Imagem", "Arquivo"], ["Ficheiro_Discuss\u00e3o", "Imagem_Discuss\u00e3o", "Arquivo_Discuss\u00e3o"], "MediaWiki", "MediaWiki_Discuss\u00e3o", "Predefini\u00e7\u00e3o", "Predefini\u00e7\u00e3o_Discuss\u00e3o", "Ajuda", "Ajuda_Discuss\u00e3o", "Categoria", "Categoria_Discuss\u00e3o", "Especial", "Multim\u00e9dia", "%s_Discuss\u00e3o"],
			"zh-tw": ["Talk", "\u4f7f\u7528\u8005", "\u4f7f\u7528\u8005\u8a0e\u8ad6", ["Image", "\u5716\u7247"], ["\u5716\u7247\u8a0e\u8ad6", "Image_talk"], "MediaWiki", "MediaWiki_talk", "Template", "Template_talk", "\u4f7f\u7528\u8aaa\u660e", "\u4f7f\u7528\u8aaa\u660e\u8a0e\u8ad6", "Category", "Category_talk", "Special", "Media", "%s_talk"],
			"sgs": [["Aptar\u0117ms", "Aptarimas"], ["Nauduotuos", "Naudotojas"], ["Nauduotuoj\u0117_aptar\u0117ms", "Naudotojo_aptarimas"], ["Abruozdielis", "Vaizdas"], ["Abruozdiel\u0117_aptar\u0117ms", "Vaizdo_aptarimas"], "MediaWiki", ["MediaWiki_aptar\u0117ms", "MediaWiki_aptarimas"], ["\u0160abluons", "\u0160ablonas"], ["\u0160abluona_aptar\u0117ms", "\u0160ablono_aptarimas"], ["Pagelba", "Pagalba"], ["Pagelbas_aptar\u0117ms", "Pagalbos_aptarimas"], ["Kateguor\u0117j\u0117", "Kategorija"], ["Kateguor\u0117j\u0117s_aptar\u0117ms", "Kategorijos_aptarimas"], ["Spec\u0113los", "Specialus"], "Med\u0117j\u0117", ["%s_aptar\u0117ms", "$1_aptarimas"]],
			"tl": ["Usapan", "Tagagamit", "Usapang_tagagamit", ["Talaksan", "Talaksan"], "Usapang_talaksan", "MediaWiki", "Usapang_MediaWiki", ["Padron", "Suleras"], ["Usapang_padron", "Usapang_suleras"], "Tulong", "Usapang_tulong", ["Kategorya", "Kaurian"], ["Usapang_kategorya", "Usapang_kaurian"], "Natatangi", "Midya", "Usapang_%s"],
			"uk": ["\u041e\u0431\u0433\u043e\u0432\u043e\u0440\u0435\u043d\u043d\u044f", "\u041a\u043e\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447", "\u041e\u0431\u0433\u043e\u0432\u043e\u0440\u0435\u043d\u043d\u044f_\u043a\u043e\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447\u0430", ["\u0424\u0430\u0439\u043b", "\u0417\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u043d\u044f"], ["\u041e\u0431\u0433\u043e\u0432\u043e\u0440\u0435\u043d\u043d\u044f_\u0444\u0430\u0439\u043b\u0443", "\u041e\u0431\u0433\u043e\u0432\u043e\u0440\u0435\u043d\u043d\u044f_\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u043d\u044f"], "MediaWiki", "\u041e\u0431\u0433\u043e\u0432\u043e\u0440\u0435\u043d\u043d\u044f_MediaWiki", "\u0428\u0430\u0431\u043b\u043e\u043d", ["\u041e\u0431\u0433\u043e\u0432\u043e\u0440\u0435\u043d\u043d\u044f_\u0448\u0430\u0431\u043b\u043e\u043d\u0443", "\u041e\u0431\u0433\u043e\u0432\u043e\u0440\u0435\u043d\u043d\u044f_\u0448\u0430\u0431\u043b\u043e\u043d\u0430"], "\u0414\u043e\u0432\u0456\u0434\u043a\u0430", "\u041e\u0431\u0433\u043e\u0432\u043e\u0440\u0435\u043d\u043d\u044f_\u0434\u043e\u0432\u0456\u0434\u043a\u0438", "\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0456\u044f", "\u041e\u0431\u0433\u043e\u0432\u043e\u0440\u0435\u043d\u043d\u044f_\u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0456\u0457", ["\u0421\u043f\u0435\u0446\u0456\u0430\u043b\u044c\u043d\u0430", "\u0421\u043f\u0435\u0446\u0456\u0430\u043b\u044c\u043d\u0456"], "\u041c\u0435\u0434\u0456\u0430", "\u041e\u0431\u0433\u043e\u0432\u043e\u0440\u0435\u043d\u043d\u044f_{{GRAMMAR:genitive|%s}}"],
			"frr": ["Diskussion", "Benutzer", "Benutzer_Diskussion", "Datei", "Datei_Diskussion", "MediaWiki", "MediaWiki_Diskussion", "Vorlage", "Vorlage_Diskussion", "Hilfe", "Hilfe_Diskussion", "Kategorie", "Kategorie_Diskussion", "Spezial", "Medium", "%s_Diskussion"],
			"frp": [["Discussion", "Discutar"], ["Utilisator", "Usanci\u00e9r"], ["Discussion_utilisator", "Discussion_usanci\u00e9r"], ["Fichi\u00e9r", "\u00c9m\u00e2ge"], ["Discussion_fichi\u00e9r", "Discussion_\u00c9m\u00e2ge"], "MediaWiki", "Discussion_MediaWiki", "Mod\u00e8lo", ["Discussion_mod\u00e8lo", "Discussion_Mod\u00e8lo"], "\u00c9de", ["Discussion_\u00e9de", "Discussion_\u00c9de"], "Cat\u00e8gorie", ["Discussion_cat\u00e8gorie", "Discussion_Cat\u00e8gorie"], "Sp\u00e8ci\u00e2l", "M\u00e8dia", "Discussion_%s"],
			"sw": ["Majadiliano", "Mtumiaji", "Majadiliano_ya_mtumiaji", "Picha", ["Majadiliano_ya_faili", "Majadiliano_faili"], "MediaWiki", ["Majadiliano_ya_MediaWiki", "MediaWiki_majadiliano"], "Kigezo", ["Majadiliano_ya_kigezo", "Kigezo_majadiliano"], "Msaada", ["Majadiliano_ya_msaada", "Msaada_majadiliano"], "Jamii", ["Majadiliano_ya_jamii", "Jamii_majadiliano"], "Maalum", "Faili", ["Majadiliano_ya_%s", "$1_majadiliano"]],
			"vi": ["Th\u1ea3o_lu\u1eadn", "Th\u00e0nh_vi\u00ean", "Th\u1ea3o_lu\u1eadn_Th\u00e0nh_vi\u00ean", ["T\u1eadp_tin", "H\u00ecnh"], ["Th\u1ea3o_lu\u1eadn_T\u1eadp_tin", "Th\u1ea3o_lu\u1eadn_H\u00ecnh"], "MediaWiki", "Th\u1ea3o_lu\u1eadn_MediaWiki", ["B\u1ea3n_m\u1eabu", "Ti\u00eau_b\u1ea3n"], ["Th\u1ea3o_lu\u1eadn_B\u1ea3n_m\u1eabu", "Th\u1ea3o_lu\u1eadn_Ti\u00eau_b\u1ea3n"], "Tr\u1ee3_gi\u00fap", "Th\u1ea3o_lu\u1eadn_Tr\u1ee3_gi\u00fap", "Th\u1ec3_lo\u1ea1i", "Th\u1ea3o_lu\u1eadn_Th\u1ec3_lo\u1ea1i", "\u0110\u1eb7c_bi\u1ec7t", "Ph\u01b0\u01a1ng_ti\u1ec7n", "Th\u1ea3o_lu\u1eadn_%s"],
			"xal": [["\u041c\u0435\u0442\u043a\u04d9\u043d", "\u0423\u0445\u0430\u043b\u0432\u0440"], ["\u0414\u0435\u043c\u043d\u0447", "\u041e\u0440\u043b\u0446\u0430\u0447"], ["\u0414\u0435\u043c\u043d\u0447\u043d\u0430_\u0442\u0443\u0441\u043a_\u043c\u0435\u0442\u043a\u04d9\u043d", "\u041e\u0440\u043b\u0446\u0430\u0447\u043d\u0430_\u0442\u0443\u0441\u043a\u0430\u0440_\u0443\u0445\u0430\u043b\u0432\u0440"], ["\u0411\u043e\u043e\u043c\u0433", "\u0417\u0443\u0440\u0433"], ["\u0411\u043e\u043e\u043c\u0433\u0438\u043d_\u0442\u0443\u0441\u043a_\u043c\u0435\u0442\u043a\u04d9\u043d", "\u0417\u0443\u0440\u0433\u0438\u043d_\u0442\u0443\u0441\u043a\u0430\u0440_\u0443\u0445\u0430\u043b\u0432\u0440"], "MediaWiki", ["MediaWiki_\u0442\u0443\u0441\u043a_\u043c\u0435\u0442\u043a\u04d9\u043d", "MediaWiki_\u0442\u0443\u0441\u043a\u0430\u0440_\u0443\u0445\u0430\u043b\u0432\u0440"], ["\u041a\u0435\u0432\u043b\u04d9\u0440", "\u0417\u0443\u0440\u0430"], ["\u0417\u0443\u0440\u0430\u043d_\u0442\u0443\u0441\u043a_\u043c\u0435\u0442\u043a\u04d9\u043d", "\u0417\u0443\u0440\u0430\u043d_\u0442\u0443\u0441\u043a\u0430\u0440_\u0443\u0445\u0430\u043b\u0432\u0440"], ["\u0426\u04d9\u04d9\u043b\u04bb\u043b\u04bb\u043d", "\u0426\u0259\u0259\u043b\u04bb\u043b\u04bb\u043d"], ["\u0426\u04d9\u04d9\u043b\u04bb\u043b\u04bb\u0438\u043d_\u0442\u0443\u0441\u043a_\u043c\u0435\u0442\u043a\u04d9\u043d", "\u0426\u0259\u0259\u043b\u04bb\u043b\u04bb\u0438\u043d_\u0442\u0443\u0441\u043a\u0430\u0440_\u0443\u0445\u0430\u043b\u0432\u0440"], ["\u04d8\u04d9\u0448\u043b", "\u042f\u043d\u0437"], ["\u04d8\u04d9\u0448\u043b\u0438\u043d_\u0442\u0443\u0441\u043a_\u043c\u0435\u0442\u043a\u04d9\u043d", "\u042f\u043d\u0437\u0438\u043d_\u0442\u0443\u0441\u043a\u0430\u0440_\u0443\u0445\u0430\u043b\u0432\u0440"], ["\u041a\u04e9\u0434\u043b\u0445\u043d\u04d9", "\u041a\u04e9\u0434\u043b\u0445\u043d\u0259"], "\u0410\u04bb\u0430\u0440", ["%s_\u0442\u0443\u0441\u043a_\u043c\u0435\u0442\u043a\u04d9\u043d", "$1_\u0442\u0443\u0441\u043a\u0430\u0440_\u0443\u0445\u0430\u043b\u0432\u0440"]],
			"pi": ["\u0938\u092e\u094d\u092d\u093e\u0938\u093f\u0924", "\u0905\u0935\u092f\u0935", "\u0905\u0935\u092f\u0935_\u0938\u092e\u094d\u092d\u093e\u0938\u093f\u0924", "\u092a\u091f\u093f\u092e\u093e", "\u092a\u091f\u093f\u092e\u093e_\u0938\u092e\u094d\u092d\u093e\u0938\u093f\u0924", "\u092e\u0940\u0921\u093f\u092f\u093e\u0935\u093f\u0915\u093f", "\u092e\u0940\u0921\u093f\u092f\u093e\u0935\u093f\u0915\u093f_\u0938\u092e\u094d\u092d\u093e\u0938\u093f\u0924", "\u092a\u091f\u093f\u0930\u0942\u092a", "\u092a\u091f\u093f\u0930\u0942\u092a_\u0938\u092e\u094d\u092d\u093e\u0938\u093f\u0924", "\u0905\u0935\u0938\u094d\u0938\u092f", "\u0905\u0935\u0938\u094d\u0938\u092f_\u0938\u092e\u094d\u092d\u093e\u0938\u093f\u0924", "\u0935\u093f\u092d\u093e\u0917", "\u0935\u093f\u092d\u093e\u0917_\u0938\u092e\u094d\u092d\u093e\u0938\u093f\u0924", "\u0935\u093f\u0938\u0947\u0938", "\u092e\u0940\u0921\u093f\u092f\u093e", "%s_\u0938\u092e\u094d\u092d\u093e\u0938\u093f\u0924"],
			"is": ["Spjall", "Notandi", "Notandaspjall", "Mynd", "Myndaspjall", "Melding", "Meldingarspjall", "Sni\u00f0", "Sni\u00f0aspjall", "Hj\u00e1lp", "Hj\u00e1lparspjall", "Flokkur", "Flokkaspjall", "Kerfiss\u00ed\u00f0a", "Mi\u00f0ill", "%sspjall"],
			"pl": ["Dyskusja", "U\u017cytkownik", "Dyskusja_u\u017cytkownika", ["Plik", "Grafika"], ["Dyskusja_pliku", "Dyskusja_grafiki"], "MediaWiki", "Dyskusja_MediaWiki", "Szablon", "Dyskusja_szablonu", "Pomoc", "Dyskusja_pomocy", "Kategoria", "Dyskusja_kategorii", "Specjalna", "Media", "Dyskusja_%s"],
			"vec": ["Discussion", "Utente", "Discussion_utente", ["File", "Imagine"], ["Discussion_file", "Discussion_imagine"], "MediaWiki", "Discussion_MediaWiki", "Mod\u00e8l", ["Discussion_mod\u00e8l", "Discussion_template"], ["Ajuto", "Aiuto"], ["Discussion_ajuto", "Discussion_aiuto"], "Categoria", "Discussion_categoria", "Speciale", "Media", "Discussion_%s"],
			"hy": ["\u0554\u0576\u0576\u0561\u0580\u056f\u0578\u0582\u0574", "\u0544\u0561\u057d\u0576\u0561\u056f\u056b\u0581", "\u0544\u0561\u057d\u0576\u0561\u056f\u0581\u056b_\u0584\u0576\u0576\u0561\u0580\u056f\u0578\u0582\u0574", "\u054a\u0561\u057f\u056f\u0565\u0580", "\u054a\u0561\u057f\u056f\u0565\u0580\u056b_\u0584\u0576\u0576\u0561\u0580\u056f\u0578\u0582\u0574", "MediaWiki", "MediaWiki_\u0584\u0576\u0576\u0561\u0580\u056f\u0578\u0582\u0574", "\u053f\u0561\u0572\u0561\u057a\u0561\u0580", "\u053f\u0561\u0572\u0561\u057a\u0561\u0580\u056b_\u0584\u0576\u0576\u0561\u0580\u056f\u0578\u0582\u0574", "\u0555\u0563\u0576\u0578\u0582\u0569\u0575\u0578\u0582\u0576", "\u0555\u0563\u0576\u0578\u0582\u0569\u0575\u0561\u0576_\u0584\u0576\u0576\u0561\u0580\u056f\u0578\u0582\u0574", "\u053f\u0561\u057f\u0565\u0563\u0578\u0580\u056b\u0561", "\u053f\u0561\u057f\u0565\u0563\u0578\u0580\u056b\u0561\u0575\u056b_\u0584\u0576\u0576\u0561\u0580\u056f\u0578\u0582\u0574", ["\u054d\u057a\u0561\u057d\u0561\u0580\u056f\u0578\u0572", "\u054d\u057a\u0561\u057d\u0561\u0580\u056f\u0578\u0572"], "\u0544\u0565\u0564\u056b\u0561", "{{GRAMMAR:genitive|%s}}_\u0584\u0576\u0576\u0561\u0580\u056f\u0578\u0582\u0574"],
			"th": ["\u0e1e\u0e39\u0e14\u0e04\u0e38\u0e22", "\u0e1c\u0e39\u0e49\u0e43\u0e0a\u0e49", "\u0e04\u0e38\u0e22\u0e01\u0e31\u0e1a\u0e1c\u0e39\u0e49\u0e43\u0e0a\u0e49", ["\u0e44\u0e1f\u0e25\u0e4c", "\u0e20\u0e32\u0e1e"], ["\u0e04\u0e38\u0e22\u0e40\u0e23\u0e37\u0e48\u0e2d\u0e07\u0e44\u0e1f\u0e25\u0e4c", "\u0e04\u0e38\u0e22\u0e40\u0e23\u0e37\u0e48\u0e2d\u0e07\u0e20\u0e32\u0e1e"], "\u0e21\u0e35\u0e40\u0e14\u0e35\u0e22\u0e27\u0e34\u0e01\u0e34", "\u0e04\u0e38\u0e22\u0e40\u0e23\u0e37\u0e48\u0e2d\u0e07\u0e21\u0e35\u0e40\u0e14\u0e35\u0e22\u0e27\u0e34\u0e01\u0e34", "\u0e41\u0e21\u0e48\u0e41\u0e1a\u0e1a", "\u0e04\u0e38\u0e22\u0e40\u0e23\u0e37\u0e48\u0e2d\u0e07\u0e41\u0e21\u0e48\u0e41\u0e1a\u0e1a", "\u0e27\u0e34\u0e18\u0e35\u0e43\u0e0a\u0e49", "\u0e04\u0e38\u0e22\u0e40\u0e23\u0e37\u0e48\u0e2d\u0e07\u0e27\u0e34\u0e18\u0e35\u0e43\u0e0a\u0e49", "\u0e2b\u0e21\u0e27\u0e14\u0e2b\u0e21\u0e39\u0e48", "\u0e04\u0e38\u0e22\u0e40\u0e23\u0e37\u0e48\u0e2d\u0e07\u0e2b\u0e21\u0e27\u0e14\u0e2b\u0e21\u0e39\u0e48", "\u0e1e\u0e34\u0e40\u0e28\u0e29", "\u0e2a\u0e37\u0e48\u0e2d", "\u0e04\u0e38\u0e22\u0e40\u0e23\u0e37\u0e48\u0e2d\u0e07%s"],
			"hr": ["Razgovor", "Suradnik", "Razgovor_sa_suradnikom", ["Datoteka", "Slika"], ["Razgovor_o_datoteci", "Razgovor_o_slici"], "MediaWiki", "MediaWiki_razgovor", "Predlo\u017eak", "Razgovor_o_predlo\u0161ku", "Pomo\u0107", "Razgovor_o_pomo\u0107i", "Kategorija", "Razgovor_o_kategoriji", "Posebno", "Mediji", "Razgovor_%s"],
			"ku-latn": [["Got\u00fbb\u00eaj", "N\u00eeqa\u015f"], "Bikarh\u00eaner", ["Got\u00fbb\u00eaja_bikarh\u00eaner", "Bikarh\u00eaner_n\u00eeqa\u015f"], "W\u00eane", ["Got\u00fbb\u00eaja_w\u00eaney\u00ee", "W\u00eane_n\u00eeqa\u015f"], "MediaWiki", ["Got\u00fbb\u00eaja_MediaWiki", "MediaWiki_n\u00eeqa\u015f"], "\u015eablon", ["Got\u00fbb\u00eaja_\u015fablon\u00ea", "\u015eablon_n\u00eeqa\u015f"], "Al\u00eekar\u00ee", ["Got\u00fbb\u00eaja_al\u00eekariy\u00ea", "Al\u00eekar\u00ee_n\u00eeqa\u015f"], "Kategor\u00ee", ["Got\u00fbb\u00eaja_kategoriy\u00ea", "Kategor\u00ee_n\u00eeqa\u015f"], "Taybet", "Medya", ["%s_got\u00fbb\u00eaj", "$1_n\u00eeqa\u015f"]],
			"pfl": ["Diskussion", "Benutzer", "Benutzer_Diskussion", "Datei", "Datei_Diskussion", "MediaWiki", "MediaWiki_Diskussion", "Vorlage", "Vorlage_Diskussion", "Hilfe", "Hilfe_Diskussion", "Kategorie", "Kategorie_Diskussion", "Spezial", "Medium", "%s_Diskussion"],
			"ht": ["Diskite", ["Itilizat\u00e8", "Imaj"], ["Diskisyon_Itilizat\u00e8", "Diskisyon_Imaj"], "Fichye", "Diskisyon_Fichye", "MedyaWiki", "Diskisyon_MedyaWiki", "Mod\u00e8l", "Diskisyon_Mod\u00e8l", "\u00c8d", "Diskisyon_\u00c8d", "Kategori", "Diskisyon_Kategori", "Espesyal", "Medya", "Diskisyon_%s"],
			"hu": ["Vita", "Szerkeszt\u0151", ["Szerkeszt\u0151vita", "User_vita"], ["F\u00e1jl", "K\u00e9p"], ["F\u00e1jlvita", "K\u00e9pvita", "K\u00e9p_vita"], "MediaWiki", ["MediaWiki-vita", "MediaWiki_vita"], "Sablon", ["Sablonvita", "Sablon_vita"], "Seg\u00edts\u00e9g", ["Seg\u00edts\u00e9gvita", "Seg\u00edts\u00e9g_vita"], "Kateg\u00f3ria", ["Kateg\u00f3riavita", "Kateg\u00f3ria_vita"], "Speci\u00e1lis", "M\u00e9dia", ["%s-vita", "$1_vita"]],
			"gan": ["\u8ac7\u8a51", "\u7528\u6236", "\u7528\u6236\u30fb\u8ac7\u8a51", "\u6587\u6a94", "\u6587\u6a94\u30fb\u8ac7\u8a51", "MediaWiki", "MediaWiki\u30fb\u8ac7\u8a51", "\u6a21\u677f", "\u6a21\u677f\u30fb\u8ac7\u8a51", "\u5e6b\u52a9", "\u5e6b\u52a9\u30fb\u8ac7\u8a51", "\u5206\u985e", "\u5206\u985e\u30fb\u8ac7\u8a51", "\u7279\u5225", "\u5a92\u9ad4", "%s_\u8ac7\u8a51"],
			"hi": ["\u0935\u093e\u0930\u094d\u0924\u093e", "\u0938\u0926\u0938\u094d\u092f", "\u0938\u0926\u0938\u094d\u092f_\u0935\u093e\u0930\u094d\u0924\u093e", "\u091a\u093f\u0924\u094d\u0930", "\u091a\u093f\u0924\u094d\u0930_\u0935\u093e\u0930\u094d\u0924\u093e", "\u092e\u0940\u0921\u093f\u092f\u093e\u0935\u093f\u0915\u093f", "\u092e\u0940\u0921\u093f\u092f\u093e\u0935\u093f\u0915\u093f_\u0935\u093e\u0930\u094d\u0924\u093e", "\u0938\u093e\u0901\u091a\u093e", "\u0938\u093e\u0901\u091a\u093e_\u0935\u093e\u0930\u094d\u0924\u093e", "\u0938\u0939\u093e\u092f\u0924\u093e", "\u0938\u0939\u093e\u092f\u0924\u093e_\u0935\u093e\u0930\u094d\u0924\u093e", "\u0936\u094d\u0930\u0947\u0923\u0940", "\u0936\u094d\u0930\u0947\u0923\u0940_\u0935\u093e\u0930\u094d\u0924\u093e", "\u0935\u093f\u0936\u0947\u0937", "\u092e\u0940\u0921\u093f\u092f\u093e", "%s_\u0935\u093e\u0930\u094d\u0924\u093e"],
			"jut": ["Diskussion", "Bruger", "Brugerdiskussion", "Fil", "Fildiskussion", "MediaWiki", "MediaWiki_diskussion", "Skabelon", "Skabelondiskussion", "Hj\u00e6lp", "Hj\u00e6lp_diskussion", "Kategori", "Kategoridiskussion", "Speciel", "Media", "%s_diskussion"],
			"sdc": ["Dischussioni", "Utenti", "Dischussioni_utenti", "Immagina", "Dischussioni_immagina", "MediaWiki", "Dischussioni_MediaWiki", "Mudellu", "Dischussioni_mudellu", "Aggiuddu", "Dischussioni_aggiuddu", "Categuria", "Dischussioni_categuria", "Ippiziari", "Media", "Dischussioni_%s"],
			"gag": [["Dart\u0131\u015fma", "Tart\u0131\u015fma"], ["Kullan\u0131c\u0131", "Kullan\u0131c\u0131"], ["Kullan\u0131c\u0131_dart\u0131\u015fma", "Kullan\u0131c\u0131_mesaj"], ["Dosye", "Dosya"], ["Dosye_dart\u0131\u015fma", "Dosya_tart\u0131\u015fma"], ["MediaWiki", "MediaWiki"], ["MediaWiki_dart\u0131\u015fma", "MediaWiki_tart\u0131\u015fma"], ["\u015eablon", "\u015eablon"], ["\u015eablon_dart\u0131\u015fma", "\u015eablon_tart\u0131\u015fma"], ["Yard\u0131m", "Yard\u0131m"], ["Yard\u0131m_dart\u0131\u015fma", "Yard\u0131m_tart\u0131\u015fma"], ["Kategoriya", "Kategori"], ["Kategoriya_dart\u0131\u015fma", "Kategori_tart\u0131\u015fma"], ["Maasus", "\u00d6zel"], ["Mediya", "Medya"], ["%s_dart\u0131\u015fma", "$1_tart\u0131\u015fma"]],
			"khw": ["\u062a\u0628\u0627\u062f\u0644\u06c2_\u062e\u06cc\u0627\u0644", "\u0635\u0627\u0631\u0641", "\u062a\u0628\u0627\u062f\u0644\u06c2_\u062e\u06cc\u0627\u0644_\u0635\u0627\u0631\u0641", "\u062a\u0635\u0648\u06cc\u0631", "\u062a\u0628\u0627\u062f\u0644\u06c2_\u062e\u06cc\u0627\u0644_\u062a\u0635\u0648\u06cc\u0631", "\u0645\u06cc\u0688\u06cc\u0627\u0648\u06a9\u06cc", "\u062a\u0628\u0627\u062f\u0644\u06c2_\u062e\u06cc\u0627\u0644_\u0645\u06cc\u0688\u06cc\u0627\u0648\u06a9\u06cc", "\u0633\u0627\u0646\u0686\u06c1", "\u062a\u0628\u0627\u062f\u0644\u06c2_\u062e\u06cc\u0627\u0644_\u0633\u0627\u0646\u0686\u06c1", "\u0645\u0639\u0627\u0648\u0646\u062a", "\u062a\u0628\u0627\u062f\u0644\u06c2_\u062e\u06cc\u0627\u0644_\u0645\u0639\u0627\u0648\u0646\u062a", "\u0632\u0645\u0631\u06c1", "\u062a\u0628\u0627\u062f\u0644\u06c2_\u062e\u06cc\u0627\u0644_\u0632\u0645\u0631\u06c1", "\u062e\u0627\u0635", "\u0632\u0631\u06cc\u0639\u06c1", "\u062a\u0628\u0627\u062f\u0644\u06c2_\u062e\u06cc\u0627\u0644_%s"],
			"bug": ["Pembicaraan", "Pengguna", "Pembicaraan_Pengguna", "Berkas", "Pembicaraan_Berkas", "MediaWiki", "Pembicaraan_MediaWiki", "Templat", "Pembicaraan_Templat", "Bantuan", "Pembicaraan_Bantuan", "Kategori", "Pembicaraan_Kategori", "Istimewa", "Media", "Pembicaraan_%s"],
			"he": ["\u05e9\u05d9\u05d7\u05d4", "\u05de\u05e9\u05ea\u05de\u05e9", "\u05e9\u05d9\u05d7\u05ea_\u05de\u05e9\u05ea\u05de\u05e9", ["\u05e7\u05d5\u05d1\u05e5", "\u05ea\u05de\u05d5\u05e0\u05d4"], ["\u05e9\u05d9\u05d7\u05ea_\u05e7\u05d5\u05d1\u05e5", "\u05e9\u05d9\u05d7\u05ea_\u05ea\u05de\u05d5\u05e0\u05d4"], "\u05de\u05d3\u05d9\u05d4_\u05d5\u05d9\u05e7\u05d9", "\u05e9\u05d9\u05d7\u05ea_\u05de\u05d3\u05d9\u05d4_\u05d5\u05d9\u05e7\u05d9", "\u05ea\u05d1\u05e0\u05d9\u05ea", "\u05e9\u05d9\u05d7\u05ea_\u05ea\u05d1\u05e0\u05d9\u05ea", "\u05e2\u05d6\u05e8\u05d4", "\u05e9\u05d9\u05d7\u05ea_\u05e2\u05d6\u05e8\u05d4", "\u05e7\u05d8\u05d2\u05d5\u05e8\u05d9\u05d4", "\u05e9\u05d9\u05d7\u05ea_\u05e7\u05d8\u05d2\u05d5\u05e8\u05d9\u05d4", "\u05de\u05d9\u05d5\u05d7\u05d3", "\u05de\u05d3\u05d9\u05d4", "\u05e9\u05d9\u05d7\u05ea_%s"],
			"vot": ["Keskustelu", "K\u00e4ytt\u00e4j\u00e4", "Keskustelu_k\u00e4ytt\u00e4j\u00e4st\u00e4", "Tiedosto", "Keskustelu_tiedostosta", "J\u00e4rjestelm\u00e4viesti", "Keskustelu_j\u00e4rjestelm\u00e4viestist\u00e4", "Malline", "Keskustelu_mallineesta", "Ohje", "Keskustelu_ohjeesta", "Luokka", "Keskustelu_luokasta", "Toiminnot", "Media", "Keskustelu_{{GRAMMAR:elative|%s}}"],
			"mg": [["Dinika", "Discuter"], ["Mpikambana", "Utilisateur"], ["Dinika_amin\\'ny_mpikambana", "Discussion_Utilisateur"], "Sary", ["Dinika_amin\\'ny_sary", "Discussion_Image"], "MediaWiki", ["Dinika_amin\\'ny_MediaWiki", "Discussion_MediaWiki"], ["Endrika", "Mod\u00e8le"], ["Dinika_amin\\'ny_endrika", "Discussion_Mod\u00e8le"], ["Fanoroana", "Aide", "Fanampiana"], ["Dinika_amin\\'ny_fanoroana", "Discussion_Aide", "Dinika_amin\\'ny_fanampiana"], ["Sokajy", "Cat\u00e9gorie"], ["Dinika_amin\\'ny_sokajy", "Discussion_Cat\u00e9gorie"], "Manokana", ["Rakitra", "M\u00e9dia"], ["Dinika_amin\\'ny_%s", "Discussion_$1"]],
			"kk-latn": [["Talq\u0131law", "\u0422\u0430\u043b\u049b\u044b\u043b\u0430\u0443", "\u062a\u0627\u0644\u0642\u0649\u0644\u0627\u06cb"], ["Qat\u0131sw\u015f\u0131", "\u0642\u0627\u062a\u0649\u0633\u06cb\u0634\u0649", "\u049a\u0430\u0442\u044b\u0441\u0443\u0448\u044b"], ["Qat\u0131sw\u015f\u0131_talq\u0131law\u0131", "\u0642\u0627\u062a\u0649\u0633\u06cb\u0634\u0649_\u062a\u0627\u0644\u0642\u0649\u0644\u0627\u06cb\u0649", "\u049a\u0430\u0442\u044b\u0441\u0443\u0448\u044b_\u0442\u0430\u043b\u049b\u044b\u043b\u0430\u0443\u044b"], ["Swret", "\u0633\u06cb\u0631\u06d5\u062a", "\u0421\u0443\u0440\u0435\u0442"], ["Swret_talq\u0131law\u0131", "\u0633\u06cb\u0631\u06d5\u062a_\u062a\u0627\u0644\u0642\u0649\u0644\u0627\u06cb\u0649", "\u0421\u0443\u0440\u0435\u0442_\u0442\u0430\u043b\u049b\u044b\u043b\u0430\u0443\u044b"], ["Med\u00efaW\u00efk\u00ef", "\u0645\u06d5\u062f\u064a\u0627\u06cb\u064a\u0643\u064a", "\u041c\u0435\u0434\u0438\u0430\u0423\u0438\u043a\u0438"], ["Med\u00efaW\u00efk\u00ef_talq\u0131law\u0131", "\u041c\u0435\u0434\u0438\u0430\u0423\u0438\u043a\u0438_\u0442\u0430\u043b\u049b\u044b\u043b\u0430\u0443\u044b", "\u0645\u06d5\u062f\u064a\u0627\u06cb\u064a\u0643\u064a_\u062a\u0627\u0644\u0642\u0649\u0644\u0627\u06cb\u0649"], ["\u00dclgi", "\u0674\u06c7\u0644\u06af\u0674\u0649", "\u0677\u0644\u06af\u0678", "\u04ae\u043b\u0433\u0456"], ["\u00dclgi_talq\u0131law\u0131", "\u04ae\u043b\u0433\u0456_\u0442\u0430\u043b\u049b\u044b\u043b\u0430\u0443\u044b", "\u0677\u0644\u06af\u0678_\u062a\u0627\u0644\u0642\u0649\u0644\u0627\u06cb\u0649", "\u0674\u06c7\u0644\u06af\u0674\u0649_\u062a\u0627\u0644\u0642\u0649\u0644\u0627\u06cb\u0649"], ["An\u0131qtama", "\u0627\u0646\u0649\u0642\u062a\u0627\u0645\u0627", "\u0410\u043d\u044b\u049b\u0442\u0430\u043c\u0430"], ["An\u0131qtama_talq\u0131law\u0131", "\u0410\u043d\u044b\u049b\u0442\u0430\u043c\u0430_\u0442\u0430\u043b\u049b\u044b\u043b\u0430\u0443\u044b", "\u0627\u0646\u0649\u0642\u062a\u0627\u0645\u0627_\u062a\u0627\u0644\u0642\u0649\u0644\u0627\u06cb\u0649"], ["Sanat", "\u0633\u0627\u0646\u0627\u062a", "\u0421\u0430\u043d\u0430\u0442"], ["Sanat_talq\u0131law\u0131", "\u0633\u0627\u0646\u0627\u062a_\u062a\u0627\u0644\u0642\u0649\u0644\u0627\u06cb\u0649", "\u0421\u0430\u043d\u0430\u0442_\u0442\u0430\u043b\u049b\u044b\u043b\u0430\u0443\u044b"], ["Arna\u00fd\u0131", "\u0627\u0631\u0646\u0627\u064a\u0649", "\u0410\u0440\u043d\u0430\u0439\u044b"], ["Taspa", "\u0422\u0430\u0441\u043f\u0430", "\u062a\u0627\u0633\u067e\u0627"], ["%s_talq\u0131law\u0131", "$1_\u0442\u0430\u043b\u049b\u044b\u043b\u0430\u0443\u044b", "$1_\u062a\u0627\u0644\u0642\u0649\u0644\u0627\u06cb\u0649"]],
			"fur": ["Discussion", "Utent", "Discussion_utent", "Figure", "Discussion_figure", "MediaWiki", "Discussion_MediaWiki", "Model", "Discussion_model", "Jutori", "Discussion_jutori", "Categorie", "Discussion_categorie", "Speci\u00e2l", "Media", "Discussion_%s"],
			"uz": ["Munozara", "Foydalanuvchi", "Foydalanuvchi_munozarasi", "Tasvir", "Tasvir_munozarasi", ["MediaWiki", "MediyaViki"], ["MediaWiki_munozarasi", "MediyaViki_munozarasi"], ["Andoza", "Shablon"], ["Andoza_munozarasi", "Shablon_munozarasi"], "Yordam", "Yordam_munozarasi", ["Turkum", "Kategoriya"], ["Turkum_munozarasi", "Kategoriya_munozarasi"], "Maxsus", ["Media", "Mediya"], "%s_munozarasi"],
			"ml": [["\u0d38\u0d02\u0d35\u0d3e\u0d26\u0d02", "\u0d38\u0d02"], ["\u0d09\u0d2a\u0d2f\u0d4b\u0d15\u0d4d\u0d24\u0d3e\u0d35\u0d4d", "\u0d09", "\u0d05\u0d02\u0d17\u0d02"], ["\u0d09\u0d2a\u0d2f\u0d4b\u0d15\u0d4d\u0d24\u0d3e\u0d35\u0d3f\u0d28\u0d4d\u0d31\u0d46_\u0d38\u0d02\u0d35\u0d3e\u0d26\u0d02", "\u0d09\u0d38\u0d02"], ["\u0d2a\u0d4d\u0d30\u0d2e\u0d3e\u0d23\u0d02", "\u0d1a\u0d3f\u0d24\u0d4d\u0d30\u0d02", "\u0d2a\u0d4d\u0d30", "\u0d1a\u0d3f"], ["\u0d2a\u0d4d\u0d30\u0d2e\u0d3e\u0d23\u0d24\u0d4d\u0d24\u0d3f\u0d28\u0d4d\u0d31\u0d46_\u0d38\u0d02\u0d35\u0d3e\u0d26\u0d02", "\u0d2a\u0d4d\u0d30\u0d38\u0d02", "\u0d1a\u0d3f\u0d24\u0d4d\u0d30\u0d24\u0d4d\u0d24\u0d3f\u0d28\u0d4d\u0d31\u0d46_\u0d38\u0d02\u0d35\u0d3e\u0d26\u0d02", "\u0d1a\u0d3f\u0d38\u0d02"], ["\u0d2e\u0d40\u0d21\u0d3f\u0d2f\u0d35\u0d3f\u0d15\u0d4d\u0d15\u0d3f", "\u0d2e\u0d40"], ["\u0d2e\u0d40\u0d21\u0d3f\u0d2f\u0d35\u0d3f\u0d15\u0d4d\u0d15\u0d3f_\u0d38\u0d02\u0d35\u0d3e\u0d26\u0d02", "\u0d2e\u0d40\u0d38\u0d02"], ["\u0d2b\u0d32\u0d15\u0d02", "\u0d2b"], ["\u0d2b\u0d32\u0d15\u0d24\u0d4d\u0d24\u0d3f\u0d28\u0d4d\u0d31\u0d46_\u0d38\u0d02\u0d35\u0d3e\u0d26\u0d02", "\u0d2b\u0d38\u0d02"], ["\u0d38\u0d39\u0d3e\u0d2f\u0d02", "\u0d38"], ["\u0d38\u0d39\u0d3e\u0d2f\u0d24\u0d4d\u0d24\u0d3f\u0d28\u0d4d\u0d31\u0d46_\u0d38\u0d02\u0d35\u0d3e\u0d26\u0d02", "\u0d38\u0d38\u0d02"], ["\u0d35\u0d7c\u0d17\u0d4d\u0d17\u0d02", "\u0d35\u0d3f\u0d2d\u0d3e\u0d17\u0d02", "\u0d35\u0d7c\u0d17\u0d4d\u0d17\u0d02", "\u0d35", "\u0d35\u0d3f"], ["\u0d35\u0d7c\u0d17\u0d4d\u0d17\u0d24\u0d4d\u0d24\u0d3f\u0d28\u0d4d\u0d31\u0d46_\u0d38\u0d02\u0d35\u0d3e\u0d26\u0d02", "\u0d35\u0d7c\u0d17\u0d4d\u0d17\u0d24\u0d4d\u0d24\u0d3f\u0d28\u0d4d\u0d31\u0d46_\u0d38\u0d02\u0d35\u0d3e\u0d26\u0d02", "\u0d35\u0d3f\u0d38\u0d02", "\u0d35\u0d3f\u0d2d\u0d3e\u0d17\u0d24\u0d4d\u0d24\u0d3f\u0d28\u0d4d\u0d31\u0d46_\u0d38\u0d02\u0d35\u0d3e\u0d26\u0d02", "\u0d35\u0d38\u0d02"], ["\u0d2a\u0d4d\u0d30\u0d24\u0d4d\u0d2f\u0d47\u0d15\u0d02", "\u0d2a\u0d4d\u0d30\u0d24\u0d4d\u0d2f\u0d47"], "\u0d2e\u0d40\u0d21\u0d3f\u0d2f", "%s_\u0d38\u0d02\u0d35\u0d3e\u0d26\u0d02"],
			"mo": ["Discu\u021bie", "Utilizator", "Discu\u021bie_Utilizator", "Fi\u0219ier", "Discu\u021bie_Fi\u0219ier", "MediaWiki", "Discu\u021bie_MediaWiki", "Format", "Discu\u021bie_Format", "Ajutor", "Discu\u021bie_Ajutor", "Categorie", "Discu\u021bie_Categorie", "Special", "Media", "Discu\u021bie_%s"],
			"mn": ["\u0425\u044d\u043b\u044d\u043b\u0446\u04af\u04af\u043b\u044d\u0433", "\u0425\u044d\u0440\u044d\u0433\u043b\u044d\u0433\u0447", "\u0425\u044d\u0440\u044d\u0433\u043b\u044d\u0433\u0447\u0438\u0439\u043d_\u044f\u0440\u0438\u0430", ["\u0424\u0430\u0439\u043b", "\u0417\u0443\u0440\u0430\u0433"], ["\u0424\u0430\u0439\u043b\u044b\u043d_\u0445\u044d\u043b\u044d\u043b\u0446\u04af\u04af\u043b\u044d\u0433", "\u0417\u0443\u0440\u0433\u0438\u0439\u043d_\u0445\u044d\u043b\u044d\u043b\u0446\u04af\u04af\u043b\u044d\u0433"], "\u041c\u0435\u0434\u0438\u0430\u0412\u0438\u043a\u0438", "\u041c\u0435\u0434\u0438\u0430\u0412\u0438\u043a\u0438\u0433\u0438\u0439\u043d_\u0445\u044d\u043b\u044d\u043b\u0446\u04af\u04af\u043b\u044d\u0433", "\u0417\u0430\u0433\u0432\u0430\u0440", "\u0417\u0430\u0433\u0432\u0430\u0440\u044b\u043d_\u0445\u044d\u043b\u044d\u043b\u0446\u04af\u04af\u043b\u044d\u0433", "\u0422\u0443\u0441\u043b\u0430\u043c\u0436", "\u0422\u0443\u0441\u043b\u0430\u043c\u0436\u0438\u0439\u043d_\u0445\u044d\u043b\u044d\u043b\u0446\u04af\u04af\u043b\u044d\u0433", "\u0410\u043d\u0433\u0438\u043b\u0430\u043b", "\u0410\u043d\u0433\u0438\u043b\u043b\u044b\u043d_\u0445\u044d\u043b\u044d\u043b\u0446\u04af\u04af\u043b\u044d\u0433", "\u0422\u0443\u0441\u0433\u0430\u0439", "\u041c\u0435\u0434\u0438\u0430", "%s-\u043d_\u0445\u044d\u043b\u044d\u043b\u0446\u04af\u04af\u043b\u044d\u0433"],
			"mk": ["\u0420\u0430\u0437\u0433\u043e\u0432\u043e\u0440", "\u041a\u043e\u0440\u0438\u0441\u043d\u0438\u043a", "\u0420\u0430\u0437\u0433\u043e\u0432\u043e\u0440_\u0441\u043e_\u043a\u043e\u0440\u0438\u0441\u043d\u0438\u043a", ["\u041f\u043e\u0434\u0430\u0442\u043e\u0442\u0435\u043a\u0430", "\u0421\u043b\u0438\u043a\u0430"], ["\u0420\u0430\u0437\u0433\u043e\u0432\u043e\u0440_\u0437\u0430_\u043f\u043e\u0434\u0430\u0442\u043e\u0442\u0435\u043a\u0430", "\u0420\u0430\u0437\u0433\u043e\u0432\u043e\u0440_\u0437\u0430_\u0441\u043b\u0438\u043a\u0430"], "\u041c\u0435\u0434\u0438\u0458\u0430\u0412\u0438\u043a\u0438", "\u0420\u0430\u0437\u0433\u043e\u0432\u043e\u0440_\u0437\u0430_\u041c\u0435\u0434\u0438\u0458\u0430\u0412\u0438\u043a\u0438", "\u0428\u0430\u0431\u043b\u043e\u043d", "\u0420\u0430\u0437\u0433\u043e\u0432\u043e\u0440_\u0437\u0430_\u0448\u0430\u0431\u043b\u043e\u043d", "\u041f\u043e\u043c\u043e\u0448", "\u0420\u0430\u0437\u0433\u043e\u0432\u043e\u0440_\u0437\u0430_\u043f\u043e\u043c\u043e\u0448", "\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u0458\u0430", "\u0420\u0430\u0437\u0433\u043e\u0432\u043e\u0440_\u0437\u0430_\u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u0458\u0430", ["\u0421\u043f\u0435\u0446\u0438\u0458\u0430\u043b\u043d\u0430", "\u0421\u043f\u0435\u0446\u0438\u0458\u0430\u043b\u043d\u0438"], ["\u041c\u0435\u0434\u0438\u0443\u043c", "\u041c\u0435\u0434\u0438\u0458\u0430"], "\u0420\u0430\u0437\u0433\u043e\u0432\u043e\u0440_\u0437\u0430_%s"],
			"ur": ["\u062a\u0628\u0627\u062f\u0644\u06c2_\u062e\u06cc\u0627\u0644", "\u0635\u0627\u0631\u0641", "\u062a\u0628\u0627\u062f\u0644\u06c2_\u062e\u06cc\u0627\u0644_\u0635\u0627\u0631\u0641", "\u062a\u0635\u0648\u06cc\u0631", "\u062a\u0628\u0627\u062f\u0644\u06c2_\u062e\u06cc\u0627\u0644_\u062a\u0635\u0648\u06cc\u0631", "\u0645\u06cc\u0688\u06cc\u0627\u0648\u06a9\u06cc", "\u062a\u0628\u0627\u062f\u0644\u06c2_\u062e\u06cc\u0627\u0644_\u0645\u06cc\u0688\u06cc\u0627\u0648\u06a9\u06cc", "\u0633\u0627\u0646\u0686\u06c1", "\u062a\u0628\u0627\u062f\u0644\u06c2_\u062e\u06cc\u0627\u0644_\u0633\u0627\u0646\u0686\u06c1", "\u0645\u0639\u0627\u0648\u0646\u062a", "\u062a\u0628\u0627\u062f\u0644\u06c2_\u062e\u06cc\u0627\u0644_\u0645\u0639\u0627\u0648\u0646\u062a", "\u0632\u0645\u0631\u06c1", "\u062a\u0628\u0627\u062f\u0644\u06c2_\u062e\u06cc\u0627\u0644_\u0632\u0645\u0631\u06c1", "\u062e\u0627\u0635", "\u0632\u0631\u06cc\u0639\u06c1", "\u062a\u0628\u0627\u062f\u0644\u06c2_\u062e\u06cc\u0627\u0644_%s"],
			"zea": ["Overleg", "Gebruker", "Overleg_gebruker", "Plaetje", "Overleg_plaetje", "MediaWiki", "Overleg_MediaWiki", "Sjabloon", "Overleg_sjabloon", "Ulpe", "Overleg_ulpe", "Categorie", "Overleg_categorie", "Speciaol", "Media", "Overleg_%s"],
			"mt": [["Diskussjoni", "Diskuti"], "Utent", ["Diskussjoni_utent", "Diskuti_utent"], "Stampa", ["Diskussjoni_stampa", "Diskuti_stampa"], ["MediaWiki", "MedjaWiki"], ["Diskussjoni_MediaWiki", "Diskuti_MedjaWiki"], "Mudell", ["Diskussjoni_mudell", "Diskuti_template"], "G\u0127ajnuna", ["Diskussjoni_g\u0127ajnuna", "Diskuti_g\u0127ajnuna"], "Kategorija", ["Diskussjoni_kategorija", "Diskuti_kategorija"], "Spe\u010bjali", ["Medja", "Midja"], ["Diskussjoni_%s", "$1_diskussjoni", "$1_diskuti"]],
			"rgn": ["Discussione", "Utente", "Discussioni_utente", "File", "Discussioni_file", "MediaWiki", "Discussioni_MediaWiki", "Template", "Discussioni_template", "Aiuto", "Discussioni_aiuto", "Categoria", "Discussioni_categoria", "Speciale", "Media", "Discussioni_%s"],
			"ms": [["Perbincangan", "Perbualan"], "Pengguna", ["Perbincangan_pengguna", "Perbualan_Pengguna"], ["Fail", "Imej"], ["Perbincangan_fail", "Perbincangan_Imej", "Imej_Perbualan"], "MediaWiki", ["Perbincangan_MediaWiki", "MediaWiki_Perbualan"], "Templat", ["Perbincangan_templat", "Perbualan_Templat"], "Bantuan", ["Perbincangan_bantuan", "Perbualan_Bantuan"], "Kategori", ["Perbincangan_kategori", "Perbualan_Kategori"], ["Khas", "Istimewa"], "Media", ["Perbincangan_%s", "Perbualan_$1"]],
			"mr": ["\u091a\u0930\u094d\u091a\u093e", "\u0938\u0926\u0938\u094d\u092f", "User_talk", "\u091a\u093f\u0924\u094d\u0930", "\u091a\u093f\u0924\u094d\u0930_\u091a\u0930\u094d\u091a\u093e", "\u092e\u093f\u0921\u093f\u092f\u093e\u0935\u093f\u0915\u0940", "\u092e\u093f\u0921\u093f\u092f\u093e\u0935\u093f\u0915\u0940_\u091a\u0930\u094d\u091a\u093e", "\u0938\u093e\u091a\u093e", "\u0938\u093e\u091a\u093e_\u091a\u0930\u094d\u091a\u093e", ["\u0938\u0939\u093e\u092f\u094d\u092f", "\u0938\u093e\u0939\u093e\u092f\u094d\u092f"], ["\u0938\u0939\u093e\u092f\u094d\u092f_\u091a\u0930\u094d\u091a\u093e", "\u0938\u093e\u0939\u093e\u092f\u094d\u092f_\u091a\u0930\u094d\u091a\u093e"], "\u0935\u0930\u094d\u0917", "\u0935\u0930\u094d\u0917_\u091a\u0930\u094d\u091a\u093e", "\u0935\u093f\u0936\u0947\u0937", "\u092e\u093f\u0921\u093f\u092f\u093e", "%s_\u091a\u0930\u094d\u091a\u093e"],
			"ruq-cyrl": ["\u0420\u0430\u0437\u0433\u043e\u0432\u043e\u0440", "\u041a\u043e\u0440\u0438\u0441\u043d\u0438\u043a", "\u0420\u0430\u0437\u0433\u043e\u0432\u043e\u0440_\u0441\u043e_\u043a\u043e\u0440\u0438\u0441\u043d\u0438\u043a", "\u041f\u043e\u0434\u0430\u0442\u043e\u0442\u0435\u043a\u0430", "\u0420\u0430\u0437\u0433\u043e\u0432\u043e\u0440_\u0437\u0430_\u043f\u043e\u0434\u0430\u0442\u043e\u0442\u0435\u043a\u0430", "\u041c\u0435\u0434\u0438\u0458\u0430\u0412\u0438\u043a\u0438", "\u0420\u0430\u0437\u0433\u043e\u0432\u043e\u0440_\u0437\u0430_\u041c\u0435\u0434\u0438\u0458\u0430\u0412\u0438\u043a\u0438", "\u0428\u0430\u0431\u043b\u043e\u043d", "\u0420\u0430\u0437\u0433\u043e\u0432\u043e\u0440_\u0437\u0430_\u0448\u0430\u0431\u043b\u043e\u043d", "\u041f\u043e\u043c\u043e\u0448", "\u0420\u0430\u0437\u0433\u043e\u0432\u043e\u0440_\u0437\u0430_\u043f\u043e\u043c\u043e\u0448", "\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u0458\u0430", "\u0420\u0430\u0437\u0433\u043e\u0432\u043e\u0440_\u0437\u0430_\u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u0458\u0430", "\u0421\u043f\u0435\u0446\u0438\u0458\u0430\u043b\u043d\u0430", "\u041c\u0435\u0434\u0438\u0443\u043c", "\u0420\u0430\u0437\u0433\u043e\u0432\u043e\u0440_\u0437\u0430_%s"],
			"inh": ["\u041e\u0431\u0441\u0443\u0436\u0434\u0435\u043d\u0438\u0435", "\u0423\u0447\u0430\u0441\u0442\u043d\u0438\u043a", "\u041e\u0431\u0441\u0443\u0436\u0434\u0435\u043d\u0438\u0435_\u0443\u0447\u0430\u0441\u0442\u043d\u0438\u043a\u0430", "\u0424\u0430\u0439\u043b", "\u041e\u0431\u0441\u0443\u0436\u0434\u0435\u043d\u0438\u0435_\u0444\u0430\u0439\u043b\u0430", "MediaWiki", "\u041e\u0431\u0441\u0443\u0436\u0434\u0435\u043d\u0438\u0435_MediaWiki", "\u0428\u0430\u0431\u043b\u043e\u043d", "\u041e\u0431\u0441\u0443\u0436\u0434\u0435\u043d\u0438\u0435_\u0448\u0430\u0431\u043b\u043e\u043d\u0430", "\u0421\u043f\u0440\u0430\u0432\u043a\u0430", "\u041e\u0431\u0441\u0443\u0436\u0434\u0435\u043d\u0438\u0435_\u0441\u043f\u0440\u0430\u0432\u043a\u0438", "\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044f", "\u041e\u0431\u0441\u0443\u0436\u0434\u0435\u043d\u0438\u0435_\u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u0438", "\u0421\u043b\u0443\u0436\u0435\u0431\u043d\u0430\u044f", "\u041c\u0435\u0434\u0438\u0430", "\u041e\u0431\u0441\u0443\u0436\u0434\u0435\u043d\u0438\u0435_{{GRAMMAR:genitive|%s}}"],
			"ug": ["\u0645\u06c7\u0646\u0627\u0632\u0649\u0631\u06d5", "\u0626\u0649\u0634\u0644\u06d5\u062a\u0643\u06c8\u0686\u0649", "User_talk", "\u06be\u06c6\u062c\u062c\u06d5\u062a", ["File_talk", "Image talk"], "MediaWiki", "MediaWiki_talk", "\u0642\u06d0\u0644\u0649\u067e", "Template_talk", "\u064a\u0627\u0631\u062f\u06d5\u0645", "Help_talk", "\u062a\u06c8\u0631", "Category_talk", "\u0626\u0627\u0644\u0627\u06be\u0649\u062f\u06d5", "\u06cb\u0627\u0633\u0649\u062a\u06d5", "\u0645\u06c7\u0646\u0627\u0632\u0649\u0631\u0649\u0633\u0649%s"],
			"dtp": ["Perbincangan", "Pengguna", "Perbincangan_pengguna", "Fail", "Perbincangan_fail", "MediaWiki", "Perbincangan_MediaWiki", "Templat", "Perbincangan_templat", "Bantuan", "Perbincangan_bantuan", "Kategori", "Perbincangan_kategori", "Khas", "Media", "Perbincangan_%s"],
			"ug-arab": ["\u0645\u06c7\u0646\u0627\u0632\u0649\u0631\u06d5", "\u0626\u0649\u0634\u0644\u06d5\u062a\u0643\u06c8\u0686\u0649", "User_talk", "\u06be\u06c6\u062c\u062c\u06d5\u062a", ["File_talk", "Image talk"], "MediaWiki", "MediaWiki_talk", "\u0642\u06d0\u0644\u0649\u067e", "Template_talk", "\u064a\u0627\u0631\u062f\u06d5\u0645", "Help_talk", "\u062a\u06c8\u0631", "Category_talk", "\u0626\u0627\u0644\u0627\u06be\u0649\u062f\u06d5", "\u06cb\u0627\u0633\u0649\u062a\u06d5", "\u0645\u06c7\u0646\u0627\u0632\u0649\u0631\u0649\u0633\u0649%s"],
			"crh-cyrl": [["\u041c\u0443\u0437\u0430\u043a\u0435\u0440\u0435", "Muzakere"], ["\u041a\u044a\u0443\u043b\u043b\u0430\u043d\u044b\u0434\u0436\u044b", "Qullan\u0131c\u0131"], ["\u041a\u044a\u0443\u043b\u043b\u0430\u043d\u044b\u0434\u0436\u044b_\u043c\u0443\u0437\u0430\u043a\u0435\u0440\u0435\u0441\u0438", "Qullan\u0131c\u0131_muzakeresi"], ["\u0424\u0430\u0439\u043b", "Resim", "\u0420\u0435\u0441\u0438\u043c"], ["\u0424\u0430\u0439\u043b_\u043c\u0443\u0437\u0430\u043a\u0435\u0440\u0435\u0441\u0438", "Resim_muzakeresi", "\u0420\u0435\u0441\u0438\u043c_\u043c\u0443\u0437\u0430\u043a\u0435\u0440\u0435\u0441\u0438"], ["\u041c\u0435\u0434\u0438\u0430\u0412\u0438\u043a\u0438", "MediaViki"], ["\u041c\u0435\u0434\u0438\u0430\u0412\u0438\u043a\u0438_\u043c\u0443\u0437\u0430\u043a\u0435\u0440\u0435\u0441\u0438", "MediaViki_muzakeresi"], ["\u0428\u0430\u0431\u043b\u043e\u043d", "\u015eablon"], ["\u0428\u0430\u0431\u043b\u043e\u043d_\u043c\u0443\u0437\u0430\u043a\u0435\u0440\u0435\u0441\u0438", "\u015eablon_muzakeresi"], ["\u042f\u0440\u0434\u044b\u043c", "Yard\u0131m"], ["\u042f\u0440\u0434\u044b\u043c_\u043c\u0443\u0437\u0430\u043a\u0435\u0440\u0435\u0441\u0438", "Yard\u0131m_muzakeresi"], ["\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044f", "Kategoriya"], ["\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044f_\u043c\u0443\u0437\u0430\u043a\u0435\u0440\u0435\u0441\u0438", "Kategoriya_muzakeresi"], ["\u041c\u0430\u0445\u0441\u0443\u0441", "Mahsus"], ["\u041c\u0435\u0434\u0438\u0430", "Media"], ["%s_\u043c\u0443\u0437\u0430\u043a\u0435\u0440\u0435\u0441\u0438", "$1_muzakeresi"]],
			"yi": ["\u05e8\u05e2\u05d3\u05df", ["\u05d1\u05d0\u05b7\u05e0\u05d9\u05e6\u05e2\u05e8", "\u05d1\u05d0\u05e0\u05d9\u05e6\u05e2\u05e8", "\u05d1\u05d0\u05e0\u05d5\u05e6\u05e2\u05e8"], ["\u05d1\u05d0\u05b7\u05e0\u05d9\u05e6\u05e2\u05e8_\u05e8\u05e2\u05d3\u05df", "\u05d1\u05d0\u05e0\u05d9\u05e6\u05e2\u05e8_\u05e8\u05e2\u05d3\u05df", "\u05d1\u05d0\u05e0\u05d5\u05e6\u05e2\u05e8_\u05e8\u05e2\u05d3\u05df"], ["\u05d8\u05e2\u05e7\u05e2", "\u05d1\u05d9\u05dc\u05d3"], ["\u05d8\u05e2\u05e7\u05e2_\u05e8\u05e2\u05d3\u05df", "\u05d1\u05d9\u05dc\u05d3_\u05e8\u05e2\u05d3\u05df"], ["\u05de\u05e2\u05d3\u05d9\u05e2\u05f0\u05d9\u05e7\u05d9", "\u05de\u05e2\u05d3\u05d9\u05e2\u05d5\u05d5\u05d9\u05e7\u05d9"], ["\u05de\u05e2\u05d3\u05d9\u05e2\u05f0\u05d9\u05e7\u05d9_\u05e8\u05e2\u05d3\u05df", "\u05de\u05e2\u05d3\u05d9\u05e2\u05d5\u05d5\u05d9\u05e7\u05d9_\u05e8\u05e2\u05d3\u05df"], "\u05de\u05d5\u05e1\u05d8\u05e2\u05e8", "\u05de\u05d5\u05e1\u05d8\u05e2\u05e8_\u05e8\u05e2\u05d3\u05df", "\u05d4\u05d9\u05dc\u05e3", "\u05d4\u05d9\u05dc\u05e3_\u05e8\u05e2\u05d3\u05df", ["\u05e7\u05d0\u05b7\u05d8\u05e2\u05d2\u05d0\u05b8\u05e8\u05d9\u05e2", "\u05e7\u05d0\u05d8\u05e2\u05d2\u05d0\u05e8\u05d9\u05e2"], ["\u05e7\u05d0\u05b7\u05d8\u05e2\u05d2\u05d0\u05b8\u05e8\u05d9\u05e2_\u05e8\u05e2\u05d3\u05df", "\u05e7\u05d0\u05d8\u05e2\u05d2\u05d0\u05e8\u05d9\u05e2_\u05e8\u05e2\u05d3\u05df"], ["\u05d1\u05d0\u05b7\u05d6\u05d5\u05e0\u05d3\u05e2\u05e8", "\u05d1\u05d0\u05d6\u05d5\u05e0\u05d3\u05e2\u05e8"], "\u05de\u05e2\u05d3\u05d9\u05e2", "%s_\u05e8\u05e2\u05d3\u05df"],
			"ab": [["\u0410\u0445\u0446\u04d9\u0430\u0436\u04d9\u0430\u0440\u0430", "\u041e\u0431\u0441\u0443\u0436\u0434\u0435\u043d\u0438\u0435"], ["\u0410\u043b\u0430\u0445\u04d9\u044b\u043b\u0430", "\u0418\u0430\u043b\u0430\u0445\u04d9", "\u0423\u0447\u0430\u0441\u0442\u043d\u0438\u043a"], ["\u0410\u043b\u0430\u0445\u04d9\u044b\u043b\u0430_\u0430\u0445\u0446\u04d9\u0430\u0436\u04d9\u0430\u0440\u0430", "\u041e\u0431\u0441\u0443\u0436\u0434\u0435\u043d\u0438\u0435_\u0443\u0447\u0430\u0441\u0442\u043d\u0438\u043a\u0430"], ["\u0410\u0444\u0430\u0438\u043b", "\u0424\u0430\u0439\u043b"], ["\u0410\u0444\u0430\u0438\u043b_\u0430\u0445\u0446\u04d9\u0430\u0436\u04d9\u0430\u0440\u0430", "\u041e\u0431\u0441\u0443\u0436\u0434\u0435\u043d\u0438\u0435_\u0444\u0430\u0439\u043b\u0430"], ["\u0410\u043c\u0435\u0434\u0438\u0430\u0432\u0438\u043a\u0438", "MediaWiki"], ["\u0410\u043c\u0435\u0434\u0438\u0430\u0432\u0438\u043a\u0438_\u0430\u0445\u0446\u04d9\u0430\u0436\u04d9\u0430\u0440\u0430", "\u041e\u0431\u0441\u0443\u0436\u0434\u0435\u043d\u0438\u0435_MediaWiki"], ["\u0410\u0448\u0430\u0431\u043b\u043e\u043d", "\u0428\u0430\u0431\u043b\u043e\u043d"], ["\u0410\u0448\u0430\u0431\u043b\u043e\u043d_\u0430\u0445\u0446\u04d9\u0430\u0436\u04d9\u0430\u0440\u0430", "\u041e\u0431\u0441\u0443\u0436\u0434\u0435\u043d\u0438\u0435_\u0448\u0430\u0431\u043b\u043e\u043d\u0430"], ["\u0410\u0446\u0445\u044b\u0440\u0430\u0430\u0440\u0430", "\u0421\u043f\u0440\u0430\u0432\u043a\u0430"], ["\u0410\u0446\u0445\u044b\u0440\u0430\u0430\u0440\u0430_\u0430\u0445\u0446\u04d9\u0430\u0436\u04d9\u0430\u0440\u0430", "\u041e\u0431\u0441\u0443\u0436\u0434\u0435\u043d\u0438\u0435_\u0441\u043f\u0440\u0430\u0432\u043a\u0438"], ["\u0410\u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u0430", "\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044f"], ["\u0410\u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u0430_\u0430\u0445\u0446\u04d9\u0430\u0436\u04d9\u0430\u0440\u0430", "\u041e\u0431\u0441\u0443\u0436\u0434\u0435\u043d\u0438\u0435_\u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u0438"], ["\u0426\u0430\u0441\u0442\u04d9\u0438", "\u0421\u043b\u0443\u0436\u0435\u0431\u043d\u0430\u044f"], ["\u0410\u043c\u0435\u0434\u0438\u0430", "\u041c\u0435\u0434\u0438\u0430"], ["%s_\u0430\u0445\u0446\u04d9\u0430\u0436\u04d9\u0430\u0440\u0430", "\u041e\u0431\u0441\u0443\u0436\u0434\u0435\u043d\u0438\u0435_$1"]],
			"bho": ["\u0935\u093e\u0930\u094d\u0924\u093e\u0932\u093e\u092a", "\u092a\u094d\u0930\u092f\u094b\u0917\u0915\u0930\u094d\u0924\u093e", "\u092a\u094d\u0930\u092f\u094b\u0917\u0915\u0930\u094d\u0924\u093e_\u0935\u093e\u0930\u094d\u0924\u093e", "\u091a\u093f\u0924\u094d\u0930", "\u091a\u093f\u0924\u094d\u0930_\u0935\u093e\u0930\u094d\u0924\u093e", "\u092e\u0940\u0921\u093f\u092f\u093e\u0935\u093f\u0915\u093f", "\u092e\u0940\u0921\u093f\u092f\u093e\u0935\u093f\u0915\u093f_\u0935\u093e\u0930\u094d\u0924\u093e", "\u091f\u0947\u092e\u094d\u092a\u0932\u0947\u091f", "\u091f\u0947\u092e\u094d\u092a\u0932\u0947\u091f_\u0935\u093e\u0930\u094d\u0924\u093e", "\u092e\u0926\u0926", "\u092e\u0926\u0926_\u0935\u093e\u0930\u094d\u0924\u093e", "\u0936\u094d\u0930\u0947\u0923\u0940", "\u0936\u094d\u0930\u0947\u0923\u0940_\u0935\u093e\u0930\u094d\u0924\u093e", "\u0935\u093f\u0936\u0947\u0937", "\u092e\u0940\u0921\u093f\u092f\u093e", "%s_\u0935\u093e\u0930\u094d\u0924\u093e"],
			"af": ["Bespreking", "Gebruiker", "Gebruikerbespreking", ["L\u00eaer", "Beeld"], ["L\u00eaerbespreking", "Beeldbespreking"], "MediaWiki", "MediaWikibespreking", "Sjabloon", "Sjabloonbespreking", "Hulp", "Hulpbespreking", "Kategorie", "Kategoriebespreking", "Spesiaal", "Media", "%sbespreking"],
			"crh-latn": [["Muzakere", "\u041c\u0443\u0437\u0430\u043a\u0435\u0440\u0435"], ["Qullan\u0131c\u0131", "\u041a\u044a\u0443\u043b\u043b\u0430\u043d\u044b\u0434\u0436\u044b"], ["Qullan\u0131c\u0131_muzakeresi", "\u041a\u044a\u0443\u043b\u043b\u0430\u043d\u044b\u0434\u0436\u044b_\u043c\u0443\u0437\u0430\u043a\u0435\u0440\u0435\u0441\u0438"], ["Fayl", "Resim", "\u0420\u0435\u0441\u0438\u043c"], ["Fayl_muzakeresi", "Resim_muzakeresi", "\u0420\u0435\u0441\u0438\u043c_\u043c\u0443\u0437\u0430\u043a\u0435\u0440\u0435\u0441\u0438"], ["MediaViki", "\u041c\u0435\u0434\u0438\u0430\u0412\u0438\u043a\u0438"], ["MediaViki_muzakeresi", "\u041c\u0435\u0434\u0438\u0430\u0412\u0438\u043a\u0438_\u043c\u0443\u0437\u0430\u043a\u0435\u0440\u0435\u0441\u0438"], ["\u015eablon", "\u0428\u0430\u0431\u043b\u043e\u043d"], ["\u015eablon_muzakeresi", "\u0428\u0430\u0431\u043b\u043e\u043d_\u043c\u0443\u0437\u0430\u043a\u0435\u0440\u0435\u0441\u0438"], ["Yard\u0131m", "\u042f\u0440\u0434\u044b\u043c"], ["Yard\u0131m_muzakeresi", "\u0420\u0430\u0437\u0433\u043e\u0432\u043e\u0440_\u043e_\u043f\u043e\u043c\u043e\u045b\u0438"], ["Kategoriya", "\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044f"], ["Kategoriya_muzakeresi", "\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044f_\u043c\u0443\u0437\u0430\u043a\u0435\u0440\u0435\u0441\u0438"], ["Mahsus", "\u041c\u0430\u0445\u0441\u0443\u0441"], ["Media", "\u041c\u0435\u0434\u0438\u0430"], ["%s_muzakeresi", "$1_\u043c\u0443\u0437\u0430\u043a\u0435\u0440\u0435\u0441\u0438"]],
			"ak": ["Nk\u0254mb\u0254", "User", "User_nk\u0254mb\u0254", "Fayl", "Fayl_nk\u0254mb\u0254", "MediaWiki", "MediaWiki_nk\u0254mb\u0254", "\u015eablon", "\u015eablon_nk\u0254mb\u0254", "Help", "Help_nk\u0254mb\u0254", "Kategori", "Kategori_nk\u0254mb\u0254", "Spesial", "Medya", "%s_nk\u0254mb\u0254"],
			"avk": ["Prilara", "Favesik", "Favesikprilara", "Ewava", "Ewavaprilara", "MediaWiki", "MediaWiki_talk", "Teza", "Tezaprilara", "Pomara", "Pomaraprilara", "Loma", "Lomaprilara", "Aptaca", "Mamind", "%s_talk"],
			"am": ["\u12cd\u12ed\u12ed\u1275", "\u12a0\u1263\u120d", "\u12a0\u1263\u120d_\u12cd\u12ed\u12ed\u1275", "\u1235\u12d5\u120d", "\u1235\u12d5\u120d_\u12cd\u12ed\u12ed\u1275", "\u1218\u120d\u12d5\u12ad\u1275", "\u1218\u120d\u12d5\u12ad\u1275_\u12cd\u12ed\u12ed\u1275", ["\u1218\u1208\u1320\u134a\u12eb", "\u1218\u120d\u1320\u134a\u12eb"], ["\u1218\u1208\u1320\u134a\u12eb_\u12cd\u12ed\u12ed\u1275", "\u1218\u120d\u1320\u134a\u12eb_\u12cd\u12ed\u12ed\u1275"], "\u12a5\u122d\u12f3\u1273", "\u12a5\u122d\u12f3\u1273_\u12cd\u12ed\u12ed\u1275", "\u1218\u12f0\u1265", "\u1218\u12f0\u1265_\u12cd\u12ed\u12ed\u1275", "\u120d\u12e9", "\u134b\u12ed\u120d", "%s_\u12cd\u12ed\u12ed\u1275"],
			"it": ["Discussione", "Utente", "Discussioni_utente", ["File", "Immagine"], ["Discussioni_file", "Discussioni_immagine"], "MediaWiki", "Discussioni_MediaWiki", "Template", "Discussioni_template", "Aiuto", "Discussioni_aiuto", "Categoria", "Discussioni_categoria", "Speciale", "Media", "Discussioni_%s"],
			"an": ["Descusi\u00f3n", "Usuario", "Descusi\u00f3n_usuario", "Imachen", "Descusi\u00f3n_imachen", "MediaWiki", "Descusi\u00f3n_MediaWiki", "Plantilla", "Descusi\u00f3n_plantilla", "Aduya", "Descusi\u00f3n_aduya", "Categor\u00eda", "Descusi\u00f3n_categor\u00eda", ["Especial", "Espezial"], "Media", "Descusi\u00f3n_%s"],
			"mzn": [["\u06af\u067e", "\u0628\u062d\u062b"], ["\u06a9\u0627\u0631\u0648\u0631", "\u06a9\u0627\u0631\u0628\u0631"], ["\u06a9\u0627\u0631\u0648\u0631_\u06af\u067e", "\u0628\u062d\u062b_\u06a9\u0627\u0631\u0628\u0631"], ["\u067e\u0631\u0648\u0646\u062f\u0647", "\u067e\u0631\u0648\u0646\u062f\u0647", "\u062a\u0635\u0648\u06cc\u0631"], ["\u067e\u0631\u0648\u0646\u062f\u0647_\u06af\u067e", "\u0628\u062d\u062b_\u067e\u0631\u0648\u0646\u062f\u0647", "\u0628\u062d\u062b_\u062a\u0635\u0648\u06cc\u0631"], ["\u0645\u062f\u06cc\u0627\u0648\u06cc\u06a9\u06cc", "\u0645\u0647\u200c\u062f\u06cc\u0627\u0648\u06cc\u06a9\u06cc", "\u0645\u062f\u06cc\u0627\u0648\u06cc\u06a9\u06cc"], ["\u0645\u062f\u06cc\u0627\u0648\u06cc\u06a9\u06cc_\u06af\u067e", "\u0645\u0647\u200c\u062f\u06cc\u0627\u0648\u06cc\u06a9\u06cc_\u06af\u067e", "\u0628\u062d\u062b_\u0645\u062f\u06cc\u0627\u0648\u06cc\u06a9\u06cc"], ["\u0634\u0627\u0628\u0644\u0648\u0646", "\u0627\u0644\u06af\u0648"], ["\u0634\u0627\u0628\u0644\u0648\u0646_\u06af\u067e", "\u0628\u062d\u062b_\u0627\u0644\u06af\u0648"], ["\u0631\u0627\u0646\u0645\u0627", "\u0631\u0627\u0646\u0647\u200c\u0645\u0627", "\u0631\u0627\u0647\u0646\u0645\u0627"], ["\u0631\u0627\u0646\u0645\u0627_\u06af\u067e", "\u0628\u062d\u062b_\u0631\u0627\u0647\u0646\u0645\u0627", "\u0631\u0627\u0646\u0647\u200c\u0645\u0627\u0626\u0647_\u06af\u067e"], ["\u0631\u062c", "\u0631\u062f\u0647"], ["\u0631\u062c_\u06af\u067e", "\u0628\u062d\u062b_\u0631\u062f\u0647"], ["\u0634\u0627", "\u0648\u06cc\u0698\u0647"], ["\u0645\u062f\u06cc\u0627", "\u0645\u062f\u06cc\u0627", "\u0645\u0647\u200c\u062f\u06cc\u0627"], ["%s_\u06af\u067e", "\u0628\u062d\u062b_$1"]],
			"ia": ["Discussion", "Usator", "Discussion_Usator", ["File", "Imagine"], ["Discussion_File", "Discussion_Imagine"], "MediaWiki", "Discussion_MediaWiki", "Patrono", "Discussion_Patrono", "Adjuta", "Discussion_Adjuta", "Categoria", "Discussion_Categoria", "Special", "Multimedia", "Discussion_%s"],
			"as": [["\u09ac\u09be\u09f0\u09cd\u09a4\u09be", "\u09ac\u09be\u09b0\u09cd\u09a4\u09be", "\u0935\u093e\u0930\u094d\u0924\u093e"], ["\u09b8\u09a6\u09b8\u09cd\u09af", "\u0938\u0926\u0938\u094d\u092f"], ["\u09b8\u09a6\u09b8\u09cd\u09af_\u09ac\u09be\u09f0\u09cd\u09a4\u09be", "\u0938\u0926\u0938\u094d\u092f_\u0935\u093e\u0930\u094d\u0924\u093e"], ["\u099a\u09bf\u09a4\u09cd\u09f0", "\u091a\u093f\u0924\u094d\u0930", "\u099a\u09bf\u09a4\u09cd\u09b0"], ["\u099a\u09bf\u09a4\u09cd\u09f0_\u09ac\u09be\u09f0\u09cd\u09a4\u09be", "\u091a\u093f\u0924\u094d\u0930_\u0935\u093e\u0930\u094d\u0924\u093e"], ["\u09ae\u09bf\u09a1\u09bf\u09af\u09bc\u09be\u09f1\u09bf\u0995\u09bf", "\u09ae\u09c7\u09a1\u09bf\u09af\u09bc\u09be\u09f1\u09bf\u0995\u09bf"], ["\u09ae\u09bf\u09a1\u09bf\u09af\u09bc\u09be\u09f1\u09bf\u0995\u09bf_\u0986\u09b2\u09cb\u099a\u09a8\u09be", "\u09ae\u09c7\u09a1\u09bf\u09af\u09bc\u09be\u09f1\u09bf\u0995\u09bf_\u09ac\u09be\u09f0\u09cd\u09a4\u09be"], ["\u09b8\u09be\u0981\u099a", "\u0938\u093e\u0901\u091a\u093e"], ["\u09b8\u09be\u0981\u099a_\u09ac\u09be\u09f0\u09cd\u09a4\u09be", "\u0938\u093e\u0901\u091a\u093e_\u0935\u093e\u0930\u094d\u0924\u093e"], "\u09b8\u09b9\u09be\u09af\u09bc", "\u09b8\u09b9\u09be\u09af\u09bc_\u09ac\u09be\u09f0\u09cd\u09a4\u09be", ["\u09b6\u09cd\u09f0\u09c7\u09a3\u09c0", "\u09b6\u09cd\u09b0\u09c7\u09a3\u09c0", "\u0936\u094d\u0930\u0947\u0923\u0940"], ["\u09b6\u09cd\u09f0\u09c7\u09a3\u09c0_\u09ac\u09be\u09f0\u09cd\u09a4\u09be", "\u0936\u094d\u0930\u0947\u0923\u0940_\u0935\u093e\u0930\u094d\u0924\u093e"], ["\u09ac\u09bf\u09b6\u09c7\u09b7", "\u0935\u093f\u0936\u0947\u0937"], "\u09ae\u09be\u09a7\u09cd\u09af\u09ae", ["%s_\u09ac\u09be\u09f0\u09cd\u09a4\u09be", "$1_\u0935\u093e\u0930\u094d\u0924\u093e"]],
			"ar": ["\u0646\u0642\u0627\u0634", "\u0645\u0633\u062a\u062e\u062f\u0645", "\u0646\u0642\u0627\u0634_\u0627\u0644\u0645\u0633\u062a\u062e\u062f\u0645", ["\u0645\u0644\u0641", "\u0635\u0648\u0631\u0629"], ["\u0646\u0642\u0627\u0634_\u0627\u0644\u0645\u0644\u0641", "\u0646\u0642\u0627\u0634_\u0627\u0644\u0635\u0648\u0631\u0629"], "\u0645\u064a\u062f\u064a\u0627\u0648\u064a\u0643\u064a", "\u0646\u0642\u0627\u0634_\u0645\u064a\u062f\u064a\u0627\u0648\u064a\u0643\u064a", "\u0642\u0627\u0644\u0628", "\u0646\u0642\u0627\u0634_\u0627\u0644\u0642\u0627\u0644\u0628", "\u0645\u0633\u0627\u0639\u062f\u0629", "\u0646\u0642\u0627\u0634_\u0627\u0644\u0645\u0633\u0627\u0639\u062f\u0629", "\u062a\u0635\u0646\u064a\u0641", "\u0646\u0642\u0627\u0634_\u0627\u0644\u062a\u0635\u0646\u064a\u0641", "\u062e\u0627\u0635", ["\u0645\u064a\u062f\u064a\u0627", "\u0648\u0633\u0627\u0626\u0637"], "\u0646\u0642\u0627\u0634_%s"],
			"anp": ["\u0935\u093e\u0930\u094d\u0924\u093e", "\u0938\u0926\u0938\u094d\u092f", "\u0938\u0926\u0938\u094d\u092f_\u0935\u093e\u0930\u094d\u0924\u093e", "\u091a\u093f\u0924\u094d\u0930", "\u091a\u093f\u0924\u094d\u0930_\u0935\u093e\u0930\u094d\u0924\u093e", "\u092e\u0940\u0921\u093f\u092f\u093e\u0935\u093f\u0915\u093f", "\u092e\u0940\u0921\u093f\u092f\u093e\u0935\u093f\u0915\u093f_\u0935\u093e\u0930\u094d\u0924\u093e", "\u0938\u093e\u0901\u091a\u093e", "\u0938\u093e\u0901\u091a\u093e_\u0935\u093e\u0930\u094d\u0924\u093e", "\u0938\u0939\u093e\u092f\u0924\u093e", "\u0938\u0939\u093e\u092f\u0924\u093e_\u0935\u093e\u0930\u094d\u0924\u093e", "\u0936\u094d\u0930\u0947\u0923\u0940", "\u0936\u094d\u0930\u0947\u0923\u0940_\u0935\u093e\u0930\u094d\u0924\u093e", "\u0935\u093f\u0936\u0947\u0937", "\u092e\u0940\u0921\u093f\u092f\u093e", "%s_\u0935\u093e\u0930\u094d\u0924\u093e"],
			"su": ["Obrolan", "Pamak\u00e9", "Obrolan_pamak\u00e9", "Gambar", "Obrolan_gambar", "M\u00e9diaWiki", "Obrolan_MediaWiki", "Citakan", "Obrolan_citakan", "Pitulung", "Obrolan_pitulung", "Kategori", "Obrolan_kategori", "Husus", "M\u00e9dia", "Obrolan_%s"],
			"io": ["Debato", "Uzanto", "Uzanto_Debato", ["Arkivo", "Imajo"], ["Arkivo_Debato", "Imajo_Debato"], "MediaWiki", "MediaWiki_Debato", ["Shablono", "Modelo"], ["Shablono_Debato", "Modelo_Debato"], "Helpo", "Helpo_Debato", "Kategorio", "Kategorio_Debato", "Specala", "Media", "%s_Debato"],
			"av": ["\u041e\u0431\u0441\u0443\u0436\u0434\u0435\u043d\u0438\u0435", "\u0423\u0447\u0430\u0441\u0442\u043d\u0438\u043a", "\u041e\u0431\u0441\u0443\u0436\u0434\u0435\u043d\u0438\u0435_\u0443\u0447\u0430\u0441\u0442\u043d\u0438\u043a\u0430", "\u0424\u0430\u0439\u043b", "\u041e\u0431\u0441\u0443\u0436\u0434\u0435\u043d\u0438\u0435_\u0444\u0430\u0439\u043b\u0430", "MediaWiki", "\u041e\u0431\u0441\u0443\u0436\u0434\u0435\u043d\u0438\u0435_MediaWiki", "\u0428\u0430\u0431\u043b\u043e\u043d", "\u041e\u0431\u0441\u0443\u0436\u0434\u0435\u043d\u0438\u0435_\u0448\u0430\u0431\u043b\u043e\u043d\u0430", "\u0421\u043f\u0440\u0430\u0432\u043a\u0430", "\u041e\u0431\u0441\u0443\u0436\u0434\u0435\u043d\u0438\u0435_\u0441\u043f\u0440\u0430\u0432\u043a\u0438", "\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044f", "\u041e\u0431\u0441\u0443\u0436\u0434\u0435\u043d\u0438\u0435_\u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u0438", "\u0421\u043b\u0443\u0436\u0435\u0431\u043d\u0430\u044f", "\u041c\u0435\u0434\u0438\u0430", "\u041e\u0431\u0441\u0443\u0436\u0434\u0435\u043d\u0438\u0435_{{GRAMMAR:genitive|%s}}"],
			"ay": ["Discusi\u00f3n", "Usuario", "Usuario_discusi\u00f3n", "Archivo", "Archivo_discusi\u00f3n", "MediaWiki", "MediaWiki_discusi\u00f3n", "Plantilla", "Plantilla_discusi\u00f3n", "Ayuda", "Ayuda_discusi\u00f3n", "Categor\u00eda", "Categor\u00eda_discusi\u00f3n", "Especial", "Medio", "%s_discusi\u00f3n"],
			"az": ["M\u00fczakir\u0259", "\u0130stifad\u0259\u00e7i", "\u0130stifad\u0259\u00e7i_m\u00fczakir\u0259si", "\u015e\u0259kil", "\u015e\u0259kil_m\u00fczakir\u0259si", ["MediaWiki", "MediyaViki"], ["MediaWiki_m\u00fczakir\u0259si", "MediyaViki_m\u00fczakir\u0259si"], "\u015eablon", "\u015eablon_m\u00fczakir\u0259si", "K\u00f6m\u0259k", "K\u00f6m\u0259k_m\u00fczakir\u0259si", "Kateqoriya", "Kateqoriya_m\u00fczakir\u0259si", "X\u00fcsusi", "Mediya", "%s_m\u00fczakir\u0259si"],
			"ie": ["Discussion", "Usator", "Usator_Discussion", "File", "File_Discussion", "MediaWiki", "MediaWiki_Discussion", "Avise", "Avise_Discussion", "Auxilie", "Auxilie_Discussion", "Categorie", "Categorie_Discussion", "Special", "Media", "%s_Discussion"],
			"id": [["Pembicaraan", "Bicara"], "Pengguna", ["Pembicaraan_Pengguna", "Bicara_Pengguna"], ["Berkas", "Gambar"], ["Pembicaraan_Berkas", "Pembicaraan_Gambar", "Gambar_Pembicaraan"], "MediaWiki", ["Pembicaraan_MediaWiki", "MediaWiki_Pembicaraan"], "Templat", ["Pembicaraan_Templat", "Templat_Pembicaraan"], "Bantuan", ["Pembicaraan_Bantuan", "Bantuan_Pembicaraan"], "Kategori", ["Pembicaraan_Kategori", "Kategori_Pembicaraan"], "Istimewa", "Media", "Pembicaraan_%s"],
			"ig": ["Okwu", ["\u1eccbanife", "\u1ecc\\'b\u00e0nif\u00e9"], ["Okwu_\u1ecdbanife", "Okwu_\u1ecd\\'b\u00e0nif\u00e9"], ["Us\u00f2r\u00f2", "\u00c1kw\u00fakw\u00f3_or\u00fcnotu"], ["Okwu_us\u00f2r\u00f2", "Okwu_\u00e1kw\u00fakw\u00f3_or\u00fcnotu"], ["MidiaWiki", "Nk\u00e1Wiki"], ["Okwu_MidiaWiki", "Okwu_Nk\u00e1Wiki"], "\u00c0t\u1ee5", "Okwu_\u00e0t\u1ee5", ["Nkwad\u1ecd", "Nkw\u00e1d\u1ecd"], ["Okwu_nkwad\u1ecd", "Okwu_nkw\u00e1d\u1ecd"], ["\u00d2t\u00f9", "\u00c9b\u00e9on\u1ecdr"], ["Okwu_\u00f2t\u00f9", "Okwu_\u00e9b\u00e9on\u1ecdr"], "Ih\u00fc_k\u00e1r\u00edr\u00ed", ["Midia", "Nk\u00e1"], "Okwu_%s"],
			"stq": ["Diskussion", "Benutser", "Benutser_Diskussion", "Bielde", "Bielde_Diskussion", "MediaWiki", "MediaWiki_Diskussion", "Foarloage", "Foarloage_Diskussion", "H\u00e4lpe", "H\u00e4lpe_Diskussion", "Kategorie", "Kategorie_Diskussion", "Spezial", "Media", "%s_Diskussion"],
			"qu": ["Rimanakuy", "Ruraq", "Ruraq_rimanakuy", "Rikcha", "Rikcha_rimanakuy", "MediaWiki", "MediaWiki_rimanakuy", "Plantilla", "Plantilla_rimanakuy", "Yanapa", "Yanapa_rimanakuy", "Katiguriya", "Katiguriya_rimanakuy", "Sapaq", "Midya", "%s_rimanakuy"],
			"sr": ["\u0420\u0430\u0437\u0433\u043e\u0432\u043e\u0440", "\u041a\u043e\u0440\u0438\u0441\u043d\u0438\u043a", "\u0420\u0430\u0437\u0433\u043e\u0432\u043e\u0440_\u0441\u0430_\u043a\u043e\u0440\u0438\u0441\u043d\u0438\u043a\u043e\u043c", "\u0414\u0430\u0442\u043e\u0442\u0435\u043a\u0430", "\u0420\u0430\u0437\u0433\u043e\u0432\u043e\u0440_\u043e_\u0434\u0430\u0442\u043e\u0442\u0435\u0446\u0438", "\u041c\u0435\u0434\u0438\u0458\u0430\u0432\u0438\u043a\u0438", "\u0420\u0430\u0437\u0433\u043e\u0432\u043e\u0440_\u043e_\u041c\u0435\u0434\u0438\u0458\u0430\u0432\u0438\u043a\u0438\u0458\u0443", "\u0428\u0430\u0431\u043b\u043e\u043d", "\u0420\u0430\u0437\u0433\u043e\u0432\u043e\u0440_\u043e_\u0448\u0430\u0431\u043b\u043e\u043d\u0443", "\u041f\u043e\u043c\u043e\u045b", "\u0420\u0430\u0437\u0433\u043e\u0432\u043e\u0440_\u043e_\u043f\u043e\u043c\u043e\u045b\u0438", "\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u0458\u0430", "\u0420\u0430\u0437\u0433\u043e\u0432\u043e\u0440_\u043e_\u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u0458\u0438", "\u041f\u043e\u0441\u0435\u0431\u043d\u043e", "\u041c\u0435\u0434\u0438\u0458", "\u0420\u0430\u0437\u0433\u043e\u0432\u043e\u0440_\u043e_%s"],
			"nl": ["Overleg", "Gebruiker", "Overleg_gebruiker", ["Bestand", "Afbeelding"], ["Overleg_bestand", "Overleg_afbeelding"], "MediaWiki", "Overleg_MediaWiki", "Sjabloon", "Overleg_sjabloon", "Help", "Overleg_help", "Categorie", "Overleg_categorie", "Speciaal", "Media", "Overleg_%s"],
			"nn": ["Diskusjon", "Brukar", "Brukardiskusjon", "Fil", "Fildiskusjon", "MediaWiki", "MediaWiki-diskusjon", "Mal", "Maldiskusjon", "Hjelp", "Hjelpdiskusjon", "Kategori", "Kategoridiskusjon", "Spesial", "Filpeikar", "%s-diskusjon"],
			"min": ["Pembicaraan", "Pengguna", "Pembicaraan_Pengguna", "Berkas", "Pembicaraan_Berkas", "MediaWiki", "Pembicaraan_MediaWiki", "Templat", "Pembicaraan_Templat", "Bantuan", "Pembicaraan_Bantuan", "Kategori", "Pembicaraan_Kategori", "Istimewa", "Media", "Pembicaraan_%s"],
			"pa": [["\u0a17\u0a71\u0a32-\u0a2c\u0a3e\u0a24", "\u0a1a\u0a30\u0a1a\u0a3e"], ["\u0a35\u0a30\u0a24\u0a4c\u0a02\u0a15\u0a3e\u0a30", "\u0a2e\u0a48\u0a02\u0a2c\u0a30"], ["\u0a35\u0a30\u0a24\u0a4c\u0a02\u0a15\u0a3e\u0a30_\u0a17\u0a71\u0a32-\u0a2c\u0a3e\u0a24", "\u0a2e\u0a48\u0a02\u0a2c\u0a30_\u0a1a\u0a30\u0a1a\u0a3e"], "\u0a24\u0a38\u0a35\u0a40\u0a30", ["\u0a24\u0a38\u0a35\u0a40\u0a30_\u0a17\u0a71\u0a32-\u0a2c\u0a3e\u0a24", "\u0a24\u0a38\u0a35\u0a40\u0a30_\u0a1a\u0a30\u0a1a\u0a3e"], ["\u0a2e\u0a40\u0a21\u0a40\u0a06\u0a35\u0a3f\u0a15\u0a40", "\u0a2e\u0a40\u0a21\u0a40\u0a06\u0a35\u0a3f\u0a15\u0a3f"], ["\u0a2e\u0a40\u0a21\u0a40\u0a06\u0a35\u0a3f\u0a15\u0a40_\u0a17\u0a71\u0a32-\u0a2c\u0a3e\u0a24", "\u0a2e\u0a40\u0a21\u0a40\u0a06\u0a35\u0a3f\u0a15\u0a3f_\u0a1a\u0a30\u0a1a\u0a3e"], ["\u0a2b\u0a30\u0a2e\u0a3e", "\u0a28\u0a2e\u0a42\u0a28\u0a3e"], ["\u0a2b\u0a30\u0a2e\u0a3e_\u0a17\u0a71\u0a32-\u0a2c\u0a3e\u0a24", "\u0a28\u0a2e\u0a42\u0a28\u0a3e_\u0a1a\u0a30\u0a1a\u0a3e"], "\u0a2e\u0a26\u0a26", ["\u0a2e\u0a26\u0a26_\u0a17\u0a71\u0a32-\u0a2c\u0a3e\u0a24", "\u0a2e\u0a26\u0a26_\u0a1a\u0a30\u0a1a\u0a3e"], "\u0a38\u0a3c\u0a4d\u0a30\u0a47\u0a23\u0a40", ["\u0a38\u0a3c\u0a4d\u0a30\u0a47\u0a23\u0a40_\u0a17\u0a71\u0a32-\u0a2c\u0a3e\u0a24", "\u0a38\u0a3c\u0a4d\u0a30\u0a47\u0a23\u0a40_\u0a1a\u0a30\u0a1a\u0a3e"], ["\u0a16\u0a3c\u0a3e\u0a38", "\u0a16\u0a3e\u0a38"], "\u0a2e\u0a40\u0a21\u0a40\u0a06", ["%s_\u0a17\u0a71\u0a32-\u0a2c\u0a3e\u0a24", "$1_\u0a1a\u0a30\u0a1a\u0a3e"]],
			"nah": [["T\u0113ixn\u0101miquiliztli", "Discusi\u00f3n"], ["Tlatequitiltil\u012blli", "Usuario"], ["Tlatequitiltil\u012blli_t\u0113ixn\u0101miquiliztli", "Usuario_Discusi\u00f3n"], ["\u012axiptli", "Imagen"], ["\u012axiptli_t\u0113ixn\u0101miquiliztli", "Imagen_Discusi\u00f3n"], ["Huiquimedia", "MediaWiki"], ["Huiquimedia_t\u0113ixn\u0101miquiliztli", "MediaWiki_Discusi\u00f3n"], ["Nemachiy\u014dt\u012blli", "Plantilla"], ["Nemachiy\u014dt\u012blli_t\u0113ixn\u0101miquiliztli", "Plantilla_Discusi\u00f3n"], ["T\u0113pal\u0113huiliztli", "Ayuda"], ["T\u0113pal\u0113huiliztli_t\u0113ixn\u0101miquiliztli", "Ayuda_Discusi\u00f3n"], ["Neneuhc\u0101y\u014dtl", "Categor\u00eda"], ["Neneuhc\u0101y\u014dtl_t\u0113ixn\u0101miquiliztli", "Categor\u00eda_Discusi\u00f3n"], ["N\u014dncuahqu\u012bzqui", "Especial"], ["M\u0113diatl", "Media"], ["%s_t\u0113ixn\u0101miquiliztli", "Wikipedia_Discusi\u00f3n"]],
			"gan-hans": ["\u8c08\u8a51", ["\u7528\u6237", "\u7528\u6237"], "\u7528\u6237\u8c08\u8a51", ["\u6587\u4ef6", "\u6587\u4ef6", "\u56fe\u50cf", "\u6863\u6848", "Image"], "\u6587\u4ef6\u8c08\u8a51", "MediaWiki", "MediaWiki\u8c08\u8a51", ["\u6a21\u677f", "\u6a21\u677f"], "\u6a21\u677f\u8c08\u8a51", ["\u5e2e\u52a9", "\u5e2e\u52a9"], "\u5e2e\u52a9\u8c08\u8a51", ["\u5206\u7c7b", "\u5206\u7c7b"], "\u5206\u7c7b\u8c08\u8a51", ["\u7279\u6b8a", "\u7279\u6b8a"], ["\u5a92\u4f53\u6587\u4ef6", "\u5a92\u4f53"], "%s\u8c08\u8a51"],
			"gan-hant": ["\u8ac7\u8a51", "User", "\u7528\u6236\u8ac7\u8a51", ["File", "Image"], "\u6a94\u6848\u8ac7\u8a51", "MediaWiki", "MediaWiki\u8ac7\u8a51", "Template", "\u6a21\u677f\u8ac7\u8a51", "Help", "\u5e6b\u52a9\u8ac7\u8a51", "Category", "\u5206\u985e\u8ac7\u8a51", "Special", "Media", "%s\u8ac7\u8a51"],
			"ne": ["\u0935\u093e\u0930\u094d\u0924\u093e\u0932\u093e\u092a", "\u092a\u094d\u0930\u092f\u094b\u0917\u0915\u0930\u094d\u0924\u093e", "\u092a\u094d\u0930\u092f\u094b\u0917\u0915\u0930\u094d\u0924\u093e_\u0935\u093e\u0930\u094d\u0924\u093e", "\u091a\u093f\u0924\u094d\u0930", "\u091a\u093f\u0924\u094d\u0930_\u0935\u093e\u0930\u094d\u0924\u093e", "\u092e\u0940\u0921\u093f\u092f\u093e\u0935\u093f\u0915\u093f", "\u092e\u0940\u0921\u093f\u092f\u093e\u0935\u093f\u0915\u093f_\u0935\u093e\u0930\u094d\u0924\u093e", "\u0922\u093e\u0901\u091a\u093e", "\u0922\u093e\u0901\u091a\u093e_\u0935\u093e\u0930\u094d\u0924\u093e", "\u092e\u0926\u094d\u0926\u0924", "\u092e\u0926\u094d\u0926\u0924_\u0935\u093e\u0930\u094d\u0924\u093e", "\u0936\u094d\u0930\u0947\u0923\u0940", "\u0936\u094d\u0930\u0947\u0923\u0940_\u0935\u093e\u0930\u094d\u0924\u093e", "\u0935\u093f\u0936\u0947\u0937", "\u092e\u0940\u0921\u093f\u092f\u093e", "%s_\u0935\u093e\u0930\u094d\u0924\u093e"],
			"lij": [["Disc\u00fbscion", "Discussione"], "Utente", ["Disc\u00fbscio\u00een_\u00fbtente", "Discussioni_utente"], ["Immaggine", "Immagine"], ["Disc\u00fbscio\u00een_immaggine", "Discussioni_immagine"], "MediaWiki", ["Disc\u00fbscio\u00een_MediaWiki", "Discussioni_MediaWiki"], "Template", ["Disc\u00fbscio\u00een_template", "Discussioni_template"], ["Agi\u00fbtto", "Aiuto"], ["Disc\u00fbscio\u00een_agi\u00fbtto", "Discussioni_aiuto"], ["Categor\u00eea", "Categoria"], ["Disc\u00fbscio\u00een_categor\u00eea", "Discussioni_categoria"], ["Spe\u00e7iale", "Speciale"], "Media", ["Disc\u00fbscio\u00een_%s", "Discussioni_$1"]],
			"csb": ["Disk\u00f9s\u00ebj\u00f4", "Br\u00ebk\u00f2wnik", "Disk\u00f9s\u00ebj\u00f4_br\u00ebk\u00f2wnika", "\u00d2br\u00f4zk", "Disk\u00f9s\u00ebj\u00f4_\u00f2br\u00f4zk\u00f3w", "MediaWiki", "Disk\u00f9s\u00ebj\u00f4_MediaWiki", "Szabl\u00f3na", "Disk\u00f9s\u00ebj\u00f4_Szabl\u00f3n\u00eb", "P\u00f2m\u00f2c", "Disk\u00f9s\u00ebj\u00f4_P\u00f2m\u00f2c\u00eb", "Kateg\u00f2r\u00ebj\u00f4", "Disk\u00f9s\u00ebj\u00f4_Kateg\u00f2r\u00ebji", "Specjaln\u00f4", "Media", "Disk\u00f9s\u00ebj\u00f4_%s"],
			"tyv": ["\u0427\u0443\u0433\u0430\u0430", "A\u0436\u044b\u0433\u043b\u0430\u043a\u0447\u044b", ["A\u0436\u044b\u0433\u043b\u0430\u043a\u0447\u044b_\u0447\u0443\u0433\u0430\u0430\u0437\u0443", "A\u0436\u044b\u0433\u043b\u0430\u043a\u0447\u044b_\u0447\u0443\u0433\u0430\u0430"], ["\u0424\u0430\u0439\u043b", "\u0427\u0443\u0440\u0443\u043a"], ["\u0424\u0430\u0439\u043b_\u0447\u0443\u0433\u0430\u0430\u0437\u0443", "\u0427\u0443\u0440\u0443\u043a_\u0447\u0443\u0433\u0430\u0430"], "\u041c\u0435\u0434\u0438\u0430\u0412\u0438\u043a\u0438", ["\u041c\u0435\u0434\u0438\u0430\u0412\u0438\u043a\u0438_\u0447\u0443\u0433\u0430\u0430\u0437\u0443", "\u041c\u0435\u0434\u0438\u0430\u0412\u0438\u043a\u0438_\u0447\u0443\u0433\u0430\u0430"], "\u0425\u044d\u044d", ["\u0425\u044d\u044d_\u0447\u0443\u0433\u0430\u0430\u0437\u0443", "\u0425\u044d\u044d_\u0447\u0443\u0433\u0430\u0430"], "\u0414\u0443\u0437\u0430", ["\u0414\u0443\u0437\u0430_\u0447\u0443\u0433\u0430\u0430\u0437\u0443", "\u0414\u0443\u0437\u0430_\u0447\u0443\u0433\u0430\u0430"], "\u0411\u04e9\u043b\u04af\u043a", ["\u0411\u04e9\u043b\u04af\u043a_\u0447\u0443\u0433\u0430\u0430\u0437\u0443", "\u0411\u04e9\u043b\u04af\u043a_\u0447\u0443\u0433\u0430\u0430"], "\u0422\u0443\u0441\u043a\u0430\u0439", "\u041c\u0435\u0434\u0438\u0430", ["%s_\u0447\u0443\u0433\u0430\u0430\u0437\u0443", "$1_\u0447\u0443\u0433\u0430\u0430"]],
			"kk-arab": [["\u062a\u0627\u0644\u0642\u0649\u0644\u0627\u06cb", "\u0422\u0430\u043b\u049b\u044b\u043b\u0430\u0443", "Talq\u0131law"], ["\u0642\u0627\u062a\u0649\u0633\u06cb\u0634\u0649", "\u049a\u0430\u0442\u044b\u0441\u0443\u0448\u044b", "Qat\u0131sw\u015f\u0131"], ["\u0642\u0627\u062a\u0649\u0633\u06cb\u0634\u0649_\u062a\u0627\u0644\u0642\u0649\u0644\u0627\u06cb\u0649", "\u049a\u0430\u0442\u044b\u0441\u0443\u0448\u044b_\u0442\u0430\u043b\u049b\u044b\u043b\u0430\u0443\u044b", "Qat\u0131sw\u015f\u0131_talq\u0131law\u0131"], ["\u0633\u06cb\u0631\u06d5\u062a", "Swret", "\u0421\u0443\u0440\u0435\u0442"], ["\u0633\u06cb\u0631\u06d5\u062a_\u062a\u0627\u0644\u0642\u0649\u0644\u0627\u06cb\u0649", "Swret_talq\u0131law\u0131", "\u0421\u0443\u0440\u0435\u0442_\u0442\u0430\u043b\u049b\u044b\u043b\u0430\u0443\u044b"], ["\u0645\u06d5\u062f\u0649\u064a\u0627\u06cb\u0649\u064a\u0643\u0649\u064a", "\u0645\u06d5\u062f\u064a\u0627\u06cb\u064a\u0643\u064a", "\u041c\u0435\u0434\u0438\u0430\u0423\u0438\u043a\u0438", "Med\u00efaW\u00efk\u00ef"], ["\u0645\u06d5\u062f\u0649\u064a\u0627\u06cb\u0649\u064a\u0643\u0649\u064a_\u062a\u0627\u0644\u0642\u0649\u0644\u0627\u06cb\u0649", "Med\u00efaW\u00efk\u00ef_talq\u0131law\u0131", "\u041c\u0435\u0434\u0438\u0430\u0423\u0438\u043a\u0438_\u0442\u0430\u043b\u049b\u044b\u043b\u0430\u0443\u044b", "\u0645\u06d5\u062f\u064a\u0627\u06cb\u064a\u0643\u064a_\u062a\u0627\u0644\u0642\u0649\u0644\u0627\u06cb\u0649"], ["\u06c7\u0644\u06af\u0649", "\u00dclgi", "\u0674\u06c7\u0644\u06af\u0674\u0649", "\u0677\u0644\u06af\u0678", "\u04ae\u043b\u0433\u0456"], ["\u06c7\u0644\u06af\u0649_\u062a\u0627\u0644\u0642\u0649\u0644\u0627\u06cb\u0649", "\u00dclgi_talq\u0131law\u0131", "\u04ae\u043b\u0433\u0456_\u0442\u0430\u043b\u049b\u044b\u043b\u0430\u0443\u044b", "\u0674\u06c7\u0644\u06af\u0674\u0649_\u062a\u0627\u0644\u0642\u0649\u0644\u0627\u06cb\u0649", "\u0677\u0644\u06af\u0678_\u062a\u0627\u0644\u0642\u0649\u0644\u0627\u06cb\u0649"], ["\u0627\u0646\u0649\u0642\u062a\u0627\u0645\u0627", "\u0410\u043d\u044b\u049b\u0442\u0430\u043c\u0430", "An\u0131qtama"], ["\u0627\u0646\u0649\u0642\u062a\u0627\u0645\u0627_\u062a\u0627\u0644\u0642\u0649\u0644\u0627\u06cb\u0649", "An\u0131qtama_talq\u0131law\u0131", "\u0410\u043d\u044b\u049b\u0442\u0430\u043c\u0430_\u0442\u0430\u043b\u049b\u044b\u043b\u0430\u0443\u044b"], ["\u0633\u0627\u0646\u0627\u062a", "\u0421\u0430\u043d\u0430\u0442", "Sanat"], ["\u0633\u0627\u0646\u0627\u062a_\u062a\u0627\u0644\u0642\u0649\u0644\u0627\u06cb\u0649", "Sanat_talq\u0131law\u0131", "\u0421\u0430\u043d\u0430\u0442_\u0442\u0430\u043b\u049b\u044b\u043b\u0430\u0443\u044b"], ["\u0627\u0631\u0646\u0627\u064a\u0649", "Arna\u00fd\u0131", "\u0410\u0440\u043d\u0430\u0439\u044b"], ["\u062a\u0627\u0633\u067e\u0627", "\u0422\u0430\u0441\u043f\u0430", "Taspa"], ["%s_\u062a\u0627\u0644\u0642\u0649\u0644\u0627\u06cb\u0649", "$1_\u0442\u0430\u043b\u049b\u044b\u043b\u0430\u0443\u044b", "$1_talq\u0131law\u0131"]],
			"cbk-zam": ["Discusi\u00f3n", "Usuario", "Usuario_discusi\u00f3n", "Archivo", "Archivo_discusi\u00f3n", "MediaWiki", "MediaWiki_discusi\u00f3n", "Plantilla", "Plantilla_discusi\u00f3n", "Ayuda", "Ayuda_discusi\u00f3n", "Categor\u00eda", "Categor\u00eda_discusi\u00f3n", "Especial", "Medio", "%s_discusi\u00f3n"],
			"myv": ["\u041a\u043e\u0440\u0442\u0430\u043c\u043e", "\u0422\u0435\u0438\u0446\u044f", "\u041e\u0431\u0441\u0443\u0436\u0434\u0435\u043d\u0438\u0435_\u0443\u0447\u0430\u0441\u0442\u043d\u0438\u043a\u0430", "\u0410\u0440\u0442\u043e\u0432\u043a\u0441", ["\u041e\u0431\u0441\u0443\u0436\u0434\u0435\u043d\u0438\u0435_\u0444\u0430\u0439\u043b\u0430", "\u041e\u0431\u0441\u0443\u0436\u0434\u0435\u043d\u0438\u0435_\u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f"], "MediaWiki", "\u041e\u0431\u0441\u0443\u0436\u0434\u0435\u043d\u0438\u0435_MediaWiki", "\u041b\u043e\u043f\u0430\u041f\u0430\u0440\u0446\u0443\u043d", "\u041e\u0431\u0441\u0443\u0436\u0434\u0435\u043d\u0438\u0435_\u0448\u0430\u0431\u043b\u043e\u043d\u0430", "\u041b\u0435\u0437\u043a\u0441", "\u041e\u0431\u0441\u0443\u0436\u0434\u0435\u043d\u0438\u0435_\u0441\u043f\u0440\u0430\u0432\u043a\u0438", "\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044f", "\u041e\u0431\u0441\u0443\u0436\u0434\u0435\u043d\u0438\u0435_\u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u0438", "\u0421\u043b\u0443\u0436\u0435\u0431\u043d\u0430\u044f", "\u041c\u0435\u0434\u0438\u044f", "%s_talk"],
			"es": ["Discusi\u00f3n", "Usuario", "Usuario_discusi\u00f3n", ["Archivo", "Imagen"], ["Archivo_discusi\u00f3n", "Imagen_Discusi\u00f3n"], "MediaWiki", "MediaWiki_discusi\u00f3n", "Plantilla", "Plantilla_discusi\u00f3n", "Ayuda", "Ayuda_discusi\u00f3n", "Categor\u00eda", "Categor\u00eda_discusi\u00f3n", "Especial", "Medio", "%s_discusi\u00f3n"],
			"sah": ["\u042b\u0440\u044b\u0442\u044b\u044b", "\u041a\u044b\u0442\u0442\u0430\u0430\u0447\u0447\u044b", "\u041a\u044b\u0442\u0442\u0430\u0430\u0447\u0447\u044b_\u044b\u0440\u044b\u0442\u044b\u044b\u0442\u0430", ["\u0411\u0438\u043b\u044d", "\u041e\u0439\u0443\u0443"], ["\u0411\u0438\u043b\u044d_\u044b\u0440\u044b\u0442\u044b\u044b\u0442\u0430", "\u041e\u0439\u0443\u0443_\u044b\u0440\u044b\u0442\u044b\u044b\u0442\u0430"], "MediaWiki", "\u041e\u0431\u0441\u0443\u0436\u0434\u0435\u043d\u0438\u0435_MediaWiki", "\u0425\u0430\u043b\u044b\u044b\u043f", "\u0425\u0430\u043b\u044b\u044b\u043f_\u044b\u0440\u044b\u0442\u044b\u044b\u0442\u0430", "\u041a\u04e9\u043c\u04e9", "\u041a\u04e9\u043c\u04e9_\u044b\u0440\u044b\u0442\u044b\u044b\u0442\u0430", "\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044f", "\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044f_\u044b\u0440\u044b\u0442\u044b\u044b\u0442\u0430", "\u0410\u043d\u0430\u043b\u043b\u0430\u0430\u0445", "\u041c\u0435\u0434\u0438\u0430", "%s_\u044b\u0440\u044b\u0442\u044b\u044b\u0442\u0430"],
			"nv": ["Naaltsoos_baa_y\u00e1shti\u02bc", "Choyoo\u0142\u02bc\u012f\u012fh\u00ed", "Choyoo\u0142\u02bc\u012f\u012fh\u00ed_bich\u02bc\u012f\u02bc_y\u00e1shti\u02bc", "E\u02bcelyaa\u00edg\u00ed\u00ed", "E\u02bcelyaa\u00edg\u00ed\u00ed_baa_y\u00e1shti\u02bc", "MediaWiki", "MediaWiki_baa_y\u00e1shti\u02bc", "Bee_\u00e1ln\u00e9\u00e9h\u00ed", "Bee_\u00e1ln\u00e9\u00e9h\u00ed_baa_y\u00e1shti\u02bc", "An\u00e1\u02bc\u00e1lwo\u02bc", "An\u00e1\u02bc\u00e1lwo\u02bc_baa_y\u00e1shti\u02bc", "T\u02bc\u00e1\u00e1\u0142\u00e1h\u00e1gi_\u00e1t\u02bc\u00e9ego", "T\u02bc\u00e1\u00e1\u0142\u00e1h\u00e1gi_\u00e1t\u02bc\u00e9ego_baa_y\u00e1shti\u02bc", "Special", "Media", "%s_baa_y\u00e1shti\u02bc"],
			"yue": [["\u50be\u5048", "\u5c0d\u8a71", "\u8ba8\u8bba", "\u5bf9\u8bdd", "\u8a0e\u8ad6"], ["\u7528\u6236", "\u7528\u6237"], "\u7528\u6236\u50be\u5048", ["\u6587\u4ef6", "\u5716\u50cf", "\u6a94", "\u5716", "\u56fe\u50cf", "\u6863\u6848", "\u6863", "Image", "\u6a94\u6848", "\u56fe"], ["\u6587\u4ef6\u50be\u5048", "MediaWiki_\u50be\u5048", "Image_talk"], "MediaWiki", "MediaWiki\u50be\u5048", "\u6a21", "\u6a21\u50be\u5048", ["\u5e6b\u624b", "\u5e2e\u52a9", "\u5e6b\u52a9", "\u5e2e\u624b", "\u8bf4\u660e", "\u8aaa\u660e"], "\u5e6b\u624b\u50be\u5048", ["\u5206\u985e", "\u985e", "\u5206\u7c7b", "\u7c7b"], "\u5206\u985e\u50be\u5048", ["\u7279\u5225", "\u7279\u6b8a"], ["\u5a92\u9ad4", "\u5a92\u4f53"], ["%s\u50be\u5048", "$1_\u50be\u5048"]],
			"kab": ["Mmeslay", "Amseqdac", "Amyannan_umsqedac", "Tugna", "Amyannan_n_tugna", "MediaWiki", "Amyannan_n_MediaWiki", ["Tal\u0263a", "Tal\u03b3a"], ["Amyannan_n_tal\u0263a", "Amyannan_n_tal\u03b3a"], "Tallat", "Amyannan_n_tallat", "Taggayt", "Amyannan_n_taggayt", "Uslig", "Media", "Amyannan_n_%s"],
			"fr": [["Discussion", "Discuter"], "Utilisateur", ["Discussion_utilisateur", "Discussion_Utilisateur"], "Fichier", ["Discussion_fichier", "Discussion_Image", "Discussion_Fichier"], "MediaWiki", "Discussion_MediaWiki", "Mod\u00e8le", ["Discussion_mod\u00e8le", "Discussion_Mod\u00e8le"], "Aide", ["Discussion_aide", "Discussion_Aide"], "Cat\u00e9gorie", ["Discussion_cat\u00e9gorie", "Discussion_Cat\u00e9gorie"], "Sp\u00e9cial", "M\u00e9dia", "Discussion_%s"],
			"nl-informal": ["Overleg", "Gebruiker", "Overleg_gebruiker", "Bestand", "Overleg_bestand", "MediaWiki", "Overleg_MediaWiki", "Sjabloon", "Overleg_sjabloon", "Help", "Overleg_help", "Categorie", "Overleg_categorie", "Speciaal", "Media", "Overleg_%s"],
			"mrj": ["\u041a\u04d3\u043d\u0433\u04d3\u0448\u04f9\u043c\u04d3\u0448", "\u0421\u0438\u0440\u04f9\u0448\u04f9", ["\u0421\u0438\u0440\u04f9\u0448\u04f9\u043c_\u043a\u04d3\u043d\u0433\u04d3\u0448\u04f9\u043c\u04d3\u0448", "\u0421\u0438\u0440\u04f9\u0448\u04f9\u043d_\u043a\u04d3\u043d\u0433\u04d3\u0448\u04f9\u043c\u04d3\u0448\u04f9\u0436\u04f9"], "\u0424\u0430\u0439\u043b", ["\u0424\u0430\u0439\u043b\u044b\u043c_\u043a\u04d3\u043d\u0433\u04d3\u0448\u04f9\u043c\u04d3\u0448", "\u0424\u0430\u0439\u043b_\u043a\u04d3\u043d\u0433\u04d3\u0448\u04f9\u043c\u04d3\u0448"], "MediaWiki", ["MediaWiki-\u043c_\u043a\u04d3\u043d\u0433\u04d3\u0448\u04f9\u043c\u04d3\u0448", "MediaWiki_\u043a\u04d3\u043d\u0433\u04d3\u0448\u04f9\u043c\u04d3\u0448"], "\u0428\u0430\u0431\u043b\u043e\u043d", ["\u0428\u0430\u0431\u043b\u043e\u043d\u044b\u043c_\u043a\u04d3\u043d\u0433\u04d3\u0448\u04f9\u043c\u04d3\u0448", "\u0428\u0430\u0431\u043b\u043e\u043d_\u043a\u04d3\u043d\u0433\u04d3\u0448\u04f9\u043c\u04d3\u0448"], "\u041f\u0430\u043b\u0448\u044b\u043a", ["\u041f\u0430\u043b\u0448\u044b\u043a\u044b\u043c_\u043a\u04d3\u043d\u0433\u04d3\u0448\u04f9\u043c\u04d3\u0448", "\u041f\u0430\u043b\u0448\u044b\u043a\u044b\u043d_\u043a\u04d3\u043d\u0433\u04d3\u0448\u04f9\u043c\u04d3\u0448"], "\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0438", ["\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u043c_\u043a\u04d3\u043d\u0433\u04d3\u0448\u04f9\u043c\u04d3\u0448", "\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0438_\u043a\u04d3\u043d\u0433\u04d3\u0448\u04f9\u043c\u04d3\u0448"], "\u0421\u043f\u0435\u0446\u04f9\u043b\u04f9\u0448\u0442\u04d3\u0448", "\u041c\u0435\u0434\u0438\u0430", "%s_\u043a\u04d3\u043d\u0433\u04d3\u0448\u04f9\u043c\u04d3\u0448"],
			"lad": [["Diskusy\u00f3n", "Diskussi\u00f3n", "Discusi\u00f3n"], ["Usador", "Usuario", "Empleador"], ["Messaje_de_Usador", "Message_de_Empleador", "Usuario_Discusi\u00f3n"], ["Dosya", "Archivo", "Dossia"], ["Diskusy\u00f3n_de_Dosya", "Diskussi\u00f3n_de_Dossia", "Archivo_Discusi\u00f3n"], "MedyaViki", ["Diskusy\u00f3n_de_MedyaViki", "MediaWiki_Discusi\u00f3n", "Diskussi\u00f3n_de_Xabbl\u00f3n"], ["Xabl\u00f3n", "Xabbl\u00f3n", "Plantilla"], ["Diskusy\u00f3n_de_Xabl\u00f3n", "Diskusy\u00f3n_de_Xabbl\u00f3n", "Plantilla_Discusi\u00f3n"], ["Ayudo", "Ayuda"], ["Diskusy\u00f3n_de_Ayudo", "Ayuda_Discusi\u00f3n", "Diskussi\u00f3n_de_Ayudo"], ["Kat\u0113ggor\u00eda", "Categor\u00eda", "Kateggor\u00eda"], ["Diskusy\u00f3n_de_Kat\u0113ggor\u00eda", "Categor\u00eda_Discusi\u00f3n", "Diskussi\u00f3n_de_Kateggor\u00eda"], ["Especial", "Especial"], ["Medya", "Meddia"], ["Diskusy\u00f3n_de_%s", "$1_Discusi\u00f3n", "Diskussi\u00f3n_de_$1"]],
			"fy": ["Oerlis", ["Meidogger", "Br\u00fbker"], ["Meidogger_oerlis", "Br\u00fbker_oerlis"], "Ofbyld", "Ofbyld_oerlis", "MediaWiki", "MediaWiki_oerlis", "Berjocht", "Berjocht_oerlis", "Hulp", "Hulp_oerlis", "Kategory", "Kategory_oerlis", "Wiki", "Media", "%s_oerlis"],
			"sv": ["Diskussion", "Anv\u00e4ndare", "Anv\u00e4ndardiskussion", ["Fil", "Bild"], ["Fildiskussion", "Bilddiskussion"], "MediaWiki", ["MediaWiki-diskussion", "MediaWiki_diskussion"], "Mall", "Malldiskussion", "Hj\u00e4lp", ["Hj\u00e4lpdiskussion", "Hj\u00e4lp_diskussion"], "Kategori", "Kategoridiskussion", "Special", "Media", "%sdiskussion"],
			"sl": ["Pogovor", "Uporabnik", "Uporabni\u0161ki_pogovor", "Slika", "Pogovor_o_sliki", "MediaWiki", "Pogovor_o_MediaWiki", "Predloga", "Pogovor_o_predlogi", "Pomo\u010d", "Pogovor_o_pomo\u010di", "Kategorija", "Pogovor_o_kategoriji", "Posebno", "Datoteka", "Pogovor_{{grammar:mestnik|%s}}"],
			"hif-latn": ["baat", "sadasya", "sadasya_ke_baat", "file", "file_ke_baat", "MediaWiki", "Mediawiki_ke_baat", "Template", "Template_ke_baat", "madat", "madat_ke_baat", "vibhag", "voibhag_ke_baat", "khaas", "saadhan", "%s_baat"],
			"kiu": [["Wer\u00eanay\u0131\u015f", "Tart\u0131\u015fma"], ["Karber", "Kullan\u0131c\u0131"], ["Karber_wer\u00eanay\u0131\u015f", "Kullan\u0131c\u0131_mesaj"], ["Dosye", "Dosya"], ["Dosya_wer\u00eanay\u0131\u015f", "Dosya_tart\u0131\u015fma"], "MediaWiki", ["MediaWiki_wer\u00eanay\u0131\u015f", "MediaWiki_tart\u0131\u015fma"], ["\u015eablon", "\u015eablon"], ["\u015eablon_wer\u00eanay\u0131\u015f", "\u015eablon_tart\u0131\u015fma"], ["Pe\u015fti", "Yard\u0131m"], ["Pe\u015fti_wer\u00eanay\u0131\u015f", "Yard\u0131m_tart\u0131\u015fma"], ["Kategoriye", "Kategori"], ["Kategori_wer\u00eanay\u0131\u015f", "Kategori_tart\u0131\u015fma"], ["X\u0131susi", "\u00d6zel"], ["Medya", "Medya"], ["%s_wer\u00eanay\u0131\u015f", "$1_tart\u0131\u015fma"]],
			"pnt": ["\u039a\u03b1\u03bb\u03ac\u03c4\u03c3\u03b5\u03bc\u03b1\u03bd", "\u03a7\u03c1\u03ae\u03c3\u03c4\u03b5\u03c2", "\u039a\u03b1\u03bb\u03ac\u03c4\u03c3\u03b5\u03bc\u03b1\u03bd_\u03c7\u03c1\u03ae\u03c3\u03c4\u03b5", ["\u0391\u03c1\u03c7\u03b5\u03af\u03bf\u03bd", "\u0395\u03b9\u03ba\u03cc\u03bd\u03b1\u03bd"], ["\u039a\u03b1\u03bb\u03ac\u03c4\u03c3\u03b5\u03bc\u03b1\u03bd_\u03b1\u03c1\u03c7\u03b5\u03af\u03bf\u03bd\u03bf\u03c2", "\u039a\u03b1\u03bb\u03ac\u03c4\u03c3\u03b5\u03bc\u03b1\u03bd_\u03b5\u03b9\u03ba\u03cc\u03bd\u03b1\u03c2"], "MediaWiki", "MediaWiki_talk", "\u03a0\u03c1\u03cc\u03c4\u03c5\u03c0\u03bf\u03bd", "\u039a\u03b1\u03bb\u03ac\u03c4\u03c3\u03b5\u03bc\u03b1\u03bd_\u03c0\u03c1\u03cc\u03c4\u03c5\u03c0\u03b9", "\u0392\u03bf\u03ae\u03b8\u03b5\u03b9\u03b1\u03bd", "\u039a\u03b1\u03bb\u03ac\u03c4\u03c3\u03b5\u03bc\u03b1\u03bd_\u03b2\u03bf\u03ae\u03b8\u03b5\u03b9\u03b1\u03c2", "\u039a\u03b1\u03c4\u03b7\u03b3\u03bf\u03c1\u03af\u03b1\u03bd", "\u039a\u03b1\u03bb\u03ac\u03c4\u03c3\u03b5\u03bc\u03b1\u03bd_\u03ba\u03b1\u03c4\u03b7\u03b3\u03bf\u03c1\u03af\u03b1\u03c2", "\u0395\u03b9\u03b4\u03b9\u03ba\u03cc\u03bd", "\u039c\u03ad\u03c3\u03bf\u03bd", "%s_\u03ba\u03b1\u03bb\u03ac\u03c4\u03c3\u03b5\u03bc\u03b1\u03bd"],
			"fa": ["\u0628\u062d\u062b", "\u06a9\u0627\u0631\u0628\u0631", "\u0628\u062d\u062b_\u06a9\u0627\u0631\u0628\u0631", ["\u067e\u0631\u0648\u0646\u062f\u0647", "\u062a\u0635\u0648\u06cc\u0631"], ["\u0628\u062d\u062b_\u067e\u0631\u0648\u0646\u062f\u0647", "\u0628\u062d\u062b_\u062a\u0635\u0648\u06cc\u0631"], "\u0645\u062f\u06cc\u0627\u0648\u06cc\u06a9\u06cc", "\u0628\u062d\u062b_\u0645\u062f\u06cc\u0627\u0648\u06cc\u06a9\u06cc", "\u0627\u0644\u06af\u0648", "\u0628\u062d\u062b_\u0627\u0644\u06af\u0648", "\u0631\u0627\u0647\u0646\u0645\u0627", "\u0628\u062d\u062b_\u0631\u0627\u0647\u0646\u0645\u0627", "\u0631\u062f\u0647", "\u0628\u062d\u062b_\u0631\u062f\u0647", "\u0648\u06cc\u0698\u0647", ["\u0645\u062f\u06cc\u0627", "\u0631\u0633\u0627\u0646\u0647", "\u0631\u0633\u0627\u0646\u0647\u200c\u0627\u06cc"], "\u0628\u062d\u062b_%s"],
			"ff": ["Discussion", "Utilisateur", "Discussion_utilisateur", "Fichier", "Discussion_fichier", "MediaWiki", "Discussion_MediaWiki", "Mod\u00e8le", "Discussion_mod\u00e8le", "Aide", "Discussion_aide", "Cat\u00e9gorie", "Discussion_cat\u00e9gorie", "Sp\u00e9cial", "M\u00e9dia", "Discussion_%s"],
			"mai": ["\u0935\u093e\u0930\u094d\u0924\u093e", "\u0938\u0926\u0938\u094d\u092f", "\u0938\u0926\u0938\u094d\u092f_\u0935\u093e\u0930\u094d\u0924\u093e", "\u091a\u093f\u0924\u094d\u0930", "\u091a\u093f\u0924\u094d\u0930_\u0935\u093e\u0930\u094d\u0924\u093e", "\u092e\u0940\u0921\u093f\u092f\u093e\u0935\u093f\u0915\u093f", "\u092e\u0940\u0921\u093f\u092f\u093e\u0935\u093f\u0915\u093f_\u0935\u093e\u0930\u094d\u0924\u093e", "\u0938\u093e\u0901\u091a\u093e", "\u0938\u093e\u0901\u091a\u093e_\u0935\u093e\u0930\u094d\u0924\u093e", "\u0938\u0939\u093e\u092f\u0924\u093e", "\u0938\u0939\u093e\u092f\u0924\u093e_\u0935\u093e\u0930\u094d\u0924\u093e", "\u0936\u094d\u0930\u0947\u0923\u0940", "\u0936\u094d\u0930\u0947\u0923\u0940_\u0935\u093e\u0930\u094d\u0924\u093e", "\u0935\u093f\u0936\u0947\u0937", "\u092e\u0940\u0921\u093f\u092f\u093e", "%s_\u0935\u093e\u0930\u094d\u0924\u093e"],
			"fi": ["Keskustelu", "K\u00e4ytt\u00e4j\u00e4", "Keskustelu_k\u00e4ytt\u00e4j\u00e4st\u00e4", ["Tiedosto", "Kuva"], ["Keskustelu_tiedostosta", "Keskustelu_kuvasta"], "J\u00e4rjestelm\u00e4viesti", "Keskustelu_j\u00e4rjestelm\u00e4viestist\u00e4", "Malline", "Keskustelu_mallineesta", "Ohje", "Keskustelu_ohjeesta", "Luokka", "Keskustelu_luokasta", "Toiminnot", "Media", "Keskustelu_{{GRAMMAR:elative|%s}}"],
			"de-formal": ["Diskussion", "Benutzer", "Benutzer_Diskussion", "Datei", "Datei_Diskussion", "MediaWiki", "MediaWiki_Diskussion", "Vorlage", "Vorlage_Diskussion", "Hilfe", "Hilfe_Diskussion", "Kategorie", "Kategorie_Diskussion", "Spezial", "Medium", "%s_Diskussion"],
			"sa": [["\u0938\u092e\u094d\u092d\u093e\u0937\u0923\u092e\u094d", "\u0938\u0902\u092d\u093e\u0937\u0923\u0902"], "\u092f\u094b\u091c\u0915\u0903", ["\u092f\u094b\u091c\u0915\u0938\u092e\u094d\u092d\u093e\u0937\u0923\u092e\u094d", "\u092f\u094b\u091c\u0915\u0938\u0902\u092d\u093e\u0937\u0923\u0902"], ["\u091a\u093f\u0924\u094d\u0930\u092e\u094d", "\u091a\u093f\u0924\u094d\u0930\u0902"], ["\u091a\u093f\u0924\u094d\u0930\u0938\u092e\u094d\u092d\u093e\u0937\u0923\u092e\u094d", "\u091a\u093f\u0924\u094d\u0930\u0938\u0902\u092d\u093e\u0937\u0923\u0902"], "\u092e\u093f\u0921\u0940\u092f\u093e\u0935\u093f\u0915\u0940", ["\u092e\u093f\u0921\u093f\u092f\u093e\u0935\u093f\u0915\u0940\u0938\u092e\u094d\u092d\u093e\u0937\u0923\u092e\u094d", "\u092e\u093f\u0921\u093f\u092f\u093e\u0935\u093f\u0915\u0940\u0938\u0902\u092d\u093e\u0937\u0923\u0902"], ["\u092b\u0932\u0915\u092e\u094d", "\u092c\u093f\u0902\u092c\u0927\u0930"], "\u092b\u0932\u0915\u0938\u094d\u092f_\u0938\u092e\u094d\u092d\u093e\u0937\u0923\u092e\u094d", ["\u0938\u0939\u093e\u092f\u094d\u092f\u092e\u094d", "\u0938\u0939\u093e\u092f\u094d\u092f", "\u0909\u092a\u0915\u093e\u0930\u0903"], ["\u0938\u0939\u093e\u092f\u094d\u092f\u0938\u094d\u092f_\u0938\u092e\u094d\u092d\u093e\u0937\u0923\u092e\u094d", "\u0909\u092a\u0915\u093e\u0930\u0938\u0902\u092d\u093e\u0937\u0923\u0902", "\u0938\u0939\u093e\u092f\u094d\u092f\u0938\u0902\u092d\u093e\u0937\u0923\u0902"], "\u0935\u0930\u094d\u0917\u0903", ["\u0935\u0930\u094d\u0917\u0938\u092e\u094d\u092d\u093e\u0937\u0923\u092e\u094d", "\u0935\u0930\u094d\u0917\u0938\u0902\u092d\u093e\u0937\u0923\u0902"], ["\u0935\u093f\u0936\u0947\u0937\u092e\u094d", "\u0935\u093f\u0936\u0947\u0937"], ["\u092e\u093e\u0927\u094d\u092f\u092e\u092e\u094d", "\u092e\u093e\u0927\u094d\u092f\u092e"], ["%s\u0938\u092e\u094d\u092d\u093e\u0937\u0923\u092e\u094d", "$1\u0938\u0902\u092d\u093e\u0937\u0923\u0902"]],
			"fo": ["Kjak", "Br\u00fakari", ["Br\u00fakarakjak", "Br\u00fakari_kjak"], "Mynd", ["Myndakjak", "Mynd_kjak"], ["MediaWiki", "MidiaWiki"], ["MediaWiki-kjak", "MidiaWiki_kjak"], "Fyrimynd", ["Fyrimyndakjak", "Fyrimynd_kjak"], "Hj\u00e1lp", ["Hj\u00e1lparkjak", "Hj\u00e1lp_kjak"], "B\u00f3lkur", ["B\u00f3lkakjak", "B\u00f3lkur_kjak"], ["Serstakt", "Serstakur"], "Mi\u00f0il", ["%s-kjak", "$1_kjak"]],
			"bcl": ["Olay", "Paragamit", "Olay_kan_paragamit", "Ladawan", "Olay_sa_ladawan", "MediaWiki", "Olay_sa_MediaWiki", "Plantilya", "Olay_sa_plantilya", "Tabang", "Olay_sa_tabang", "Kategorya", "Olay_sa_kategorya", "Espesyal", "Medio", "Olay_sa_%s"],
			"ka": ["\u10d2\u10d0\u10dc\u10ee\u10d8\u10da\u10d5\u10d0", ["\u10db\u10dd\u10db\u10ee\u10db\u10d0\u10e0\u10d4\u10d1\u10d4\u10da\u10d8", "\u10db\u10dd\u10dc\u10d0\u10ec\u10d8\u10da\u10d4"], ["\u10db\u10dd\u10db\u10ee\u10db\u10d0\u10e0\u10d4\u10d1\u10da\u10d8\u10e1_\u10d2\u10d0\u10dc\u10ee\u10d8\u10da\u10d5\u10d0", "\u10db\u10dd\u10db\u10ee\u10db\u10d0\u10e0\u10d4\u10d1\u10d4\u10da\u10d8_\u10d2\u10d0\u10dc\u10ee\u10d8\u10da\u10d5\u10d0", "\u10db\u10dd\u10dc\u10d0\u10ec\u10d8\u10da\u10d8\u10e1_\u10d2\u10d0\u10dc\u10ee\u10d8\u10da\u10d5\u10d0"], ["\u10e4\u10d0\u10d8\u10da\u10d8", "\u10e1\u10e3\u10e0\u10d0\u10d7\u10d8"], ["\u10e4\u10d0\u10d8\u10da\u10d8\u10e1_\u10d2\u10d0\u10dc\u10ee\u10d8\u10da\u10d5\u10d0", "\u10e1\u10e3\u10e0\u10d0\u10d7\u10d8_\u10d2\u10d0\u10dc\u10ee\u10d8\u10da\u10d5\u10d0"], "\u10db\u10d4\u10d3\u10d8\u10d0\u10d5\u10d8\u10d9\u10d8", ["\u10db\u10d4\u10d3\u10d8\u10d0\u10d5\u10d8\u10d9\u10d8\u10e1_\u10d2\u10d0\u10dc\u10ee\u10d8\u10da\u10d5\u10d0", "\u10db\u10d4\u10d3\u10d8\u10d0\u10d5\u10d8\u10d9\u10d8_\u10d2\u10d0\u10dc\u10ee\u10d8\u10da\u10d5\u10d0"], "\u10d7\u10d0\u10e0\u10d2\u10d8", ["\u10d7\u10d0\u10e0\u10d2\u10d8\u10e1_\u10d2\u10d0\u10dc\u10ee\u10d8\u10da\u10d5\u10d0", "\u10d7\u10d0\u10e0\u10d2\u10d8_\u10d2\u10d0\u10dc\u10ee\u10d8\u10da\u10d5\u10d0"], "\u10d3\u10d0\u10ee\u10db\u10d0\u10e0\u10d4\u10d1\u10d0", ["\u10d3\u10d0\u10ee\u10db\u10d0\u10e0\u10d4\u10d1\u10d8\u10e1_\u10d2\u10d0\u10dc\u10ee\u10d8\u10da\u10d5\u10d0", "\u10d3\u10d0\u10ee\u10db\u10d0\u10e0\u10d4\u10d1\u10d0_\u10d2\u10d0\u10dc\u10ee\u10d8\u10da\u10d5\u10d0"], "\u10d9\u10d0\u10e2\u10d4\u10d2\u10dd\u10e0\u10d8\u10d0", ["\u10d9\u10d0\u10e2\u10d4\u10d2\u10dd\u10e0\u10d8\u10d8\u10e1_\u10d2\u10d0\u10dc\u10ee\u10d8\u10da\u10d5\u10d0", "\u10d9\u10d0\u10e2\u10d4\u10d2\u10dd\u10e0\u10d8\u10d0_\u10d2\u10d0\u10dc\u10ee\u10d8\u10da\u10d5\u10d0"], "\u10e1\u10de\u10d4\u10ea\u10d8\u10d0\u10da\u10e3\u10e0\u10d8", "\u10db\u10d4\u10d3\u10d8\u10d0", "%s_\u10d2\u10d0\u10dc\u10ee\u10d8\u10da\u10d5\u10d0"],
			"gsw": ["Diskussion", "Benutzer", "Benutzer_Diskussion", "Datei", "Datei_Diskussion", "MediaWiki", "MediaWiki_Diskussion", "Vorlage", "Vorlage_Diskussion", "Hilfe", "Hilfe_Diskussion", "Kategorie", "Kategorie_Diskussion", "Spezial", "Medium", "%s_Diskussion"],
			"ckb": [["\u0648\u062a\u0648\u0648\u06ce\u0698", "\u0644\u06ce\u062f\u0648\u0627\u0646"], "\u0628\u06d5\u06a9\u0627\u0631\u06be\u06ce\u0646\u06d5\u0631", ["\u0644\u06ce\u062f\u0648\u0627\u0646\u06cc_\u0628\u06d5\u06a9\u0627\u0631\u06be\u06ce\u0646\u06d5\u0631", "\u0642\u0633\u06d5\u06cc_\u0628\u06d5\u06a9\u0627\u0631\u06be\u06ce\u0646\u06d5\u0631"], "\u067e\u06d5\u0695\u06af\u06d5", ["\u0648\u062a\u0648\u0648\u06ce\u0698\u06cc_\u067e\u06d5\u0695\u06af\u06d5", "\u0644\u06ce\u062f\u0648\u0627\u0646\u06cc_\u067e\u06d5\u0695\u06af\u06d5"], "\u0645\u06cc\u062f\u06cc\u0627\u0648\u06cc\u06a9\u06cc", ["\u0648\u062a\u0648\u0648\u06ce\u0698\u06cc_\u0645\u06cc\u062f\u06cc\u0627\u0648\u06cc\u06a9\u06cc", "\u0644\u06ce\u062f\u0648\u0627\u0646\u06cc_\u0645\u06cc\u062f\u06cc\u0627\u0648\u06cc\u06a9\u06cc"], ["\u062f\u0627\u0695\u06ce\u0698\u06d5", "\u0642\u0627\u06b5\u0628"], ["\u0648\u062a\u0648\u0648\u06ce\u0698\u06cc_\u062f\u0627\u0695\u06ce\u0698\u06d5", "\u0644\u06ce\u062f\u0648\u0627\u0646\u06cc_\u0642\u0627\u06b5\u0628", "\u0644\u06ce\u062f\u0648\u0627\u0646\u06cc_\u062f\u0627\u0695\u06ce\u0698\u06d5"], "\u06cc\u0627\u0631\u0645\u06d5\u062a\u06cc", ["\u0648\u062a\u0648\u0648\u06ce\u0698\u06cc_\u06cc\u0627\u0631\u0645\u06d5\u062a\u06cc", "\u0644\u06ce\u062f\u0648\u0627\u0646\u06cc_\u06cc\u0627\u0631\u0645\u06d5\u062a\u06cc"], "\u067e\u06c6\u0644", ["\u0648\u062a\u0648\u0648\u06ce\u0698\u06cc_\u067e\u06c6\u0644", "\u0644\u06ce\u062f\u0648\u0627\u0646\u06cc_\u067e\u06c6\u0644"], "\u062a\u0627\u06cc\u0628\u06d5\u062a", "\u0645\u06cc\u062f\u06cc\u0627", "\u0644\u06ce\u062f\u0648\u0627\u0646\u06cc_%s"],
			"kk": ["\u0422\u0430\u043b\u049b\u044b\u043b\u0430\u0443", "\u049a\u0430\u0442\u044b\u0441\u0443\u0448\u044b", "\u049a\u0430\u0442\u044b\u0441\u0443\u0448\u044b_\u0442\u0430\u043b\u049b\u044b\u043b\u0430\u0443\u044b", "\u0421\u0443\u0440\u0435\u0442", "\u0421\u0443\u0440\u0435\u0442_\u0442\u0430\u043b\u049b\u044b\u043b\u0430\u0443\u044b", "\u041c\u0435\u0434\u0438\u0430\u0423\u0438\u043a\u0438", "\u041c\u0435\u0434\u0438\u0430\u0423\u0438\u043a\u0438_\u0442\u0430\u043b\u049b\u044b\u043b\u0430\u0443\u044b", "\u04ae\u043b\u0433\u0456", "\u04ae\u043b\u0433\u0456_\u0442\u0430\u043b\u049b\u044b\u043b\u0430\u0443\u044b", "\u0410\u043d\u044b\u049b\u0442\u0430\u043c\u0430", "\u0410\u043d\u044b\u049b\u0442\u0430\u043c\u0430_\u0442\u0430\u043b\u049b\u044b\u043b\u0430\u0443\u044b", "\u0421\u0430\u043d\u0430\u0442", "\u0421\u0430\u043d\u0430\u0442_\u0442\u0430\u043b\u049b\u044b\u043b\u0430\u0443\u044b", "\u0410\u0440\u043d\u0430\u0439\u044b", "\u0422\u0430\u0441\u043f\u0430", "%s_\u0442\u0430\u043b\u049b\u044b\u043b\u0430\u0443\u044b"],
			"pdc": [["Dischbedutt", "Diskussion"], ["Yuuser", "Benutzer"], ["Yuuser_Dischbedutt", "Benutzer_Diskussion"], ["Feil", "Datei"], ["Feil_Dischbedutt", "Datei_Diskussion"], "MediaWiki", ["MediaWiki_Dischbedutt", "MediaWiki_Diskussion"], ["Moddel", "Vorlage"], ["Moddel_Dischbedutt", "Vorlage_Diskussion"], ["Hilf", "Hilfe"], ["Hilf_Dischbedutt", "Hilfe_Diskussion"], ["Abdeeling", "Kategorie"], ["Abdeeling_Dischbedutt", "Kategorie_Diskussion"], "Spezial", "Medium", ["%s_Dischbedutt", "$1_Diskussion"]],
			"sq": ["Diskutim", ["P\u00ebrdoruesi", "Perdoruesi"], ["P\u00ebrdoruesi_diskutim", "Perdoruesi_diskutim"], ["Skeda", "Figura"], ["Skeda_diskutim", "Figura_diskutim"], "MediaWiki", "MediaWiki_diskutim", "Stampa", "Stampa_diskutim", "Ndihm\u00eb", "Ndihm\u00eb_diskutim", ["Kategoria", "Kategori"], ["Kategoria_diskutim", "Kategori_Diskutim"], "Speciale", "Media", "%s_diskutim"],
			"no": ["Diskusjon", "Bruker", "Brukerdiskusjon", "Fil", "Fildiskusjon", "MediaWiki", "MediaWiki-diskusjon", "Mal", "Maldiskusjon", "Hjelp", "Hjelpdiskusjon", "Kategori", "Kategoridiskusjon", "Spesial", "Medium", "%s-diskusjon"],
			"ko": ["\ud1a0\ub860", "\uc0ac\uc6a9\uc790", "\uc0ac\uc6a9\uc790\ud1a0\ub860", ["\ud30c\uc77c", "\uadf8\ub9bc"], ["\ud30c\uc77c\ud1a0\ub860", "\ud30c\uc77c\ud1a0\ub860"], "\ubbf8\ub514\uc5b4\uc704\ud0a4", ["\ubbf8\ub514\uc5b4\uc704\ud0a4\ud1a0\ub860", "MediaWiki\ud1a0\ub860"], "\ud2c0", "\ud2c0\ud1a0\ub860", "\ub3c4\uc6c0\ub9d0", "\ub3c4\uc6c0\ub9d0\ud1a0\ub860", "\ubd84\ub958", "\ubd84\ub958\ud1a0\ub860", ["\ud2b9\uc218\uae30\ub2a5", "\ud2b9"], "\ubbf8\ub514\uc5b4", "%s\ud1a0\ub860"],
			"kn": ["\u0c9a\u0cb0\u0ccd\u0c9a\u0cc6\u0caa\u0cc1\u0c9f", "\u0cb8\u0ca6\u0cb8\u0ccd\u0caf", "\u0cb8\u0ca6\u0cb8\u0ccd\u0caf\u0cb0_\u0c9a\u0cb0\u0ccd\u0c9a\u0cc6\u0caa\u0cc1\u0c9f", "\u0c9a\u0cbf\u0ca4\u0ccd\u0cb0", "\u0c9a\u0cbf\u0ca4\u0ccd\u0cb0_\u0c9a\u0cb0\u0ccd\u0c9a\u0cc6\u0caa\u0cc1\u0c9f", "\u0cae\u0cc0\u0ca1\u0cbf\u0caf\u0cb5\u0cbf\u0c95\u0cbf", "\u0cae\u0cc0\u0ca1\u0cc0\u0caf\u0cb5\u0cbf\u0c95\u0cbf_\u0c9a\u0cb0\u0ccd\u0c9a\u0cc6", "\u0c9f\u0cc6\u0c82\u0caa\u0ccd\u0cb2\u0cc7\u0c9f\u0cc1", "\u0c9f\u0cc6\u0c82\u0caa\u0ccd\u0cb2\u0cc7\u0c9f\u0cc1_\u0c9a\u0cb0\u0ccd\u0c9a\u0cc6", "\u0cb8\u0cb9\u0cbe\u0caf", "\u0cb8\u0cb9\u0cbe\u0caf_\u0c9a\u0cb0\u0ccd\u0c9a\u0cc6", "\u0cb5\u0cb0\u0ccd\u0c97", "\u0cb5\u0cb0\u0ccd\u0c97_\u0c9a\u0cb0\u0ccd\u0c9a\u0cc6", "\u0cb5\u0cbf\u0cb6\u0cc7\u0cb7", "\u0cae\u0cc0\u0ca1\u0cbf\u0caf", "%s_\u0c9a\u0cb0\u0ccd\u0c9a\u0cc6"],
			"km": [["\u1780\u17b6\u179a\u1796\u17b7\u1797\u17b6\u1780\u17d2\u179f\u17b6", "\u1796\u17b7\u1797\u17b6\u1780\u17d2\u179f\u17b6"], "\u17a2\u17d2\u1793\u1780\u1794\u17d2\u179a\u17be\u1794\u17d2\u179a\u17b6\u179f\u17cb", ["\u1780\u17b6\u179a\u1796\u17b7\u1797\u17b6\u1780\u17d2\u179f\u17b6\u179a\u1794\u179f\u17cb\u17a2\u17d2\u1793\u1780\u1794\u17d2\u179a\u17be\u1794\u17d2\u179a\u17b6\u179f\u17cb", "\u17a2\u17d2\u1793\u1780\u1794\u17d2\u179a\u17be\u1794\u17d2\u179a\u17b6\u179f\u17cb-\u1796\u17b7\u1797\u17b6\u1780\u17d2\u179f\u17b6"], ["\u17af\u1780\u179f\u17b6\u179a", "\u179a\u17bc\u1794\u1797\u17b6\u1796"], ["\u1780\u17b6\u179a\u1796\u17b7\u1797\u17b6\u1780\u17d2\u179f\u17b6\u17a2\u17c6\u1796\u17b8\u17af\u1780\u179f\u17b6\u179a", "\u179a\u17bc\u1794\u1797\u17b6\u1796-\u1796\u17b7\u1797\u17b6\u1780\u17d2\u179f\u17b6", "\u1780\u17b6\u179a\u1796\u17b7\u1797\u17b6\u1780\u17d2\u179f\u17b6\u17a2\u17c6\u1796\u17b8\u179a\u17bc\u1794\u1797\u17b6\u1796"], ["\u1798\u17c1\u178c\u17b6\u179c\u17b7\u1782\u17b8", "\u1798\u17b8\u178c\u17b6\u179c\u17b7\u1782\u17b8"], ["\u1780\u17b6\u179a\u1796\u17b7\u1797\u17b6\u1780\u17d2\u179f\u17b6\u17a2\u17c6\u1796\u17b8\u1798\u17c1\u178c\u17b6\u179c\u17b7\u1782\u17b8", "\u1798\u17b8\u178c\u17b6\u179c\u17b7\u1782\u17b8-\u1796\u17b7\u1797\u17b6\u1780\u17d2\u179f\u17b6"], "\u1791\u17c6\u1796\u17d0\u179a\u1782\u17c6\u179a\u17bc", ["\u1780\u17b6\u179a\u1796\u17b7\u1797\u17b6\u1780\u17d2\u179f\u17b6\u17a2\u17c6\u1796\u17b8\u1791\u17c6\u1796\u17d0\u179a\u1782\u17c6\u179a\u17bc", "\u1791\u17c6\u1796\u17d0\u179a\u1782\u17c6\u179a\u17bc-\u1796\u17b7\u1797\u17b6\u1780\u17d2\u179f\u17b6"], "\u1787\u17c6\u1793\u17bd\u1799", ["\u1780\u17b6\u179a\u1796\u17b7\u1797\u17b6\u1780\u17d2\u179f\u17b6\u17a2\u17c6\u1796\u17b8\u1787\u17c6\u1793\u17bd\u1799", "\u1787\u17c6\u1793\u17bd\u1799-\u1796\u17b7\u1797\u17b6\u1780\u17d2\u179f\u17b6"], ["\u1785\u17c6\u178e\u17b6\u178f\u17cb\u1790\u17d2\u1793\u17b6\u1780\u17cb\u1780\u17d2\u179a\u17bb\u1798", "\u1785\u17c6\u178e\u17b6\u178f\u17cb\u1780\u17d2\u179a\u17bb\u1798", "\u1785\u17c6\u1793\u17b6\u178f\u17cb\u1790\u17d2\u1793\u17b6\u1780\u17cb\u1780\u17d2\u179a\u17bb\u1798", "\u1785\u17c6\u178e\u17b6\u178f\u17cb\u1790\u17d2\u1793\u17b6\u1780\u17cb\u1780\u17d2\u179a\u17bb\u1798"], ["\u1780\u17b6\u179a\u1796\u17b7\u1797\u17b6\u1780\u17d2\u179f\u17b6\u17a2\u17c6\u1796\u17b8\u1785\u17c6\u178e\u17b6\u178f\u17cb\u1790\u17d2\u1793\u17b6\u1780\u17cb\u1780\u17d2\u179a\u17bb\u1798", "\u1780\u17b6\u179a\u1796\u17b7\u1797\u17b6\u1780\u17d2\u179f\u17b6\u17a2\u17c6\u1796\u17b8\u1785\u17c6\u178e\u17b6\u178f\u17cb\u1790\u17d2\u1793\u17b6\u1780\u17cb\u1780\u17d2\u179a\u17bb\u1798", "\u1785\u17c6\u178e\u17b6\u178f\u17cb\u1780\u17d2\u179a\u17bb\u1798-\u1796\u17b7\u1797\u17b6\u1780\u17d2\u179f\u17b6", "\u1780\u17b6\u179a\u1796\u17b7\u1797\u17b6\u1780\u17d2\u179f\u17b6\u17a2\u17c6\u1796\u17b8\u1785\u17c6\u1793\u17b6\u178f\u17cb\u1790\u17d2\u1793\u17b6\u1780\u17cb\u1780\u17d2\u179a\u17bb\u1798"], "\u1796\u17b7\u179f\u17c1\u179f", ["\u1798\u17c1\u178c\u17b6", "\u1798\u17b8\u178c\u17b6"], ["\u1780\u17b6\u179a\u1796\u17b7\u1797\u17b6\u1780\u17d2\u179f\u17b6\u17a2\u17c6\u1796\u17b8%s", "$1_\u1796\u17b7\u1797\u17b6\u1780\u17d2\u179f"]],
			"bcc": [["\u06af\u067e", "\u0628\u062d\u062b"], ["\u06a9\u0627\u0631\u0628\u0631", "\u06a9\u0627\u0631\u0628\u0631"], ["\u06af\u067e_\u06a9\u0627\u0631\u0628\u0631", "\u0628\u062d\u062b_\u06a9\u0627\u0631\u0628\u0631"], ["\u0639\u06a9\u0633", "\u062a\u0635\u0648\u06cc\u0631"], ["\u06af\u067e_\u0639\u06a9\u0633", "\u0628\u062d\u062b_\u062a\u0635\u0648\u06cc\u0631"], ["\u0645\u062f\u06cc\u0627\u0648\u06cc\u06a9\u06cc", "\u0645\u062f\u06cc\u0627\u0648\u06cc\u06a9\u06cc"], ["\u06af\u067e_\u0645\u062f\u06cc\u0627\u0648\u06cc\u06a9\u06cc", "\u0628\u062d\u062b_\u0645\u062f\u06cc\u0627\u0648\u06cc\u06a9\u06cc"], ["\u062a\u0645\u067e\u0644\u062a", "\u0627\u0644\u06af\u0648"], ["\u06af\u067e_\u062a\u0645\u067e\u0644\u062a", "\u0628\u062d\u062b_\u0627\u0644\u06af\u0648"], ["\u06a9\u0645\u06a9", "\u0631\u0627\u0647\u0646\u0645\u0627"], ["\u06af\u067e_\u0631\u0627\u0647\u0646\u0645\u0627", "\u0628\u062d\u062b_\u0631\u0627\u0647\u0646\u0645\u0627"], ["\u062f\u0633\u062a\u0647", "\u0631\u062f\u0647"], ["\u06af\u067e_\u062f\u0633\u062a\u0647", "\u0628\u062d\u062b_\u0631\u062f\u0647"], ["\u062d\u0627\u0635", "\u0648\u06cc\u0698\u0647"], ["\u0645\u062f\u06cc\u0627", "\u0645\u062f\u06cc\u0627"], ["\u06af\u067e_%s", "\u0628\u062d\u062b_$1"]],
			"sk": [["Diskusia", "Koment\u00e1r"], "Redaktor", ["Diskusia_s_redaktorom", "Koment\u00e1r_k_redaktorovi"], ["S\u00fabor", "Obr\u00e1zok"], ["Diskusia_k_s\u00faboru", "Koment\u00e1r_k_obr\u00e1zku", "Diskusia_k_obr\u00e1zku"], "MediaWiki", ["Diskusia_k_MediaWiki", "Koment\u00e1r_k_MediaWiki"], "\u0160abl\u00f3na", "Diskusia_k_\u0161abl\u00f3ne", "Pomoc", "Diskusia_k_pomoci", "Kateg\u00f3ria", "Diskusia_ku_kateg\u00f3rii", "\u0160peci\u00e1lne", "M\u00e9di\u00e1", ["Diskusia_k_{{GRAMMAR:dat\u00edv|%s}}", "Koment\u00e1r_k_Wikip\u00e9dii"]],
			"ext": ["Talk", "User", "User_talk", ["File", "Image"], ["File_talk", "Image talk"], "MediaWiki", "MediaWiki_talk", "Prantilla", "Template_talk", "Help", "Help_talk", "Category", "Category_talk", "Special", "Media", "%s_talk"],
			"sh": ["Razgovor", "Korisnik", "Razgovor_sa_korisnikom", "Datoteka", "Razgovor_o_datoteci", "MediaWiki", "Mediawiki_razgovor", "\u0160ablon", "Razgovor_o_\u0161ablonu", "Pomo\u0107", "Razgovor_o_pomo\u0107i", "Kategorija", "Razgovor_o_kategoriji", "Posebno", "Media", "Razgovor_o_%s"],
			"kw": [["Keskows", "Kescows", "Cows"], "Devnydhyer", ["Keskows_Devnydhyer", "Kescows_Devnydhyer", "Cows_Devnydhyer"], "Restren", ["Keskows_Restren", "Cows_Restren", "Kescows_Restren"], "MediaWiki", ["Keskows_MediaWiki", "Kescows_MediaWiki", "Cows_MediaWiki"], ["Skantlyn", "Scantlyn"], ["Keskows_Skantlyn", "Cows_Scantlyn", "Kescows_Skantlyn"], "Gweres", ["Keskows_Gweres", "Kescows_Gweres", "Cows_Gweres"], ["Klass", "Class"], ["Keskows_Klass", "Kescows_Class", "Cows_Class"], ["Arbednek", "Arbennek"], "Media", ["Keskows_%s", "Kescows_$1", "Cows_$1"]],
			"kv": [["\u0421\u0451\u0440\u043d\u0438\u0442\u0430\u043di\u043d", "\u041e\u0431\u0441\u0443\u0436\u0434\u0435\u043d\u0438\u0435"], ["\u041f\u044b\u0440\u044b\u0441\u044c", "\u0423\u0447\u0430\u0441\u0442\u043d\u0438\u043a"], ["\u041f\u044b\u0440\u044b\u0441\u044c\u043a\u04e7\u0434_\u0441\u0451\u0440\u043d\u0438\u0442\u0430\u043di\u043d", "\u041e\u0431\u0441\u0443\u0436\u0434\u0435\u043d\u0438\u0435_\u0443\u0447\u0430\u0441\u0442\u043d\u0438\u043a\u0430"], ["\u0424\u0430\u0439\u043b", "\u0424\u0430\u0439\u043b"], ["\u0424\u0430\u0439\u043b_\u0434\u043e\u043d\u044a\u044f\u043b\u04e7\u043c", "\u041e\u0431\u0441\u0443\u0436\u0434\u0435\u043d\u0438\u0435_\u0444\u0430\u0439\u043b\u0430"], "\u041c\u0435\u0434\u0438\u0430\u0412\u0438\u043a\u0438", ["\u041c\u0435\u0434\u0438\u0430\u0412\u0438\u043a\u0438_\u0434\u043e\u043d\u044a\u044f\u043b\u04e7\u043c", "\u041e\u0431\u0441\u0443\u0436\u0434\u0435\u043d\u0438\u0435_MediaWiki"], ["\u0428\u0430\u0431\u043b\u043e\u043d", "\u0428\u0430\u0431\u043b\u043e\u043d"], ["\u0428\u0430\u0431\u043b\u043e\u043d_\u0434\u043e\u043d\u044a\u044f\u043b\u04e7\u043c", "\u041e\u0431\u0441\u0443\u0436\u0434\u0435\u043d\u0438\u0435_\u0448\u0430\u0431\u043b\u043e\u043d\u0430"], "\u0421\u043f\u0440\u0430\u0432\u043a\u0430", "\u041e\u0431\u0441\u0443\u0436\u0434\u0435\u043d\u0438\u0435_\u0441\u043f\u0440\u0430\u0432\u043a\u0438", "\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044f", "\u041e\u0431\u0441\u0443\u0436\u0434\u0435\u043d\u0438\u0435_\u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u0438", ["\u041e\u0442\u0441\u0430\u0441\u044f\u043d", "\u0421\u043b\u0443\u0436\u0435\u0431\u043d\u0430\u044f"], "\u041c\u0435\u0434\u0438\u0430", "\u041e\u0431\u0441\u0443\u0436\u0434\u0435\u043d\u0438\u0435_{{GRAMMAR:genitive|$1}}"],
			"ku": ["Got\u00fbb\u00eaj", "Bikarh\u00eaner", "Got\u00fbb\u00eaja_bikarh\u00eaner", "W\u00eane", "Got\u00fbb\u00eaja_w\u00eaney\u00ee", "MediaWiki", "Got\u00fbb\u00eaja_MediaWiki", "\u015eablon", "Got\u00fbb\u00eaja_\u015fablon\u00ea", "Al\u00eekar\u00ee", "Got\u00fbb\u00eaja_al\u00eekariy\u00ea", "Kategor\u00ee", "Got\u00fbb\u00eaja_kategoriy\u00ea", "Taybet", "Medya", "%s_got\u00fbb\u00eaj"],
			"egl": ["Discussione", "Utente", "Discussioni_utente", "File", "Discussioni_file", "MediaWiki", "Discussioni_MediaWiki", "Template", "Discussioni_template", "Aiuto", "Discussioni_aiuto", "Categoria", "Discussioni_categoria", "Speciale", "Media", "Discussioni_%s"],
			"sc": [["Cuntierra", "Conti\u00e8ndha"], ["Usu\u00e0riu", "Utente"], ["Cuntierra_usu\u00e0riu", "Utente_discussioni"], ["File", "Imm\u00e0gini"], ["Cuntierra_file", "Imm\u00e0gini_conti\u00e8ndha"], "MediaWiki", "Cuntierra_MediaWiki", "Template", "Cuntierra_template", "Agiudu", "Cuntierra_agiudu", "Categoria", "Cuntierra_categoria", ["Ispetziale", "Speciale"], "Media", ["Cuntierra_%s", "$1_discussioni"]],
			"ky": ["\u0411\u0430\u0430\u0440\u043b\u0430\u0448\u0443\u0443", "\u041a\u043e\u043b\u0434\u043e\u043d\u0443\u0443\u0447\u0443", "\u041a\u043e\u043b\u0434\u043e\u043d\u0443\u0443\u0447\u0443\u043d\u0443\u043d_\u0431\u0430\u0430\u0440\u043b\u0430\u0448\u0443\u0443\u043b\u0430\u0440\u044b", "\u0424\u0430\u0439\u043b", ["File_talk", "Image talk"], "MediaWiki", "MediaWiki_talk", "\u041a\u0430\u043b\u044b\u043f", "Template_talk", "\u0416\u0430\u0440\u0434\u0430\u043c", "Help_talk", "\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044f", "Category_talk", "\u0410\u0442\u0430\u0439\u044b\u043d", "\u041c\u0435\u0434\u0438\u0430", "%s_\u0431\u0430\u0430\u0440\u043b\u0430\u0448\u0443\u0443"],
			"sg": ["Discussion", "Utilisateur", "Discussion_utilisateur", "Fichier", "Discussion_fichier", "MediaWiki", "Discussion_MediaWiki", "Mod\u00e8le", "Discussion_mod\u00e8le", "Aide", "Discussion_aide", "Cat\u00e9gorie", "Discussion_cat\u00e9gorie", "Sp\u00e9cial", "M\u00e9dia", "Discussion_%s"],
			"nb": ["Diskusjon", "Bruker", "Brukerdiskusjon", ["Fil", "Bilde"], ["Fildiskusjon", "Bildediskusjon"], "MediaWiki", "MediaWiki-diskusjon", "Mal", "Maldiskusjon", "Hjelp", "Hjelpdiskusjon", "Kategori", "Kategoridiskusjon", "Spesial", "Medium", "%s-diskusjon"],
			"se": ["S\u00e1gastallan", "Geavaheaddji", "Geavaheaddjes\u00e1gastallan", "Fiila", "Fiilas\u00e1gastallan", "MediaWiki", "MediaWiki-s\u00e1gastallan", "M\u00e1lle", "M\u00e1lles\u00e1gastallan", "Veahkki", "Veahkkes\u00e1gastallan", "Kategoriija", "Kategoriijas\u00e1gastallan", ["Erenoam\u00e1\u0161", "Doaimmat"], "Media", "%s-s\u00e1gastallan"],
			"sd": ["\u0628\u062d\u062b", "\u064a\u0648\u0632\u0631", "\u064a\u0648\u0632\u0631_\u0628\u062d\u062b", "\u0639\u06aa\u0633", "\u0639\u06aa\u0633_\u0628\u062d\u062b", "\u0630\u0631\u064a\u0639\u0627\u062a_\u0648\u06aa\u064a", "\u0630\u0631\u064a\u0639\u0627\u062a_\u0648\u06aa\u064a_\u0628\u062d\u062b", "\u0633\u0627\u0646\u0686\u0648", "\u0633\u0646\u0686\u0648_\u0628\u062d\u062b", "\u0645\u062f\u062f", "\u0645\u062f\u062f_\u0628\u062d\u062b", "\u0632\u0645\u0631\u0648", "\u0632\u0645\u0631\u0648_\u0628\u062d\u062b", "\u062e\u0627\u0635", "\u0630\u0631\u064a\u0639\u0627\u062a", "%s_\u0628\u062d\u062b"]
	}

/*
 * InstaView - a Mediawiki to HTML converter in JavaScript
 * Version 0.6.1
 * Copyright (C) Pedro Fayolle 2005-2006
 * http://en.wikipedia.org/wiki/User:Pilaf
 * Distributed under the BSD license
 *
 * Changelog:
 *
 * 0.6.1
 * - Fixed problem caused by \r characters
 * - Improved inline formatting parser
 *
 * 0.6
 * - Changed name to InstaView
 * - Some major code reorganizations and factored out some common functions
 * - Handled conversion of relative links (i.e. [[/foo]])
 * - Fixed misrendering of adjacent definition list items
 * - Fixed bug in table headings handling
 * - Changed date format in signatures to reflect Mediawiki's
 * - Fixed handling of [[:Image:...]]
 * - Updated MD5 function (hopefully it will work with UTF-8)
 * - Fixed bug in handling of links inside images
 *
 * To do:
 * - Better support for <math>
 * - Full support for <nowiki>
 * - Parser-based (as opposed to RegExp-based) inline wikicode handling (make it one-pass and bullet-proof)
 * - Support for templates (through AJAX)
 * - Support for coloured links (AJAX)
 */


var InstaView = {}

// options
InstaView.conf =
{
	user: {},
	
	wiki: {
		lang: 'en',
		interwiki: 'ab|aa|af|ak|sq|als|am|ang|ar|an|arc|hy|roa-rup|as|ast|av|ay|az|bm|ba|eu|be|bn|bh|bi|bs|br|bg|my|ca|ch|ce|chr|chy|ny|zh|zh-tw|zh-cn|cho|cv|kw|co|cr|hr|cs|da|dv|nl|dz|en|eo|et|ee|fo|fj|fi|fr|fy|ff|gl|ka|de|got|el|kl|gn|gu|ht|ha|haw|he|hz|hi|ho|hu|is|io|ig|id|ia|ie|iu|ik|ga|it|ja|jv|kn|kr|csb|ks|kk|km|ki|rw|rn|tlh|kv|kg|ko|kj|ku|ky|lo|la|lv|li|ln|lt|jbo|nds|lg|lb|mk|mg|ms|ml|mt|gv|mi|minnan|mr|mh|zh-min-nan|mo|mn|mus|nah|na|nv|ne|se|no|nn|oc|or|om|pi|fa|pl|pt|pa|ps|qu|ro|rm|ru|sm|sg|sa|sc|gd|sr|sh|st|tn|sn|scn|simple|sd|si|sk|sl|so|st|es|su|sw|ss|sv|tl|ty|tg|ta|tt|te|th|bo|ti|tpi|to|tokipona|ts|tum|tr|tk|tw|uk|ur|ug|uz|ve|vi|vo|wa|cy|wo|xh|ii|yi|yo|za|zu',
		default_thumb_width: 180
	},
	
	paths: {
		base_href: 'http://en.wikipedia.org/',
		articles: 'http://en.wikipedia.org/wiki/',
		math: 'http://en.wikipedia.org/math/',
		images: '',
		images_fallback: 'http://upload.wikimedia.org/wikipedia/commons/',
		magnify_icon: 'skins/common/images/magnify-clip.png'
	},
	
	locale: {
		user: 'User',
		image: 'Image',
		category: 'Category',
		months: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
	}
};

// options with default values or backreferences
(function(conf) {
    var user = conf.user, locale = conf.locale,
        paths = conf.paths, wiki = conf.wiki;
    user.name = user.name || 'Wikipedian'
    user.signature = '[['+locale.user+':'+user.name+'|'+user.name+']]'
    if (typeof location === 'object') { paths.base_href = location; }
    paths.images = 'http://upload.wikimedia.org/wikipedia/' + wiki.lang + '/'
    // generate list of interwiki link prefixes from keys in namespace_langs
    var langs = [], l;
    for (l in namespace_langs) {
        if (Object.prototype.hasOwnProperty.call(namespace_langs, l)) {
            langs.push(l);
        }
    }
    wiki.interwiki = langs.join('|');
})(InstaView.conf);

// define constants
InstaView.BLOCK_IMAGE = new RegExp('^\\[\\['+InstaView.conf.locale.image+':.*?\\|.*?(?:frame|thumbnail|thumb|none|right|left|center)', 'i');

InstaView.dump = function(from, to)
{
	if (typeof from == 'string') from = document.getElementById(from)
	if (typeof to == 'string') to = document.getElementById(to)
	to.innerHTML = this.convert(from.value)
}

InstaView.convert = function(wiki)
{
	var 	ll = (typeof wiki == 'string')? wiki.replace(/\r/g,'').split(/\n/): wiki, // lines of wikicode
		o='',	// output
		p=0,	// para flag
		$r	// result of passing a regexp to $()
	
	// some shorthands
	function remain() { return ll.length }
	function sh() { return ll.shift() } // shift
	function ps(s) { o+=s } // push
	
	function f() // similar to C's printf, uses ? as placeholders, ?? to escape question marks
	{
		var i=1,a=arguments,f=a[0],o='',c,p
		for (;i<a.length; i++) if ((p=f.indexOf('?'))+1) {
			// allow character escaping
			i -= c=f.charAt(p+1)=='?'?1:0
			o += f.substring(0,p)+(c?'?':a[i])
			f=f.substr(p+1+c)
		} else break;
		return o+f
	}
	
	function html_entities(s) { return s.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;") }
	
	function max(a,b) { return (a>b)?a:b }
	function min(a,b) { return (a<b)?a:b }
	
	// return the first non matching character position between two strings
	function str_imatch(a, b)
	{
		for (var i=0, l=min(a.length, b.length); i<l; i++) if (a.charAt(i)!=b.charAt(i)) break
		return i
	}
	
	// compare current line against a string or regexp
	// if passed a string it will compare only the first string.length characters
	// if passed a regexp the result is stored in $r
	function $(c) { return (typeof c == 'string') ? (ll[0].substr(0,c.length)==c) : ($r = ll[0].match(c)) }
	
	function $$(c) { return ll[0]==c } // compare current line against a string
	function _(p) { return ll[0].charAt(p) } // return char at pos p
	
	function endl(s) { ps(s); sh() }
	
	function parse_list()
	{
		var prev='';
		
		while (remain() && $(/^([*#:;]+)(.*)$/)) {
			
			var l_match = $r
			
			sh()
			
			var ipos = str_imatch(prev, l_match[1])
			
			// close uncontinued lists
			for (var i=prev.length-1; i >= ipos; i--) {
				
				var pi = prev.charAt(i)
				
				if (pi=='*') ps('</ul>')
				else if (pi=='#') ps('</ol>')
				// close a dl only if the new item is not a dl item (:, ; or empty)
				else switch (l_match[1].charAt(i)) { case'':case'*':case'#': ps('</dl>') }
			}
			
			// open new lists
			for (var i=ipos; i<l_match[1].length; i++) {
				
				var li = l_match[1].charAt(i)
				
				if (li=='*') ps('<ul>')
				else if (li=='#') ps('<ol>')
				// open a new dl only if the prev item is not a dl item (:, ; or empty)
				else switch(prev.charAt(i)) { case'':case'*':case'#': ps('<dl>') }
			}
			
			switch (l_match[1].charAt(l_match[1].length-1)) {
			
				case '*': case '#':
					ps('<li>' + parse_inline_nowiki(l_match[2])); break
					
				case ';':
					ps('<dt>')
					
					var dt_match
					
					// handle ;dt :dd format
					if (dt_match = l_match[2].match(/(.*?) (:.*?)$/)) {
						
						ps(parse_inline_nowiki(dt_match[1]))
						ll.unshift(dt_match[2])
						
					} else ps(parse_inline_nowiki(l_match[2]))
					
					break
					
				case ':':
					ps('<dd>' + parse_inline_nowiki(l_match[2]))
			}
			
			prev=l_match[1]
		}
		
		// close remaining lists
		for (var i=prev.length-1; i>=0; i--)
			ps(f('</?>', (prev.charAt(i)=='*')? 'ul': ((prev.charAt(i)=='#')? 'ol': 'dl')))
	}
	
	function parse_table()
	{
		endl(f('<table?>', $(/^\{\|( .*)$/)? $r[1]: ''))
		
		for (;remain();) if ($('|')) switch (_(1)) {
			case '}': endl('</table>'); return
			case '-': endl(f('<tr ?>', $(/\|-*(.*)/)[1])); break
			default: parse_table_data()
		}
		else if ($('!')) parse_table_data()
		else sh()
	}
	
	function parse_table_data()
	{
		var td_line, match_i
		
		// 1: "|+", '|' or '+'
		// 2: ??
		// 3: attributes ??
		// TODO: finish commenting this regexp
		var td_match = sh().match(/^(\|\+|\||!)((?:([^[|]*?)\|(?!\|))?(.*))$/)
		
		if (td_match[1] == '|+') ps('<caption');
		else ps('<t' + ((td_match[1]=='|')?'d':'h'))
		
		if (typeof td_match[3] != 'undefined') {
			
			ps(' ' + td_match[3])
			match_i = 4
			
		} else match_i = 2
		
		ps('>')
		
		if (td_match[1] != '|+') {
			
			// use || or !! as a cell separator depending on context
			// NOTE: when split() is passed a regexp make sure to use non-capturing brackets
			td_line = td_match[match_i].split((td_match[1] == '|')? '||': /(?:\|\||!!)/)
			
			ps(parse_inline_nowiki(td_line.shift()))
			
			while (td_line.length) ll.unshift(td_match[1] + td_line.pop())
			
		} else ps(td_match[match_i])
		
		var tc = 0, td = []
		
		for (;remain(); td.push(sh()))
		if ($('|')) {
			if (!tc) break // we're at the outer-most level (no nested tables), skip to td parse
			else if (_(1)=='}') tc--
		}
		else if (!tc && $('!')) break
		else if ($('{|')) tc++
		
		if (td.length) ps(InstaView.convert(td))
	}
	
	function parse_pre()
	{
		ps('<pre>')
		do endl(parse_inline_nowiki(ll[0].substring(1)) + "\n"); while (remain() && $(' '))
		ps('</pre>')
	}
	
	function parse_block_image()
	{
		ps(parse_image(sh()))
	}

	function parse_image(str)
	{
		// get what's in between "[[Image:" and "]]"
		var tag = str.substring(InstaView.conf.locale.image.length + 3, str.length - 2);
		
		var width;
		var attr = [], filename, caption = '';
		var thumb=0, frame=0, center=0;
		var align='';
		
		if (tag.match(/\|/)) {
			// manage nested links
			var nesting = 0;
			var last_attr;
			for (var i = tag.length-1; i > 0; i--) {
				if (tag.charAt(i) == '|' && !nesting) {
					last_attr = tag.substr(i+1);
					tag = tag.substring(0, i);
					break;
				} else switch (tag.substr(i-1, 2)) {
					case ']]':
						nesting++;
						i--;
						break;
					case '[[':
						nesting--;
						i--;
				}
			}
			
			attr = tag.split(/\s*\|\s*/);
			attr.push(last_attr);
			filename = attr.shift();
			
			var w_match;
			
			for (;attr.length; attr.shift())
			if (w_match = attr[0].match(/^(\d*)px$/)) width = w_match[1]
			else switch(attr[0]) {
				case 'thumb':
				case 'thumbnail':
					thumb=true;
				case 'frame':
					frame=true;
					break;
				case 'none':
				case 'right':
				case 'left':
					center=false;
					align=attr[0];
					break;
				case 'center':
					center=true;
					align='none';
					break;
				default:
					if (attr.length == 1) caption = attr[0];
			}
			
		} else filename = tag;
		
		
		var o='';
		
		if (frame) {
		
			if (align=='') align = 'right';
			
			o += f("<div class='thumb t?'>", align);
			
			if (thumb) {
				if (!width) width = InstaView.conf.wiki.default_thumb_width;
				
				o += f("<div style='width:?px;'>?", 2+width*1, make_image(filename, caption, width)) +
					f("<div class='thumbcaption'><div class='magnify' style='float:right'><a href='?' class='internal' title='Enlarge'><img src='?'></a></div>?</div>",
						InstaView.conf.paths.articles + InstaView.conf.locale.image + ':' + filename,
						InstaView.conf.paths.magnify_icon,
						parse_inline_nowiki(caption)
					)
			} else {
				o += '<div>' + make_image(filename, caption) + f("<div class='thumbcaption'>?</div>", parse_inline_nowiki(caption))
			}
			
			o += '</div></div>';
			
		} else if (align != '') {
			o += f("<div class='float?'><span>?</span></div>", align, make_image(filename, caption, width));
		} else {
			return make_image(filename, caption, width);
		}
		
		return center? f("<div class='center'>?</div>", o): o;
	}
	
	function parse_inline_nowiki(str)
	{
		var start, lastend=0
		var substart=0, nestlev=0, open, close, subloop;
		var html='';
		
		while (-1 != (start = str.indexOf('<nowiki>', substart))) {
			html += parse_inline_wiki(str.substring(lastend, start));
			start += 8;
			substart = start;
			subloop = true;
			do {
				open = str.indexOf('<nowiki>', substart);
				close = str.indexOf('</nowiki>', substart);
				if (close<=open || open==-1) {
					if (close==-1) {
						return html + html_entities(str.substr(start));
					}
					substart = close+9;
					if (nestlev) {
						nestlev--;
					} else {
						lastend = substart;
						html += html_entities(str.substring(start, lastend-9));
						subloop = false;
					}
				} else {
					substart = open+8;
					nestlev++;
				}
			} while (subloop)
		}
		
		return html + parse_inline_wiki(str.substr(lastend));
	}
	
	function make_image(filename, caption, width)
	{
		// uppercase first letter in file name
		filename = filename.charAt(0).toUpperCase() + filename.substr(1);
		// replace spaces with underscores
		filename = filename.replace(/ /g, '_');
		
		caption = strip_inline_wiki(caption);
		
		var md5 = hex_md5(filename);
		
		var source = md5.charAt(0) + '/' + md5.substr(0,2) + '/' + filename;
		
		if (width) width = "width='" + width + "px'";
		
		var img = f("<img onerror=\"this.onerror=null;this.src='?'\" src='?' ? ?>", InstaView.conf.paths.images_fallback + source, InstaView.conf.paths.images + source, (caption!='')? "alt='" + caption + "'" : '', width);
		
		return f("<a class='image' ? href='?'>?</a>", (caption!='')? "title='" + caption + "'" : '', InstaView.conf.paths.articles + InstaView.conf.locale.image + ':' + filename, img);
	}
	
	function parse_inline_images(str)
	{
		var start, substart=0, nestlev=0;
		var loop, close, open, wiki, html;
		
		while (-1 != (start=str.indexOf('[[', substart))) {
			if(str.substr(start+2).match(RegExp('^' + InstaView.conf.locale.image + ':','i'))) {
				loop=true;
				substart=start;
				do {
					substart+=2;
					close=str.indexOf(']]',substart);
					open=str.indexOf('[[',substart);
					if (close<=open||open==-1) {
						if (close==-1) return str;
						substart=close;
						if (nestlev) {
							nestlev--;
						} else {
							wiki=str.substring(start,close+2);
							html=parse_image(wiki);
							str=str.replace(wiki,html);
							substart=start+html.length;
							loop=false;
						}
					} else {
						substart=open;
						nestlev++;
					}
				} while (loop)
				
			} else break;
		}
		
		return str;
	}
	
	// the output of this function doesn't respect the FILO structure of HTML
	// but since most browsers can handle it I'll save myself the hassle
	function parse_inline_formatting(str)
	{
		var em,st,i,li,o='';
		while ((i=str.indexOf("''",li))+1) {
			o += str.substring(li,i);
			li=i+2;
			if (str.charAt(i+2)=="'") {
				li++;
				st=!st;
				o+=st?'<strong>':'</strong>';
			} else {
				em=!em;
				o+=em?'<em>':'</em>';
			}
		}
		return o+str.substr(li);
	}
	
	function parse_inline_wiki(str)
	{
		var aux_match;
		
		str = parse_inline_images(str);
		str = parse_inline_formatting(str);
		
		// math
		while (aux_match = str.match(/<(?:)math>(.*?)<\/math>/i)) {
			var math_md5 = hex_md5(aux_match[1]);
			str = str.replace(aux_match[0], f("<img src='?.png'>", InstaView.conf.paths.math+math_md5));
		}
		
		// Build a Mediawiki-formatted date string
		var date = new Date;
		var minutes = date.getUTCMinutes();
		if (minutes < 10) minutes = '0' + minutes;
		var date = f("?:?, ? ? ? (UTC)", date.getUTCHours(), minutes, date.getUTCDate(), InstaView.conf.locale.months[date.getUTCMonth()], date.getUTCFullYear());
		
		// text formatting
		return str.
			// signatures
			replace(/~{5}(?!~)/g, date).
			replace(/~{4}(?!~)/g, InstaView.conf.user.name+' '+date).
			replace(/~{3}(?!~)/g, InstaView.conf.user.name).
			
			// [[:Category:...]], [[:Image:...]], etc...
			replace(RegExp('\\[\\[:((?:'+InstaView.conf.locale.category+'|'+InstaView.conf.locale.image+'|'+InstaView.conf.wiki.interwiki+'):.*?)\\]\\]','gi'), "<a href='"+InstaView.conf.paths.articles+"$1'>$1</a>").
			replace(RegExp('\\[\\[(?:'+InstaView.conf.locale.category+'|'+InstaView.conf.wiki.interwiki+'):.*?\\]\\]','gi'),'').
			
			// [[/Relative links]]
			replace(/\[\[(\/[^|]*?)\]\]/g, f("<a href='?$1'>$1</a>", InstaView.conf.paths.base_href)).
			
			// [[/Replaced|Relative links]]
			replace(/\[\[(\/.*?)\|(.+?)\]\]/g, f("<a href='?$1'>$2</a>", InstaView.conf.paths.base_href)).
			
			// [[Common links]]
			replace(/\[\[([^|]*?)\]\](\w*)/g, f("<a href='?$1'>$1$2</a>", InstaView.conf.paths.articles)).
			
			// [[Replaced|Links]]
			replace(/\[\[(.*?)\|([^\]]+?)\]\](\w*)/g, f("<a href='?$1'>$2$3</a>", InstaView.conf.paths.articles)).
			
			// [[Stripped:Namespace|Namespace]]
			replace(/\[\[([^\]]*?:)?(.*?)( *\(.*?\))?\|\]\]/g, f("<a href='?$1$2$3'>$2</a>", InstaView.conf.paths.articles)).
			
			// External links
			replace(/\[(https?|news|ftp|mailto|gopher|irc):(\/*)([^\]]*?) (.*?)\]/g, "<a href='$1:$2$3'>$4</a>").
			replace(/\[http:\/\/(.*?)\]/g, "<a href='http://$1'>[#]</a>").
			replace(/\[(news|ftp|mailto|gopher|irc):(\/*)(.*?)\]/g, "<a href='$1:$2$3'>$1:$2$3</a>").
			replace(/(^| )(https?|news|ftp|mailto|gopher|irc):(\/*)([^ $]*)/g, "$1<a href='$2:$3$4'>$2:$3$4</a>").
			
			replace('__NOTOC__','').
			replace('__NOEDITSECTION__','');
	}
	
	function strip_inline_wiki(str)
	{
		return str
			.replace(/\[\[[^\]]*\|(.*?)\]\]/g,'$1')
			.replace(/\[\[(.*?)\]\]/g,'$1')
			.replace(/''(.*?)''/g,'$1');
	}
	
	// begin parsing
	for (;remain();) if ($(/^(={1,6})(.*)\1(.*)$/)) {
		p=0
		endl(f('<h?>?</h?>?', $r[1].length, parse_inline_nowiki($r[2]), $r[1].length, $r[3]))
		
	} else if ($(/^[*#:;]/)) {
		p=0
		parse_list()
		
	} else if ($(' ')) {
		p=0
		parse_pre()
		
	} else if ($('{|')) {
		p=0
		parse_table()
		
	} else if ($(/^----+$/)) {
		p=0
		endl('<hr>')
		
	} else if ($(InstaView.BLOCK_IMAGE)) {
		p=0
		parse_block_image()
		
	} else {
		
		// handle paragraphs
		if ($$('')) {
			if (p = (remain()>1 && ll[1]==(''))) endl('<p><br>')
		} else {
			if(!p) {
				ps('<p>')
				p=1
			}
			ps(parse_inline_nowiki(ll[0]) + ' ')
		}
		
		sh();
	}
	
	return o
}


/*
 * A JavaScript implementation of the RSA Data Security, Inc. MD5 Message
 * Digest Algorithm, as defined in RFC 1321.
 * Version 2.2-alpha Copyright (C) Paul Johnston 1999 - 2005
 * Other contributors: Greg Holt, Andrew Kepert, Ydnar, Lostinet
 * Distributed under the BSD License
 * See http://pajhome.org.uk/crypt/md5 for more info.
 */

/*
 * Configurable variables. You may need to tweak these to be compatible with
 * the server-side, but the defaults work in most cases.
 */
var hexcase = 0;   /* hex output format. 0 - lowercase; 1 - uppercase        */
var b64pad  = ""; /* base-64 pad character. "=" for strict RFC compliance   */

/*
 * These are the functions you'll usually want to call
 * They take string arguments and return either hex or base-64 encoded strings
 */
function hex_md5(s)    { return rstr2hex(rstr_md5(str2rstr_utf8(s))); }
function b64_md5(s)    { return rstr2b64(rstr_md5(str2rstr_utf8(s))); }
function any_md5(s, e) { return rstr2any(rstr_md5(str2rstr_utf8(s)), e); }
function hex_hmac_md5(k, d)
  { return rstr2hex(rstr_hmac_md5(str2rstr_utf8(k), str2rstr_utf8(d))); }
function b64_hmac_md5(k, d)
  { return rstr2b64(rstr_hmac_md5(str2rstr_utf8(k), str2rstr_utf8(d))); }
function any_hmac_md5(k, d, e)
  { return rstr2any(rstr_hmac_md5(str2rstr_utf8(k), str2rstr_utf8(d)), e); }

/*
 * Calculate the MD5 of a raw string
 */
function rstr_md5(s)
{
  return binl2rstr(binl_md5(rstr2binl(s), s.length * 8));
}

/*
 * Calculate the HMAC-MD5, of a key and some data (raw strings)
 */
function rstr_hmac_md5(key, data)
{
  var bkey = rstr2binl(key);
  if(bkey.length > 16) bkey = binl_md5(bkey, key.length * 8);

  var ipad = Array(16), opad = Array(16);
  for(var i = 0; i < 16; i++)
  {
    ipad[i] = bkey[i] ^ 0x36363636;
    opad[i] = bkey[i] ^ 0x5C5C5C5C;
  }

  var hash = binl_md5(ipad.concat(rstr2binl(data)), 512 + data.length * 8);
  return binl2rstr(binl_md5(opad.concat(hash), 512 + 128));
}

/*
 * Convert a raw string to a hex string
 */
function rstr2hex(input)
{
  var hex_tab = hexcase ? "0123456789ABCDEF" : "0123456789abcdef";
  var output = "";
  var x;
  for(var i = 0; i < input.length; i++)
  {
    x = input.charCodeAt(i);
    output += hex_tab.charAt((x >>> 4) & 0x0F)
           +  hex_tab.charAt( x        & 0x0F);
  }
  return output;
}

/*
 * Convert a raw string to a base-64 string
 */
function rstr2b64(input)
{
  var tab = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
  var output = "";
  var len = input.length;
  for(var i = 0; i < len; i += 3)
  {
    var triplet = (input.charCodeAt(i) << 16)
                | (i + 1 < len ? input.charCodeAt(i+1) << 8 : 0)
                | (i + 2 < len ? input.charCodeAt(i+2)      : 0);
    for(var j = 0; j < 4; j++)
    {
      if(i * 8 + j * 6 > input.length * 8) output += b64pad;
      else output += tab.charAt((triplet >>> 6*(3-j)) & 0x3F);
    }
  }
  return output;
}

/*
 * Convert a raw string to an arbitrary string encoding
 */
function rstr2any(input, encoding)
{
  var divisor = encoding.length;
  var remainders = Array();
  var i, q, x, quotient;

  /* Convert to an array of 16-bit big-endian values, forming the dividend */
  var dividend = Array(input.length / 2);
  for(i = 0; i < dividend.length; i++)
  {
    dividend[i] = (input.charCodeAt(i * 2) << 8) | input.charCodeAt(i * 2 + 1);
  }

  /*
   * Repeatedly perform a long division. The binary array forms the dividend,
   * the length of the encoding is the divisor. Once computed, the quotient
   * forms the dividend for the next step. We stop when the dividend is zero.
   * All remainders are stored for later use.
   */
  while(dividend.length > 0)
  {
    quotient = Array();
    x = 0;
    for(i = 0; i < dividend.length; i++)
    {
      x = (x << 16) + dividend[i];
      q = Math.floor(x / divisor);
      x -= q * divisor;
      if(quotient.length > 0 || q > 0)
        quotient[quotient.length] = q;
    }
    remainders[remainders.length] = x;
    dividend = quotient;
  }

  /* Convert the remainders to the output string */
  var output = "";
  for(i = remainders.length - 1; i >= 0; i--)
    output += encoding.charAt(remainders[i]);

  return output;
}

/*
 * Encode a string as utf-8.
 * For efficiency, this assumes the input is valid utf-16.
 */
function str2rstr_utf8(input)
{
  var output = "";
  var i = -1;
  var x, y;

  while(++i < input.length)
  {
    /* Decode utf-16 surrogate pairs */
    x = input.charCodeAt(i);
    y = i + 1 < input.length ? input.charCodeAt(i + 1) : 0;
    if(0xD800 <= x && x <= 0xDBFF && 0xDC00 <= y && y <= 0xDFFF)
    {
      x = 0x10000 + ((x & 0x03FF) << 10) + (y & 0x03FF);
      i++;
    }

    /* Encode output as utf-8 */
    if(x <= 0x7F)
      output += String.fromCharCode(x);
    else if(x <= 0x7FF)
      output += String.fromCharCode(0xC0 | ((x >>> 6 ) & 0x1F),
                                    0x80 | ( x         & 0x3F));
    else if(x <= 0xFFFF)
      output += String.fromCharCode(0xE0 | ((x >>> 12) & 0x0F),
                                    0x80 | ((x >>> 6 ) & 0x3F),
                                    0x80 | ( x         & 0x3F));
    else if(x <= 0x1FFFFF)
      output += String.fromCharCode(0xF0 | ((x >>> 18) & 0x07),
                                    0x80 | ((x >>> 12) & 0x3F),
                                    0x80 | ((x >>> 6 ) & 0x3F),
                                    0x80 | ( x         & 0x3F));
  }
  return output;
}

/*
 * Encode a string as utf-16
 */
function str2rstr_utf16le(input)
{
  var output = "";
  for(var i = 0; i < input.length; i++)
    output += String.fromCharCode( input.charCodeAt(i)        & 0xFF,
                                  (input.charCodeAt(i) >>> 8) & 0xFF);
  return output;
}

function str2rstr_utf16be(input)
{
  var output = "";
  for(var i = 0; i < input.length; i++)
    output += String.fromCharCode((input.charCodeAt(i) >>> 8) & 0xFF,
                                   input.charCodeAt(i)        & 0xFF);
  return output;
}

/*
 * Convert a raw string to an array of little-endian words
 * Characters >255 have their high-byte silently ignored.
 */
function rstr2binl(input)
{
  var output = Array(input.length >> 2);
  for(var i = 0; i < output.length; i++)
    output[i] = 0;
  for(var i = 0; i < input.length * 8; i += 8)
    output[i>>5] |= (input.charCodeAt(i / 8) & 0xFF) << (i%32);
  return output;
}

/*
 * Convert an array of little-endian words to a string
 */
function binl2rstr(input)
{
  var output = "";
  for(var i = 0; i < input.length * 32; i += 8)
    output += String.fromCharCode((input[i>>5] >>> (i % 32)) & 0xFF);
  return output;
}

/*
 * Calculate the MD5 of an array of little-endian words, and a bit length.
 */
function binl_md5(x, len)
{
  /* append padding */
  x[len >> 5] |= 0x80 << ((len) % 32);
  x[(((len + 64) >>> 9) << 4) + 14] = len;

  var a =  1732584193;
  var b = -271733879;
  var c = -1732584194;
  var d =  271733878;

  for(var i = 0; i < x.length; i += 16)
  {
    var olda = a;
    var oldb = b;
    var oldc = c;
    var oldd = d;

    a = md5_ff(a, b, c, d, x[i+ 0], 7 , -680876936);
    d = md5_ff(d, a, b, c, x[i+ 1], 12, -389564586);
    c = md5_ff(c, d, a, b, x[i+ 2], 17,  606105819);
    b = md5_ff(b, c, d, a, x[i+ 3], 22, -1044525330);
    a = md5_ff(a, b, c, d, x[i+ 4], 7 , -176418897);
    d = md5_ff(d, a, b, c, x[i+ 5], 12,  1200080426);
    c = md5_ff(c, d, a, b, x[i+ 6], 17, -1473231341);
    b = md5_ff(b, c, d, a, x[i+ 7], 22, -45705983);
    a = md5_ff(a, b, c, d, x[i+ 8], 7 ,  1770035416);
    d = md5_ff(d, a, b, c, x[i+ 9], 12, -1958414417);
    c = md5_ff(c, d, a, b, x[i+10], 17, -42063);
    b = md5_ff(b, c, d, a, x[i+11], 22, -1990404162);
    a = md5_ff(a, b, c, d, x[i+12], 7 ,  1804603682);
    d = md5_ff(d, a, b, c, x[i+13], 12, -40341101);
    c = md5_ff(c, d, a, b, x[i+14], 17, -1502002290);
    b = md5_ff(b, c, d, a, x[i+15], 22,  1236535329);

    a = md5_gg(a, b, c, d, x[i+ 1], 5 , -165796510);
    d = md5_gg(d, a, b, c, x[i+ 6], 9 , -1069501632);
    c = md5_gg(c, d, a, b, x[i+11], 14,  643717713);
    b = md5_gg(b, c, d, a, x[i+ 0], 20, -373897302);
    a = md5_gg(a, b, c, d, x[i+ 5], 5 , -701558691);
    d = md5_gg(d, a, b, c, x[i+10], 9 ,  38016083);
    c = md5_gg(c, d, a, b, x[i+15], 14, -660478335);
    b = md5_gg(b, c, d, a, x[i+ 4], 20, -405537848);
    a = md5_gg(a, b, c, d, x[i+ 9], 5 ,  568446438);
    d = md5_gg(d, a, b, c, x[i+14], 9 , -1019803690);
    c = md5_gg(c, d, a, b, x[i+ 3], 14, -187363961);
    b = md5_gg(b, c, d, a, x[i+ 8], 20,  1163531501);
    a = md5_gg(a, b, c, d, x[i+13], 5 , -1444681467);
    d = md5_gg(d, a, b, c, x[i+ 2], 9 , -51403784);
    c = md5_gg(c, d, a, b, x[i+ 7], 14,  1735328473);
    b = md5_gg(b, c, d, a, x[i+12], 20, -1926607734);

    a = md5_hh(a, b, c, d, x[i+ 5], 4 , -378558);
    d = md5_hh(d, a, b, c, x[i+ 8], 11, -2022574463);
    c = md5_hh(c, d, a, b, x[i+11], 16,  1839030562);
    b = md5_hh(b, c, d, a, x[i+14], 23, -35309556);
    a = md5_hh(a, b, c, d, x[i+ 1], 4 , -1530992060);
    d = md5_hh(d, a, b, c, x[i+ 4], 11,  1272893353);
    c = md5_hh(c, d, a, b, x[i+ 7], 16, -155497632);
    b = md5_hh(b, c, d, a, x[i+10], 23, -1094730640);
    a = md5_hh(a, b, c, d, x[i+13], 4 ,  681279174);
    d = md5_hh(d, a, b, c, x[i+ 0], 11, -358537222);
    c = md5_hh(c, d, a, b, x[i+ 3], 16, -722521979);
    b = md5_hh(b, c, d, a, x[i+ 6], 23,  76029189);
    a = md5_hh(a, b, c, d, x[i+ 9], 4 , -640364487);
    d = md5_hh(d, a, b, c, x[i+12], 11, -421815835);
    c = md5_hh(c, d, a, b, x[i+15], 16,  530742520);
    b = md5_hh(b, c, d, a, x[i+ 2], 23, -995338651);

    a = md5_ii(a, b, c, d, x[i+ 0], 6 , -198630844);
    d = md5_ii(d, a, b, c, x[i+ 7], 10,  1126891415);
    c = md5_ii(c, d, a, b, x[i+14], 15, -1416354905);
    b = md5_ii(b, c, d, a, x[i+ 5], 21, -57434055);
    a = md5_ii(a, b, c, d, x[i+12], 6 ,  1700485571);
    d = md5_ii(d, a, b, c, x[i+ 3], 10, -1894986606);
    c = md5_ii(c, d, a, b, x[i+10], 15, -1051523);
    b = md5_ii(b, c, d, a, x[i+ 1], 21, -2054922799);
    a = md5_ii(a, b, c, d, x[i+ 8], 6 ,  1873313359);
    d = md5_ii(d, a, b, c, x[i+15], 10, -30611744);
    c = md5_ii(c, d, a, b, x[i+ 6], 15, -1560198380);
    b = md5_ii(b, c, d, a, x[i+13], 21,  1309151649);
    a = md5_ii(a, b, c, d, x[i+ 4], 6 , -145523070);
    d = md5_ii(d, a, b, c, x[i+11], 10, -1120210379);
    c = md5_ii(c, d, a, b, x[i+ 2], 15,  718787259);
    b = md5_ii(b, c, d, a, x[i+ 9], 21, -343485551);

    a = safe_add(a, olda);
    b = safe_add(b, oldb);
    c = safe_add(c, oldc);
    d = safe_add(d, oldd);
  }
  return Array(a, b, c, d);
}

/*
 * These functions implement the four basic operations the algorithm uses.
 */
function md5_cmn(q, a, b, x, s, t)
{
  return safe_add(bit_rol(safe_add(safe_add(a, q), safe_add(x, t)), s),b);
}
function md5_ff(a, b, c, d, x, s, t)
{
  return md5_cmn((b & c) | ((~b) & d), a, b, x, s, t);
}
function md5_gg(a, b, c, d, x, s, t)
{
  return md5_cmn((b & d) | (c & (~d)), a, b, x, s, t);
}
function md5_hh(a, b, c, d, x, s, t)
{
  return md5_cmn(b ^ c ^ d, a, b, x, s, t);
}
function md5_ii(a, b, c, d, x, s, t)
{
  return md5_cmn(c ^ (b | (~d)), a, b, x, s, t);
}

/*
 * Add integers, wrapping at 2^32. This uses 16-bit operations internally
 * to work around bugs in some JS interpreters.
 */
function safe_add(x, y)
{
  var lsw = (x & 0xFFFF) + (y & 0xFFFF);
  var msw = (x >> 16) + (y >> 16) + (lsw >> 16);
  return (msw << 16) | (lsw & 0xFFFF);
}

/*
 * Bitwise rotate a 32-bit number to the left.
 */
function bit_rol(num, cnt)
{
  return (num << cnt) | (num >>> (32 - cnt));
}


