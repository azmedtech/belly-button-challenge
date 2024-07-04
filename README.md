# belly-button-challenge

## Project
Build an interactive dashboard to the the Belly Button Biodiversity Dataset (https://robdunnlab.com/projects/belly-button-biodiversity/), which catalogs the microbes that colonize human navels.

## Data
The dataset reveals that a small handful of microbial species (also called operational taxonomic units, or OTUs, in the study) were present in more than 70% of people, while the rest were relatively rare.

## Instructions
1. Use the D3 library to red in samples.json from the URL https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json.
2. Create a horizontal bar chart with a downdop menu to display the top 10 OUTs found in that individual.
- Use sample_values as the values for the bar chart
- Use out_ids as the labels for the bar chart
- Use out_labels as the hovertext for the chart
3. Create a bubble chart that displays each sample.
- Use out_ids for the x values
- Use sample_values for the y values
- Use sample_values for the marker size
- Use out_ids for the marker colors
- Use out_labels for the text values
4. Display the sample's metadata (for example, an individual's demographic information).
- Loop through each key-value pair from the metadata JSON object and create a text string
- Append an HTML tag with that text to the #sample-metadata panel
5. Update all the plots when a new sample is selected. Additionally, create any layout that you would like for your dashboard.
6. Deploy the dashboard to a free statis page hosting service, such as GitHub Pages. 

## Visualization   
An example dashboard is shown below. Your final dashboard may appear different if you have created code to personalize your dashboard.

![image](https://github.com/azmedtech/belly-button-challenge/assets/163087308/e3b3f09c-bfe4-45f2-9650-0782dd86d832)

## Collaboration
Debugging assistance using AI Xpert Learning Assistant.
