'use client';

import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  MapPin, Navigation, Search, ChevronDown, ArrowRight,
  Loader2, Phone, Mail, Sliders
} from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Section } from '@/components/ui/Section';
import { TapeStrip } from '@/components/ui/TapeStrip';
import locationsData from '@/content/locations/index.json';

// Types
interface Location {
  city: string;
  slug: string;
  address: string;
  phone: string;
  email: string;
  areaManager: { name: string; title: string };
  coordinates: { lat: number; lng: number };
  region: string;
}

// Haversine distance (km)
function getDistance(lat1: number, lng1: number, lat2: number, lng2: number): number {
  const R = 6371;
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLng = ((lng2 - lng1) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos((lat1 * Math.PI) / 180) *
    Math.cos((lat2 * Math.PI) / 180) *
    Math.sin(dLng / 2) ** 2;
  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

// Location Card
function LocationCard({
  location,
  distance,
  index,
}: {
  location: Location;
  distance?: number;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ delay: index * 0.05 }}
    >
      <Card variant="default" className="p-6 h-full hover:shadow-lg transition-shadow">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className="text-xl font-bold text-[#002D32]">{location.city}</h3>
            <p className="text-sm text-[#002D32]/50">{location.region}</p>
          </div>
          {distance !== undefined && (
            <span className="px-3 py-1 rounded-full bg-[#E0F7F1] text-[#23D2AF] text-sm font-bold">
              {Math.round(distance)} km
            </span>
          )}
        </div>

        <div className="space-y-2 mb-5">
          <div className="flex items-start gap-2 text-sm text-[#002D32]/70">
            <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-[#23D2AF]" />
            <span>{location.address}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-[#002D32]/70">
            <Phone className="w-4 h-4 flex-shrink-0 text-[#23D2AF]" />
            <a href={`tel:${location.phone}`} className="hover:text-[#23D2AF] transition-colors">
              {location.phone}
            </a>
          </div>
          <div className="flex items-center gap-2 text-sm text-[#002D32]/70">
            <Mail className="w-4 h-4 flex-shrink-0 text-[#23D2AF]" />
            <a href={`mailto:${location.email}`} className="hover:text-[#23D2AF] transition-colors">
              {location.email}
            </a>
          </div>
        </div>

        {/* Area Manager */}
        <div className="bg-[#E0F7F1] rounded-xl p-3 mb-5">
          <p className="text-xs text-[#002D32]/50 mb-1">Dein Ansprechpartner</p>
          <p className="font-bold text-[#002D32] text-sm">{location.areaManager.name}</p>
          <p className="text-xs text-[#002D32]/60">{location.areaManager.title}</p>
        </div>

        <div className="flex gap-2">
          <Button href={`/standorte/${location.slug}`} variant="primary" size="sm" className="flex-1">
            Standort ansehen
          </Button>
          <Button href="/bewerben" variant="outline" size="sm" className="flex-1">
            Hier bewerben
          </Button>
        </div>
      </Card>
    </motion.div>
  );
}

export default function JobsInMeinerNaehePage() {
  const [userLocation, setUserLocation] = useState<{ lat: number; lng: number } | null>(null);
  const [isLocating, setIsLocating] = useState(false);
  const [locationError, setLocationError] = useState<string | null>(null);
  const [radius, setRadius] = useState(50);
  const [searchQuery, setSearchQuery] = useState('');
  const [showFilters, setShowFilters] = useState(false);

  const locations: Location[] = locationsData.locations;

  // Get sorted & filtered locations
  const getFilteredLocations = useCallback(() => {
    let result = locations.map((loc) => ({
      ...loc,
      distance: userLocation
        ? getDistance(userLocation.lat, userLocation.lng, loc.coordinates.lat, loc.coordinates.lng)
        : undefined,
    }));

    // Filter by search query
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (loc) =>
          loc.city.toLowerCase().includes(q) ||
          loc.region.toLowerCase().includes(q) ||
          loc.address.toLowerCase().includes(q)
      );
    }

    // Filter by radius (only if user location is set)
    if (userLocation) {
      result = result.filter((loc) => loc.distance! <= radius);
    }

    // Sort by distance if available
    if (userLocation) {
      result.sort((a, b) => (a.distance || 0) - (b.distance || 0));
    }

    return result;
  }, [locations, userLocation, radius, searchQuery]);

  // Geolocation
  const requestLocation = () => {
    setIsLocating(true);
    setLocationError(null);

    if (!navigator.geolocation) {
      setLocationError('Geolocation wird von deinem Browser nicht unterstützt.');
      setIsLocating(false);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        setUserLocation({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
        setIsLocating(false);
      },
      (error) => {
        switch (error.code) {
          case error.PERMISSION_DENIED:
            setLocationError('Standortzugriff verweigert. Bitte nutze die Suche.');
            break;
          case error.POSITION_UNAVAILABLE:
            setLocationError('Standort nicht verfügbar. Bitte nutze die Suche.');
            break;
          default:
            setLocationError('Standort konnte nicht ermittelt werden.');
        }
        setIsLocating(false);
      },
      { enableHighAccuracy: false, timeout: 10000, maximumAge: 600000 }
    );
  };

  const filteredLocations = getFilteredLocations();
  const radiusOptions = [10, 25, 50, 100, 200];

  return (
    <main>
      {/* HERO */}
      <Section variant="coal">
        <div className="py-16 md:py-20">
          <div className="max-w-3xl">
            <TapeStrip className="mb-6" />
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-black text-white mb-4"
            >
              Finde Jobs
              <span className="text-[#23D2AF]"> in deiner Nähe</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-lg text-white/80 leading-relaxed mb-8"
            >
              Pflege, Pädagogik oder Medizin – entdecke Promedis24-Standorte in deiner Region
              und finde den Job, der sich deinem Leben anpasst.
            </motion.p>

            {/* Location + Search */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-3"
            >
              <button
                onClick={requestLocation}
                disabled={isLocating}
                className="flex items-center justify-center gap-2 px-6 py-3 bg-[#23D2AF] text-[#002D32] rounded-xl font-bold hover:bg-[#1BC09D] transition-colors disabled:opacity-50"
              >
                {isLocating ? (
                  <Loader2 className="w-5 h-5 animate-spin" />
                ) : (
                  <Navigation className="w-5 h-5" />
                )}
                {isLocating ? 'Standort wird ermittelt...' : 'Meinen Standort nutzen'}
              </button>

              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
                <input
                  type="text"
                  placeholder="Oder Stadt / PLZ eingeben..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder:text-white/40 focus:outline-none focus:border-[#23D2AF] transition-colors"
                />
              </div>
            </motion.div>

            {/* Error message */}
            {locationError && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-red-300 text-sm mt-3"
              >
                {locationError}
              </motion.p>
            )}

            {/* User location confirmed */}
            {userLocation && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-[#23D2AF] text-sm mt-3 flex items-center gap-2"
              >
                <MapPin className="w-4 h-4" />
                Standort erkannt – zeige Ergebnisse im Umkreis von {radius} km
              </motion.p>
            )}
          </div>
        </div>
      </Section>

      {/* FILTER BAR */}
      {userLocation && (
        <Section variant="turkis">
          <div className="py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setShowFilters(!showFilters)}
                  className="flex items-center gap-2 text-sm font-bold text-[#002D32] hover:text-[#23D2AF] transition-colors"
                >
                  <Sliders className="w-4 h-4" />
                  Radius anpassen
                  <ChevronDown className={`w-4 h-4 transition-transform ${showFilters ? 'rotate-180' : ''}`} />
                </button>
              </div>
              <p className="text-sm text-[#002D32]/60">
                {filteredLocations.length} Standort{filteredLocations.length !== 1 ? 'e' : ''} gefunden
              </p>
            </div>

            <AnimatePresence>
              {showFilters && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="overflow-hidden"
                >
                  <div className="flex items-center gap-2 pt-4">
                    {radiusOptions.map((r) => (
                      <button
                        key={r}
                        onClick={() => setRadius(r)}
                        className={`px-4 py-2 rounded-full text-sm font-bold transition-all ${
                          radius === r
                            ? 'bg-[#002D32] text-white'
                            : 'bg-white text-[#002D32]/60 hover:bg-white/80'
                        }`}
                      >
                        {r} km
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </Section>
      )}

      {/* RESULTS */}
      <Section variant="default">
        <div className="py-12 md:py-16">
          {filteredLocations.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <MapPin className="w-16 h-16 text-[#002D32]/10 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-[#002D32] mb-2">
                Kein Standort in deiner Nähe?
              </h3>
              <p className="text-[#002D32]/60 mb-6 max-w-md mx-auto">
                {userLocation
                  ? `Im Umkreis von ${radius} km wurde kein Standort gefunden. Versuche einen größeren Radius.`
                  : 'Nutze die Suche oder deinen Standort, um Promedis24-Standorte zu finden.'}
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                {userLocation && (
                  <Button onClick={() => setRadius(200)} variant="outline">
                    Radius auf 200 km erweitern
                  </Button>
                )}
                <Button href="/on-tour" variant="primary">
                  On-Tour-Programm entdecken
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </motion.div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredLocations.map((location, index) => (
                <LocationCard
                  key={location.slug}
                  location={location as Location}
                  distance={location.distance}
                  index={index}
                />
              ))}
            </div>
          )}
        </div>
      </Section>

      {/* ON-TOUR CTA */}
      <Section variant="grey">
        <div className="py-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-black text-[#002D32] mb-4">
              Kein passender Standort dabei?
            </h2>
            <p className="text-lg text-[#002D32]/70 mb-8 max-w-xl mx-auto">
              Mit dem On-Tour-Programm arbeitest du bundesweit – Unterkunft und Reise inklusive.
            </p>
            <Button href="/on-tour" variant="primary" size="lg">
              On-Tour-Programm entdecken
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </motion.div>
        </div>
      </Section>

      {/* BOTTOM CTA */}
      <Section variant="coal">
        <div className="py-12 md:py-16">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-black text-white mb-2">
                Der Job, der sich deinem Leben anpasst.
              </h3>
              <p className="text-white/70">
                Bewirb dich jetzt in 60 Sekunden – egal an welchem Standort.
              </p>
            </div>
            <Button href="/bewerben" variant="primary" size="lg" className="flex-shrink-0">
              Jetzt bewerben
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </Section>
    </main>
  );
}
