import React from 'react';

export interface ConfigContextProps {
    
}

export const ConfigContext = React.createContext<ConfigContextProps>({

})

export const ConfigConsumer = ConfigContext.Consumer;
