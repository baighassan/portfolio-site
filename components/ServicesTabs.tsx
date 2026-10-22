"use client";

import { useState } from "react";
import { services } from "@/lib/site";

function Visual({ id }: { id: string }) {
  if (id === "websites") {
    return (
      <div className="vis vis-browser">
        <div className="vis-bar"><i /><i /><i /></div>
        <img src="/work/juniper-desktop.jpg" alt="" />
      </div>
    );
  }
  if (id === "apps") {
    return (
      <div className="vis vis-app" aria-hidden="true">
        <div className="app-side">
          <b />
          <span className="on" /><span /><span /><span />
        </div>
        <div className="app-main">
          <div className="app-stats">
            <div><small>Bookings this week</small><strong>48</strong></div>
            <div><small>No-shows</small><strong>3</strong></div>
            <div><small>Open slots</small><strong>17</strong></div>
          </div>
          <div className="app-rows">
            {["9:00 AM  New patient", "9:30 AM  Cleaning", "10:30 AM  Tooth pain", "11:00 AM  Whitening consult"].map((r, i) => (
              <div key={r} className={i === 2 ? "row hot" : "row"}>{r}</div>
            ))}
          </div>
        </div>
      </div>
    );
  }
  if (id === "redesigns") {
    return (
      <div className="vis vis-split" aria-hidden="true">
        <div className="before">
          <small>Before</small>
          <div className="old-hero" />
          <div className="old-lines"><i /><i /><i /><i /></div>
          <em>Load time 6.8 s</em>
        </div>
        <div className="after">
          <small>After</small>
          <img src="/work/juniper-mobile.jpg" alt="" />
          <em>Load time 1.2 s</em>
        </div>
      </div>
    );
  }
  return (
    <div className="vis vis-log" aria-hidden="true">
      {[
        ["Mon", "Updated fees for crowns and fillings"],
        ["Wed", "Added Saturday hours"],
        ["Thu", "Fixed booking form on older iPhones"],
        ["Fri", "Backup checked, all pages passing"],
      ].map(([d, t]) => (
        <div key={t} className="log-row">
          <span className="log-day">{d}</span>
          <span>{t}</span>
          <span className="log-done">Done</span>
        </div>
      ))}
    </div>
  );
}

export default function ServicesTabs() {
  const [active, setActive] = useState(services[0].id);
  const current = services.find((s) => s.id === active)!;

  return (
    <div className="services">
      <div className="stage">
        <Visual id={current.id} />
      </div>
      <div className="tabs" role="tablist" aria-label="Services">
        {services.map((s) => (
          <button
            key={s.id}
            role="tab"
            id={`tab-${s.id}`}
            aria-selected={s.id === active}
            aria-controls="service-panel"
            className="tab"
            onClick={() => setActive(s.id)}
          >
            {s.name}
          </button>
        ))}
      </div>
      <div id="service-panel" role="tabpanel" aria-labelledby={`tab-${current.id}`} className="service-panel">
        <p className="service-line">{current.line}</p>
        <ul className="service-list">
          {current.includes.map((i) => (
            <li key={i}>{i}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
