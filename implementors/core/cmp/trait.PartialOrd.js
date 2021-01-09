(function() {var implementors = {};
implementors["byteorder"] = [{"text":"impl PartialOrd&lt;BigEndian&gt; for BigEndian","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;LittleEndian&gt; for LittleEndian","synthetic":false,"types":[]}];
implementors["bytes"] = [{"text":"impl PartialOrd&lt;Bytes&gt; for Bytes","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;[u8]&gt; for Bytes","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;Bytes&gt; for [u8]","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;str&gt; for Bytes","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;Vec&lt;u8, Global&gt;&gt; for Bytes","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;String&gt; for Bytes","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;Bytes&gt; for &amp;[u8]","synthetic":false,"types":[]},{"text":"impl&lt;'a, T:&nbsp;?Sized&gt; PartialOrd&lt;&amp;'a T&gt; for Bytes <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Bytes: PartialOrd&lt;T&gt;,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;BytesMut&gt; for BytesMut","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;[u8]&gt; for BytesMut","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;BytesMut&gt; for [u8]","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;str&gt; for BytesMut","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;Vec&lt;u8, Global&gt;&gt; for BytesMut","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;String&gt; for BytesMut","synthetic":false,"types":[]},{"text":"impl&lt;'a, T:&nbsp;?Sized&gt; PartialOrd&lt;&amp;'a T&gt; for BytesMut <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;BytesMut: PartialOrd&lt;T&gt;,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;BytesMut&gt; for &amp;[u8]","synthetic":false,"types":[]}];
implementors["carapax"] = [{"text":"impl PartialOrd&lt;ErrorPolicy&gt; for ErrorPolicy","synthetic":false,"types":[]}];
implementors["combine"] = [{"text":"impl PartialOrd&lt;SourcePosition&gt; for SourcePosition","synthetic":false,"types":[]},{"text":"impl&lt;P:&nbsp;PartialOrd&gt; PartialOrd&lt;Span&lt;P&gt;&gt; for Span&lt;P&gt;","synthetic":false,"types":[]},{"text":"impl&lt;S:&nbsp;PartialOrd, U:&nbsp;PartialOrd&gt; PartialOrd&lt;Stream&lt;S, U&gt;&gt; for Stream&lt;S, U&gt;","synthetic":false,"types":[]},{"text":"impl&lt;S:&nbsp;PartialOrd&gt; PartialOrd&lt;PartialStream&lt;S&gt;&gt; for PartialStream&lt;S&gt;","synthetic":false,"types":[]},{"text":"impl&lt;S:&nbsp;PartialOrd&gt; PartialOrd&lt;CompleteStream&lt;S&gt;&gt; for CompleteStream&lt;S&gt;","synthetic":false,"types":[]},{"text":"impl&lt;S:&nbsp;PartialOrd&gt; PartialOrd&lt;MaybePartialStream&lt;S&gt;&gt; for MaybePartialStream&lt;S&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'a, T:&nbsp;PartialOrd&gt; PartialOrd&lt;SliceStream&lt;'a, T&gt;&gt; for SliceStream&lt;'a, T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T:&nbsp;?Sized&gt; PartialOrd&lt;PointerOffset&lt;T&gt;&gt; for PointerOffset&lt;T&gt;","synthetic":false,"types":[]}];
implementors["either"] = [{"text":"impl&lt;L:&nbsp;PartialOrd, R:&nbsp;PartialOrd&gt; PartialOrd&lt;Either&lt;L, R&gt;&gt; for Either&lt;L, R&gt;","synthetic":false,"types":[]}];
implementors["evmap"] = [{"text":"impl&lt;T:&nbsp;PartialOrd&gt; PartialOrd&lt;CopyValue&lt;T&gt;&gt; for CopyValue&lt;T&gt;","synthetic":false,"types":[]}];
implementors["futures_util"] = [{"text":"impl&lt;T:&nbsp;PartialOrd&gt; PartialOrd&lt;AllowStdIo&lt;T&gt;&gt; for AllowStdIo&lt;T&gt;","synthetic":false,"types":[]}];
implementors["http"] = [{"text":"impl PartialOrd&lt;HeaderValue&gt; for HeaderValue","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;str&gt; for HeaderValue","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;[u8]&gt; for HeaderValue","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;HeaderValue&gt; for str","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;String&gt; for HeaderValue","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; PartialOrd&lt;HeaderValue&gt; for &amp;'a HeaderValue","synthetic":false,"types":[]},{"text":"impl&lt;'a, T:&nbsp;?Sized&gt; PartialOrd&lt;&amp;'a T&gt; for HeaderValue <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;HeaderValue: PartialOrd&lt;T&gt;,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; PartialOrd&lt;HeaderValue&gt; for &amp;'a str","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;StatusCode&gt; for StatusCode","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;Authority&gt; for Authority","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;str&gt; for Authority","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;Authority&gt; for str","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; PartialOrd&lt;Authority&gt; for &amp;'a str","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; PartialOrd&lt;&amp;'a str&gt; for Authority","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;String&gt; for Authority","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;PathAndQuery&gt; for PathAndQuery","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;str&gt; for PathAndQuery","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;PathAndQuery&gt; for str","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; PartialOrd&lt;&amp;'a str&gt; for PathAndQuery","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; PartialOrd&lt;PathAndQuery&gt; for &amp;'a str","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;String&gt; for PathAndQuery","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;Version&gt; for Version","synthetic":false,"types":[]}];
implementors["httpdate"] = [{"text":"impl PartialOrd&lt;HttpDate&gt; for HttpDate","synthetic":false,"types":[]}];
implementors["ipnet"] = [{"text":"impl PartialOrd&lt;IpAddrRange&gt; for IpAddrRange","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;Ipv4AddrRange&gt; for Ipv4AddrRange","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;Ipv6AddrRange&gt; for Ipv6AddrRange","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;IpNet&gt; for IpNet","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;Ipv4Net&gt; for Ipv4Net","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;Ipv6Net&gt; for Ipv6Net","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;IpSubnets&gt; for IpSubnets","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;Ipv4Subnets&gt; for Ipv4Subnets","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;Ipv6Subnets&gt; for Ipv6Subnets","synthetic":false,"types":[]}];
implementors["log"] = [{"text":"impl PartialOrd&lt;Level&gt; for Level","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;LevelFilter&gt; for Level","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;LevelFilter&gt; for LevelFilter","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;Level&gt; for LevelFilter","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; PartialOrd&lt;Metadata&lt;'a&gt;&gt; for Metadata&lt;'a&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; PartialOrd&lt;MetadataBuilder&lt;'a&gt;&gt; for MetadataBuilder&lt;'a&gt;","synthetic":false,"types":[]}];
implementors["mime"] = [{"text":"impl&lt;'a&gt; PartialOrd&lt;Name&lt;'a&gt;&gt; for Name&lt;'a&gt;","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;Mime&gt; for Mime","synthetic":false,"types":[]}];
implementors["mio"] = [{"text":"impl PartialOrd&lt;Interest&gt; for Interest","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;Token&gt; for Token","synthetic":false,"types":[]}];
implementors["proc_macro2"] = [{"text":"impl PartialOrd&lt;Ident&gt; for Ident","synthetic":false,"types":[]}];
implementors["ratelimit_meter"] = [{"text":"impl PartialOrd&lt;Always&gt; for Always","synthetic":false,"types":[]}];
implementors["regex_syntax"] = [{"text":"impl PartialOrd&lt;Span&gt; for Span","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;Position&gt; for Position","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;Literal&gt; for Literal","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;ClassUnicodeRange&gt; for ClassUnicodeRange","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;ClassBytesRange&gt; for ClassBytesRange","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;Utf8Sequence&gt; for Utf8Sequence","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;Utf8Range&gt; for Utf8Range","synthetic":false,"types":[]}];
implementors["sha1"] = [{"text":"impl PartialOrd&lt;Sha1&gt; for Sha1","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;Digest&gt; for Digest","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;DigestParseError&gt; for DigestParseError","synthetic":false,"types":[]}];
implementors["smallvec"] = [{"text":"impl&lt;A:&nbsp;Array&gt; PartialOrd&lt;SmallVec&lt;A&gt;&gt; for SmallVec&lt;A&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A::Item: PartialOrd,&nbsp;</span>","synthetic":false,"types":[]}];
implementors["syn"] = [{"text":"impl PartialOrd&lt;Lifetime&gt; for Lifetime","synthetic":false,"types":[]}];
implementors["tgbot"] = [{"text":"impl PartialOrd&lt;ChatId&gt; for ChatId","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;ChatAction&gt; for ChatAction","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;Dice&gt; for Dice","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;DiceKind&gt; for DiceKind","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;ParseMode&gt; for ParseMode","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;PollKind&gt; for PollKind","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;KeyboardButtonPollType&gt; for KeyboardButtonPollType","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;MaskPositionPoint&gt; for MaskPositionPoint","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;TextEntity&gt; for TextEntity","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;TextEntityBotCommand&gt; for TextEntityBotCommand","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;TextEntityPosition&gt; for TextEntityPosition","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;AllowedUpdate&gt; for AllowedUpdate","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;Me&gt; for Me","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;User&gt; for User","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;UserId&gt; for UserId","synthetic":false,"types":[]}];
implementors["tinyvec"] = [{"text":"impl&lt;A:&nbsp;Array&gt; PartialOrd&lt;ArrayVec&lt;A&gt;&gt; for ArrayVec&lt;A&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A::Item: PartialOrd,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;'s, T&gt; PartialOrd&lt;SliceVec&lt;'s, T&gt;&gt; for SliceVec&lt;'s, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: PartialOrd,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;A:&nbsp;Array&gt; PartialOrd&lt;TinyVec&lt;A&gt;&gt; for TinyVec&lt;A&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A::Item: PartialOrd,&nbsp;</span>","synthetic":false,"types":[]}];
implementors["tokio"] = [{"text":"impl PartialOrd&lt;Ready&gt; for Ready","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;Instant&gt; for Instant","synthetic":false,"types":[]}];
implementors["tokio_util"] = [{"text":"impl PartialOrd&lt;BytesCodec&gt; for BytesCodec","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;LinesCodec&gt; for LinesCodec","synthetic":false,"types":[]}];
implementors["tracing_core"] = [{"text":"impl PartialOrd&lt;Level&gt; for Level","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;LevelFilter&gt; for Level","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;LevelFilter&gt; for LevelFilter","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;Level&gt; for LevelFilter","synthetic":false,"types":[]}];
implementors["unicase"] = [{"text":"impl&lt;T:&nbsp;AsRef&lt;str&gt;&gt; PartialOrd&lt;Ascii&lt;T&gt;&gt; for Ascii&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T:&nbsp;AsRef&lt;str&gt;&gt; PartialOrd&lt;UniCase&lt;T&gt;&gt; for UniCase&lt;T&gt;","synthetic":false,"types":[]}];
implementors["unicode_bidi"] = [{"text":"impl PartialOrd&lt;Level&gt; for Level","synthetic":false,"types":[]}];
implementors["url"] = [{"text":"impl&lt;S:&nbsp;PartialOrd&gt; PartialOrd&lt;Host&lt;S&gt;&gt; for Host&lt;S&gt;","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;Url&gt; for Url","synthetic":false,"types":[]}];
implementors["webpki"] = [{"text":"impl PartialOrd&lt;Time&gt; for Time","synthetic":false,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()