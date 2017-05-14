!function(){var a=Handlebars.template,n=Handlebars.templates=Handlebars.templates||{};n.apptView=a({compiler:[7,">= 4.0.0"],main:function(a,n,s,t,i){var e,l,d=s.helperMissing,o="function",r=a.escapeExpression;return(null!=(e=a.invokePartial(t.header,n,{name:"header",data:i,helpers:s,partials:t,decorators:a.decorators}))?e:"")+'\n<div class="container patient-box">\n  <div class="row">\n  <div class="patient-welcome">Your Appointments.</div>\n  		<div class="test-name">'+r((l=null!=(l=s.doctor_name||(null!=n?n.doctor_name:n))?l:d,typeof l===o?l.call(n,{name:"doctor_name",hash:{},data:i}):l))+'</div>\n  		<div class="test-box">\n        <div class="test-header">Appointment Information</div>\n        <div class="test-header">What kind of doctor is '+r((l=null!=(l=s.doctor_name||(null!=n?n.doctor_name:n))?l:d,typeof l===o?l.call(n,{name:"doctor_name",hash:{},data:i}):l))+"?</div>\n        <div>"+r((l=null!=(l=s.doctor_name||(null!=n?n.doctor_name:n))?l:d,typeof l===o?l.call(n,{name:"doctor_name",hash:{},data:i}):l))+" is a "+r((l=null!=(l=s.doctor_type||(null!=n?n.doctor_type:n))?l:d,typeof l===o?l.call(n,{name:"doctor_type",hash:{},data:i}):l))+'. </div>\n\n	  		<div class="test-header">How to prepare.</div>\n	  		<div class="test-header">How to follow-up.</div>\n\n  		</div>\n  		<div id ="appt-back" class="back-btn">< Back </div>\n  </div>\n</div>'},usePartial:!0,useData:!0}),n.appts=a({compiler:[7,">= 4.0.0"],main:function(a,n,s,t,i){var e;return(null!=(e=a.invokePartial(t.header,n,{name:"header",data:i,helpers:s,partials:t,decorators:a.decorators}))?e:"")+'\n<div class="container patient-box">\n  <div class="row">\n  <div class="patient-welcome">Your Appointments.</div>\n		<ul class="list-group">\n		<li class="list-group-item diag-header"><span>Doctor</span><span class="diag-date">Date</span></li>\n		  <li class="list-group-item appt-item" data-apptid=1><span>Dr. Cuddy</span><span class="diag-date">5.16.2017</span></li>\n		  <li class="list-group-item appt-item" data-apptid=2><span>Dr. Wilson</span><span class="diag-date">5.25.2017</span></li>\n		  <li class="list-group-item appt-item" data-apptid=3><span>Dr. House</span><span class="diag-date">5.27.2017</span></li>\n		</ul>\n\n		<div id ="diag-back" class="back-btn">< Back </div>\n  </div>\n</div>'},usePartial:!0,useData:!0}),n.diag=a({compiler:[7,">= 4.0.0"],main:function(a,n,s,t,i){var e;return(null!=(e=a.invokePartial(t.header,n,{name:"header",data:i,helpers:s,partials:t,decorators:a.decorators}))?e:"")+'\n<div class="container patient-box">\n  <div class="row">\n  <div class="patient-welcome">Your Diagnostics.</div>\n		<ul class="list-group">\n		<li class="list-group-item diag-header"><span>Test</span><span class="diag-date">Date ordered</span></li>\n		  <li class="list-group-item diag-item" data-testid=1><span>Mammogram</span><span class="diag-date">5.15.2017</span></li>\n		  <li class="list-group-item diag-item" data-testid=2><span>Biopsy</span><span class="diag-date">5.15.2017</span></li>\n		  <li class="list-group-item diag-item-done" data-testid=3><span>CT Scan</span><span class="diag-date">5.15.2017</span></li>\n		</ul>\n		<div>\n		<div id ="diag-back" class="back-btn">< Back </div>\n		<div id="diag-past" class="diag-past-btn">Past Diagnostics ></div>\n		</div>\n  </div>\n</div>'},usePartial:!0,useData:!0}),n.docView=a({compiler:[7,">= 4.0.0"],main:function(a,n,s,t,i){var e,l,d=s.helperMissing,o="function",r=a.escapeExpression;return(null!=(e=a.invokePartial(t.header,n,{name:"header",data:i,helpers:s,partials:t,decorators:a.decorators}))?e:"")+'\n<div class="container patient-box">\n  <div class="row">\n  <div class="patient-welcome">Your Doctors.</div>\n  		<div class="test-name">'+r((l=null!=(l=s.doctor_name||(null!=n?n.doctor_name:n))?l:d,typeof l===o?l.call(n,{name:"doctor_name",hash:{},data:i}):l))+'</div>\n  		<div class="test-box">\n        <div class="test-header">Contact Information</div>\n        <div class="test-header">What kind of doctor is '+r((l=null!=(l=s.doctor_name||(null!=n?n.doctor_name:n))?l:d,typeof l===o?l.call(n,{name:"doctor_name",hash:{},data:i}):l))+"?</div>\n        <div>"+r((l=null!=(l=s.doctor_name||(null!=n?n.doctor_name:n))?l:d,typeof l===o?l.call(n,{name:"doctor_name",hash:{},data:i}):l))+" is a "+r((l=null!=(l=s.doctor_type||(null!=n?n.doctor_type:n))?l:d,typeof l===o?l.call(n,{name:"doctor_type",hash:{},data:i}):l))+'. </div>\n  		</div>\n  		<div id ="doc-back" class="back-btn">< Back </div>\n  </div>\n</div>'},usePartial:!0,useData:!0}),n.docs=a({compiler:[7,">= 4.0.0"],main:function(a,n,s,t,i){var e;return(null!=(e=a.invokePartial(t.header,n,{name:"header",data:i,helpers:s,partials:t,decorators:a.decorators}))?e:"")+'\n<div class="container patient-box">\n  <div class="row">\n  <div class="patient-welcome">Your Doctors.</div>\n		<ul class="list-group">\n		<li class="list-group-item diag-header"><span>Doctor</span><span class="diag-date">Specialty</span></li>\n		  <li class="list-group-item doc-item" data-docid=2><span>Dr. Wilson</span><span class="diag-date">Ontology</span></li>\n		  <li class="list-group-item doc-item" data-docid=3><span>Dr. Who</span><span class="diag-date">Endocrinology</span></li>\n		</ul>\n\n		<div id ="diag-back" class="back-btn">< Back </div>\n  </div>\n</div>'},usePartial:!0,useData:!0}),n.header=a({compiler:[7,">= 4.0.0"],main:function(a,n,s,t,i){return'<nav class="navbar navbar-static-top">\n  <div class="container-fluid">\n    <div class="navbar-header">\n      <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">\n        <span class="icon-bar"></span>\n        <span class="icon-bar"></span>\n        <span class="icon-bar"></span>                        \n      </button>\n      <a class="navbar-brand" id="sherpa-link">SherpaCare</a>\n    </div>\n    <div class="collapse navbar-collapse" id="myNavbar">\n      <ul class="nav navbar-nav">\n        <li class="active"><a id="home-link">Home</a></li>\n        <li><a id="diag-link">Diagnostics</a></li>\n        <li><a id="appt-link">Appointments</a></li>\n        <li><a id="doc-link">Doctors</a></li>\n      </ul>\n      <ul class="nav navbar-nav navbar-right">\n        <li><a href="#">Sign Up</a></li>\n        <li><a href="#"> Login</a></li>\n      </ul>\n    </div>\n  </div>\n</nav>\n  '},useData:!0}),n.index=a({compiler:[7,">= 4.0.0"],main:function(a,n,s,t,i){var e;return(null!=(e=a.invokePartial(t.header,n,{name:"header",data:i,helpers:s,partials:t,decorators:a.decorators}))?e:"")+'\n<div class ="container-fluid">\n<div class="row">  \n  <div class="col-md-4 col-md-offset-4 signin-box" >\n    <h2 class="splash-txt">Begin Your Journey</h2>\n\n     	<input id="bc-btn" type="button" class="btn btn-lg btn-block" value="Enter as Patient"/>\n\n    	<input id="doc-btn" type="button" class="btn btn-lg btn-block" value="Enter as Doctor"/>\n\n</div>\n</div>\n</div>'},usePartial:!0,useData:!0}),n.patient=a({compiler:[7,">= 4.0.0"],main:function(a,n,s,t,i){var e;return(null!=(e=a.invokePartial(t.header,n,{name:"header",data:i,helpers:s,partials:t,decorators:a.decorators}))?e:"")+'\n<div class="container patient-box">\n  <div class="row">\n  <div class="patient-welcome">Hello Hao.</div>\n    <div class="col-sm-4 patient-opt">\n      <div id = "diag-box" class="well">\n        <h3>Diagnostics</h3>\n        <p>Determine what tests or exams you may need.</p>\n      </div>\n    </div>\n    <div class="col-sm-4 patient-opt">\n      <div id="appts-box" class="well">\n        <h3>Appointments</h3>\n        <p>Know what doctor visits are in your future.</p>\n\n      </div>        \n    </div> \n    <div class="col-sm-4 patient-opt">\n      <div id="docs-box" class="well">\n        <h3>Doctors</h3>        \n        <p>Have information on your doctors, on hand.</p>\n      </div>        \n    </div>\n  </div>\n</div>\n'},usePartial:!0,useData:!0}),n.testView=a({compiler:[7,">= 4.0.0"],main:function(a,n,s,t,i){var e,l,d=s.helperMissing,o="function",r=a.escapeExpression;return(null!=(e=a.invokePartial(t.header,n,{name:"header",data:i,helpers:s,partials:t,decorators:a.decorators}))?e:"")+'\n<div class="container patient-box">\n  <div class="row">\n  <div class="patient-welcome">Your Diagnostics.</div>\n  		<div class="test-name">'+r((l=null!=(l=s.test_name||(null!=n?n.test_name:n))?l:d,typeof l===o?l.call(n,{name:"test_name",hash:{},data:i}):l))+'</div>\n  		<div class="test-box">\n	  		<div class="test-header">Why do you need to do this?</div>\n	  		<div>'+r((l=null!=(l=s.test_expl||(null!=n?n.test_expl:n))?l:d,typeof l===o?l.call(n,{name:"test_expl",hash:{},data:i}):l))+'</div>\n\n	  		<div class="test-header">How to prepare.</div>\n	  		<div class="test-header">How to follow-up.</div>\n  		</div>\n  		<div id ="test-back" class="back-btn">< Back </div>\n  </div>\n</div>'},usePartial:!0,useData:!0})}();