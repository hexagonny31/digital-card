import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../css/init.css';

function Init() {
    useEffect(() => {
        const scriptId = 'vfx-init-script';
        const script = document.createElement('script');
        script.id = scriptId;
        script.src = '/digital-card/js/init.js';
        script.type = "module";
        document.body.appendChild(script);

        return () => {
            const s = document.getElementById(scriptId);
            if (s) s.remove();

            const vfxCanvas = document.querySelector('canvas[style*="pointer-events: none"]');
            if (vfxCanvas) {
                vfxCanvas.remove();
            }
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
            <img src="https://picsum.photos/id/972/800/600"/>  
            <h2 data-z="1">let's all love lain.</h2>
        </section>
    );
}

export default Init