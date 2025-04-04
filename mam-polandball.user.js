// ==UserScript==
// @name        jack's MaM Shoutbox Polandball Flags
// @namespace   Violentmonkey Scripts
// @match       https://www.myanonamouse.net/*
// @grant       GM_getResourceURL
// @version     1.0
// @author      jack
// @updateURL	none
// @description Polandball flags for the shoutbox. Remember to turn shoutbox flag on in mam settings first.
//
// @resource USA_icon https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/USA_icon.png
// @resource USA_icon_%28no_sunglasses%29 https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/USA_icon_(no_sunglasses).png
// @resource USA_Empire_icon https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/USA_Empire_icon.png
// @resource Murica_icon https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/Murica_icon.png
// @resource Murican_icon https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/Murican_icon.png
// @resource UK_icon https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/UK_icon.png
// @resource UK_icon_%28no_hat%29 https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/UK_icon_(no_hat).png
// @resource British_Empire_icon https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/British_Empire_icon.png
// @resource polandball_pirate https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/polandball_pirate.png
// @resource Switzerland_icon https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/Switzerland_icon.png
// @resource Switzerland_icon_%28Guard%29 https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/Switzerland_icon_(Guard).png
// @resource Denmark_icon https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/Denmark_icon.png
// @resource Denmark_icon_%28LEGO%29 https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/Denmark_icon_(LEGO).png
// @resource Israel_icon https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/Israel_icon.png
// @resource IsraelSpin_icon https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/IsraelSpin_icon.gif
// @resource Poland_icon https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/Poland_icon.png
// @resource Poland_icon_%28space%29 https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/Poland_icon_(space).png
// @resource Polish_icon https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/Polish_icon.png
// @resource Andorra-icon https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/Andorra-icon.png
// @resource Andorra-icon_(hat) https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/Andorra-icon_(hat).png
// @resource UAE-icon https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/UAE-icon.png
// @resource UAE-icon_(hat) https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/UAE-icon_(hat).png
// @resource Afghanistan-icon https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/Afghanistan-icon.png
// @resource Taliban-icon https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/Taliban-icon.png
// @resource Antigua_and_Barbuda-icon https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/Antigua_and_Barbuda-icon.png
// @resource Anguilla-icon https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/Anguilla-icon.png
// @resource Albania-icon https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/Albania-icon.png
// @resource Albania-icon_(hat) https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/Albania-icon_(hat).png
// @resource Armenia-icon https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/Armenia-icon.png
// @resource Netherlands_Antilles-icon https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/Netherlands_Antilles-icon.png
// @resource Angola-icon https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/Angola-icon.png
// @resource Antarctica-icon_No_Goggles https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/Antarctica-icon_No_Goggles.png
// @resource Antarctica-icon https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/Antarctica-icon.png
// @resource Antarctica-icon_True_South_No_Goggles https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/Antarctica-icon_True_South_No_Goggles.png
// @resource Antarctica-icon_True_South https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/Antarctica-icon_True_South.png
// @resource Argentina-icon https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/Argentina-icon.png
// @resource American_Samoa-icon https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/American_Samoa-icon.png
// @resource Austria-icon https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/Austria-icon.png
// @resource Austria-icon_(Coat_of_Arms) https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/Austria-icon_(Coat_of_Arms).png
// @resource Austria-icon_(glasses) https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/Austria-icon_(glasses).png
// @resource Australia-icon_(no_hat) https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/Australia-icon_(no_hat).png
// @resource Australia-icon https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/Australia-icon.png
// @resource Ɐᴉlɐɹʇsn∀-icon https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/Ɐᴉlɐɹʇsn∀-icon.png
// @resource Aruba-icon https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/Aruba-icon.png
// @resource Åland-icon https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/Åland-icon.png
// @resource Azerbaijan-icon https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/Azerbaijan-icon.png
// @resource Bosnia_and_Herzegovina-icon https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/Bosnia_and_Herzegovina-icon.png
// @resource Bosnia-icon_(hat) https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/Bosnia-icon_(hat).png
// @resource Barbados-icon https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/Barbados-icon.png
// @resource Bangladesh-icon https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/Bangladesh-icon.png
// @resource Bangladesh-icon_(turban) https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/Bangladesh-icon_(turban).png
// @resource Belgium-icon https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/Belgium-icon.png
// @resource Burkina_Faso-icon https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/Burkina_Faso-icon.png
// @resource Bulgaria-icon https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/Bulgaria-icon.png
// @resource Bahrain-icon https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/Bahrain-icon.png
// @resource Bahrain-icon_(hat) https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/Bahrain-icon_(hat).png
// @resource Burundi-icon https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/Burundi-icon.png
// @resource Benin-icon https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/Benin-icon.png
// @resource Saint_Barthélemy-icon https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/Saint_Barthélemy-icon.png
// @resource Bermuda-icon https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/Bermuda-icon.png
// @resource Brunei-icon https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/Brunei-icon.png
// @resource Brunei-icon_(hat) https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/Brunei-icon_(hat).png
// @resource Bolivia-icon https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/Bolivia-icon.png
// @resource Bonaire-icon https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/Bonaire-icon.png
// @resource Brazil-icon https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/Brazil-icon.png
// @resource Bahamas-icon https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/Bahamas-icon.png
// @resource Bhutan-icon https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/Bhutan-icon.png
// @resource Bouvet_Island-icon https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/Bouvet_Island-icon.png
// @resource Botswana-icon https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/Botswana-icon.png
// @resource Belarus-icon https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/Belarus-icon.png
// @resource Belize-icon https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/Belize-icon.png
// @resource Canada-icon_(no_hat) https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/Canada-icon_(no_hat).png
// @resource Canada-icon https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/Canada-icon.png
// @resource Canada-icon_(tangle) https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/Canada-icon_(tangle).png
// @resource Cocos_Islands-icon https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/Cocos_Islands-icon.png
// @resource DRC-icon https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/DRC-icon.png
// @resource CAR-icon https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/CAR-icon.png
// @resource French_Congo-icon https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/French_Congo-icon.png
// @resource Côte_d'Ivoire-icon https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/Côte_d'Ivoire-icon.png
// @resource Cook_Islands-icon_(no_hat) https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/Cook_Islands-icon_(no_hat).png
// @resource Cook_Islands-icon https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/Cook_Islands-icon.png
// @resource Cook_Islands_Egg https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/Cook_Islands_Egg.gif
// @resource Chile-icon https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/Chile-icon.png
// @resource Chile-icon_pickelhaube https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/Chile-icon_pickelhaube.png
// @resource Cameroon-icon https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/Cameroon-icon.png
// @resource Meme_(Cameroon)-icon https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/Meme_(Cameroon)-icon.png
// @resource China-icon https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/China-icon.png
// @resource China-icon_(hat) https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/China-icon_(hat).png
// @resource China-icon_(Nezha) https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/China-icon_(Nezha).png
// @resource China-icon_(big_eyes) https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/China-icon_(big_eyes).png
// @resource Colombia-icon https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/Colombia-icon.png
// @resource Colombia_decorated-icon https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/Colombia_decorated-icon.png
// @resource Costa_Rica-icon https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/Costa_Rica-icon.png
// @resource Panslavic-icon https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/Panslavic-icon.png
// @resource Cuba-icon https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/Cuba-icon.png
// @resource Cuba-icon_(Castro) https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/Cuba-icon_(Castro).png
// @resource Cabo_Verde-icon https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/Cabo_Verde-icon.png
// @resource Curaçao-icon https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/Curaçao-icon.png
// @resource Christmas_Island-icon https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/Christmas_Island-icon.png
// @resource Cyprus-icon https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/Cyprus-icon.png
// @resource Czechia-icon https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/Czechia-icon.png
// @resource Germany-icon https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/Germany-icon.png
// @resource Germany-icon_(Coat_of_Arms) https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/Germany-icon_(Coat_of_Arms).png
// @resource Germany_Deuchland-icon https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/Germany_Deuchland-icon.png
// @resource Djibouti-icon https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/Djibouti-icon.png
// @resource Dominica-icon https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/Dominica-icon.png
// @resource DR-icon https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/DR-icon.png
// @resource Algeria-icon https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/Algeria-icon.png
// @resource Algeria-icon_(Arabic) https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/Algeria-icon_(Arabic).png
// @resource Ecuador-icon https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/Ecuador-icon.png
// @resource Ecuador-icon_(hat) https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/Ecuador-icon_(hat).png
// @resource Estonia-icon https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/Estonia-icon.png
// @resource Egypt-icon_(no_hat) https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/Egypt-icon_(no_hat).png
// @resource Egypt-icon https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/Egypt-icon.png
// @resource Egypt-icon_(kandura) https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/Egypt-icon_(kandura).png
// @resource Egypt-icon_(pharaoh_hat) https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/Egypt-icon_(pharaoh_hat).png
// @resource Western_Sahara-icon https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/Western_Sahara-icon.png
// @resource Earth-icon https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/Earth-icon.png
// @resource Eritrea-icon https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/Eritrea-icon.png
// @resource Spain-icon https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/Spain-icon.png
// @resource Spain-icon_(Crown) https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/Spain-icon_(Crown).png
// @resource Ethiopia-icon https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/Ethiopia-icon.png
// @resource Ethiopia_Traditional-icon https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/Ethiopia_Traditional-icon.png
// @resource EU-icon https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/EU-icon.png
// @resource Finland-icon https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/Finland-icon.png
// @resource Finland-icon_(ushanka) https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/Finland-icon_(ushanka).png
// @resource Fiji-icon https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/Fiji-icon.png
// @resource Falklands-icon https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/Falklands-icon.png
// @resource Micronesia-icon https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/Micronesia-icon.png
// @resource Faroe-icon https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/Faroe-icon.png
// @resource France-icon https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/France-icon.png
// @resource France-icon_(beret) https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/France-icon_(beret).png
// @resource Gabon-icon https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/Gabon-icon.png
// @resource Grenada-icon https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/Grenada-icon.png
// @resource Georgia-icon https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/Georgia-icon.png
// @resource Georgia(hat)-icon https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/Georgia(hat)-icon.png
// @resource French_Guiana-icon https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/French_Guiana-icon.png
// @resource Guernsey-icon https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/Guernsey-icon.png
// @resource Ghana-icon https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/Ghana-icon.png
// @resource GhanaCoffinDance-icon https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/GhanaCoffinDance-icon.png
// @resource Gibraltar-icon https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/Gibraltar-icon.png
// @resource Greenland-icon https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/Greenland-icon.png
// @resource Gambia-icon https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/Gambia-icon.png
// @resource Guinea-icon https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/Guinea-icon.png
// @resource Guadeloupe-icon https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/Guadeloupe-icon.png
// @resource Guadeloupe-icon_2 https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/Guadeloupe-icon_2.png
// @resource Equatorial_Guinea-icon https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/Equatorial_Guinea-icon.png
// @resource Equatorial_Guinea_(Sunglasses)-icon https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/Equatorial_Guinea_(Sunglasses)-icon.png
// @resource Greece-icon https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/Greece-icon.png
// @resource South_Georgia_and_the_South_Sandwich_Islands-icon https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/South_Georgia_and_the_South_Sandwich_Islands-icon.png
// @resource Guatemala-icon https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/Guatemala-icon.png
// @resource Guam-icon https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/Guam-icon.png
// @resource Guinea-Bissau-icon https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/Guinea-Bissau-icon.png
// @resource Guyana-icon https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/Guyana-icon.png
// @resource Hong_Kong-icon https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/Hong_Kong-icon.png
// @resource Hong_Kong_(big_eyes)-icon https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/Hong_Kong_(big_eyes)-icon.png
// @resource Hong_Kong-icon_Tophat https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/Hong_Kong-icon_Tophat.png
// @resource Heunggong_(big_eyes)-icon https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/Heunggong_(big_eyes)-icon.png
// @resource Heard_Island_and_McDonald_Islands-icon https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/Heard_Island_and_McDonald_Islands-icon.png
// @resource Honduras-icon https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/Honduras-icon.png
// @resource Croatia-icon https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/Croatia-icon.png
// @resource Haiti-icon https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/Haiti-icon.png
// @resource Hungary-icon https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/Hungary-icon.png
// @resource Kingdom_of_Hungary-icon https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/Kingdom_of_Hungary-icon.png
// @resource Hungary-icon_(hussar_hat) https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/Hungary-icon_(hussar_hat).png
// @resource Indonesia-icon_(no_hat) https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/Indonesia-icon_(no_hat).png
// @resource Indonesia-icon https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/Indonesia-icon.png
// @resource Indonesia-icon_(Asian_eyes) https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/Indonesia-icon_(Asian_eyes).png
// @resource Ireland-icon https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/Ireland_Leprechaun.gif
// @resource Isle_of_Man-icon https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/Isle_of_Man-icon.png
// @resource India-icon https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/India-icon.png
// @resource India-icon_(hat) https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/India-icon_(hat).png
// @resource British_Indian_Ocean_Territory-icon https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/British_Indian_Ocean_Territory-icon.png
// @resource Iraq-icon https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/Iraq-icon.png
// @resource Iraq-icon_(hat) https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/Iraq-icon_(hat).png
// @resource Iran-icon https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/Iran-icon.png
// @resource Iran-icon_(hat) https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/Iran-icon_(hat).png
// @resource Iceland-icon https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/Iceland-icon.png
// @resource Italy-icon https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/Italy-icon.png
// @resource Italy-icon_(boot) https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/Italy-icon_(boot).png
// @resource Italian https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/Italian.gif
// @resource Jersey-icon https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/Jersey-icon.png
// @resource Jamaica-icon https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/Jamaica-icon.png
// @resource Jamaica-icon_(high) https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/Jamaica-icon_(high).png
// @resource Jordan-icon https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/Jordan-icon.png
// @resource Japan-icon https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/Japan-icon.png
// @resource Japan-icon_(open_eyes) https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/Japan-icon_(open_eyes).png
// @resource Japan-icon_(cat) https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/Japan-icon_(cat).png
// @resource Japan https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/Japan.gif
// @resource Kenya-icon https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/Kenya-icon.png
// @resource Kyrgyzstan-icon https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/Kyrgyzstan-icon.png
// @resource Kyrgyz(Ak-kalpak)-icon https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/Kyrgyz(Ak-kalpak)-icon.png
// @resource Kiribati-icon https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/Kiribati-icon.png
// @resource Comoros-icon https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/Comoros-icon.png
// @resource Saint_Kitts_and_Nevis-icon https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/Saint_Kitts_and_Nevis-icon.png
// @resource North_Korea-icon https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/North_Korea-icon.png
// @resource North_Korea_(dark_colors)-icon https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/North_Korea_(dark_colors)-icon.png
// @resource North_Korea-icon_(angry) https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/North_Korea-icon_(angry).png
// @resource North_Korea_(dark_colors,_angry)-icon https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/North_Korea_(dark_colors,_angry)-icon.png
// @resource Korea-Empire-icon https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/Korea-Empire-icon.png
// @resource Kuwait-icon https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/Kuwait-icon.png
// @resource Cayman_Islands-icon https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/Cayman_Islands-icon.png
// @resource Kazakhstan-icon https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/Kazakhstan-icon.png
// @resource Kazakh-icon_(hat) https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/Kazakh-icon_(hat).png
// @resource Laos-icon https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/Laos-icon.png
// @resource Laos-icon_(hat) https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/Laos-icon_(hat).png
// @resource Lebanon-icon https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/Lebanon-icon.png
// @resource Lebanon-icon_(Fez) https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/Lebanon-icon_(Fez).png
// @resource Saint_Lucia-icon https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/Saint_Lucia-icon.png
// @resource Liechtenstein-icon https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/Liechtenstein-icon.png
// @resource Liechtenstein-icon_(Crown) https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/Liechtenstein-icon_(Crown).png
// @resource Sri_Lanka-icon https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/Sri_Lanka-icon.png
// @resource Liberia-icon https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/Liberia-icon.png
// @resource Lesotho-icon https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/Lesotho-icon.png
// @resource Lithuania-icon https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/Lithuania-icon.png
// @resource Luxembourg-icon https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/Luxembourg-icon.png
// @resource Latvia-icon https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/Latvia-icon.png
// @resource Libya-icon https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/Libya-icon.png
// @resource Libya-icon_(Arabic) https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/Libya-icon_(Arabic).png
// @resource Morocco-icon_(no_hat) https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/Morocco-icon_(no_hat).png
// @resource Morocco-icon https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/Morocco-icon.png
// @resource Morocco(Arab_hat)-icon https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/Morocco(Arab_hat)-icon.png
// @resource Monaco-icon_(no_glasses) https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/Monaco-icon_(no_glasses).png
// @resource Monaco-icon https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/Monaco-icon.png
// @resource Moldova-icon https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/Moldova-icon.png
// @resource Montenegro-icon https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/Montenegro-icon.png
// @resource Saint_Martin-icon https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/Saint_Martin-icon.png
// @resource Saint_Martin-icon_(alt) https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/Saint_Martin-icon_(alt).png
// @resource Madagascar-icon https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/Madagascar-icon.png
// @resource Marshall_Islands-icon https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/Marshall_Islands-icon.png
// @resource North_Macedonia-icon https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/North_Macedonia-icon.png
// @resource Macedonia-icon_(gladiator) https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/Macedonia-icon_(gladiator).png
// @resource Mali-icon https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/Mali-icon.png
// @resource Myanmar-icon https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/Myanmar-icon.png
// @resource Myanmar-icon_(hat) https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/Myanmar-icon_(hat).png
// @resource Mongolia-icon https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/Mongolia-icon.png
// @resource Mongolia_(hat)-icon https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/Mongolia_(hat)-icon.png
// @resource Mongolian-icon https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/Mongolian-icon.png
// @resource Macau-icon https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/Macau-icon.png
// @resource Macau_(big_eyes)-icon https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/Macau_(big_eyes)-icon.png
// @resource Northern_Mariana_Islands-icon https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/Northern_Mariana_Islands-icon.png
// @resource Martinique-icon https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/Martinique-icon.png
// @resource Mauritania-icon https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/Mauritania-icon.png
// @resource Mauritania-icon_(hat) https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/Mauritania-icon_(hat).png
// @resource Malta-icon https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/Malta-icon.png
// @resource Mauritius-icon https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/Mauritius-icon.png
// @resource Maldives-icon https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/Maldives-icon.png
// @resource Malawi-icon https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/Malawi-icon.png
// @resource Mexico-icon_(No_Hat) https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/Mexico-icon_(No_Hat).png
// @resource Mexico-icon https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/Mexico-icon.png
// @resource Malaysia-icon https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/Malaysia-icon.png
// @resource Malaysia-icon_(hat) https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/Malaysia-icon_(hat).png
// @resource Mozambique-icon https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/Mozambique-icon.png
// @resource Namibia-icon https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/Namibia-icon.png
// @resource New_Caledonia-icon https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/New_Caledonia-icon.png
// @resource Niger-icon https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/Niger-icon.png
// @resource Norfolk_Island-icon https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/Norfolk_Island-icon.png
// @resource Nigeria-icon https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/Nigeria-icon.png
// @resource Nicaragua-icon https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/Nicaragua-icon.png
// @resource Nicaragua-icon_(Hat) https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/Nicaragua-icon_(Hat).png
// @resource Netherlands-icon https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/Netherlands-icon.png
// @resource Netherlands-icon_(high) https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/Netherlands-icon_(high).png
// @resource Norway-icon https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/Norway-icon.png
// @resource Norway-icon_(Viking) https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/Norway-icon_(Viking).png
// @resource Nepal-icon https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/Nepal-icon.png
// @resource Nauru-icon https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/Nauru-icon.png
// @resource Niue-icon https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/Niue-icon.png
// @resource New_Zealand-icon_(no_hat) https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/New_Zealand-icon_(no_hat).png
// @resource New_Zealand-icon https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/New_Zealand-icon.png
// @resource Oman-icon https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/Oman-icon.png
// @resource Oman-icon_(hat) https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/Oman-icon_(hat).png
// @resource Oman-icon_(arab_hat) https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/Oman-icon_(arab_hat).png
// @resource Panama-icon https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/Panama-icon.png
// @resource Peru-icon https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/Peru-icon.png
// @resource Peru-icon_(hat) https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/Peru-icon_(hat).png
// @resource French_Polynesia-icon https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/French_Polynesia-icon.png
// @resource Papua_New_Guinea-icon https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/Papua_New_Guinea-icon.png
// @resource Philippines-icon_(no_hat) https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/Philippines-icon_(no_hat).png
// @resource Pakistan-icon https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/Pakistan-icon.png
// @resource Pakistan_(turban)-icon https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/Pakistan_(turban)-icon.png
// @resource Saint_Pierre_and_Miquelon-icon https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/Saint_Pierre_and_Miquelon-icon.png
// @resource Saint_Pierre_and_Miquelon-icon_(beret) https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/Saint_Pierre_and_Miquelon-icon_(beret).png
// @resource Pitcairn_Islands-icon https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/Pitcairn_Islands-icon.png
// @resource PuertoRico-icon https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/PuertoRico-icon.png
// @resource Palestine-icon https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/Palestine-icon.png
// @resource Palestine(hat)-icon https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/Palestine(hat)-icon.png
// @resource Portugal-icon https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/Portugal-icon.png
// @resource Palau-icon https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/Palau-icon.png
// @resource Paraguay-icon https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/Paraguay-icon.png
// @resource SpinningParaguay-icon https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/SpinningParaguay-icon.gif
// @resource Qatar-icon https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/Qatar-icon.png
// @resource Qatar-icon_(no_sunglasses) https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/Qatar-icon_(no_sunglasses).png
// @resource Réunion-icon https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/Réunion-icon.png
// @resource Romania-icon https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/Romania-icon.png
// @resource Romanian-icon https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/Romanian-icon.png
// @resource Romania-icon_(Vampire) https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/Romania-icon_(Vampire).png
// @resource Serbian_Krajina-icon https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/Serbian_Krajina-icon.png
// @resource RSK-icon https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/RSK-icon.png
// @resource Russia-icon https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/Russia-icon.png
// @resource Russia-icon_(ushanka) https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/Russia-icon_(ushanka).png
// @resource Rwanda-icon https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/Rwanda-icon.png
// @resource Saudi_Arabia-icon https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/Saudi_Arabia-icon.png
// @resource Saudi_Arabia-icon_(no_hat) https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/Saudi_Arabia-icon_(no_hat).png
// @resource Solomon_Islands-icon https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/Solomon_Islands-icon.png
// @resource Seychelles-icon https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/Seychelles-icon.png
// @resource Sudan-icon https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/Sudan-icon.png
// @resource Sudan-icon_(hat) https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/Sudan-icon_(hat).png
// @resource Sweden-icon https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/Sweden-icon.png
// @resource Singapore-icon_(Ball) https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/Singapore-icon_(Ball).png
// @resource Saint_Helena-icon https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/Saint_Helena-icon.png
// @resource Slovenia-icon https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/Slovenia-icon.png
// @resource Svalbard-icon https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/Svalbard-icon.png
// @resource Slovakia-icon https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/Slovakia-icon.png
// @resource Sierra_Leone-icon https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/Sierra_Leone-icon.png
// @resource San_Marino-icon https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/San_Marino-icon.png
// @resource Senegal-icon https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/Senegal-icon.png
// @resource Somalia-icon_(no_hat) https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/Somalia-icon_(no_hat).png
// @resource Somalia-icon https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/Somalia-icon.png
// @resource Somalia-icon_(fez) https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/Somalia-icon_(fez).png
// @resource Suriname-icon https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/Suriname-icon.png
// @resource South_Sudan-icon https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/South_Sudan-icon.png
// @resource South_Sudan-icon_(hat) https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/South_Sudan-icon_(hat).png
// @resource São_Tomé_and_Príncipe-icon https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/São_Tomé_and_Príncipe-icon.png
// @resource El_Salvador-icon https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/El_Salvador-icon.png
// @resource Sint_Maarten-icon https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/Sint_Maarten-icon.png
// @resource Syria-icon https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/Syria-icon.png
// @resource Eswatini-icon https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/Eswatini-icon.png
// @resource Turks_and_Caicos-icon https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/Turks_and_Caicos-icon.png
// @resource Chad-icon https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/Chad-icon.png
// @resource Chad-icon_(Arab) https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/Chad-icon_(Arab).png
// @resource French_Southern_and_Antarctic_Lands-icon https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/French_Southern_and_Antarctic_Lands-icon.png
// @resource Thailand-icon https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/Thailand-icon.png
// @resource Thailand-icon_(crown) https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/Thailand-icon_(crown).png
// @resource Tajikistan-icon https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/Tajikistan-icon.png
// @resource Tokelau-icon https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/Tokelau-icon.png
// @resource Timor-Leste-icon https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/Timor-Leste-icon.png
// @resource East_Timor_(hat)-icon https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/East_Timor_(hat)-icon.png
// @resource Turkmenistan-icon https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/Turkmenistan-icon.png
// @resource Tunisia-icon https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/Tunisia-icon.png
// @resource Tunisia-icon_(fez) https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/Tunisia-icon_(fez).png
// @resource Tunisia-icon_(Arab_Hat) https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/Tunisia-icon_(Arab_Hat).png
// @resource Tonga-icon https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/Tonga-icon.png
// @resource Türkiye-icon https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/Türkiye-icon.png
// @resource Türkiye-icon_(fez) https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/Türkiye-icon_(fez).png
// @resource Trinidad_and_Tobago-icon https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/Trinidad_and_Tobago-icon.png
// @resource Tuvalu-icon https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/Tuvalu-icon.png
// @resource Taiwan-icon https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/Taiwan-icon.png
// @resource Tanzania-icon https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/Tanzania-icon.png
// @resource Ukraine-icon https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/Ukraine-icon.png
// @resource Ukraine-icon_(1991) https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/Ukraine-icon_(1991).png
// @resource Uganda-icon https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/Uganda-icon.png
// @resource Uruguay-icon https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/Uruguay-icon.png
// @resource Uruguay-icon_(high) https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/Uruguay-icon_(high).png
// @resource Uzbekistan-icon https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/Uzbekistan-icon.png
// @resource Uzbek-icon_(Tubetei) https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/Uzbek-icon_(Tubetei).png
// @resource Vatican_City-icon https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/Vatican_City-icon.png
// @resource Saint_Vincent_and_the_Grenadines-icon https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/Saint_Vincent_and_the_Grenadines-icon.png
// @resource Venezuela-icon_(without_hat) https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/Venezuela-icon_(without_hat).png
// @resource Venezuela-icon https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/Venezuela-icon.png
// @resource British_Virgin_Islands-icon https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/British_Virgin_Islands-icon.png
// @resource Virgin_Islands-icon https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/Virgin_Islands-icon.png
// @resource Vietnam-icon_(no_hat) https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/Vietnam-icon_(no_hat).png
// @resource Vietnam-icon https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/Vietnam-icon.png
// @resource Vietnamese-icon https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/Vietnamese-icon.png
// @resource Vietnam-icon_(open_eyes) https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/Vietnam-icon_(open_eyes).png
// @resource Vietnam_(no_hat,_big_eyes)-icon https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/Vietnam_(no_hat,_big_eyes)-icon.png
// @resource Vanuatu-icon https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/Vanuatu-icon.png
// @resource Wales-icon https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/Wales-icon.png
// @resource Wallis_and_Futuna-icon https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/Wallis_and_Futuna-icon.png
// @resource Samoa-icon https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/Samoa-icon.png
// @resource Kosovo-icon https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/Kosovo-icon.png
// @resource Kosovo-icon_(hat) https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/Kosovo-icon_(hat).png
// @resource Yemen-icon https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/Yemen-icon.png
// @resource Yemen(hat)-icon https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/Yemen(hat)-icon.png
// @resource Mayotte-icon https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/Mayotte-icon.png
// @resource South_Africa-icon https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/South_Africa-icon.png
// @resource Zambia-icon https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/Zambia-icon.png
// @resource Zimbabwe-icon https://raw.githubusercontent.com/dustcoal/mam-polandball/refs/heads/main/balls/Zimbabwe-icon.png
//
// ==/UserScript==

