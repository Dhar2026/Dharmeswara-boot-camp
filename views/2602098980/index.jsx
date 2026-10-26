import React,{useState, useEffect, UseRef, UseMemo, useMemo} from 'react';
const MyStudentPage = () =>{
    const [visitorCount, setVisitorCount] = useState(1);
    const [note, setNote] = useState('');
    const inputRef = useRef(null);
    const doubled = useMemo(()=>count * 2,[count]);
    useEffect(()=>{
        document.title='Dharmeswara Hibatullah Widyadana| React Assignment';
        inputRef.current.focus();
    },[]);
    const profileInfo = useMemo(()=>{
        return{
            name: 'Dharmeswara Hibatullah Widyadana',
            nim: '2602098980',
            major: 'Computer Science- Mobile Application and Technology',
            institution: 'Binus University'
        };
    },[]);
    const handleFocusInput = () =>{
        if(inputRef.current){
            inputRef.current.focus();
        }
    };
    return(
        <div style={{padding: '2 rem', fontFamily: 'sans-serif, Inter',maxWidth:'800px', margin:'0 auto'}}>
            <header style = {{borderBottom:'2px solid #eaeaea', paddingBottom: '1rem', marginBottom: '1.5 rem'}}>
                <h1 style={{ color: '#1a1a1a', margin:' 0 0 0.5rem 0'}}>{profileInfo.name}</h1>
                <p style={{ fontSize: '1.1rem',color: '#666',margin: 0}}>
                    <strong> NIM: </strong> {profileInfo.nim}
                </p>
            </header>
            <section style={{ marginBottom:'2rem',background:'#f9f9f9', pafding: '1.5rem', borderRadius:'9px'}}>
                <h2 style={{ color:'333', fontSize:'1.3rem', marginTop:0}}>Program of Study</h2>
                <p style= {{lineHeight:'1.6', color: '#444'}}>
                    I am a student at <strong>{profileInfo.institution}</strong> majoing in<strong>{ProfileInfo.major}</strong>.
                    my Academic focus centers on Mobile Application engineering, software deelopment, and building robust, scalable digital experiences. 
                </p>
            </section>
            <section style = {{ marginBottom: '2rem', background: '#fff', border:'1px solid #e0e0e0', padding: '1.5rem',borderRadius: '9px'}}>
                <h2 style={{ color:'#333', fontSize:'1.3rem', marginTop:0}}> React Hooks Demonstration</h2>
                <p style={{ color: '#555', fontSize: '1rem'}}>
                    This Component Succesfully Demonstrates<code>useState</code>, <code>useEffect</code>, <code>useRef</code> and <code>useMemo</code>.
                    </p>
                    <div style={{ display:'flex',gap: '1rem', alignItems:'center',marginBottom:'1rem'}}>
                        <button
                        onclick= {()=> setVisitorCount(count = count + 1)}
                        style={{ padding:'0.5rem 1rem', background: '#0070f1',color:'#fff',border:'none',borderRadius:'5px',cursor:'pointer'}}
                        >
                            Interaction count: {visitorCount}
                        </button>
                        <span style={{ fontSize: '0.9rem', color:'#666'}}> Managed with <code>useState</code></span>
                    </div>
                    <div style={{ display:'flex', flexDirection:'column',gap:'0.5 rem'}}>
                        <label htmlFor="quick-note" style={{fontSize:'0.9rem',fontWeight:'500'}}>Quick note(using<code>useRef</code>):</label>
                        <div style={{ display:'flex',gap:'0.5rem'}}>
                            <input
                            id="quick-note"
                            ref={inputRef}
                            type="text"
                            placeholder="Type something..."
                            value={note}
                            onchange={(e)=> setNote(e.target.value)}
                            style={{padding:'0.5rem',border:'1px solid #ccc',borderRadius:'5px',flex:1}}
                            />
                            <button
                            onClick={handleFocusInput}
                            style={{ padding:'0.5rem 1rem',background:'#333',color:'#fff', border:'none', borderRadius:'5px',cursor:'pointer'}}
                            >
                                Focus Input
                                click{count} times
                            </button>
                        </div>
                        {note && <p style={{ fontSize:'0.9rem', color:'#0070f3', margin:'0.2rem 0 0 0'}}>Live Preview:{note}</p>}
                        <p> Doubled: {doubled}</p>
                    </div>
            </section>
        </div>
    );
}