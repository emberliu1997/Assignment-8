$(document).ready(function(){
  /*---------- handelbars----------*/
  var content={
     "dataviz": [
      { 
          Name: "Interview", 
          Classes: "qualitative observing understanding testing",
          Pic: "https://imgur.com/O81FybM.png",
          Description: "Interview is a technique for gathering information through direct dialogue, It can help you gain information directly, challenge your preconceptions, deepens your empathy for others and build credibility with stakeholders.",
      },
      { 
          Name: "Think-aloud", 
          Classes: "qualitative observing understanding testing",
          Pic: "https://imgur.com/d8aijrA.png",
          Description: "A think-aloud protocol is a method used to gather data in usability testing in product design and development, in psychology and a range of social sciences. Think-aloud protocols involve participants thinking aloud as they are performing a set of specified tasks.",
      },
        { 
          Name: "Contextual Inquiry", 
          Classes: "qualitative observing understanding testing",
          Pic: "https://imgur.com/Wnlq1rf.png",
          Description: "Contextual inquiry is a semi-structured interview method to obtain information about the context of use, where users are first asked a set of standard questions and then observed and questioned while they work in their own environments.",
      },
      { 
          Name: "Affinity Diagram", 
          Classes: "qualitative understanding mapping",
          Pic: "https://imgur.com/ZX9E2Dk.png",
          Description: "An affinity diagram is a tool often used to organize data and ideas. Affinity diagrams help you organize information into groups of similar items to then analyze qualitative data or observations.",
      },
      { 
          Name: "Experience Map", 
          Classes: "qualitative mapping building",
          Pic: "https://imgur.com/Wsk4NG8.png",
          Description: "An experience map is a visualization of an entire end-to-end experience that a generic person goes through in order to accomplish a goal.",
      },
      { 
          Name: "Stakeholder Map", 
          Classes: "qualitative understanding mapping",
          Pic: "https://imgur.com/btRLqq5.png",
          Description: "Stakeholder mapping is the visual process of laying out all the stakeholders of a product, project, or idea on one map. The main benefit of a stakeholder map is to get a visual representation of all the people who can influence your project and how they are connected.",
      },
      { 
          Name: "Speed Dating", 
          Classes: "qualitative observing understanding testing building",
          Pic: "https://imgur.com/CwtDyM6.png",
          Description: "Speed Dating allows design teams to explore possible futures with target users. Speed dating helps to reduce the risk of making things that people will not adopt. It also discloses opportunities and user needs that design teams might not observe during fieldwork",
      },
      { 
          Name: "Focus Group", 
          Classes: "qualitative observing understanding testing",
          Pic: "https://imgur.com/Wsk4NG8.png",
          Description: "A focus group is a qualitative research method that aims to gather quick user insights from a variety of people in a short period of time. Focus groups are designed to gain an understanding of customer opinions and perceptions of new concepts or ideas.",
      },
     
      { 
          Name: "Card Sorting", 
          Classes: "qualitative understanding testing building",
          Pic: "https://imgur.com/YXU8V1B.png",
          Description: "Card sorting is a UX research method in which study participants group individual labels written on notecards according to criteria that make sense to them. This is where card sorting can help: ask your users to organize vehicles into groups that make sense to them, and, then, see what patterns emerge.",
      },
       { 
          Name: "Survey", 
          Classes: "quantitative understanding testing",
          Pic: "https://imgur.com/GQoICBJ.png",
          Description: "A survey is a set of questions used to collect topic-specific information from a representative sample of your target audience. UX Surveys are the quick and relatively easy way to get data about your users and potential users",
      },
    
   ]}

   var datavizTemplate = $("#dataviz-template").html();
   var compiledDatavizTemplate = Handlebars.compile(datavizTemplate);
   $(".dataviz-list-container").html(compiledDatavizTemplate(content));

/* filter button */
 
  var $container = $('.dataviz-list-container'),
      $checkboxes = $('#filter-buttons input');

  console.log($checkboxes)
  
  $container.isotope({
    itemSelector: '.content'
  });

  $container.imagesLoaded().progress( function() {
    $container.isotope('layout');
  });  



  var isotope = $container.data('isotope');
  function addEvenClasses() {
    isotope.$filteredAtoms.each(function(i, elem) {
      $(elem)[(i % 2 ? 'addClass' : 'removeClass')]('even')
    });
  }

  $checkboxes.change(function() {
      var filters = [];
      // get checked checkboxes values
      $checkboxes.filter(':checked').each(function() {
        filters.push(this.value);
      });
      
    
      var filterValue = concatValues(filters);
      console.log(filterValue);
      $container.isotope({filter: filterValue});
      addEvenClasses();

      // CONCATENATE FILTERS
      function concatValues( obj ) {
      var value = '';
      for ( var prop in obj ) {
        value += obj[ prop ];
      }
      return value;
      }
  });

});





