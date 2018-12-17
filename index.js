;(function (root, factory) {
    var D3 = root.d3;
    if (typeof define === 'function' && define.amd) {        
        define([D3], factory);
    } else if (typeof exports === 'object') {
        module.exports = factory(D3);
    } else {       
        root.LinearGraphData = factory(D3);
    }
}(this, function (D3) { // start main function
    'use strict';
    var _config = {
        width: 300,
        height: 200,
        marginLeft: 50,
        marginTop: 50,
        rectWidth: 25,
        shift: 7,        
        color: 'orange'
    };
    /*--------------------------------------------------------------------------*/

    var LinearGraphData = function(d3) {
      this.config = Object.assign({}, _config);

      this.graphic = null;      

      this.setD3(d3 || D3);
      console.info('graph API inited');
    };

    /*--------------------------------------------------------------------------*/
   
    LinearGraphData.prototype.setD3 = function(D3) {
        this.d3 = D3;
    }

    
    LinearGraphData.prototype.getGraphConfig = function() {
        return this.config;
    }
   
    LinearGraphData.prototype.setGraphConfig = function(config) {
        this.config = config;        
    }

    LinearGraphData.prototype.updateGraphConfig = function(config) {
        this.config = Object.assign(this.config, config);        
    }
    /*--------------------------------------------------------------------------*/
    LinearGraphData.prototype.processGraphData = function(graphData) {
        var self = this;
        // 
    }

    LinearGraphData.prototype.render = function(rawGraphData, svgElement) {
        // var graph = this.processGraphData(rawGraphData);
        var graph = rawGraphData;
        var d3 = this.d3;        
        var config = this.config;
        var graphElement = null;        
        var container = null;        

        if (graph === null) {
            console.warn('there is no data for graph');

            return;
        }       

        if (svgElement) {
            graphElement = svgElement;
        } else {
            graphElement = d3.select('svg');         
            graphElement.selectAll('*').remove();
        }

        
        var max = d3.max(graph);
        var heightMax = Math.max(max, config.height);
        var y = heightMax - config.marginTop;        

        container = graphElement
            .attr('width', config.width)
            .attr('height', heightMax + config.marginTop)        
            .append('g');            

        container.selectAll('rect')
            .data(graph)
            .enter()
            .append('rect')
            .attr('width', config.rectWidth)
            .attr('height', function(d) { return d; })
            .attr('fill', config.color)
            .attr('x', function(d, i) { return config.marginLeft + (i * config.rectWidth) + (i + 1) * config.shift; })           
            .attr('y', function(d, i){ return y - d; });
            

            container.selectAll('line')
            .data([1])
            .enter()
            .append('line')            
            .attr('stroke', '#555')
            .attr('x1', config.marginLeft)            
            .attr('y1', y)
            .attr('x2', config.marginLeft + graph.length * (config.rectWidth + config.shift) + config.shift)
            .attr('y2', y);
    }
    /*--------------------------------------------------------------------------*/

    return LinearGraphData;
}

)); // end main function
