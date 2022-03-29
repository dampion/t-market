// react
import React from 'react';

function BlockMap() {
    return (
        <div className="block block-map">
            <div className="block-map__body">
                <iframe
                    title="Google Map"
                    src="https://maps.google.com/maps?q=%E5%8F%B0%E5%8C%97%E5%B8%82&t=&z=13&ie=UTF8&iwloc=&output=embed"
                    frameBorder="0"
                    scrolling="no"
                    marginHeight={0}
                    marginWidth={0}
                />
            </div>
        </div>
    );
}

export default BlockMap;
