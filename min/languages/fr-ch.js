/*! 
 * numeral.js language configuration
 * language : french (fr-ch)
 * author : Adam Draper : https://github.com/adamwdraper
 */
!function(){var a={delimiters:{thousands:"'",decimal:"."},abbreviations:{thousand:"k",million:"m",billion:"b",trillion:"t"},ordinal:function(a){return 1===a?"er":"e"},currency:{symbol:"CHF"}};"undefined"!=typeof module&&module.exports&&(module.exports=a),"undefined"!=typeof window&&this.numeral&&this.numeral.language&&this.numeral.language("fr-ch",a)}();