var settings = null;
var flag_dict = null;
var rand_emoji = null;

const default_flag_dict = {
    /* Memeflags */
    "xx": {
        "name": "Pirate",
        "options": ['polandball_pirate'],
        "selected": null
    },


    /* Real flags */
    "ad": {
        "name": "Andorra",
        "options": ["Andorra-icon", "Andorra-icon_(hat)"],
        "selected": null
    },
    "ae": {
        "name": "United Arab Emirates",
        "options": ["UAE-icon", "UAE-icon_(hat)"],
        "selected": null
    },
    "af": {
        "name": "Afghanistan",
        "options": ["Afghanistan-icon", "Taliban-icon"],
        "selected": null
    },
    "ag": {
        "name": "Antigua and Barbuda",
        "options": ["Antigua_and_Barbuda-icon"],
        "selected": null
    },
    "ai": {
        "name": "Anguilla",
        "options": ["Anguilla-icon"],
        "selected": null
    },
    "al": {
        "name": "Albania",
        "options": ["Albania-icon", "Albania-icon_(hat)"],
        "selected": null
    },
    "am": {
        "name": "Armenia",
        "options": ["Armenia-icon"],
        "selected": null
    },
    "an": {
        "name": "Netherlands Antilles",
        "options": ["Netherlands_Antilles-icon"],
        "selected": null
    },
    "ao": {
        "name": "Angola",
        "options": ["Angola-icon"],
        "selected": null
    },
    "aq": {
        "name": "Antarctica",
        "options": ["Antarctica-icon_No_Goggles", "Antarctica-icon", "Antarctica-icon_True_South_No_Goggles", "Antarctica-icon_True_South"],
        "selected": null
    },
    "ar": {
        "name": "Argentina",
        "options": ["Argentina-icon"],
        "selected": null
    },
    "as": {
        "name": "American Samoa",
        "options": ["American_Samoa-icon"],
        "selected": null
    },
    "at": {
        "name": "Austria",
        "options": ["Austria-icon", "Austria-icon_(Coat_of_Arms)", "Austria-icon_(glasses)"],
        "selected": null
    },
    "au": {
        "name": "Australia",
        "options": ["Australia-icon", "Australia-icon_(no_hat)", "Ɐᴉlɐɹʇsn∀-icon"],
        "selected": null
    },
    "aw": {
        "name": "Aruba",
        "options": ["Aruba-icon"],
        "selected": null
    },
    "ax": {
        "name": "Åland Islands",
        "options": ["Åland-icon"],
        "selected": null
    },
    "az": {
        "name": "Azerbaijan",
        "options": ["Azerbaijan-icon"],
        "selected": null
    },
    "ba": {
        "name": "Bosnia and Herzegovina",
        "options": ["Bosnia_and_Herzegovina-icon", "Bosnia-icon_(hat)"],
        "selected": null
    },
    "bb": {
        "name": "Barbados",
        "options": ["Barbados-icon"],
        "selected": null
    },
    "bd": {
        "name": "Bangladesh",
        "options": ["Bangladesh-icon", "Bangladesh-icon_(turban)"],
        "selected": null
    },
    "be": {
        "name": "Belgium",
        "options": ["Belgium-icon"],
        "selected": null
    },
    "bf": {
        "name": "Burkina Faso",
        "options": ["Burkina_Faso-icon"],
        "selected": null
    },
    "bg": {
        "name": "Bulgaria",
        "options": ["Bulgaria-icon"],
        "selected": null
    },
    "bh": {
        "name": "Bahrain",
        "options": ["Bahrain-icon", "Bahrain-icon_(hat)"],
        "selected": null
    },
    "bi": {
        "name": "Burundi",
        "options": ["Burundi-icon"],
        "selected": null
    },
    "bj": {
        "name": "Benin",
        "options": ["Benin-icon"],
        "selected": null
    },
    "bl": {
        "name": "Saint Barthélemy",
        "options": ["Saint_Barthélemy-icon"],
        "selected": null
    },
    "bm": {
        "name": "Bermuda",
        "options": ["Bermuda-icon"],
        "selected": null
    },
    "bn": {
        "name": "Brunei Darussalam",
        "options": ["Brunei-icon", "Brunei-icon_(hat)"],
        "selected": null
    },
    "bo": {
        "name": "Bolivia, Plurinational State of",
        "options": ["Bolivia-icon"],
        "selected": null
    },
    "bq": {
        "name": "Bonaire, Sint Eustatius and Saba",
        "options": ["Bonaire-icon"],
        "selected": null
    },
    "br": {
        "name": "Brazil",
        "options": ["Brazil-icon"],
        "selected": null
    },
    "bs": {
        "name": "Bahamas",
        "options": ["Bahamas-icon"],
        "selected": null
    },
    "bt": {
        "name": "Bhutan",
        "options": ["Bhutan-icon"],
        "selected": null
    },
    "bv": {
        "name": "Bouvet Island",
        "options": ["Bouvet_Island-icon"],
        "selected": null
    },
    "bw": {
        "name": "Botswana",
        "options": ["Botswana-icon"],
        "selected": null
    },
    "by": {
        "name": "Belarus",
        "options": ["Belarus-icon"],
        "selected": null
    },
    "bz": {
        "name": "Belize",
        "options": ["Belize-icon"],
        "selected": null
    },
    "ca": {
        "name": "Canada",
        "options": ["Canada-icon_(no_hat)", "Canada-icon", "Canada-icon_(tangle)"],
        "selected": null
    },
    "cc": {
        "name": "Cocos (Keeling) Islands",
        "options": ["Cocos_Islands-icon"],
        "selected": null
    },
    "cd": {
        "name": "Congo, The Democratic Republic of the",
        "options": ["DRC-icon"],
        "selected": null
    },
    "cf": {
        "name": "Central African Republic",
        "options": ["CAR-icon"],
        "selected": null
    },
    "cg": {
        "name": "Congo",
        "options": ["French_Congo-icon"],
        "selected": null
    },
    "ch": {
        "name": "Switzerland",
        "options": ['Switzerland_icon', 'Switzerland_icon_%28Guard%29'],
        "selected": null
    },
    "ci": {
        "name": "Côte d'Ivoire",
        "options": ["Côte_d'Ivoire-icon"],
        "selected": null
    },
    "ck": {
        "name": "Cook Islands",
        "options": ["Cook_Islands-icon_(no_hat)", "Cook_Islands-icon", "Cook_Islands_Egg"],
        "selected": null
    },
    "cl": {
        "name": "Chile",
        "options": ["Chile-icon", "Chile-icon_pickelhaube"],
        "selected": null
    },
    "cm": {
        "name": "Cameroon",
        "options": ["Cameroon-icon", "Meme_(Cameroon)-icon"],
        "selected": null
    },
    "cn": {
        "name": "China",
        "options": ["China-icon", "China-icon_(hat)", "China-icon_(Nezha)", "China-icon_(big_eyes)"],
        "selected": null
    },
    "co": {
        "name": "Colombia",
        "options": ["Colombia-icon", "Colombia_decorated-icon"],
        "selected": null
    },
    "cr": {
        "name": "Costa Rica",
        "options": ["Costa_Rica-icon"],
        "selected": null
    },
    "cs": {
        "name": "Serbia and Montenegro",
        "options": ["Panslavic-icon"],
        "selected": null
    },
    "cu": {
        "name": "Cuba",
        "options": ["Cuba-icon", "Cuba-icon_(Castro)"],
        "selected": null
    },
    "cv": {
        "name": "Cabo Verde",
        "options": ["Cabo_Verde-icon"],
        "selected": null
    },
    "cw": {
        "name": "Curaçao",
        "options": ["Curaçao-icon"],
        "selected": null
    },
    "cx": {
        "name": "Christmas Island",
        "options": ["Christmas_Island-icon"],
        "selected": null
    },
    "cy": {
        "name": "Cyprus",
        "options": ["Cyprus-icon"],
        "selected": null
    },
    "cz": {
        "name": "Czechia",
        "options": ["Czechia-icon"],
        "selected": null
    },
    "de": {
        "name": "Germany",
        "options": ["Germany-icon", "Germany-icon_(Coat_of_Arms)", "Germany_Deuchland-icon"],
        "selected": null
    },
    "dj": {
        "name": "Djibouti",
        "options": ["Djibouti-icon"],
        "selected": null
    },
    "dk": {
        "name": "Denmark",
        "options": ['Denmark_icon', 'Denmark_icon_%28LEGO%29'],
        "selected": null
    },
    "dm": {
        "name": "Dominica",
        "options": ["Dominica-icon"],
        "selected": null
    },
    "do": {
        "name": "Dominican Republic",
        "options": ["DR-icon"],
        "selected": null
    },
    "dz": {
        "name": "Algeria",
        "options": ["Algeria-icon", "Algeria-icon_(Arabic)"],
        "selected": null
    },
    "ec": {
        "name": "Ecuador",
        "options": ["Ecuador-icon", "Ecuador-icon_(hat)"],
        "selected": null
    },
    "ee": {
        "name": "Estonia",
        "options": ["Estonia-icon"],
        "selected": null
    },
    "eg": {
        "name": "Egypt",
        "options": ["Egypt-icon_(no_hat)", "Egypt-icon", "Egypt-icon_(kandura)", "Egypt-icon_(pharaoh_hat)"],
        "selected": null
    },
    "eh": {
        "name": "Western Sahara",
        "options": ["Western_Sahara-icon"],
        "selected": null
    },
    "xe": {
        "name": "???",
        "options": ["Earth-icon"],
        "selected": null
    },
    "er": {
        "name": "Eritrea",
        "options": ["Eritrea-icon"],
        "selected": null
    },
    "es": {
        "name": "Spain",
        "options": ["Spain-icon", "Spain-icon_(Crown)"],
        "selected": null
    },
    "et": {
        "name": "Ethiopia",
        "options": ["Ethiopia-icon", "Ethiopia_Traditional-icon"],
        "selected": null
    },
    "eu": {
        "name": "Europa",
        "options": ["EU-icon"],
        "selected": null
    },
    "fa": {
        "name": "???",
        "options": ["Earth-icon"],
        "selected": null
    },
    "fi": {
        "name": "Finland",
        "options": ["Finland-icon", "Finland-icon_(ushanka)"],
        "selected": null
    },
    "fj": {
        "name": "Fiji",
        "options": ["Fiji-icon"],
        "selected": null
    },
    "fk": {
        "name": "Falkland Islands (Malvinas)",
        "options": ["Falklands-icon"],
        "selected": null
    },
    "fm": {
        "name": "Micronesia, Federated States of",
        "options": ["Micronesia-icon"],
        "selected": null
    },
    "fo": {
        "name": "Faroe Islands",
        "options": ["Faroe-icon"],
        "selected": null
    },
    "fr": {
        "name": "France",
        "options": ["France-icon", "France-icon_(beret)"],
        "selected": null
    },
    "ga": {
        "name": "Gabon",
        "options": ["Gabon-icon"],
        "selected": null
    },
    "gb": {
        "name": "United Kingdom",
        "options": ['UK_icon', 'UK_icon_%28no_hat%29', 'British_Empire_icon'],
        "selected": null
    },
    "gd": {
        "name": "Grenada",
        "options": ["Grenada-icon"],
        "selected": null
    },
    "ge": {
        "name": "Georgia",
        "options": ["Georgia-icon", "Georgia(hat)-icon"],
        "selected": null
    },
    "gf": {
        "name": "French Guiana",
        "options": ["French_Guiana-icon"],
        "selected": null
    },
    "gg": {
        "name": "Guernsey",
        "options": ["Guernsey-icon"],
        "selected": null
    },
    "gh": {
        "name": "Ghana",
        "options": ["Ghana-icon", "GhanaCoffinDance-icon"],
        "selected": null
    },
    "gi": {
        "name": "Gibraltar",
        "options": ["Gibraltar-icon"],
        "selected": null
    },
    "gl": {
        "name": "Greenland",
        "options": ["Greenland-icon"],
        "selected": null
    },
    "gm": {
        "name": "Gambia",
        "options": ["Gambia-icon"],
        "selected": null
    },
    "gn": {
        "name": "Guinea",
        "options": ["Guinea-icon"],
        "selected": null
    },
    "gp": {
        "name": "Guadeloupe",
        "options": ["Guadeloupe-icon", "Guadeloupe-icon_2"],
        "selected": null
    },
    "gq": {
        "name": "Equatorial Guinea",
        "options": ["Equatorial_Guinea-icon", "Equatorial_Guinea_(Sunglasses)-icon"],
        "selected": null
    },
    "gr": {
        "name": "Greece",
        "options": ["Greece-icon"],
        "selected": null
    },
    "gs": {
        "name": "South Georgia and the South Sandwich Islands",
        "options": ["South_Georgia_and_the_South_Sandwich_Islands-icon"],
        "selected": null
    },
    "gt": {
        "name": "Guatemala",
        "options": ["Guatemala-icon"],
        "selected": null
    },
    "gu": {
        "name": "Guam",
        "options": ["Guam-icon"],
        "selected": null
    },
    "gw": {
        "name": "Guinea-Bissau",
        "options": ["Guinea-Bissau-icon"],
        "selected": null
    },
    "gy": {
        "name": "Guyana",
        "options": ["Guyana-icon"],
        "selected": null
    },
    "hk": {
        "name": "Hong Kong",
        "options": ["Hong_Kong-icon", "Hong_Kong_(big_eyes)-icon", "Hong_Kong-icon_Tophat", "Heunggong_(big_eyes)-icon"],
        "selected": null
    },
    "hm": {
        "name": "Heard Island and McDonald Islands",
        "options": ["Heard_Island_and_McDonald_Islands-icon"],
        "selected": null
    },
    "hn": {
        "name": "Honduras",
        "options": ["Honduras-icon"],
        "selected": null
    },
    "hr": {
        "name": "Croatia",
        "options": ["Croatia-icon"],
        "selected": null
    },
    "ht": {
        "name": "Haiti",
        "options": ["Haiti-icon"],
        "selected": null
    },
    "hu": {
        "name": "Hungary",
        "options": ["Hungary-icon", "Kingdom_of_Hungary-icon", "Hungary-icon_(hussar_hat)"],
        "selected": null
    },
    "id": {
        "name": "Indonesia",
        "options": ["Indonesia-icon_(no_hat)", "Indonesia-icon", "Indonesia-icon_(Asian_eyes)"],
        "selected": null
    },
    "ie": {
        "name": "Ireland",
        "options": ["Ireland-icon", "Ireland_Leprechaun"],
        "selected": null
    },
    "il": {
        "name": "Israel",
        "options": ['Israel_icon', 'IsraelSpin_icon'],
        "selected": null
    },
    "im": {
        "name": "Isle of Man",
        "options": ["Isle_of_Man-icon"],
        "selected": null
    },
    "in": {
        "name": "India",
        "options": ["India-icon", "India-icon_(hat)"],
        "selected": null
    },
    "io": {
        "name": "British Indian Ocean Territory",
        "options": ["British_Indian_Ocean_Territory-icon"],
        "selected": null
    },
    "iq": {
        "name": "Iraq",
        "options": ["Iraq-icon", "Iraq-icon_(hat)"],
        "selected": null
    },
    "ir": {
        "name": "Iran, Islamic Republic of",
        "options": ["Iran-icon", "Iran-icon_(hat)"],
        "selected": null
    },
    "is": {
        "name": "Iceland",
        "options": ["Iceland-icon"],
        "selected": null
    },
    "it": {
        "name": "Italy",
        "options": ["Italy-icon", "Italy-icon_(boot)", "Italian"],
        "selected": null
    },
    "je": {
        "name": "Jersey",
        "options": ["Jersey-icon"],
        "selected": null
    },
    "jm": {
        "name": "Jamaica",
        "options": ["Jamaica-icon", "Jamaica-icon_(high)"],
        "selected": null
    },
    "jo": {
        "name": "Jordan",
        "options": ["Jordan-icon"],
        "selected": null
    },
    "jp": {
        "name": "Japan",
        "options": ["Japan-icon", "Japan-icon_(open_eyes)", "Japan-icon_(cat)", "Japan"],
        "selected": null
    },
    "ke": {
        "name": "Kenya",
        "options": ["Kenya-icon"],
        "selected": null
    },
    "kg": {
        "name": "Kyrgyzstan",
        "options": ["Kyrgyzstan-icon", "Kyrgyz(Ak-kalpak)-icon"],
        "selected": null
    },
    "kh": {
        "name": "Cambodia",
        "options": ["Cambodia-icon", "Cambodia-icon_(hat)"],
        "selected": null
    },
    "ki": {
        "name": "Kiribati",
        "options": ["Kiribati-icon"],
        "selected": null
    },
    "km": {
        "name": "Comoros",
        "options": ["Comoros-icon"],
        "selected": null
    },
    "kn": {
        "name": "Saint Kitts and Nevis",
        "options": ["Saint_Kitts_and_Nevis-icon"],
        "selected": null
    },
    "kp": {
        "name": "Korea, Democratic People's Republic of",
        "options": ["North_Korea-icon", "North_Korea_(dark_colors)-icon", "North_Korea-icon_(angry)", "North_Korea_(dark_colors,_angry)-icon"],
        "selected": null
    },
    "kr": {
        "name": "Korea, Republic of",
        "options": ["Korea-Empire-icon"],
        "selected": null
    },
    "kw": {
        "name": "Kuwait",
        "options": ["Kuwait-icon"],
        "selected": null
    },
    "ky": {
        "name": "Cayman Islands",
        "options": ["Cayman_Islands-icon"],
        "selected": null
    },
    "kz": {
        "name": "Kazakhstan",
        "options": ["Kazakhstan-icon", "Kazakh-icon_(hat)"],
        "selected": null
    },
    "la": {
        "name": "Lao People's Democratic Republic",
        "options": ["Laos-icon", "Laos-icon_(hat)"],
        "selected": null
    },
    "lb": {
        "name": "Lebanon",
        "options": ["Lebanon-icon", "Lebanon-icon_(Fez)"],
        "selected": null
    },
    "lc": {
        "name": "Saint Lucia",
        "options": ["Saint_Lucia-icon"],
        "selected": null
    },
    "li": {
        "name": "Liechtenstein",
        "options": ["Liechtenstein-icon", "Liechtenstein-icon_(Crown)"],
        "selected": null
    },
    "lk": {
        "name": "Sri Lanka",
        "options": ["Sri_Lanka-icon"],
        "selected": null
    },
    "lr": {
        "name": "Liberia",
        "options": ["Liberia-icon"],
        "selected": null
    },
    "ls": {
        "name": "Lesotho",
        "options": ["Lesotho-icon"],
        "selected": null
    },
    "lt": {
        "name": "Lithuania",
        "options": ["Lithuania-icon"],
        "selected": null
    },
    "lu": {
        "name": "Luxembourg",
        "options": ["Luxembourg-icon"],
        "selected": null
    },
    "lv": {
        "name": "Latvia",
        "options": ["Latvia-icon"],
        "selected": null
    },
    "ly": {
        "name": "Libya",
        "options": ["Libya-icon", "Libya-icon_(Arabic)"],
        "selected": null
    },
    "ma": {
        "name": "Morocco",
        "options": ["Morocco-icon_(no_hat)", "Morocco-icon", "Morocco(Arab_hat)-icon"],
        "selected": null
    },
    "mc": {
        "name": "Monaco",
        "options": ["Monaco-icon_(no_glasses)", "Monaco-icon"],
        "selected": null
    },
    "md": {
        "name": "Moldova, Republic of",
        "options": ["Moldova-icon"],
        "selected": null
    },
    "me": {
        "name": "Montenegro",
        "options": ["Montenegro-icon"],
        "selected": null
    },
    "mf": {
        "name": "Saint Martin (French part)",
        "options": ["Saint_Martin-icon", "Saint_Martin-icon_(alt)"],
        "selected": null
    },
    "mg": {
        "name": "Madagascar",
        "options": ["Madagascar-icon"],
        "selected": null
    },
    "mh": {
        "name": "Marshall Islands",
        "options": ["Marshall_Islands-icon"],
        "selected": null
    },
    "mk": {
        "name": "North Macedonia",
        "options": ["North_Macedonia-icon", "Macedonia-icon_(gladiator)"],
        "selected": null
    },
    "ml": {
        "name": "Mali",
        "options": ["Mali-icon"],
        "selected": null
    },
    "mm": {
        "name": "Myanmar",
        "options": ["Myanmar-icon", "Myanmar-icon_(hat)"],
        "selected": null
    },
    "mn": {
        "name": "Mongolia",
        "options": ["Mongolia-icon", "Mongolia_(hat)-icon", "Mongolian-icon"],
        "selected": null
    },
    "mo": {
        "name": "Macao",
        "options": ["Macau-icon", "Macau_(big_eyes)-icon"],
        "selected": null
    },
    "mp": {
        "name": "Northern Mariana Islands",
        "options": ["Northern_Mariana_Islands-icon"],
        "selected": null
    },
    "mq": {
        "name": "Martinique",
        "options": ["Martinique-icon"],
        "selected": null
    },
    "mr": {
        "name": "Mauritania",
        "options": ["Mauritania-icon", "Mauritania-icon_(hat)"],
        "selected": null
    },
    "ms": {
        "name": "Montserrat",
        "options": ["UK_icon"],
        "selected": null
    },
    "mt": {
        "name": "Malta",
        "options": ["Malta-icon"],
        "selected": null
    },
    "mu": {
        "name": "Mauritius",
        "options": ["Mauritius-icon"],
        "selected": null
    },
    "mv": {
        "name": "Maldives",
        "options": ["Maldives-icon"],
        "selected": null
    },
    "mw": {
        "name": "Malawi",
        "options": ["Malawi-icon"],
        "selected": null
    },
    "mx": {
        "name": "Mexico",
        "options": ["Mexico-icon_(No_Hat)", "Mexico-icon"],
        "selected": null
    },
    "my": {
        "name": "Malaysia",
        "options": ["Malaysia-icon", "Malaysia-icon_(hat)"],
        "selected": null
    },
    "mz": {
        "name": "Mozambique",
        "options": ["Mozambique-icon"],
        "selected": null
    },
    "na": {
        "name": "Namibia",
        "options": ["Namibia-icon"],
        "selected": null
    },
    "nc": {
        "name": "New Caledonia",
        "options": ["New_Caledonia-icon"],
        "selected": null
    },
    "ne": {
        "name": "Niger",
        "options": ["Niger-icon"],
        "selected": null
    },
    "nf": {
        "name": "Norfolk Island",
        "options": ["Norfolk_Island-icon"],
        "selected": null
    },
    "ng": {
        "name": "Nigeria",
        "options": ["Nigeria-icon"],
        "selected": null
    },
    "ni": {
        "name": "Nicaragua",
        "options": ["Nicaragua-icon", "Nicaragua-icon_(Hat)"],
        "selected": null
    },
    "nl": {
        "name": "Netherlands",
        "options": ["Netherlands-icon", "Netherlands-icon_(high)"],
        "selected": null
    },
    "no": {
        "name": "Norway",
        "options": ["Norway-icon", "Norway-icon_(Viking)"],
        "selected": null
    },
    "np": {
        "name": "Nepal",
        "options": ["Nepal-icon"],
        "selected": null
    },
    "nr": {
        "name": "Nauru",
        "options": ["Nauru-icon"],
        "selected": null
    },
    "nu": {
        "name": "Niue",
        "options": ["Niue-icon"],
        "selected": null
    },
    "nz": {
        "name": "New Zealand",
        "options": ["New_Zealand-icon_(no_hat)", "New_Zealand-icon"],
        "selected": null
    },
    "om": {
        "name": "Oman",
        "options": ["Oman-icon", "Oman-icon_(hat)", "Oman-icon_(arab_hat)"],
        "selected": null
    },
    "pa": {
        "name": "Panama",
        "options": ["Panama-icon"],
        "selected": null
    },
    "pe": {
        "name": "Peru",
        "options": ["Peru-icon", "Peru-icon_(hat)"],
        "selected": null
    },
    "pf": {
        "name": "French Polynesia",
        "options": ["French_Polynesia-icon"],
        "selected": null
    },
    "pg": {
        "name": "Papua New Guinea",
        "options": ["Papua_New_Guinea-icon"],
        "selected": null
    },
    "ph": {
        "name": "Philippines",
        "options": ["Philippines-icon_(no_hat)"],
        "selected": null
    },
    "pk": {
        "name": "Pakistan",
        "options": ["Pakistan-icon", "Pakistan_(turban)-icon"],
        "selected": null
    },
    "pl": {
        "name": "Poland",
        "options": ['Poland_icon', 'Poland_icon_%28space%29', 'Polish_icon'],
        "selected": null
    },
    "pm": {
        "name": "Saint Pierre and Miquelon",
        "options": ["Saint_Pierre_and_Miquelon-icon", "Saint_Pierre_and_Miquelon-icon_(beret)"],
        "selected": null
    },
    "pn": {
        "name": "Pitcairn",
        "options": ["Pitcairn_Islands-icon"],
        "selected": null
    },
    "pr": {
        "name": "Puerto Rico",
        "options": ["PuertoRico-icon"],
        "selected": null
    },
    "ps": {
        "name": "Palestine, State of",
        "options": ["Palestine-icon", "Palestine(hat)-icon"],
        "selected": null
    },
    "pt": {
        "name": "Portugal",
        "options": ["Portugal-icon"],
        "selected": null
    },
    "pw": {
        "name": "Palau",
        "options": ["Palau-icon"],
        "selected": null
    },
    "py": {
        "name": "Paraguay",
        "options": ["Paraguay-icon", "SpinningParaguay-icon"],
        "selected": null
    },
    "qa": {
        "name": "Qatar",
        "options": ["Qatar-icon", "Qatar-icon_(no_sunglasses)"],
        "selected": null
    },
    "re": {
        "name": "Réunion",
        "options": ["Réunion-icon"],
        "selected": null
    },
    "ro": {
        "name": "Romania",
        "options": ["Romania-icon", "Romanian-icon", "Romania-icon_(Vampire)"],
        "selected": null
    },
    "rs": {
        "name": "Serbia",
        "options": ["Serbian_Krajina-icon", "RSK-icon"],
        "selected": null
    },
    "ru": {
        "name": "Russian Federation",
        "options": ["Russia-icon", "Russia-icon_(ushanka)"],
        "selected": null
    },
    "rw": {
        "name": "Rwanda",
        "options": ["Rwanda-icon"],
        "selected": null
    },
    "sa": {
        "name": "Saudi Arabia",
        "options": ["Saudi_Arabia-icon", "Saudi_Arabia-icon_(no_hat)"],
        "selected": null
    },
    "sb": {
        "name": "Solomon Islands",
        "options": ["Solomon_Islands-icon"],
        "selected": null
    },
    "sc": {
        "name": "Seychelles",
        "options": ["Seychelles-icon"],
        "selected": null
    },
    "xs": {
        "name": "??? Old Serbia country code but flag doesn't match",
        "options": ["Earth-icon"],
        "selected": null
    },
    "sd": {
        "name": "Sudan",
        "options": ["Sudan-icon", "Sudan-icon_(hat)"],
        "selected": null
    },
    "se": {
        "name": "Sweden",
        "options": ["Sweden-icon"],
        "selected": null
    },
    "sg": {
        "name": "Singapore",
        "options": ["Singapore-icon_(Ball)"],
        "selected": null
    },
    "sh": {
        "name": "Saint Helena, Ascension and Tristan da Cunha",
        "options": ["Saint_Helena-icon"],
        "selected": null
    },
    "si": {
        "name": "Slovenia",
        "options": ["Slovenia-icon"],
        "selected": null
    },
    "sj": {
        "name": "Svalbard and Jan Mayen",
        "options": ["Svalbard-icon"],
        "selected": null
    },
    "sk": {
        "name": "Slovakia",
        "options": ["Slovakia-icon"],
        "selected": null
    },
    "sl": {
        "name": "Sierra Leone",
        "options": ["Sierra_Leone-icon"],
        "selected": null
    },
    "sm": {
        "name": "San Marino",
        "options": ["San_Marino-icon"],
        "selected": null
    },
    "sn": {
        "name": "Senegal",
        "options": ["Senegal-icon"],
        "selected": null
    },
    "so": {
        "name": "Somalia",
        "options": ["Somalia-icon_(no_hat)", "Somalia-icon", "Somalia-icon_(fez)"],
        "selected": null
    },
    "sr": {
        "name": "Suriname",
        "options": ["Suriname-icon"],
        "selected": null
    },
    "ss": {
        "name": "South Sudan",
        "options": ["South_Sudan-icon", "South_Sudan-icon_(hat)"],
        "selected": null
    },
    "st": {
        "name": "Sao Tome and Principe",
        "options": ["São_Tomé_and_Príncipe-icon"],
        "selected": null
    },
    "sv": {
        "name": "El Salvador",
        "options": ["El_Salvador-icon"],
        "selected": null
    },
    "sx": {
        "name": "Sint Maarten (Dutch part)",
        "options": ["Sint_Maarten-icon"],
        "selected": null
    },
    "sy": {
        "name": "Syrian Arab Republic",
        "options": ["Syria-icon", "Syria-icon_(kandura)"],
        "selected": null
    },
    "sz": {
        "name": "Eswatini",
        "options": ["Eswatini-icon"],
        "selected": null
    },
    "tc": {
        "name": "Turks and Caicos Islands",
        "options": ["Turks_and_Caicos-icon"],
        "selected": null
    },
    "td": {
        "name": "Chad",
        "options": ["Chad-icon", "Chad-icon_(Arab)"],
        "selected": null
    },
    "tf": {
        "name": "French Southern Territories",
        "options": ["French_Southern_and_Antarctic_Lands-icon"],
        "selected": null
    },
    "tg": {
        "name": "Togo",
        "options": ["Togo-icon"],
        "selected": null
    },
    "th": {
        "name": "Thailand",
        "options": ["Thailand-icon", "Thailand-icon_(crown)"],
        "selected": null
    },
    "tj": {
        "name": "Tajikistan",
        "options": ["Tajikistan-icon"],
        "selected": null
    },
    "tk": {
        "name": "Tokelau",
        "options": ["Tokelau-icon"],
        "selected": null
    },
    "tl": {
        "name": "Timor-Leste",
        "options": ["Timor-Leste-icon", "East_Timor_(hat)-icon"],
        "selected": null
    },
    "tm": {
        "name": "Turkmenistan",
        "options": ["Turkmenistan-icon"],
        "selected": null
    },
    "tn": {
        "name": "Tunisia",
        "options": ["Tunisia-icon", "Tunisia-icon_(fez)", "Tunisia-icon_(Arab_Hat)"],
        "selected": null
    },
    "to": {
        "name": "Tonga",
        "options": ["Tonga-icon"],
        "selected": null
    },
    "tr": {
        "name": "Türkiye",
        "options": ["Türkiye-icon", "Türkiye-icon_(fez)"],
        "selected": null
    },
    "tt": {
        "name": "Trinidad and Tobago",
        "options": ["Trinidad_and_Tobago-icon"],
        "selected": null
    },
    "tv": {
        "name": "Tuvalu",
        "options": ["Tuvalu-icon"],
        "selected": null
    },
    "tw": {
        "name": "Taiwan, Province of China",
        "options": ["Taiwan-icon"],
        "selected": null
    },
    "tz": {
        "name": "Tanzania, United Republic of",
        "options": ["Tanzania-icon"],
        "selected": null
    },
    "ua": {
        "name": "Ukraine",
        "options": ["Ukraine-icon", "Ukraine-icon_(1991)"],
        "selected": null
    },
    "ug": {
        "name": "Uganda",
        "options": ["Uganda-icon"],
        "selected": null
    },
    "um": {
        "name": "United States Minor Outlying Islands",
        "options": ["USA_icon"],
        "selected": null
    },
    "us": {
        "name": "United States",
        "options": ['USA_icon', 'USA_icon_%28no_sunglasses%29', 'USA_Empire_icon', 'Murica_icon', 'Murican_icon'],
        "selected": null
    },
    "uy": {
        "name": "Uruguay",
        "options": ["Uruguay-icon", "Uruguay-icon_(high)"],
        "selected": null
    },
    "uz": {
        "name": "Uzbekistan",
        "options": ["Uzbekistan-icon", "Uzbek-icon_(Tubetei)"],
        "selected": null
    },
    "va": {
        "name": "Holy See (Vatican City State)",
        "options": ["Vatican_City-icon"],
        "selected": null
    },
    "vc": {
        "name": "Saint Vincent and the Grenadines",
        "options": ["Saint_Vincent_and_the_Grenadines-icon"],
        "selected": null
    },
    "ve": {
        "name": "Venezuela, Bolivarian Republic of",
        "options": ["Venezuela-icon_(without_hat)", "Venezuela-icon"],
        "selected": null
    },
    "vg": {
        "name": "Virgin Islands, British",
        "options": ["British_Virgin_Islands-icon"],
        "selected": null
    },
    "vi": {
        "name": "Virgin Islands, U.S.",
        "options": ["Virgin_Islands-icon"],
        "selected": null
    },
    "vn": {
        "name": "Viet Nam",
        "options": ["Vietnam-icon_(no_hat)", "Vietnam-icon", "Vietnamese-icon", "Vietnam-icon_(open_eyes)", "Vietnam_(no_hat,_big_eyes)-icon"],
        "selected": null
    },
    "vu": {
        "name": "Vanuatu",
        "options": ["Vanuatu-icon"],
        "selected": null
    },
    "gb-wls": {
        "name": "Wales",
        "options": ["Wales-icon"],
        "selected": null
    },
    "wf": {
        "name": "Wallis and Futuna",
        "options": ["Wallis_and_Futuna-icon"],
        "selected": null
    },
    "ws": {
        "name": "Samoa",
        "options": ["Samoa-icon"],
        "selected": null
    },
    "xk": {
        "name": "Kosovo",
        "options": ["Kosovo-icon", "Kosovo-icon_(hat)"],
        "selected": null
    },
    "UNKNOWN": {
        "name": "Unknown (should be default)",
        "options": ["Earth-icon"],
        "selected": null
    },
    "ye": {
        "name": "Yemen",
        "options": ["Yemen-icon", "Yemen(hat)-icon"],
        "selected": null
    },
    "yt": {
        "name": "Mayotte",
        "options": ["Mayotte-icon"],
        "selected": null
    },
    "za": {
        "name": "South Africa",
        "options": ["South_Africa-icon"],
        "selected": null
    },
    "zm": {
        "name": "Zambia",
        "options": ["Zambia-icon"],
        "selected": null
    },
    "zw": {
        "name": "Zimbabwe",
        "options": ["Zimbabwe-icon"],
        "selected": null
    }
}

