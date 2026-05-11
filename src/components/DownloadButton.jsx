import React, { useState, useEffect } from 'react';

const DownloadButton = () => {
    const [fileUrl, setFileUrl] = useState('');

    useEffect(() => {
        // Set the file URL to the relative path in the public folder
        const pdfUrl = process.env.PUBLIC_URL + '/DrinKrasniqiCV.pdf';
        setFileUrl(pdfUrl);
    }, []);

    const handleDownload = () => {
        if (!fileUrl) return;

        const link = document.createElement('a');
        link.href = fileUrl;
        link.download = 'DrinKrasniqiCV.pdf'; // Specify a default filename here if needed
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className="mt-5">
            <button onClick={handleDownload} disabled={!fileUrl}>
                Download CV
            </button>
        </div>
    );
};

export default DownloadButton;
