import s from "./TVShowList.module.css"
import { TVShowListItem } from "../TVShowListItem/TVShowListItem"

export function TVShowList ({tvShowList, onClickIetm}) {
   
    return (
        <>
          <div className={s.title}>Vous aimerez peut être...</div>
          <div className={s.list}>
            {tvShowList.map((tvShow) => {
              return (
                <span key={tvShow.id} className={s.tv_show_list_item}>
                  <TVShowListItem tvShow={tvShow} onClick={onClickIetm}/>
                </span>
              );
            })}
          </div>
        </>
      ); 
    }
    