const widthOverrides = {
  "polandball_pirate": "23",
}

const default_settings = {};

function loadDefaultSettings() {
  let settings_entry = localStorage.getItem('mam_polandball_settings');
  if (settings_entry) {
    settings = JSON.parse(settings_entry);

  } else {
    settings = default_settings;
  }

  let flag_dict_entry = localStorage.getItem('mam_polandball_flag_dict');
  if (flag_dict_entry) {
    flag_dict = JSON.parse(flag_dict_entry);
    for (key in default_flag_dict) {
      // getting new countries if needed
      if (!(key in flag_dict)) {
        flag_dict[key] = {};
        flag_dict[key][name] = default_flag_dict[key][name];
        flag_dict[key][selected] = default_flag_dict[key][selected];
      }
      // We override available options in any case
      flag_dict[key]["options"] = [];
      for (let i = 0; i < default_flag_dict[key]["options"].length; i ++) {
        flag_dict[key]["options"].push(default_flag_dict[key]["options"][i]);
      }
    }

  } else {
    flag_dict = default_flag_dict;
  }


  if (!('x' in settings)) {

  }

  for (key in flag_dict) {
    entry = flag_dict[key];
    if (entry["options"].length == 0) {
      continue ;
    }
    let sel = entry["selected"];
    if (!sel) {
      sel = entry["options"][0];
    }
    const style = document.createElement('style');
    style.id = key + '_stylesheet';

    let width = "auto";
    if (sel in widthOverrides) {
      width = `${widthOverrides[sel]}px`;
    }
    sel = GM_getResourceURL(sel);
    style.innerHTML = `
        img.sb_country[src*="${key}.svg"] {
            content: url('${sel}');
            width: ${width};
            height: auto;
            background-image: none;
            margin-right: 3px;
        }
    `;
    document.head.appendChild(style);
  }
}

