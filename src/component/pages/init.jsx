import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../css/init.css';

function Init() {
    useEffect(() => {
        const scriptId = 'vfx-init-script';
        const timer = setTimeout(() => {
            const script = document.createElement('script');
            script.id = scriptId;
            script.src = `/digital-card/js/init.js?t=${Date.now()}`; 
            script.type = "module";
            document.body.appendChild(script);
        }, 100);

        return () => {
            clearTimeout(timer);
            const s = document.getElementById(scriptId);
            if (s) s.remove();
            const vfxCanvas = document.querySelector('canvas');
            if (vfxCanvas) vfxCanvas.remove();

            const vfxCanvas = document.querySelector('canvas');
            if (vfxCanvas) vfxCanvas.remove();
        };
    }, []);

    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
            navigate('/home.jsx');
        }, 6000);

        return () => clearTimeout(timer);
    }, [navigate]);

    return(
        <section className="last">
            <img src="./972-800x600.jpg"/>  
            <h2 data-z="1">lets all love lain.</h2>
        </section>
    );
}

export default Init