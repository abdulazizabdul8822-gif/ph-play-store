import { Link } from 'react-router';

const ErrorPage = () => {
  const styles = `
    @keyframes floatAstro{0%,100%{transform:translateY(0) rotate(-3deg)}50%{transform:translateY(-22px) rotate(3deg)}}
    @keyframes twinkle{0%,100%{opacity:0.15;transform:scale(1)}50%{opacity:1;transform:scale(1.4)}}
    @keyframes spinRing{from{transform:rotateX(75deg) rotateZ(0deg)}to{transform:rotateX(75deg) rotateZ(360deg)}}
    @keyframes shootStar{0%{transform:translateX(0) translateY(0);opacity:1}100%{transform:translateX(260px) translateY(80px);opacity:0}}
    @keyframes pulse404{0%,100%{text-shadow:0 0 30px #7F77DD,0 0 60px #534AB7,0 0 100px #3C3489}50%{text-shadow:0 0 60px #AFA9EC,0 0 120px #7F77DD,0 0 180px #534AB7}}
    @keyframes driftDebris1{0%,100%{transform:translate(0,0) rotate(0deg)}33%{transform:translate(10px,-8px) rotate(25deg)}66%{transform:translate(-6px,5px) rotate(-15deg)}}
    @keyframes driftDebris2{0%,100%{transform:translate(0,0) rotate(0deg)}33%{transform:translate(-8px,10px) rotate(-30deg)}66%{transform:translate(6px,-4px) rotate(20deg)}}
    @keyframes fadeSlideUp{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}
    @keyframes btnPulse{0%,100%{box-shadow:0 0 0 0 rgba(83,74,183,0.6)}70%{box-shadow:0 0 0 14px rgba(83,74,183,0)}}
    @keyframes moonOrbit{from{transform:rotate(0deg) translateX(52px) rotate(0deg)}to{transform:rotate(360deg) translateX(52px) rotate(-360deg)}}
    @keyframes glowRing{0%,100%{opacity:0.5}50%{opacity:0.9}}
  `;

  const stars = [
    {w:'2px',t:'8%',l:'12%',dur:'2.1s',del:'0s'},{w:'1.5px',t:'14%',l:'28%',dur:'3.4s',del:'0.7s'},
    {w:'3px',t:'5%',l:'45%',dur:'1.9s',del:'1.2s'},{w:'1.5px',t:'20%',l:'62%',dur:'2.7s',del:'0.4s'},
    {w:'2px',t:'10%',l:'80%',dur:'3.1s',del:'1.8s'},{w:'1px',t:'32%',l:'5%',dur:'2.4s',del:'0.9s'},
    {w:'2.5px',t:'38%',l:'90%',dur:'1.7s',del:'0.2s'},{w:'1.5px',t:'55%',l:'15%',dur:'3.0s',del:'1.5s'},
    {w:'1px',t:'60%',l:'75%',dur:'2.2s',del:'0.6s'},{w:'2px',t:'72%',l:'40%',dur:'2.8s',del:'1.1s'},
    {w:'1.5px',t:'80%',l:'58%',dur:'1.6s',del:'0.3s'},{w:'3px',t:'85%',l:'22%',dur:'3.3s',del:'2.0s'},
    {w:'1px',t:'90%',l:'82%',dur:'2.0s',del:'0.8s'},{w:'2px',t:'48%',l:'50%',dur:'2.5s',del:'1.4s'},
    {w:'1.5px',t:'25%',l:'35%',dur:'1.8s',del:'2.3s'},{w:'1px',t:'70%',l:'8%',dur:'3.2s',del:'0.5s'},
    {w:'2px',t:'15%',l:'92%',dur:'2.6s',del:'1.7s'},{w:'1.5px',t:'95%',l:'65%',dur:'1.5s',del:'0.1s'},
  ];

  return (
    <div style={{position:'relative',minHeight:'100vh',background:'#060612',overflow:'hidden',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',padding:'2rem',fontFamily:'system-ui,sans-serif'}}>
      <style>{styles}</style>

      {/* Nebula */}
      {[
        {w:'300px',h:'200px',bg:'rgba(83,74,183,0.15)',t:'10%',l:'5%'},
        {w:'250px',h:'180px',bg:'rgba(15,110,86,0.1)',b:'15%',r:'5%'},
        {w:'200px',h:'150px',bg:'rgba(126,74,183,0.12)',t:'40%',l:'40%'},
      ].map((n,i)=>(
        <div key={i} style={{position:'absolute',borderRadius:'50%',filter:'blur(60px)',pointerEvents:'none',width:n.w,height:n.h,background:n.bg,top:n.t,left:n.l,bottom:n.b,right:n.r}}/>
      ))}

      {/* Stars */}
      {stars.map((s,i)=>(
        <div key={i} style={{position:'absolute',borderRadius:'50%',background:'#fff',width:s.w,height:s.w,top:s.t,left:s.l,animation:`twinkle ${s.dur} ease-in-out infinite ${s.del}`}}/>
      ))}

      {/* Shooting stars */}
      <div style={{position:'absolute',width:'80px',height:'1.5px',background:'linear-gradient(to right,transparent,#fff)',borderRadius:'2px',animation:'shootStar 3.5s ease-in infinite 1.2s',opacity:0,top:'18%',left:'8%'}}/>
      <div style={{position:'absolute',width:'50px',height:'1px',background:'linear-gradient(to right,transparent,#CECBF6)',borderRadius:'2px',animation:'shootStar 5s ease-in infinite 4s',opacity:0,top:'30%',left:'55%'}}/>

      {/* Planet */}
      <div style={{position:'absolute',top:'60px',right:'80px',width:'90px',height:'90px'}}>
        <div style={{width:'90px',height:'90px',borderRadius:'50%',background:'radial-gradient(circle at 35% 35%,#534AB7,#1a1560)',boxShadow:'inset -15px -10px 30px rgba(0,0,0,0.6)',position:'relative'}}>
          <div style={{position:'absolute',width:'22px',height:'16px',borderRadius:'50%',background:'rgba(127,119,221,0.3)',top:'22%',left:'18%'}}/>
          <div style={{position:'absolute',width:'14px',height:'10px',borderRadius:'50%',background:'rgba(127,119,221,0.3)',top:'55%',left:'55%'}}/>
        </div>
        <div style={{position:'absolute',top:'50%',left:'50%',width:'130px',height:'130px',margin:'-65px 0 0 -65px',animation:'spinRing 12s linear infinite',transformStyle:'preserve-3d'}}>
          <div style={{width:'100%',height:'100%',borderRadius:'50%',border:'8px solid transparent',borderTopColor:'rgba(127,119,221,0.7)',borderBottomColor:'rgba(127,119,221,0.4)',animation:'glowRing 3s ease-in-out infinite'}}/>
        </div>
        <div style={{position:'absolute',width:'14px',height:'14px',borderRadius:'50%',background:'#888780',top:'50%',left:'50%',margin:'-7px 0 0 -7px',animation:'moonOrbit 4s linear infinite'}}/>
      </div>

      {/* Debris */}
      {[
        {w:'14px',bg:'#185FA5',t:'65%',l:'8%',anim:'driftDebris1 8s ease-in-out infinite'},
        {w:'10px',bg:'#3B6D11',t:'70%',r:'10%',anim:'driftDebris2 10s ease-in-out infinite 2s'},
        {w:'8px',bg:'#534AB7',t:'40%',l:'6%',br:'50%',anim:'driftDebris1 6s ease-in-out infinite 1s'},
        {w:'6px',bg:'#0F6E56',t:'30%',r:'7%',br:'50%',anim:'driftDebris2 7s ease-in-out infinite 3s'},
      ].map((d,i)=>(
        <div key={i} style={{position:'absolute',width:d.w,height:d.w,background:d.bg,borderRadius:d.br||'3px',opacity:0.5,top:d.t,left:d.l,right:d.r,animation:d.anim}}/>
      ))}

      {/* 404 */}
      <h1 style={{fontSize:'clamp(5rem,18vw,9rem)',fontWeight:800,color:'#fff',margin:0,lineHeight:1,animation:'pulse404 3s ease-in-out infinite',letterSpacing:'-4px'}}>404</h1>

      {/* Astronaut */}
      <div style={{position:'relative',animation:'floatAstro 4s ease-in-out infinite',margin:'1.2rem 0'}}>
        <div style={{position:'absolute',top:'50%',left:'-5px',width:'120px',height:'2px',background:'linear-gradient(to left,transparent,rgba(180,178,169,0.5))',transformOrigin:'right center'}}/>
        <span style={{fontSize:'5rem',display:'block',filter:'drop-shadow(0 0 20px rgba(83,74,183,0.8))'}}>🧑‍🚀</span>
      </div>

      <h2 style={{fontSize:'1.4rem',fontWeight:600,color:'#EEEDFE',margin:'0.3rem 0',animation:'fadeSlideUp 0.8s ease 0.3s both'}}>Oops! Lost in space</h2>
      <p style={{color:'#888780',fontSize:'0.95rem',margin:'0.4rem 0 1.6rem',animation:'fadeSlideUp 0.8s ease 0.5s both'}}>The page you're looking for drifted into the void.</p>

      <Link to="/" style={{display:'inline-flex',alignItems:'center',gap:'8px',background:'#534AB7',color:'#fff',padding:'0.8rem 2.2rem',borderRadius:'999px',textDecoration:'none',fontWeight:600,fontSize:'1rem',animation:'btnPulse 2s ease-in-out infinite,fadeSlideUp 0.8s ease 0.7s both'}}>
        🚀 Go back home
      </Link>
    </div>
  );
};

export default ErrorPage;