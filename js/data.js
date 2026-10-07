// Edit content here. Changes show on every page that uses it.
window.TX = {
  portals: [
    { name:'Studio', icon:'draw', who:'EPC companies', url:'https://epc.pvnxt.com', host:'epc.pvnxt.com', status:'Beta', cta:'Sign up', line:'Design, BOQ and proposals in one workspace.', bullets:['3D roof layout from a satellite scan','Auto BOQ and pricing','Proposals from the same data'], shot:'assets/images/studio.png', video:'' },
    { name:'Go', icon:'construction', who:'installers', url:'https://installer.pvnxt.com', host:'installer.pvnxt.com', status:'Beta', cta:'Sign up', line:'Run site work with clear tasks and progress updates.', bullets:['Clear site instructions','Photo and progress updates','Handover to monitoring'], shot:'assets/images/go.png', video:'' },
    { name:'Connect', icon:'home', who:'homeowners', url:'https://consumer.pvnxt.com', host:'consumer.pvnxt.com', status:'Beta', cta:'Sign up', line:'Check feasibility, compare quotes, track installation.', bullets:['Rooftop feasibility check','Quotes side by side','Live installation status'], shot:'assets/images/connect.png', video:'' },
    { name:'SCADA', icon:'monitor_heart', who:'O&M teams', url:'https://scada.pvnxt.com', host:'scada.pvnxt.com', status:'Beta', cta:'Sign up', line:'Monitor plants and catch faults early.', bullets:['Live generation data','Fault alerts','Performance reports'], shot:'assets/images/scada.png', video:'' },
    { name:'Artha', icon:'trending_up', who:'investors', url:'https://artha.pvnxt.com', host:'artha.pvnxt.com', status:'Early access', cta:'Join early access', line:'Back real solar projects. Investments carry risk.', bullets:['Browse listed projects','Read project details and risks','Track your investments'], shot:'assets/images/artha.png', video:'' }
  ],
  solutions: [
    { icon:'apartment', who:'EPC companies', problem:'Designs take days. Proposals have pricing errors.', fix:'Design, BOQ and proposals in one workspace, with full project visibility.', cta:'Open Studio', url:'https://epc.pvnxt.com' },
    { icon:'engineering', who:'Installers', problem:'Unclear instructions. No progress record.', fix:'Digital tasks, site checklists and photo updates, from survey to commissioning.', cta:'Open Go', url:'https://installer.pvnxt.com' },
    { icon:'house', who:'Homeowners', problem:'Hard to know if solar fits, or which quote is fair.', fix:'Check feasibility, compare quotes and track installation. No jargon.', cta:'Open Connect', url:'https://consumer.pvnxt.com' },
    { icon:'electric_bolt', who:'O&M teams', problem:'Faults found late. Uptime lost.', fix:'Live plant data and alerts, so issues are caught early.', cta:'Open SCADA', url:'https://scada.pvnxt.com' },
    { icon:'savings', who:'Investors', problem:'Solar projects are hard to access.', fix:'Browse and back solar projects through Artha. Early access. Investments carry risk.', cta:'Join early access', url:'https://artha.pvnxt.com' }
  ],
  flow: [
    { n:'01', icon:'satellite_alt', t:'Atlas', tag:'Satellite to 3D model', d:'Stereo satellite imagery is processed into an accurate 3D roof model with shadow analysis.' },
    { n:'02', icon:'photo_camera', t:'Field App', tag:'Site verify', d:'Capture site details only when needed. Fewer site visits.' },
    { n:'03', icon:'home', t:'Connect', tag:'Consumer portal', d:'Homeowners check feasibility and compare quotes.' },
    { n:'04', icon:'draw', t:'Studio', tag:'Design and output', d:'EPC teams finalise the layout, yield and BOQ.' },
    { n:'05', icon:'request_quote', t:'Proposal', tag:'Auto-generate', d:'Customer proposals are created from project data. No copy-paste.' },
    { n:'06', icon:'construction', t:'Go', tag:'Track installation', d:'Installers execute and report work from the field.' },
    { n:'07', icon:'monitor_heart', t:'SCADA', tag:'Monitor and alert', d:'Live plant performance and fault alerts after commissioning.' }
  ],
  roadmap: [
    { name:'Studio', status:'Beta', d:'In use on live Astongreens projects.' },
    { name:'Go', status:'Beta', d:'Installer workflows in testing.' },
    { name:'Connect', status:'Beta', d:'Consumer portal in testing.' },
    { name:'SCADA', status:'Beta', d:'Monitoring and alerts in testing.' },
    { name:'Artha', status:'Early access', d:'Investment portal. Mobile app in development.' },
    { name:'Mobile apps', status:'Beta', d:'Android and iOS apps for the portals.' }
  ],
  nav: [['products.html','Products','products'],['solutions.html','Solutions','solutions'],['how-it-works.html','How it works','how'],['demo.html','Demo','demo'],['roadmap.html','Roadmap','roadmap'],['company.html','Company','company']]
};
