(function() {var implementors = {};
implementors["byteorder"] = [{"text":"impl Ord for BigEndian","synthetic":false,"types":[]},{"text":"impl Ord for LittleEndian","synthetic":false,"types":[]}];
implementors["bytes"] = [{"text":"impl Ord for Bytes","synthetic":false,"types":[]},{"text":"impl Ord for BytesMut","synthetic":false,"types":[]}];
implementors["combine"] = [{"text":"impl Ord for SourcePosition","synthetic":false,"types":[]},{"text":"impl&lt;P:&nbsp;Ord&gt; Ord for Span&lt;P&gt;","synthetic":false,"types":[]},{"text":"impl&lt;S:&nbsp;Ord, U:&nbsp;Ord&gt; Ord for Stream&lt;S, U&gt;","synthetic":false,"types":[]},{"text":"impl&lt;S:&nbsp;Ord&gt; Ord for PartialStream&lt;S&gt;","synthetic":false,"types":[]},{"text":"impl&lt;S:&nbsp;Ord&gt; Ord for CompleteStream&lt;S&gt;","synthetic":false,"types":[]},{"text":"impl&lt;S:&nbsp;Ord&gt; Ord for MaybePartialStream&lt;S&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'a, T:&nbsp;Ord&gt; Ord for SliceStream&lt;'a, T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T:&nbsp;?Sized&gt; Ord for PointerOffset&lt;T&gt;","synthetic":false,"types":[]}];
implementors["either"] = [{"text":"impl&lt;L:&nbsp;Ord, R:&nbsp;Ord&gt; Ord for Either&lt;L, R&gt;","synthetic":false,"types":[]}];
implementors["evmap"] = [{"text":"impl&lt;T:&nbsp;Ord&gt; Ord for CopyValue&lt;T&gt;","synthetic":false,"types":[]}];
implementors["futures_util"] = [{"text":"impl&lt;T:&nbsp;Ord&gt; Ord for AllowStdIo&lt;T&gt;","synthetic":false,"types":[]}];
implementors["http"] = [{"text":"impl Ord for HeaderValue","synthetic":false,"types":[]},{"text":"impl Ord for StatusCode","synthetic":false,"types":[]},{"text":"impl Ord for Version","synthetic":false,"types":[]}];
implementors["httpdate"] = [{"text":"impl Ord for HttpDate","synthetic":false,"types":[]}];
implementors["ipnet"] = [{"text":"impl Ord for IpAddrRange","synthetic":false,"types":[]},{"text":"impl Ord for Ipv4AddrRange","synthetic":false,"types":[]},{"text":"impl Ord for Ipv6AddrRange","synthetic":false,"types":[]},{"text":"impl Ord for IpNet","synthetic":false,"types":[]},{"text":"impl Ord for Ipv4Net","synthetic":false,"types":[]},{"text":"impl Ord for Ipv6Net","synthetic":false,"types":[]},{"text":"impl Ord for IpSubnets","synthetic":false,"types":[]},{"text":"impl Ord for Ipv4Subnets","synthetic":false,"types":[]},{"text":"impl Ord for Ipv6Subnets","synthetic":false,"types":[]}];
implementors["log"] = [{"text":"impl Ord for Level","synthetic":false,"types":[]},{"text":"impl Ord for LevelFilter","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Ord for Metadata&lt;'a&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Ord for MetadataBuilder&lt;'a&gt;","synthetic":false,"types":[]}];
implementors["mime"] = [{"text":"impl&lt;'a&gt; Ord for Name&lt;'a&gt;","synthetic":false,"types":[]},{"text":"impl Ord for Mime","synthetic":false,"types":[]}];
implementors["mio"] = [{"text":"impl Ord for Interest","synthetic":false,"types":[]},{"text":"impl Ord for Token","synthetic":false,"types":[]}];
implementors["proc_macro2"] = [{"text":"impl Ord for Ident","synthetic":false,"types":[]}];
implementors["ratelimit_meter"] = [{"text":"impl Ord for Always","synthetic":false,"types":[]}];
implementors["regex_syntax"] = [{"text":"impl Ord for Span","synthetic":false,"types":[]},{"text":"impl Ord for Position","synthetic":false,"types":[]},{"text":"impl Ord for Literal","synthetic":false,"types":[]},{"text":"impl Ord for ClassUnicodeRange","synthetic":false,"types":[]},{"text":"impl Ord for ClassBytesRange","synthetic":false,"types":[]},{"text":"impl Ord for Utf8Sequence","synthetic":false,"types":[]},{"text":"impl Ord for Utf8Range","synthetic":false,"types":[]}];
implementors["sha1"] = [{"text":"impl Ord for Sha1","synthetic":false,"types":[]},{"text":"impl Ord for Digest","synthetic":false,"types":[]},{"text":"impl Ord for DigestParseError","synthetic":false,"types":[]}];
implementors["smallvec"] = [{"text":"impl&lt;A:&nbsp;Array&gt; Ord for SmallVec&lt;A&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A::Item: Ord,&nbsp;</span>","synthetic":false,"types":[]}];
implementors["syn"] = [{"text":"impl Ord for Lifetime","synthetic":false,"types":[]}];
implementors["tgbot"] = [{"text":"impl Ord for Dice","synthetic":false,"types":[]},{"text":"impl Ord for DiceKind","synthetic":false,"types":[]},{"text":"impl Ord for ParseMode","synthetic":false,"types":[]},{"text":"impl Ord for MaskPositionPoint","synthetic":false,"types":[]},{"text":"impl Ord for AllowedUpdate","synthetic":false,"types":[]}];
implementors["tinyvec"] = [{"text":"impl&lt;A:&nbsp;Array&gt; Ord for ArrayVec&lt;A&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A::Item: Ord,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;'s, T&gt; Ord for SliceVec&lt;'s, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Ord,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;A:&nbsp;Array&gt; Ord for TinyVec&lt;A&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A::Item: Ord,&nbsp;</span>","synthetic":false,"types":[]}];
implementors["tokio"] = [{"text":"impl Ord for Instant","synthetic":false,"types":[]}];
implementors["tokio_util"] = [{"text":"impl Ord for BytesCodec","synthetic":false,"types":[]},{"text":"impl Ord for LinesCodec","synthetic":false,"types":[]}];
implementors["tracing_core"] = [{"text":"impl Ord for Level","synthetic":false,"types":[]},{"text":"impl Ord for LevelFilter","synthetic":false,"types":[]}];
implementors["unicase"] = [{"text":"impl&lt;T:&nbsp;AsRef&lt;str&gt;&gt; Ord for Ascii&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T:&nbsp;AsRef&lt;str&gt;&gt; Ord for UniCase&lt;T&gt;","synthetic":false,"types":[]}];
implementors["unicode_bidi"] = [{"text":"impl Ord for Level","synthetic":false,"types":[]}];
implementors["url"] = [{"text":"impl&lt;S:&nbsp;Ord&gt; Ord for Host&lt;S&gt;","synthetic":false,"types":[]},{"text":"impl Ord for Url","synthetic":false,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()