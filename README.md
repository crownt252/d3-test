# bar v.1.0.1

The ### test2d3 bar builder

## Installation

Using npm:

$ npm i test2d3

## Support

Tested in Node.js v9.8.0

## API

...in progress

### render(graphData, [svgElement])

process graphData (see Data Structure) and renders graph

### Data structure

required properties for input:

<pre>Array of Numbers</pre>

## Usage example

mocked data example:
<pre>
 var mockedData = [20, 35, 15, 74, 52];</pre>


steps:
1. create instance

    var graphInstance = new LinearGraphData();

2. [optional] define graph settings
        
    LinearGraphData.updateGraphConfig({
        width: 1200,
        height: 600
    });

3. render

    LinearGraphData.render(mockedData);