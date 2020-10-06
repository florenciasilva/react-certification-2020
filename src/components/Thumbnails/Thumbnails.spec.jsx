import React from 'react';
import { shallow } from 'enzyme';
import Thumbnail from './Thumbnails.component';

const videoList = [
  {
    kind: 'youtube#searchResult',
    etag: 's1WOyhNiq_69RKUyEhyOwEkngl8',
    id: {
      kind: 'youtube#video',
      videoId: 'O_MQr4lHm0c',
    },
    snippet: {
      publishedAt: '2019-11-01T14:57:16Z',
      channelId: 'UCAuUUnT6oDeKwE6v1NGQxug',
      title: 'How changing your story can change your life | Lori Gottlieb',
      description:
        "Visit http://TED.com to get our entire library of TED Talks, transcripts, translations, personalized Talk recommendations and more.\n\nStories help you make sense of your life -- but when these narratives are incomplete or misleading, they can keep you stuck instead of providing clarity. In an actionable talk, psychotherapist and advice columnist Lori Gottlieb shows how to break free from the stories you've been telling yourself by becoming your own editor and rewriting your narrative from a different point of view.\n\nGet TED Talks recommended just for you! Learn more at http://TED.com/signup.\n\nThe TED Talks channel features the best talks and performances from the TED Conference, where the world's leading thinkers and doers give the talk of their lives in 18 minutes (or less). Look for talks on Technology, Entertainment and Design -- plus science, business, global issues, the arts and more. You're welcome to link to or embed these videos, forward them to others and share these ideas with people you know. For more information on using TED for commercial purposes (e.g. employee learning, in a film or online course), submit a Media Request here: http://media-requests.TED.com\n\nFollow TED on Twitter: http://twitter.com/TEDTalks\nLike TED on Facebook: http://facebook.com/TED\n\nSubscribe to our channel: http://youtube.com/TED",
      thumbnails: {
        default: {
          url: 'https://i.ytimg.com/vi/O_MQr4lHm0c/default.jpg',
          width: 120,
          height: 90,
        },
        medium: {
          url: 'https://i.ytimg.com/vi/O_MQr4lHm0c/mqdefault.jpg',
          width: 320,
          height: 180,
        },
        high: {
          url: 'https://i.ytimg.com/vi/O_MQr4lHm0c/hqdefault.jpg',
          width: 480,
          height: 360,
        },
      },
      channelTitle: 'TED',
      liveBroadcastContent: 'none',
      publishTime: '2019-11-01T14:57:16Z',
    },
  },
  {
    kind: 'youtube#searchResult',
    etag: '919kpIiCfB5cRpXHfWNFvoR6EUI',
    id: {
      kind: 'youtube#video',
      videoId: 'P_6vDLq64gE',
    },
    snippet: {
      publishedAt: '2011-10-13T19:33:04Z',
      channelId: 'UCAuUUnT6oDeKwE6v1NGQxug',
      title: 'How to spot a liar | Pamela Meyer',
      description:
        "Visit http://TED.com to get our entire library of TED Talks, transcripts, translations, personalized talk recommendations and more.\n\nOn any given day we're lied to from 10 to 200 times, and the clues to detect those lie can be subtle and counter-intuitive. Pamela Meyer, author of Liespotting, shows the manners and \"hotspots\" used by those trained to recognize deception -- and she argues honesty is a value worth preserving.\n\nThe TED Talks channel features the best talks and performances from the TED Conference, where the world's leading thinkers and doers give the talk of their lives in 18 minutes (or less). Look for talks on Technology, Entertainment and Design -- plus science, business, global issues, the arts and more. You're welcome to link to or embed these videos, forward them to others and share these ideas with people you know. For more information on using TED for commercial purposes (e.g. employee learning, in a film or online course), submit a Media Request here: http://media-requests.TED.com\n\nFollow TED on Twitter: http://twitter.com/TEDTalks\nLike TED on Facebook: http://facebook.com/TED\n\nSubscribe to our channel: http://youtube.com/TED",
      thumbnails: {
        default: {
          url: 'https://i.ytimg.com/vi/P_6vDLq64gE/default.jpg',
          width: 120,
          height: 90,
        },
        medium: {
          url: 'https://i.ytimg.com/vi/P_6vDLq64gE/mqdefault.jpg',
          width: 320,
          height: 180,
        },
        high: {
          url: 'https://i.ytimg.com/vi/P_6vDLq64gE/hqdefault.jpg',
          width: 480,
          height: 360,
        },
      },
      channelTitle: 'TED',
      liveBroadcastContent: 'none',
      publishTime: '2011-10-13T19:33:04Z',
    },
  },
];

const wrapper = shallow(<Thumbnail videos={videoList} />);
const emptyWrapper = shallow(<Thumbnail videos="" />);

describe('Thumbnail Component', () => {
  it('Should show list of video thumbnails', () => {
    expect(wrapper.find('[data-testId="thumbnail-li"]')).toHaveLength(2);
  });
  it('Should show dummy image if no videoList is available', () => {
    expect(emptyWrapper.find('[data-testId="dummy-img"]'));
  });
});