const s = document.createElement('style');
s.innerHTML = `
   /* Dropdown Button */
  .dropbtn {
    /*background-color: #3498DB;
    color: white;
    padding: 16px;
    font-size: 16px;
    border: none;*/
    cursor: pointer;
  }

  /* Dropdown button on hover & focus */
  .dropbtn:hover, .dropbtn:focus {
    background-color: #2980B9;
  }

  /* The container <div> - needed to position the dropdown content */
  .dropdown {
    position: relative;
    display: inline-block;
  }

  /* Dropdown Content (Hidden by Default) */
  .dropdown-content {
    display: none;
    position: absolute;
    background-color: #f1f1f1;
    /*min-width: 160px;*/
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    z-index: 1;
  }

  /* Links inside the dropdown */
  .dropdown-content img {
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
  }

  /* Change color of dropdown links on hover */
  .dropdown-content img:hover {background-color: #ddd;}

  /* Show the dropdown menu (use JS to add this class to the .dropdown-content container when the user clicks on the dropdown button) */
  .show {display:block;}

`;
document.head.appendChild(s);

loadDefaultSettings();

/* Returns the real coordinates of an element, even when the user has scrolled on the page */
/* The veracity of these coordinates has been fact checked by real American Pqtriots */
function getEffectiveCoords(element) {
  let div = element;
  let mouse_x_offset = 40;
  let mouse_y_offset = -50;
  let effective_x = event.pageX + mouse_x_offset;
  let effective_y = event.pageY + mouse_y_offset;

  let clientWidth = document.documentElement.clientWidth;
  let clientHeight = document.documentElement.clientHeight;

  if (effective_x + div.offsetWidth > clientWidth) {
    effective_x -= Math.abs(clientWidth - (effective_x + div.offsetWidth));
    let additional_offset = 75;
    if (effective_y + div.offsetHeight + additional_offset > clientHeight) {
      effective_y -= (div.offsetHeight);
    } else {
      effective_y += additional_offset;
    }
  }
  if (effective_y + div.offsetHeight > clientHeight) {
    effective_y -= Math.abs(clientHeight - (effective_y + div.offsetHeight + 10));
  }
  return {x: effective_x, y: effective_y}
}

