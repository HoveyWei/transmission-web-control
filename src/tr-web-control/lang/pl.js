// lang file
system.lang = {
	"name":"pl"
	,"system":{
		"title":"Transmission WEB Control"
		,"status":{
			"connect":"Łączenie..."
			,"connected":"Połączono"
			,"queue":"Kolejka:"
			,"queuefinish":"Zakończono kolejkę."
			,"notfinal":"Nie ukończone"
			,"checked": "Zaznaczone pozycje: %n"
		}
	}
	,"error":{
		"data-error":"Błąd pobierania danych!"
		,"data-post-error":"Błąd wysyłania danych!"
		,"rename-error":"Błąd zmiany nazwy"
	}
	,"config":{
		"save-path":"Katalog pobierania"
	}
	,"toolbar":{
		"start":"Start"
		,"pause":"Wstrzymaj"
		,"recheck":"Sprawdź"
		,"start-all":"Pobieraj wszystkie"
		,"pause-all":"Wstrzymaj wszystkie"
		,"remove":"Usuń"
		,"remove-all":"Usuń wszystkie"
		,"remove-data":"Usuń dane"
		,"add-torrent":"Dodaj torrenta"
		,"attribute":"Szczegóły"
		,"alt-speed":"Alternatywna prędkość"
		,"system-config":"Panel konfiguracyjny Transmission"
		,"system-reload":"Odśwież"
		,"about":"O webgui"
		,"reload-time":"Auto odświeżanie:"
		,"reload-time-unit":"sekund"
		,"autoreload-disabled":"Wyłączone"
		,"autoreload-enabled":"Włączone"
		,"search-prompt":"Szukaj w torrentach"
		,"tracker-replace":"Zamień trackery"
		,"queue":"Kolejka"
		,"ui-mobile":"Mobile UI"
		,"ui-original":"Original UI"
		,"ui-computer":"Desktop UI"
		,"plugin":"Rozszerzenia/wtyczki"
		,"rename":"Zmień nazwę"
		,"copy-path-to-clipboard": "Skopiuj lokalizację pobierania do schowka"
		,"tip":{
			"start":"Pobieraj wybrane torrenty"
			,"pause":"Wstrzymaj wybrane torrenty"
			,"recheck":"Sprawdź ponownie wybrane torrenty"
			,"recheck-confirm":"Jesteś pewny, że chcesz ponownie sprawdzić wybrane torrenty? To może zająć trochę czasu!"
			,"start-all":"Pobieraj wszystkie"
			,"pause-all":"Wstrzymaj wszystkie"
			,"remove":"Usuń"
			,"delete-all":"Usuń wszystkie"
			,"delete-data":"Usuń dane"
			,"add-torrent":"Dodaj torrenta"
			,"attribute":"Szczegóły"
			,"alt-speed":"Limituj prędkość pobierania i wysyłania"
			,"system-config":"Panel konfiguracyjny Transmission"
			,"system-reload":"Odśwież"
			,"about":"O aplikacji"
			,"autoreload-disabled":"Wyłącz auto-odświeżanie"
			,"autoreload-enabled":"Włącz auto-odświeżanie"
			,"tracker-replace":"Zamień trackery"
			,"change-download-dir":"Zmień katalog pobierania"
			,"ui-mobile":"Mobilne UI"
			,"ui-original":"Oryginalne UI"
			,"more-peers":"Zapytaj tracker o więcej peerów"
			,"rename":"Zmiana nazwy katalogu"
			,"copy-path-to-clipboard":"Kopiuj lokalizację pobierania do schowka"
		}
	}
	,"menus":{
		"queue":{
			"move-top":"Przesuń na górę"
			,"move-up":"Przesuń wyżej"
			,"move-down":"Przesuń niżej"
			,"move-bottom":"Przesuń na dół"
		}
		,"plugin": {
			"auto-match-data-folder": "Automatyczne dopasowanie katalogu"
		}
	}
	,"title":{
		"left":"Nawigacja"
		,"list":"Torrenty"
		,"attribute":"Szczegóły"
		,"status":"Status"
	}
	,"tree":{
		"all":"Wszystkie torrenty"
		,"active":"Aktywne"
		,"paused":"Wstrzymane"
		,"downloading":"Pobierane"
		,"sending":"Wysyłane"
		,"error":"Błędy"
		,"warning":"Ostrzeżenia"
		,"actively":"Aktywne"
		,"check":"Sprawdzane"
		,"wait":"Oczekiwanie"
		,"search-result":"Wyniki wyszukiwania"
		,"status":{
			"loading":"Ładowanie..."
		}
		,"statistics":"Statystyki"
		,"statistics":{
			"title":"Statystyki"
			,"cumulative":"Ogólne"
			,"current":"Bieżące"
			,"uploadedBytes":"Wysłano: "
			,"downloadedBytes":"Pobrano: "
			,"filesAdded":"Dodane pliki: "
			,"sessionCount":"Ilość sesji: "
			,"secondsActive":"Czas aktywności: "
		}
		,"servers":"Trackery"
		,"folders":"Katalogi"
		,"toolbar":{
			"nav":{
				"folders":"Katalogi"
			}
		}
	}
	,"statusbar":{
		"downloadspeed":"Prędkość pobierania:"
		,"uploadspeed":"Prędkość wysyłania:"
		,"version":"Wersja:"
	}
	,"dialog":{
		"torrent-add":{
			"download-dir":"Katalog pobierania:"
			,"torrent-url":"Link do torrenta:"
			,"tip-torrent-url":"Wskazówka: każdy w nowej linii (oddziel klawiszem ENTER)"
			,"autostart":"Uruchom pobieranie:"
			,"tip-autostart":""
			,"set-default-download-dir":"Zapisz jako katalog domyślny"
			,"upload-file":"Pliki torrent:"
			,"nosource":"Brak pliku torrent bądź linka."
			,"tip-title":"Dodaj plik torrent i rozpocznij pobieranie"
		}
		,"system-config":{
			"title":"Konfiguracja serwera"
			,"tabs":{
				"base":"Ogólne"
				,"network":"Sieć"
				,"limit":"Limitowanie prędkości"
				,"alt-speed":"Harmonogram"
				,"dictionary-folders":"Słownik folderów"
				,"more":"Więcej"
			}
			,"config-dir":"Lokalizacja katalogu z konfiguracją Transmission:"
			,"download-dir":"Domyślny katalog pobierania torrentów:"
			,"download-dir-free-space":"Wolne miejsce na dysku: "
			,"incomplete-dir-enabled":"Użyj katalogu dla niedokończonych pobrań"
			,"cache-size-mb":"Wielkość cache'u dysku:"
			,"rename-partial-files":"Dodaj rozszerzenie '.part' do nieukończonych pobrań"
			,"start-added-torrents":"Automatycznie rozpoczynaj pobieranie dodawanych torrentów"
			,"download-queue-enabled":"Włącz kolejkę pobierania, maksymalna ilość kolejek:"
			,"seed-queue-enabled":"Włącz kolejkę wysyłania, maksymalna ilość kolejek:"
			,"peer-port-random-on-start":"Użyj losowego portu podczas uruchamiania"
			,"port-forwarding-enabled":"Włącz przekierowywanie portów"
			,"test-port":"Testuj port"
			,"port-is-open-true":"Port jest otwarty"
			,"port-is-open-false":"Port jest zamknięty"
			,"testing":"Testowanie..."
			,"encryption":"Szyfrowanie:"
			,"encryption-type":{
				"required":"Wymagane"
				,"preferred":"Preferowane"
				,"tolerated":"Tolerowane"
			}
			,"utp-enabled":"Włącz µTP (UPnP)"
			,"dht-enabled":"Włącz DHT"
			,"lpd-enabled":"Włącz LPD"
			,"pex-enabled":"Włącz PEX"
			,"peer-limit-global":"Maksymalna ogólna ilość peerów:"
			,"peer-limit-per-torrent":"Maksymalna ilość peerów na torrent:"
			,"speed-limit-down-enabled":"Maksymalna prędkość pobierania:"
			,"speed-limit-up-enabled":"Maksymalna prędkość wysyłania:"
			,"alt-speed-enabled":"Używaj ograniczenia prędkości"
			,"alt-speed-down":"Maksymalna prędkość pobierania:"
			,"alt-speed-up":"Maksymalna prędkość wysyłania:"
			,"alt-speed-time-enabled":"Użyj harmonogramu"
			,"alt-speed-time":"Godziny："
			,"weekday":{
				"1":"Poniedziałek"
				,"2":"Wtorek"
				,"3":"Środa"
				,"4":"Czwartek"
				,"5":"Piątek"
				,"6":"Sobota"
				,"0":"Niedziela"
			}
			,"blocklist-enabled":"Używaj blocklist'y (czarna lista z adresami IP organizacji antypirackich)"
			,"blocklist-size":"Na czarnej liście jest %n reguł"
			,"seedRatioLimited":"Domyślne ratio dla torrentów:"
			,"queue-stalled-enabled":"Bezczynne torrenty będą blokowane po czasie:"
			,"idle-seeding-limit-enabled":"Wysyłanie pobranych torrentów zostanie zatrzymane, jeżeli nikt nie będzie ich pobierał przez:"
			,"minutes":"Minut"
			,"nochange":"Nie dokonano zmian"
			,"saving":"Zapisywanie..."
			,"show-bt-servers":"Pokazuj serwery BT na liście Trackerów"
			,"restore-default-settings":"Przywróć ustawienia domyślne"
			,"language":"Język:"
			,"loading":"Ładowanie..."
		}
		,"public":{
			"button-ok":"OK"
			,"button-cancel":"Anuluj"
			,"button-reload":"Odśwież"
			,"button-save":"Zapisz"
			,"button-close":"Zamknij"
			,"button-update":"Aktualizuj"
			,"button-config":"Konfiguracja"
		}
		,"about":{
			"infos":"Autor：culturist, Tłumaczenie: Simplydan<br/>Poprawki + nowe tłumaczenia: vipKoza<br/>Oświadczenie: Jeżeli któraś ikona narusza twoje prawa, skontaktuj się z autorem."
			,"check-update":"Sprawdź aktualizację"
			,"home": "Strona domowa"
			,"help": "Wiki"
			,"donate": "Dotacja"
			,"pt-plugin": "Plugin PT"
		}
		,"torrent-remove":{
			"title":"Potwierdź"
			,"confirm-text":"Czy na pewno chcesz usunąć wybrane torrenty?"
			,"remove-data":"Usuń lokalne dane"
			,"remove-error":"Usuwanie nie powiodło się!"
		}
		,"torrent-changeDownloadDir":{
			"title":"Ustaw nowy katalog pobierania dla tego torrenta"
			,"old-download-dir":"Stary katalog:"
			,"new-download-dir":"Nowy katalog:"
			,"move-data":"Przenieś pobrane pliki do nowej lokalizacji"
			,"set-error":"Błąd!"
			,"recheck-data":"Ponownie sprawdź pobrane dane"
		}
		,"system-replaceTracker":{
			"title":"Zmiana trackerów"
			,"old-tracker":"Stary tracker:"
			,"new-tracker":"Nowy tracker:"
			,"tip":"Ta funkcja znajdzie i zamieni trackery we <b>wszystkich torrentach!</b>"
			,"not-found":"Tracker nie został znaleziony."
		}
		,"auto-match-data-folder":{
			"title":"Automatyczne dopasowanie katalogu z danymi"
			,"torrent-count":"Liczba torrentów:"
			,"folder-count":"Liczba folderów:"
			,"dictionary":"Plik słownika"
			,"time-begin":"Czas rozpoczęcia:"
			,"time-now":"Teraz:"
			,"status":"Stan:"
			,"ignore":"Ignoruj"
			,"working-close-confirm":"Operacja w trakcie, czy na pewno chcesz zamknąć?"
			,"time-interval":"Odstęp czasu (sekundy):"
			,"work-mode-title":"Tryb:"
			,"work-mode":{
				"1":"Dopasowanie według torrenta"
				,"2":"Dopasowanie według folderu"
			}
		}
		,"torrent-rename": {
			"title":"Zmiana nazwy katalogu",
			"oldname": "Stary:",
			"newname": "Nowy:"
		}
		,"torrent-attribute-add-tracker": {
			"title": "Dodaj trackery",
			"tip": "Jedna linia - jeden Tracker"
		}
	}
	,"torrent":{
		"fields":{
			"id":"#"
			,"name":"Nazwa"
			,"hashString":"HASH"
			,"downloadDir":"Katalog pobierania"
			,"totalSize":"Rozmiar"
			,"status":"Status"
			,"percentDone":"Ukończono"
			,"remainingTime":"Pozostały czas"
			,"addedDate":"Data dodania"
			,"completeSize":"Pobrano"
			,"rateDownload":"Prędkość pobierania"
			,"rateUpload":"Prędkość wysyłania"
			,"leecherCount":"Peerów"
			,"seederCount":"Seedów"
			,"uploadedEver":"Wysłano"
			,"uploadRatio":"Ratio"
			,"queuePosition":"Kolejka"
			,"activityDate":"Ostatnia aktywność"
			,"trackers":"Trackery"
		}
		,"status-text":{
			"0":"Wstrzymano"
			,"1":"Oczekiwanie na sprawdzenie"
			,"2":"Sprawdzanie"
			,"3":"Oczekiwanie na pobieranie"
			,"4":"Pobieranie"
			,"5":"Oczekiwanie na seeda"
			,"6":"Wysyłanie"
		}
		,"attribute":{
			"tabs":{
				"base":"Ogólne"
				,"servers":"Trackery"
				,"files":"Pliki"
				,"users":"Peery"
				,"config":"Konfiguracja"
			}
			,"files-fields":{
				"name":"Nazwa"
				,"length":"Rozmiar"
				,"percentDone":"Ukończono"
				,"bytesCompleted":"Pobrano"
				,"wanted":"Status"
				,"priority":"Priorytet"
			}
			,"servers-fields":{
				"announce":"Tracker"
				,"announceState":"Status"
				,"lastAnnounceResult":"Status połączenia z trackerem"
				,"lastAnnounceSucceeded":"Udane połączenie"
				,"lastAnnounceTime":"Godzina połączenia"
				,"lastAnnounceTimedOut":"Timeout"
				,"downloadCount":"Ilość pobrań"
				,"nextAnnounceTime":"Następne połączenie"
			}
			,"peers-fields":{
				"address":"Adres IP"
				,"clientName":"Klient"
				,"flagStr":"Flaga"
				,"progress":"%"
				,"rateToClient":"Prędkość pobierania"
				,"rateToPeer":"Prędkość wysyłania"
			}
			,"status":{
				"true":"OK"
				,"false":" - "
			}
			,"priority":{
				"0":"Normalny"
				,"1":"Wysoki"
				,"-1":"Niski"
			}
			,"label":{
				"name":"Nazwa:"
				,"addedDate":"Data dodania:"
				,"totalSize":"Rozmiar:"
				,"completeSize":"Pobrano:"
				,"leftUntilDone":"Pozostało do pobrania:"
				,"hashString":"HASH:"
				,"downloadDir":"Katalog pobierania:"
				,"status":"Status:"
				,"rateDownload":"Prędkość pobierania:"
				,"rateUpload":"Prędkość wysyłania:"
				,"leecherCount":"Ilość peerów:"
				,"seederCount":"Ilość seedów:"
				,"uploadedEver":"Wysłano:"
				,"uploadRatio":"Ratio:"
				,"creator":"Autor:"
				,"dateCreated":"Data utworzenia:"
				,"comment":"Komentarz:"
				,"errorString":"Błąd:"
				,"downloadLimited":"Maksymalna prędkość pobierania："
				,"uploadLimited":"Maksymalna prędkość wysyłania："
				,"peer-limit":"Maksymalna ilość peerów na torrent："
				,"seedRatioMode":"Ratio do wyseedowania dla tego torrenta："
				,"seedIdleMode":"Wysyłanie zatrzymanego torrenta, będzie zatrzymane, jeżeli nie będzie wysyłany przez (minut): "
			}
			,"tip":{
				"button-allow":"Pobierz sprawdzone pliki"
				,"button-deny":"Pomiń sprawdzone pliki"
				,"button-priority":"Ustaw priorytet"
				,"button-tracker-add":"Dodaj nowy tracker"
				,"button-tracker-edit":"Edytuj tracker"
				,"button-tracker-remove":"Usuń tracker"
			}
			,"other":{
				"tracker-remove-confim":"Czy na pewno chcesz usunąć ten tracker?"
			}
		}
	}
	,"torrent-head":{
		"buttons":{
			"autoExpandAttribute":"Automatycznie rozwijaj szczegóły"
		}
	}
	,"public":{
		"text-unknown":"Nieznany"
		,"text-drop-title":"Przerzuć z komputera plik o rozszerzeniu *.torrent metodą 'przeciągnij i upuść' (drag&drop) w podświetlony obszar jakbyś kopiował pliki pomiędzy katalogami na komputerze "
		,"text-saved":"Zapisano"
		,"text-nochange":"Nie dokonano zmian"
		,"text-info":"Informacje"
		,"text-confirm":"Jesteś pewny?"
		,"text-browsers-not-support-features":"Ta przeglądarka nie obsługuje tej funkcji!"
		,"text-download-update":"Pobierz tę aktualizację"
		,"text-have-update":"Aktualizacja jest dostępna"
	}
};
