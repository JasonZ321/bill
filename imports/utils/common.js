export function getTrackerLoader(reactiveMapper) {
  return (props, onData, env) => {
    let trackerCleanup = null;
    const handler = Tracker.nonreactive(() => {
      return Tracker.autorun(() => {
        // assign the custom clean-up function.
        trackerCleanup = reactiveMapper(props, onData, env);
      });
    });

    return () => {
      if(typeof trackerCleanup === 'function') trackerCleanup();
      return handler.stop();
    };
  };
}

export function getIdByURL(url, prefix) {
		let str = url.substr(url.lastIndexOf(prefix)+prefix.length);
		if (str.indexOf('/') < 0) {
			return str;
		} else {
			return str.substr(0, str.indexOf('/'));
		}
}
