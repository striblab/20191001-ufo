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
    
        var chartTrend = c3.generate({
            bindto: "#chartTrend",
            padding: padding,
            data: {
                x: 'x',
                columns: [
                    ["x",   1950, 1951, 1952, 1953, 1954, 1955, 1956, 1957, 1958, 1959, 1960, 1961, 1962, 1963, 1964, 1965, 1966, 1967, 1968, 1969, 1970, 1971, 1972, 1973, 1974, 1975, 1976, 1977, 1978, 1979, 1980, 1981, 1982, 1983, 1984, 1985, 1986, 1987, 1988, 1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019],
                    ["MN",  0, 0, 1, 0, 0, 1, 1, 2, 1, 2, 2, 0, 0, 1, 0, 1, 2, 4, 5, 3, 0, 1, 1, 0, 4, 8, 6, 3, 4, 4, 6, 3, 2, 3, 3, 2, 0, 3, 5, 3, 4, 3, 2, 2, 5, 14, 22, 13, 30, 38, 45, 23, 39, 73, 68, 54, 48, 50, 60, 55, 76, 135, 123, 125, 152, 83, 83, 51, 83],
                ],
                type: 'area-spline',
                groups: [
                    ['MN', 'US']
                ],
                labels: {
                    format: {
                        // '2006': d3.format('%'),
                        // '2017': d3.format('%')
                    }
                }
            },
            // bar: {
            // width: {
            // ratio: 0.3
            //     }
            //  },
            legend: {
                show: false
            },
            point: {
                show: false
            },
            color: {
                pattern: ['#7F98AA']
            },
            axis: {
                // rotated: true,
                y: {
                    max: 200,
                    min: 0,
                    padding: {
                        bottom: 0,
                        top: 0
                    },
                    tick: {
                        count: 3,
                        values: [0, 100, 200],
                        format: d3.format(',')
                    }
                },
                x: {
                    padding: {
                        right: 0,
                        left: 0
                    },
                    tick: {
                        count: 6,
                        values: [1910, 1925, 1950, 1975, 2000, 2019],
                        multiline: false,
                        format: d3.format('.0f')
                    }
                }
            },
            grid: {
                x: {
                    lines: [
                        // {value: 2009, text: 'Ranked-choice voting MPLS', position: 'end', class:'powerline'}
                    ]
                }
            }
    
        });
    }
}

export {
    Chart as
    default
}