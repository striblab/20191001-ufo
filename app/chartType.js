//c3 chart  
import * as d3 from 'd3';
import * as c3 from 'c3';

class Chart {

    constructor(target) {
        this.target = target;
        this.chartCounts = null;
    }

    render(){

        var padding = {
            top: 20,
            right: 60,
            bottom: 20,
            left: 60,
        };
    
        var chartType = c3.generate({
            bindto: "#chartType",
            padding: padding,
            data: {
                x: 'x',
                columns: [
                    ['x', "light", "circle", "triangle", "unknown", "sphere", "fireball", "other", "disk", "oval", "formation", "cigar", "flash", "rectangle", "chevron", "changing", "diamond", "teardrop", "cylinder", "egg", "cross", "cone", "pyramid"],
                    ['value', 313, 180, 161, 147, 102, 95, 94, 81, 68, 62, 40, 32, 31, 25, 24, 18, 14, 11, 11, 5, 2, 1]
                ],
                type: 'bar'
            },
            legend: {
                show: false
            },
            color: {
                pattern: ['#333']
            },
            axis: {
                rotated: true,
                y: {
                    max: 350,
                    min: 0,
                    padding: {
                        bottom: 0,
                        top: 0
                    },
                    tick: {
                        count: 8,
                        values: [0, 50, 100, 150, 200, 250, 300, 350],
                        format: d3.format(',')
                    }
                },
                x: {
                    type: 'category'
                }
            }
        });
    }
}

export {
    Chart as
    default
}