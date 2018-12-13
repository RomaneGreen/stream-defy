import * as actions from './entities/playlists/actions'
import initializePlaylist from './entities/playlists/reducers'
import {
ON_PAGE_SELECT,
ON_PLAYLIST_INIT,
LOAD_PLAYLIST,
SAVE_SONG_DATA,
ON_SEARCH_PLAYLIST_INIT,
} from './entities/playlists/actions';

describe('actions', () => {
it('should create an action on page select', () => {

    const payload = 'sd';
    const type = 'ON_PAGE_SELECT'
    const onPageSelect = (page) => ({
    type: type,
    payload: payload
    });
    expect(actions.onPageSelect(payload,type)).toEqual(onPageSelect())
})
})