function selectPolandballOption(name, option) {
  let countryKey = null;
  for (key in flag_dict) {
    if (flag_dict[key].name == name) {
      countryKey = key;
      flag_dict[key].selected = option;
      if (option == null) {
        option = flag_dict[key].options[0];
      }
      break;
    }
  }
  localStorage.setItem('mam_polandball_flag_dict', JSON.stringify(flag_dict));

  let sheetId = countryKey + '_stylesheet';
  let sheet = document.getElementById(sheetId);
  sheet.disabled = true;
  sheet.parentNode.removeChild(sheet);

  const style = document.createElement('style');
  style.id = sheetId;

  let width = "auto";
  let sel = option;

  if (sel in widthOverrides) {
    width = `${widthOverrides[sel]}px`;
  }
  sel = GM_getResourceURL(sel);
  style.innerHTML = `
      img.sb_country[src*="${key}.svg"] {
          content: url('${sel}');
          width: ${width};
          height: auto;
          background-image: none;
          margin-right: 3px;
      }
  `;
  document.head.appendChild(style);
}

unsafeWindow.selectPolandballOption = selectPolandballOption;

/* floating upload emoji menu */
function showSettingsMenu(x, y) {
  // Create the floating menu
  var floatingMenu = document.createElement('div');
  floatingMenu.id = 'polandballFloatingMenuSettings';
  floatingMenu.style.position = 'absolute';
  floatingMenu.style.top = y + 'px'; // Adjust the top position as needed
  floatingMenu.style.left = x + 'px'; // Adjust the right position as needed
  floatingMenu.style.backgroundColor = 'white';
  floatingMenu.style.border = '1px solid #ccc';
  floatingMenu.style.padding = '10px';
  floatingMenu.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.1)';
  floatingMenu.style.display = 'block';

  floatingMenu.innerHTML = `
      <div style="display: flex; justify-content: space-between;">
      <h3 style='font-family: "Trebuchet MS",Verdana,Arial,Helvetica,sans-serif;'>Polandball Script Settings</h3>
      <button onclick="this.remove();" style="margin-left: auto;">❌</button>
      </div>

      <br>

      <br>
      <button id="addOverrideButton">Add Override</button>
      <br>
      <br>
      <div id="overrideList"></div>
      <br>

      <br>
      <br>
      <button id="polandballExportButton">Export Settings</button>
      <br>
      <input type="file" id="polandballImportInput" accept=".json">
      <button id="polandballImportButton">Import Settings</button>
      <br>
      <p id="polandballImport_status"></p>

      <p>Note: you may need to reload the page for some settings to apply</p>

  `;
  document.body.appendChild(floatingMenu);

  const filteredCountriesWithSelected = Object.values(flag_dict).filter(country =>
    country.selected
  );

  for (let i = 0; i < filteredCountriesWithSelected.length; i ++) {
    addOverrideToList(filteredCountriesWithSelected[i]);
  }

  //////////////////////////
  document.getElementById('addOverrideButton').addEventListener('click', function() {
    const searchBox = document.createElement('input');
    searchBox.type = 'text';
    searchBox.placeholder = 'Search for a country...';
    searchBox.id = 'countrySearchBox';
    document.getElementById('overrideList').after(searchBox);

    const resultsDiv = document.createElement('div');
    resultsDiv.id = 'countrySearchResults';
    document.getElementById('countrySearchBox').after(resultsDiv);

    searchBox.addEventListener('input', function() {
      const query = searchBox.value.toLowerCase();
      const filteredCountries = Object.values(flag_dict).filter(country =>
        country.name.toLowerCase().includes(query) && !country.selected && country.options.length > 1
      );

      // Display filtered countries
      resultsDiv.innerHTML = ''; // Clear previous results
      filteredCountries.forEach(country => {
        const countryItem = document.createElement('div');
        countryItem.style.cursor = 'pointer';
        countryItem.classList.add('countryItem');
        countryItem.innerHTML = `${country.name} (`;
        for (let i = 0; i < country.options.length; i ++) {
          let style = "";
          if (i == 0 && !country.selected) {
            style += "border: 1px solid black; ";
          } else if (country.selected == country.options[i]) {

          } else {
            style += "filter: saturate(75%); opacity: 0.5; "
          }

          countryItem.innerHTML += `<img style="${style}" src="${GM_getResourceURL(country.options[i])}">`;
        }
        countryItem.innerHTML += ')';

        countryItem.addEventListener('click', function() {
          country.selected = country.options[0];
          selectPolandballOption(country.name, country.options[0])

          addOverrideToList(country);
          searchBox.value = '';
          resultsDiv.innerHTML = '';
          floatingMenu.removeChild(searchBox);
          floatingMenu.removeChild(resultsDiv);
        });

        resultsDiv.appendChild(countryItem);
      });
    });
  });

  // Function to add override to the list
  function addOverrideToList(country) {
    const overrideListDiv = document.getElementById('overrideList');

    const overrideDiv = document.createElement('div');
    overrideDiv.style.marginBottom = '2px';

    const lol = document.createElement('div');
    lol.classList.add('dropdown');
    let buttonId = country.name + "_override_btn";
    let tmpHtml = `
        <button id="${buttonId}" onclick="this.nextElementSibling.classList.toggle('show')" class="dropbtn">▾ ${country.name} <img src="${GM_getResourceURL(country.selected)}"></button>
        <div class="dropdown-content">`;

    for (let option of country.options) {
      tmpHtml += `<img onclick="document.getElementById('${buttonId}').getElementsByTagName('img')[0].src = '${GM_getResourceURL(option)}'; window.selectPolandballOption('${country.name}', '${option}')" src="${GM_getResourceURL(option)}">`;
    }


    tmpHtml += "</div>";

    lol.innerHTML = tmpHtml;

    overrideDiv.appendChild(lol);
    const removeButton = document.createElement('button');
    removeButton.innerText = "❌";
    removeButton.style.marginLeft = "2px";
    removeButton.classList.add("overrideRemoveButton")
    removeButton.onclick = function () {
      selectPolandballOption(country.name, null);
      document.getElementById(buttonId).parentNode.parentNode.remove();
    };
    overrideDiv.appendChild(removeButton);
    overrideListDiv.appendChild(overrideDiv);
  }
  //////////////////////////

  /* EXPORT/IMPORT */
  document.getElementById('polandballExportButton').addEventListener('click', function() {
    if (!settings) {
      settings = {};
    }

    // Create a combined object for export
    const exportData = {
      mam_polandball_settings: settings,
      mam_polandball_flag_dict: flag_dict,
    };

    // Convert the combined object to a JSON string
    const exportString = JSON.stringify(exportData);

    // Create a Blob containing the export data
    const blob = new Blob([exportString], { type: 'application/json' });

    // Create a download link and trigger the download
    const downloadLink = document.createElement('a');
    downloadLink.href = URL.createObjectURL(blob);
    downloadLink.download = `mam_polandball_export_${new Date().toISOString().split('.')[0].replace(/:/g, '-')}.json`;
    downloadLink.click();
  });

  document.getElementById('polandballImportButton').addEventListener('click', function() {
    const importInput = document.getElementById('polandballImportInput');

    // Ensure a file is selected
    if (!importInput.files || importInput.files.length === 0) {
      document.getElementById('polandballImport_status').innerText = '❌ Please select a JSON file to import';
      console.error('Error: Please select a JSON file to import.');
      return;
    }

    // Get the selected file
    const importedFile = importInput.files[0];

    // Create a FileReader to read the contents of the file
    const reader = new FileReader();

    reader.onload = function(event) {
      try {
        // Parse the JSON data
        const importedData = JSON.parse(event.target.result);

        // Check if the required objects are present in the imported data
        if (!importedData) {
          document.getElementById('polandballImport_status').innerText = '❌ Invalid JSON file or missing required objects';
          console.error('Error: Invalid JSON file or missing required objects.');
          return;
        }

        // Save the imported objects to local storage
        if ('mam_polandball_settings' in importedData) {
          localStorage.setItem('mam_polandball_settings', JSON.stringify(importedData.mam_polandball_settings));
        }

        if ('mam_polandball_flag_dict' in importedData) {
          localStorage.setItem('mam_polandball_flag_dict', JSON.stringify(importedData.mam_polandball_flag_dict));
        }

        loadDefaultSettings();

        document.getElementById('polandballImport_status').innerText = '✅ Import successful!';
        console.log('Import successful!');
      } catch (error) {
        console.log(error);
        document.getElementById('polandballImport_status').innerText = '❌ Unable to import, invalid JSON file';
        console.error('Error: Unable to import. Invalid JSON file.');
      }
    };

    // Read the contents of the file as text
    reader.readAsText(importedFile);
  });

  // Attach click event to the document to hide the menu when clicking outside
  document.addEventListener('click', function (event) {
    //console.log(event.target);
      if (!event.target.matches('#polandballSettings_button') && !event.target.matches('#polandballFloatingMenuSettings')
          && !event.target.closest('#polandballFloatingMenuSettings')
         && !event.target.matches('#countrySearchResults')
         && !event.target.matches('.countryItem')
          && !event.target.matches('.countryItem img')
          && !event.target.matches('.overrideRemoveButton')
         ) {
          floatingMenu.remove();
      }
  });
}

function addSettingsButton() {
    if (document.getElementById("polandballSettings_button")) {
      return ;
    }
    let plusButton = document.createElement('button');
    plusButton.id = 'polandballSettings_button';
    plusButton.textContent = '🌍';
    plusButton.style.marginTop = '2px';
    plusButton.style.marginRight = '2px';
    plusButton.style.paddingLeft = '1px';
    plusButton.style.paddingRight = '1px';
    plusButton.title = 'Polandball Settings';

    plusButton.addEventListener('click', function () {
        let real_coords = getEffectiveCoords(plusButton);
        showSettingsMenu(real_coords.x, real_coords.y);
    });

    let elem = document.getElementById('ui-id-2');
    if (elem) {
      elem.parentNode.after(plusButton);
    }
}

function main() {
  console.log('Hello from the mam shoutbox polandball flag script by jack!');
  let shoutboxForm = document.getElementById("sbform");
  if (!shoutboxForm) {
    console.log('No shoutbox found, bailing out');
    return ;
  }

  setInterval(addSettingsButton, 1000);
}
window.addEventListener('load', main, false);


document.addEventListener('click', function(event) {
  if (!event.target.matches('.dropbtn') && !event.target.matches('.dropbtn img')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    for (var i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
});
