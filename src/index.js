// add any imports if needed, or write your script directly in this file.
// const SomePackage = require('PackageName');

// make sure to export main, with the signature
function main(el, service, imEntity, state, config) {
  if (!state) state = {};
	if (!el || !service || !imEntity || !state || !config) {
		throw new Error('Call main with correct signature');
	}
	// sample code here to convert the provided intermine object (e.g. perhaps
	// an id) into an identifier the tool expects. e.g.:
	// of course if your tool was built for intermine it might understand
	// intermine ids already, but many others tools expect a gene symbol or
	// protein accession, etc...
	/**
   * Example - you can delete this and replace with your own code *******

    // protVista expects an accession, so convert intermine id to accession

    var columnToConvert = config.columnMapping[imEntity.class][imEntity.format];
    var accession = new imjs.Service(service)
        .findById(imEntity.class, imEntity.value)
        .then(function(response) {
        //put some code here to initialise your tool.
    });

  */
  console.log(imEntity);
	el.innerHTML = '<iframe src="'
    + config.jbrowseUrl
    + encodeURIComponent(service.root)
    + encodeURIComponent("/jbrowse/config/9606&loc=3:12272855..12449100&tracks=HumanMine-9606-Gene")
//  ../../index.html?data=sample_data/json/volvox&tracklist=0&nav=0&overview=0&tracks=DNA%2CExampleFeatures%2CNameTest%2CMotifs%2CAlignments%2CGenes%2CReadingFrame%2CCDS%2CTranscript%2CClones%2CEST
//https://jbrowse.intermine.org/?data=https%3A%2F%2Fwww.humanmine.org%2Fhumanmine%2Fservice%2Fjbrowse%2Fconfig%2F9606&loc=3%3A12272855..12449100&tracks=HumanMine-9606-Gene&highlight=
   + '" width="600" height="300"> </iframe>';
}

module.exports = { main };
