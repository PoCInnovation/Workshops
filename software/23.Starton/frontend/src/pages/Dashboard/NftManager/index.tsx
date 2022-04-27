import CreateNft from "pages/Dashboard/CreateNft";
import ViewNft from "pages/Dashboard/ViewNft";
import React, {useState} from "react";

type PageStatusType = 'view' | 'create' | 'focus';

interface NftManager {

}

const NftManager = ({  }: NftManager): JSX.Element => {
  const [pageStatus, setPageStatus] = useState<PageStatusType>('view');

  switch (pageStatus) {
    case 'view': {
      return (<ViewNft />);
    }
    case 'create': {
      return (<CreateNft />);
    }
  }
};

export default NftManager;