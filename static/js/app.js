// Build the metadata panel
function buildMetadata(sample) {
  d3.json("https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json").then((data) => {

    // get the metadata field
    var metadata = data.metadata;
    console.log("Metadata:", metadata);

    // Filter the metadata for the object with the desired sample number
    metadata = metadata.filter(obj => obj.id == sample)[0];
    console.log("Filtered Metadata:", metadata);

    // Use d3 to select the panel with id of `#sample-metadata`
    var panel = d3.select("#sample-metadata");

    // Use `.html("") to clear any existing metadata
    panel.html("");

    // Inside a loop, you will need to use d3 to append new
    // tags for each key-value in the filtered metadata.
    Object.entries(metadata).forEach(([key, value]) => {
      panel.append("p").text(`${key}: ${value}`);
    });
  });
}

// function to build both charts
function buildCharts(sample) {
  d3.json("https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json").then((data) => {

    // Get the samples field
    var sampleData = data.samples;
    console.log("Sample Data:", sampleData);

    // Filter the samples for the object with the desired sample number
    sampleData = data.samples.filter(obj => obj.id == sample)[0];
    console.log("Filtered Sample Data:", sampleData);

    // Get the otu_ids, otu_labels, and sample_values
    var otuIds = sampleData.otu_ids;
    var otuLabels = sampleData.otu_labels;
    var sampleValues = sampleData.sample_values;

    // Build a Bubble Chart
    var bubbleData = [{
      x: otuIds,
      y: sampleValues,
      text: otuLabels,
      mode: 'markers',
      marker: {
        size: sampleValues,
        color: otuIds
      }
    }];
    console.log("Bubble Data:", bubbleData);

    // Render the Bubble Chart
    var bubbleLayout = {
      title: 'Bacteria Cultures Per Sample',
      xaxis: { title: 'OTU ID' },
      yaxis: { title: 'Number of Bacteria' }
    };
    
    Plotly.newPlot('bubble', bubbleData, bubbleLayout);

    // For the Bar Chart, map the otu_ids to a list of strings for your yticks
    var yTicks = sampleData.otu_ids.slice(0, 10).map(otuId => `OTU ${otuId}`).reverse();
    console.log("Y Ticks:", yTicks);

    // Build a Bar Chart
    // Don't forget to slice and reverse the input data appropriately
    var barData = [{
      type: 'bar',
      x: sampleData.sample_values.slice(0, 10).reverse(),
      y: yTicks,
      text: sampleData.otu_labels.slice(0, 10).reverse(),
      orientation: 'h'
    }];
    console.log("Bar Data:", barData);

    // Render the Bar Chart
    var barLayout = {
      title: 'Top 10 Bacteria Cultures Found',
      xaxis: { title: 'Number of Bacteria' },
      yaxis: { title: 'OTU ID' }
    };
    
    Plotly.newPlot('bar', barData, barLayout);
  });
}

// Function to run on page load
function init() {
  d3.json("https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json").then((data) => {

    // Get the names field
    let names = data.names;
    console.log("Names:", names);

    // Use d3 to select the dropdown with id of `#selDataset`
    let dropdownMenu = d3.select("#selDataset");

    // Use the list of sample names to populate the select options
    // Hint: Inside a loop, you will need to use d3 to append a new
    // option for each sample name.
    names.forEach((name) => {
      dropdownMenu.append("option")
          .text(name)
          .property("value", name);
    });

    // Get the first sample from the list
    let firstSample = names[0];
    console.log("First Sample:", firstSample);

    // Build charts and metadata panel with the first sample
    buildCharts(firstSample);
    buildMetadata(firstSample);
  });
}

// Function for event listener
function optionChanged(newSample) {

  // Build charts and metadata panel each time a new sample is selected
  buildCharts(newSample);
  buildMetadata(newSample);
}

// Initialize the dashboard
init();
